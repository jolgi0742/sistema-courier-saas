declare const TEMPLATES: {
    welcome: string;
    password_reset: string;
    package_notification: string;
    invoice: string;
    trial_reminder: string;
};
export interface EmailOptions {
    tenantId: string;
    to: string | string[];
    template: keyof typeof TEMPLATES;
    data: Record<string, any>;
    attachments?: Array<{
        content: string;
        filename: string;
        type: string;
    }>;
}
export declare class EmailService {
    /**
     * Enviar email con branding del tenant
     */
    static send(options: EmailOptions): Promise<void>;
    /**
     * Enviar email de bienvenida
     */
    static sendWelcome(tenantId: string, userEmail: string, userName: string): Promise<void>;
    /**
     * Enviar notificación de paquete
     */
    static sendPackageNotification(tenantId: string, to: string, packageData: {
        tracking_number: string;
        status: string;
        description: string;
        estimated_date?: string;
    }): Promise<void>;
    /**
     * Enviar recordatorio de trial
     */
    static sendTrialReminder(tenantId: string, adminEmail: string, daysRemaining: number): Promise<void>;
    /**
     * Enviar factura
     */
    static sendInvoice(tenantId: string, to: string, invoiceData: {
        invoice_number: string;
        amount: number;
        currency: string;
        date: string;
        pdf_url: string;
    }): Promise<void>;
    /**
     * Enviar email genérico (sin template)
     */
    static sendGeneric(tenantId: string, to: string, subject: string, htmlContent: string): Promise<void>;
}
export default EmailService;
//# sourceMappingURL=emailService.d.ts.map