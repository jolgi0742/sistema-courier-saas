"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// billingRoutes.ts - Rutas API para facturación y suscripciones
const express_1 = require("express");
const stripe_1 = __importDefault(require("stripe"));
const billingService_1 = require("../services/billingService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Stripe solo se inicializa si está habilitado
const STRIPE_ENABLED = process.env.STRIPE_ENABLED === 'true';
const stripe = STRIPE_ENABLED
    ? new stripe_1.default(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })
    : null;
/**
 * GET /api/billing/plans
 * Obtener planes disponibles
 */
router.get('/plans', async (req, res) => {
    try {
        const pool = (await Promise.resolve().then(() => __importStar(require('../config/database')))).default;
        const [rows] = await pool.execute('SELECT * FROM plans WHERE is_active = TRUE ORDER BY price_monthly ASC');
        const plans = rows.map(plan => ({
            id: plan.id,
            name: plan.name,
            description: plan.description,
            price_monthly: plan.price_monthly,
            price_annual: plan.price_annual,
            limits: JSON.parse(plan.limits || '{}'),
            features: JSON.parse(plan.features || '[]')
        }));
        res.json(plans);
    }
    catch (error) {
        console.error('Error obteniendo planes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/billing/create-checkout-session
 * Crear sesión de checkout de Stripe
 */
router.post('/create-checkout-session', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        // Verificar si Stripe está habilitado
        if (!STRIPE_ENABLED || !stripe) {
            return res.status(501).json({
                error: 'Pagos con tarjeta no están habilitados. Use SINPE Móvil.',
                sinpe_available: true
            });
        }
        const { plan_id, billing_cycle } = req.body;
        const tenantId = req.tenant.id;
        if (!plan_id || !billing_cycle) {
            return res.status(400).json({ error: 'Plan y ciclo de facturación requeridos' });
        }
        // Obtener precio de Stripe
        const pool = (await Promise.resolve().then(() => __importStar(require('../config/database')))).default;
        const priceField = billing_cycle === 'annual' ? 'stripe_price_id_annual' : 'stripe_price_id_monthly';
        const [planRows] = await pool.execute(`SELECT ${priceField} as stripe_price_id, name FROM plans WHERE id = ?`, [plan_id]);
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
    }
    catch (error) {
        console.error('Error creando checkout session:', error);
        res.status(500).json({ error: 'Error creando sesión de pago' });
    }
});
/**
 * POST /api/billing/create-portal-session
 * Crear sesión del portal de facturación de Stripe
 */
router.post('/create-portal-session', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const returnUrl = `${process.env.FRONTEND_URL}/account/billing`;
        const portalUrl = await billingService_1.BillingService.createBillingPortalSession(tenantId, returnUrl);
        res.json({ url: portalUrl });
    }
    catch (error) {
        console.error('Error creando portal session:', error);
        res.status(500).json({ error: error.message || 'Error creando sesión' });
    }
});
/**
 * GET /api/billing/subscription
 * Obtener suscripción actual del tenant
 */
router.get('/subscription', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const pool = (await Promise.resolve().then(() => __importStar(require('../config/database')))).default;
        const [rows] = await pool.execute(`SELECT s.*, p.name as plan_name, p.limits, p.features
       FROM subscriptions s
       LEFT JOIN plans p ON s.plan_id = p.id
       WHERE s.tenant_id = ?`, [tenantId]);
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
    }
    catch (error) {
        console.error('Error obteniendo suscripción:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/billing/invoices
 * Obtener historial de facturas
 */
router.get('/invoices', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const invoices = await billingService_1.BillingService.getInvoices(tenantId);
        res.json(invoices);
    }
    catch (error) {
        console.error('Error obteniendo facturas:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/billing/cancel
 * Cancelar suscripción
 */
router.post('/cancel', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { immediately } = req.body;
        await billingService_1.BillingService.cancelSubscription(tenantId, immediately === true);
        res.json({
            message: immediately
                ? 'Suscripción cancelada inmediatamente'
                : 'Suscripción se cancelará al final del período'
        });
    }
    catch (error) {
        console.error('Error cancelando suscripción:', error);
        res.status(500).json({ error: 'Error cancelando suscripción' });
    }
});
/**
 * POST /api/billing/webhook
 * Webhook de Stripe (sin auth)
 */
router.post('/webhook', async (req, res) => {
    // Verificar si Stripe está habilitado
    if (!STRIPE_ENABLED || !stripe) {
        return res.status(501).json({ error: 'Stripe no está habilitado' });
    }
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    }
    catch (err) {
        console.error('Error verificando webhook:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    try {
        await billingService_1.BillingService.handleWebhook(event);
        res.json({ received: true });
    }
    catch (error) {
        console.error('Error procesando webhook:', error);
        res.status(500).json({ error: 'Error procesando webhook' });
    }
});
exports.default = router;
//# sourceMappingURL=billingRoutes.js.map