"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
// billingService.ts - Integración con Stripe para Sistema Courier SaaS
const stripe_1 = __importDefault(require("stripe"));
const database_1 = __importDefault(require("../config/database"));
const tenantService_1 = require("./tenantService");
// Stripe es OPCIONAL - solo se inicializa si está habilitado
const STRIPE_ENABLED = process.env.STRIPE_ENABLED === 'true';
const stripe = STRIPE_ENABLED
    ? new stripe_1.default(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })
    : null;
// IDs de precios en Stripe (configurar en dashboard de Stripe)
const STRIPE_PRICES = STRIPE_ENABLED ? {
    starter_monthly: process.env.STRIPE_PRICE_STARTER_MONTHLY,
    starter_annual: process.env.STRIPE_PRICE_STARTER_ANNUAL,
    professional_monthly: process.env.STRIPE_PRICE_PRO_MONTHLY,
    professional_annual: process.env.STRIPE_PRICE_PRO_ANNUAL,
    enterprise_monthly: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY,
} : null;
// Helper para verificar si Stripe está disponible
const requireStripe = () => {
    if (!stripe) {
        throw new Error('Stripe no está habilitado. Use SINPE Móvil para pagos o habilite Stripe en .env');
    }
    return stripe;
};
class BillingService {
    /**
     * Verificar si Stripe está habilitado
     */
    static isStripeEnabled() {
        return STRIPE_ENABLED;
    }
    /**
     * Crear cliente en Stripe
     */
    static async createCustomer(tenantId, email, name) {
        const stripeClient = requireStripe();
        const customer = await stripeClient.customers.create({
            email,
            name,
            metadata: { tenant_id: tenantId }
        });
        // Guardar stripe_customer_id
        await database_1.default.execute(`UPDATE subscriptions SET stripe_customer_id = ? WHERE tenant_id = ?`, [customer.id, tenantId]);
        return customer.id;
    }
    /**
     * Crear suscripción
     */
    static async createSubscription(input) {
        const tenant = await tenantService_1.TenantService.getById(input.tenant_id);
        if (!tenant) {
            throw new Error('Tenant no encontrado');
        }
        // Obtener o crear customer
        let [subRows] = await database_1.default.execute('SELECT stripe_customer_id FROM subscriptions WHERE tenant_id = ?', [input.tenant_id]);
        let customerId = subRows[0]?.stripe_customer_id;
        if (!customerId) {
            // Obtener email del admin del tenant
            const [adminRows] = await database_1.default.execute('SELECT email FROM users WHERE tenant_id = ? AND role = "admin" LIMIT 1', [input.tenant_id]);
            const adminEmail = adminRows[0]?.email || 'admin@example.com';
            customerId = await this.createCustomer(input.tenant_id, adminEmail, tenant.name);
        }
        // Determinar el precio correcto
        if (!STRIPE_PRICES) {
            throw new Error('Stripe no está habilitado');
        }
        const priceKey = `${input.plan_id}_${input.billing_cycle}`;
        const priceId = STRIPE_PRICES[priceKey];
        if (!priceId) {
            throw new Error(`Plan no válido: ${input.plan_id}`);
        }
        // Añadir método de pago si se proporciona
        const stripeClient = requireStripe();
        if (input.payment_method_id) {
            await stripeClient.paymentMethods.attach(input.payment_method_id, {
                customer: customerId
            });
            await stripeClient.customers.update(customerId, {
                invoice_settings: { default_payment_method: input.payment_method_id }
            });
        }
        // Crear suscripción con trial para nuevos clientes
        const subscription = await stripeClient.subscriptions.create({
            customer: customerId,
            items: [{ price: priceId }],
            trial_period_days: tenant.status === 'trial' ? 0 : undefined, // Sin trial si ya está en trial
            payment_settings: {
                payment_method_types: ['card'],
                save_default_payment_method: 'on_subscription'
            },
            expand: ['latest_invoice.payment_intent']
        });
        // Guardar en base de datos
        await database_1.default.execute(`INSERT INTO subscriptions (id, tenant_id, plan_id, stripe_subscription_id, stripe_customer_id, status, current_period_start, current_period_end)
       VALUES (UUID(), ?, ?, ?, ?, ?, FROM_UNIXTIME(?), FROM_UNIXTIME(?))
       ON DUPLICATE KEY UPDATE 
         plan_id = VALUES(plan_id),
         stripe_subscription_id = VALUES(stripe_subscription_id),
         status = VALUES(status),
         current_period_start = VALUES(current_period_start),
         current_period_end = VALUES(current_period_end)`, [
            input.tenant_id,
            input.plan_id,
            subscription.id,
            customerId,
            subscription.status,
            subscription.current_period_start,
            subscription.current_period_end
        ]);
        // Activar tenant
        await tenantService_1.TenantService.activate(input.tenant_id, input.plan_id);
        return subscription;
    }
    /**
     * Cancelar suscripción
     */
    static async cancelSubscription(tenantId, cancelImmediately = false) {
        const [rows] = await database_1.default.execute('SELECT stripe_subscription_id FROM subscriptions WHERE tenant_id = ?', [tenantId]);
        if (rows[0]?.stripe_subscription_id) {
            const stripeClient = requireStripe();
            if (cancelImmediately) {
                await stripeClient.subscriptions.cancel(rows[0].stripe_subscription_id);
            }
            else {
                await stripeClient.subscriptions.update(rows[0].stripe_subscription_id, {
                    cancel_at_period_end: true
                });
            }
            await database_1.default.execute('UPDATE subscriptions SET cancel_at_period_end = ? WHERE tenant_id = ?', [!cancelImmediately, tenantId]);
        }
    }
    /**
     * Cambiar plan (upgrade/downgrade)
     */
    static async changePlan(tenantId, newPlanId, billingCycle) {
        const [rows] = await database_1.default.execute('SELECT stripe_subscription_id FROM subscriptions WHERE tenant_id = ?', [tenantId]);
        if (!rows[0]?.stripe_subscription_id) {
            throw new Error('No hay suscripción activa');
        }
        const stripeClient = requireStripe();
        const subscription = await stripeClient.subscriptions.retrieve(rows[0].stripe_subscription_id);
        if (!STRIPE_PRICES) {
            throw new Error('Stripe no está habilitado');
        }
        const priceKey = `${newPlanId}_${billingCycle}`;
        const newPriceId = STRIPE_PRICES[priceKey];
        const updatedSubscription = await stripeClient.subscriptions.update(subscription.id, {
            items: [{
                    id: subscription.items.data[0].id,
                    price: newPriceId
                }],
            proration_behavior: 'create_prorations'
        });
        // Actualizar en DB
        await database_1.default.execute('UPDATE subscriptions SET plan_id = ? WHERE tenant_id = ?', [newPlanId, tenantId]);
        await tenantService_1.TenantService.update(tenantId, { plan_id: newPlanId });
        return updatedSubscription;
    }
    /**
     * Manejar webhooks de Stripe
     */
    static async handleWebhook(event) {
        switch (event.type) {
            case 'invoice.paid': {
                const invoice = event.data.object;
                const customerId = invoice.customer;
                // Buscar tenant por customer
                const [rows] = await database_1.default.execute('SELECT tenant_id FROM subscriptions WHERE stripe_customer_id = ?', [customerId]);
                if (rows[0]) {
                    await database_1.default.execute("UPDATE subscriptions SET status = 'active' WHERE tenant_id = ?", [rows[0].tenant_id]);
                    await tenantService_1.TenantService.update(rows[0].tenant_id, { status: 'active' });
                }
                break;
            }
            case 'invoice.payment_failed': {
                const invoice = event.data.object;
                const customerId = invoice.customer;
                const [rows] = await database_1.default.execute('SELECT tenant_id FROM subscriptions WHERE stripe_customer_id = ?', [customerId]);
                if (rows[0]) {
                    await database_1.default.execute("UPDATE subscriptions SET status = 'past_due' WHERE tenant_id = ?", [rows[0].tenant_id]);
                    // Enviar email de aviso
                    // await EmailService.sendPaymentFailed(rows[0].tenant_id);
                }
                break;
            }
            case 'customer.subscription.deleted': {
                const subscription = event.data.object;
                const customerId = subscription.customer;
                const [rows] = await database_1.default.execute('SELECT tenant_id FROM subscriptions WHERE stripe_customer_id = ?', [customerId]);
                if (rows[0]) {
                    await database_1.default.execute("UPDATE subscriptions SET status = 'canceled' WHERE tenant_id = ?", [rows[0].tenant_id]);
                    await tenantService_1.TenantService.update(rows[0].tenant_id, { status: 'cancelled' });
                }
                break;
            }
        }
    }
    /**
     * Obtener portal de facturación (Customer Portal de Stripe)
     */
    static async createBillingPortalSession(tenantId, returnUrl) {
        const [rows] = await database_1.default.execute('SELECT stripe_customer_id FROM subscriptions WHERE tenant_id = ?', [tenantId]);
        if (!rows[0]?.stripe_customer_id) {
            throw new Error('No hay información de facturación');
        }
        const stripeClient = requireStripe();
        const session = await stripeClient.billingPortal.sessions.create({
            customer: rows[0].stripe_customer_id,
            return_url: returnUrl
        });
        return session.url;
    }
    /**
     * Obtener historial de facturas
     */
    static async getInvoices(tenantId) {
        const [rows] = await database_1.default.execute('SELECT stripe_customer_id FROM subscriptions WHERE tenant_id = ?', [tenantId]);
        if (!rows[0]?.stripe_customer_id) {
            return [];
        }
        const stripeClient = requireStripe();
        const invoices = await stripeClient.invoices.list({
            customer: rows[0].stripe_customer_id,
            limit: 20
        });
        return invoices.data.map(inv => ({
            id: inv.id,
            number: inv.number,
            amount: inv.amount_paid / 100,
            currency: inv.currency.toUpperCase(),
            status: inv.status,
            date: new Date(inv.created * 1000),
            pdf_url: inv.invoice_pdf
        }));
    }
}
exports.BillingService = BillingService;
exports.default = BillingService;
//# sourceMappingURL=billingService.js.map