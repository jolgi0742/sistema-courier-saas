interface SinpePayment {
    id: string;
    tenant_id: string;
    amount: number;
    currency: string;
    sinpe_number: string;
    reference_number: string;
    receipt_url?: string;
    status: 'pending' | 'verified' | 'rejected';
    created_at: Date;
    verified_at?: Date;
    verified_by?: string;
    notes?: string;
}
interface CreateSinpePaymentInput {
    tenant_id: string;
    amount: number;
    description: string;
    customer_name: string;
    customer_phone: string;
    reference_number: string;
    receipt_url?: string;
}
export declare class SinpeService {
    private static readonly SINPE_CONFIG;
    /**
     * Obtener información de SINPE para mostrar al cliente
     */
    static getSinpeInfo(tenantId: string): Promise<any>;
    /**
     * Registrar un pago SINPE pendiente de verificación
     */
    static createPayment(input: CreateSinpePaymentInput): Promise<SinpePayment>;
    /**
     * Obtener pagos pendientes de verificación
     */
    static getPendingPayments(tenantId: string): Promise<SinpePayment[]>;
    /**
     * Obtener historial de pagos
     */
    static getPaymentHistory(tenantId: string, limit?: number): Promise<SinpePayment[]>;
    /**
     * Verificar un pago (aprobar)
     */
    static verifyPayment(paymentId: string, verifiedBy: string, notes?: string): Promise<SinpePayment>;
    /**
     * Rechazar un pago
     */
    static rejectPayment(paymentId: string, rejectedBy: string, reason: string): Promise<SinpePayment>;
    /**
     * Notificar al admin sobre nuevo pago pendiente
     */
    private static notifyAdminNewPayment;
    /**
     * Notificar al cliente que su pago fue verificado
     */
    private static notifyCustomerPaymentVerified;
    /**
     * Notificar al cliente que su pago fue rechazado
     */
    private static notifyCustomerPaymentRejected;
    /**
     * Configurar SINPE para un tenant específico
     */
    static configureSinpe(tenantId: string, phone: string, bank: string, holderName: string): Promise<void>;
}
export default SinpeService;
//# sourceMappingURL=sinpeService.d.ts.map