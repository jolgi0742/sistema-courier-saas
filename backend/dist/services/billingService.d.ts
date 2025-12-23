import Stripe from 'stripe';
export interface CreateSubscriptionInput {
    tenant_id: string;
    plan_id: string;
    billing_cycle: 'monthly' | 'annual';
    payment_method_id?: string;
}
export declare class BillingService {
    /**
     * Verificar si Stripe está habilitado
     */
    static isStripeEnabled(): boolean;
    /**
     * Crear cliente en Stripe
     */
    static createCustomer(tenantId: string, email: string, name: string): Promise<string>;
    /**
     * Crear suscripción
     */
    static createSubscription(input: CreateSubscriptionInput): Promise<any>;
    /**
     * Cancelar suscripción
     */
    static cancelSubscription(tenantId: string, cancelImmediately?: boolean): Promise<void>;
    /**
     * Cambiar plan (upgrade/downgrade)
     */
    static changePlan(tenantId: string, newPlanId: string, billingCycle: 'monthly' | 'annual'): Promise<any>;
    /**
     * Manejar webhooks de Stripe
     */
    static handleWebhook(event: Stripe.Event): Promise<void>;
    /**
     * Obtener portal de facturación (Customer Portal de Stripe)
     */
    static createBillingPortalSession(tenantId: string, returnUrl: string): Promise<string>;
    /**
     * Obtener historial de facturas
     */
    static getInvoices(tenantId: string): Promise<any[]>;
}
export default BillingService;
//# sourceMappingURL=billingService.d.ts.map