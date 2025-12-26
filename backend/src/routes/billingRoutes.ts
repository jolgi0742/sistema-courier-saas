// billingRoutes.ts - Rutas API para facturación y suscripciones
import { Router, Request, Response } from 'express';
import Stripe from 'stripe';
import { BillingService } from '../services/billingService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

// Stripe solo se inicializa si está habilitado
const STRIPE_ENABLED = process.env.STRIPE_ENABLED === 'true';
const stripe = STRIPE_ENABLED
    ? new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' })
    : null;

/**
 * GET /api/billing/plans
 * Obtener planes disponibles
 */
router.get('/plans', async (req: Request, res: Response) => {
    try {
        const pool = (await import('../config/database')).default;
        const { rows } = await pool.query(
            'SELECT * FROM plans WHERE is_active = TRUE ORDER BY price_monthly ASC'
        );

        const plans = (rows as any[]).map(plan => ({
            id: plan.id,
            name: plan.name,
            description: plan.description,
            price_monthly: plan.price_monthly,
            price_annual: plan.price_annual,
            limits: JSON.parse(plan.limits || '{}'),
            features: JSON.parse(plan.features || '[]')
        }));

        res.json(plans);
    } catch (error) {
        console.error('Error obteniendo planes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * POST /api/billing/create-checkout-session
 * Crear sesión de checkout de Stripe
 */
router.post('/create-checkout-session', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        // Verificar si Stripe está habilitado
        if (!STRIPE_ENABLED || !stripe) {
            return res.status(501).json({
                error: 'Pagos con tarjeta no están habilitados. Use SINPE Móvil.',
                sinpe_available: true
            });
        }

        const { plan_id, billing_cycle } = req.body;
        const tenantId = req.tenant!.id;

        if (!plan_id || !billing_cycle) {
            return res.status(400).json({ error: 'Plan y ciclo de facturación requeridos' });
        }

        // Obtener precio de Stripe
        const pool = (await import('../config/database')).default;
        const priceField = billing_cycle === 'annual' ? 'stripe_price_id_annual' : 'stripe_price_id_monthly';

        const { rows: planRows } = await pool.query(
            `SELECT ${priceField} as stripe_price_id, name FROM plans WHERE id = ?`,
            [plan_id]
        ) as any;

        if (!planRows[0]?.stripe_price_id) {
            return res.status(400).json({ error: 'Plan no válido' });
        }

        // Crear sesión de checkout
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [{
                price: planRows[0].stripe_price_id,
                quantity: 1
            }],
            success_url: `${process.env.FRONTEND_URL}/account/billing?success=true`,
            cancel_url: `${process.env.FRONTEND_URL}/account/billing?canceled=true`,
            metadata: {
                tenant_id: tenantId,
                plan_id: plan_id
            },
            subscription_data: {
                metadata: {
                    tenant_id: tenantId,
                    plan_id: plan_id
                }
            }
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creando checkout session:', error);
        res.status(500).json({ error: 'Error creando sesión de pago' });
    }
});

/**
 * POST /api/billing/create-portal-session
 * Crear sesión del portal de facturación de Stripe
 */
router.post('/create-portal-session', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const returnUrl = `${process.env.FRONTEND_URL}/account/billing`;

        const portalUrl = await BillingService.createBillingPortalSession(tenantId, returnUrl);

        res.json({ url: portalUrl });
    } catch (error: any) {
        console.error('Error creando portal session:', error);
        res.status(500).json({ error: error.message || 'Error creando sesión' });
    }
});

/**
 * GET /api/billing/subscription
 * Obtener suscripción actual del tenant
 */
router.get('/subscription', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const pool = (await import('../config/database')).default;

        const { rows } = await pool.query(
            `SELECT s.*, p.name as plan_name, p.limits, p.features
       FROM subscriptions s
       LEFT JOIN plans p ON s.plan_id = p.id
       WHERE s.tenant_id = ?`,
            [tenantId]
        ) as any;

        if (!rows[0]) {
            return res.json({
                status: 'none',
                message: 'No hay suscripción activa'
            });
        }

        const subscription = rows[0];

        res.json({
            id: subscription.id,
            plan: {
                id: subscription.plan_id,
                name: subscription.plan_name,
                limits: JSON.parse(subscription.limits || '{}'),
                features: JSON.parse(subscription.features || '[]')
            },
            status: subscription.status,
            current_period_start: subscription.current_period_start,
            current_period_end: subscription.current_period_end,
            cancel_at_period_end: subscription.cancel_at_period_end
        });
    } catch (error) {
        console.error('Error obteniendo suscripción:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/billing/invoices
 * Obtener historial de facturas
 */
router.get('/invoices', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const invoices = await BillingService.getInvoices(tenantId);
        res.json(invoices);
    } catch (error) {
        console.error('Error obteniendo facturas:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * POST /api/billing/cancel
 * Cancelar suscripción
 */
router.post('/cancel', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { immediately } = req.body;

        await BillingService.cancelSubscription(tenantId, immediately === true);

        res.json({
            message: immediately
                ? 'Suscripción cancelada inmediatamente'
                : 'Suscripción se cancelará al final del período'
        });
    } catch (error) {
        console.error('Error cancelando suscripción:', error);
        res.status(500).json({ error: 'Error cancelando suscripción' });
    }
});

/**
 * POST /api/billing/webhook
 * Webhook de Stripe (sin auth)
 */
router.post('/webhook', async (req: Request, res: Response) => {
    // Verificar si Stripe está habilitado
    if (!STRIPE_ENABLED || !stripe) {
        return res.status(501).json({ error: 'Stripe no está habilitado' });
    }

    const sig = req.headers['stripe-signature'] as string;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err: any) {
        console.error('Error verificando webhook:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
        await BillingService.handleWebhook(event);
        res.json({ received: true });
    } catch (error) {
        console.error('Error procesando webhook:', error);
        res.status(500).json({ error: 'Error procesando webhook' });
    }
});

export default router;
