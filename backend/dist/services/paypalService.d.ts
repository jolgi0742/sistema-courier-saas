export interface PayPalOrderInput {
    tenant_id: string;
    plan_id: string;
    billing_cycle: 'monthly' | 'annual';
    return_url: string;
    cancel_url: string;
}
export interface PayPalSubscriptionInput {
    tenant_id: string;
    plan_id: string;
    paypal_plan_id: string;
    return_url: string;
    cancel_url: string;
}
export declare class PayPalService {
    /**
     * Verificar si PayPal está habilitado
     */
    static isEnabled(): boolean;
    /**
     * Obtener access token de PayPal
     */
    private static getAccessToken;
    /**
     * Crear orden de pago única (para pagos únicos)
     */
    static createOrder(input: PayPalOrderInput): Promise<{
        id: string;
        approvalUrl: string;
    }>;
    /**
     * Capturar pago después de aprobación
     */
    static captureOrder(orderId: string): Promise<any>;
    /**
     * Obtener detalles de una orden
     */
    static getOrderDetails(orderId: string): Promise<any>;
    /**
     * Obtener historial de pagos PayPal de un tenant
     */
    static getPaymentHistory(tenantId: string): Promise<any[]>;
}
export default PayPalService;
//# sourceMappingURL=paypalService.d.ts.map