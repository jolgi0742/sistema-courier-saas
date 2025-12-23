// sinpeService.ts - Servicio para pagos SINPE Móvil (Costa Rica)
import pool from '../config/database';
import { EmailService } from './emailService';

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

export class SinpeService {
    // Configuración de SINPE Móvil por defecto
    private static readonly SINPE_CONFIG = {
        phone: process.env.SINPE_PHONE_NUMBER || '8888-8888',
        bank: process.env.SINPE_BANK_NAME || 'Banco Nacional de Costa Rica',
        holder_name: process.env.SINPE_HOLDER_NAME || 'Sistema Courier SaaS',
        currency: 'CRC'
    };

    /**
     * Obtener información de SINPE para mostrar al cliente
     */
    static async getSinpeInfo(tenantId: string): Promise<any> {
        // Verificar si el tenant tiene configuración personalizada de SINPE
        const [rows] = await pool.query<any[]>(
            `SELECT sinpe_phone, sinpe_bank, sinpe_holder_name 
             FROM tenant_settings 
             WHERE tenant_id = ?`,
            [tenantId]
        );

        if (rows.length > 0 && rows[0].sinpe_phone) {
            return {
                phone: rows[0].sinpe_phone,
                bank: rows[0].sinpe_bank,
                holder_name: rows[0].sinpe_holder_name,
                currency: 'CRC'
            };
        }

        return this.SINPE_CONFIG;
    }

    /**
     * Registrar un pago SINPE pendiente de verificación
     */
    static async createPayment(input: CreateSinpePaymentInput): Promise<SinpePayment> {
        const id = `sinpe_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        await pool.query(
            `INSERT INTO sinpe_payments 
             (id, tenant_id, amount, currency, customer_name, customer_phone, reference_number, receipt_url, status, created_at)
             VALUES (?, ?, ?, 'CRC', ?, ?, ?, ?, 'pending', NOW())`,
            [
                id,
                input.tenant_id,
                input.amount,
                input.customer_name,
                input.customer_phone,
                input.reference_number,
                input.receipt_url || null
            ]
        );

        // Notificar al admin que hay un pago pendiente
        await this.notifyAdminNewPayment(input.tenant_id, id, input.amount, input.customer_name);

        const [rows] = await pool.query<any[]>(
            'SELECT * FROM sinpe_payments WHERE id = ?',
            [id]
        );

        return rows[0];
    }

    /**
     * Obtener pagos pendientes de verificación
     */
    static async getPendingPayments(tenantId: string): Promise<SinpePayment[]> {
        const [rows] = await pool.query<any[]>(
            `SELECT * FROM sinpe_payments 
             WHERE tenant_id = ? AND status = 'pending'
             ORDER BY created_at DESC`,
            [tenantId]
        );

        return rows;
    }

    /**
     * Obtener historial de pagos
     */
    static async getPaymentHistory(tenantId: string, limit: number = 50): Promise<SinpePayment[]> {
        const [rows] = await pool.query<any[]>(
            `SELECT * FROM sinpe_payments 
             WHERE tenant_id = ?
             ORDER BY created_at DESC
             LIMIT ?`,
            [tenantId, limit]
        );

        return rows;
    }

    /**
     * Verificar un pago (aprobar)
     */
    static async verifyPayment(
        paymentId: string,
        verifiedBy: string,
        notes?: string
    ): Promise<SinpePayment> {
        await pool.query(
            `UPDATE sinpe_payments 
             SET status = 'verified', verified_at = NOW(), verified_by = ?, notes = ?
             WHERE id = ?`,
            [verifiedBy, notes || null, paymentId]
        );

        const [rows] = await pool.query<any[]>(
            'SELECT * FROM sinpe_payments WHERE id = ?',
            [paymentId]
        );

        // Notificar al cliente que su pago fue verificado
        await this.notifyCustomerPaymentVerified(rows[0]);

        return rows[0];
    }

    /**
     * Rechazar un pago
     */
    static async rejectPayment(
        paymentId: string,
        rejectedBy: string,
        reason: string
    ): Promise<SinpePayment> {
        await pool.query(
            `UPDATE sinpe_payments 
             SET status = 'rejected', verified_at = NOW(), verified_by = ?, notes = ?
             WHERE id = ?`,
            [rejectedBy, reason, paymentId]
        );

        const [rows] = await pool.query<any[]>(
            'SELECT * FROM sinpe_payments WHERE id = ?',
            [paymentId]
        );

        // Notificar al cliente que su pago fue rechazado
        await this.notifyCustomerPaymentRejected(rows[0], reason);

        return rows[0];
    }

    /**
     * Notificar al admin sobre nuevo pago pendiente
     */
    private static async notifyAdminNewPayment(
        tenantId: string,
        paymentId: string,
        amount: number,
        customerName: string
    ): Promise<void> {
        try {
            // Obtener email del admin del tenant
            const [admins] = await pool.query<any[]>(
                `SELECT email FROM tenant_users 
                 WHERE tenant_id = ? AND role = 'admin'
                 LIMIT 1`,
                [tenantId]
            );

            if (admins.length > 0) {
                await EmailService.sendGeneric(
                    tenantId,
                    admins[0].email,
                    '💰 Nuevo pago SINPE pendiente de verificación',
                    `
                        <h2>Nuevo Pago SINPE Recibido</h2>
                        <p><strong>Cliente:</strong> ${customerName}</p>
                        <p><strong>Monto:</strong> ₡${amount.toLocaleString()}</p>
                        <p><strong>ID:</strong> ${paymentId}</p>
                        <p>Por favor verifique el pago en el panel de administración.</p>
                    `
                );
            }
        } catch (error) {
            console.error('Error notificando admin:', error);
        }
    }

    /**
     * Notificar al cliente que su pago fue verificado
     */
    private static async notifyCustomerPaymentVerified(payment: SinpePayment): Promise<void> {
        // Implementar notificación al cliente
        console.log(`Pago ${payment.id} verificado - notificar cliente`);
    }

    /**
     * Notificar al cliente que su pago fue rechazado
     */
    private static async notifyCustomerPaymentRejected(payment: SinpePayment, reason: string): Promise<void> {
        // Implementar notificación al cliente
        console.log(`Pago ${payment.id} rechazado: ${reason} - notificar cliente`);
    }

    /**
     * Configurar SINPE para un tenant específico
     */
    static async configureSinpe(
        tenantId: string,
        phone: string,
        bank: string,
        holderName: string
    ): Promise<void> {
        await pool.query(
            `INSERT INTO tenant_settings (tenant_id, sinpe_phone, sinpe_bank, sinpe_holder_name)
             VALUES (?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE 
                sinpe_phone = VALUES(sinpe_phone),
                sinpe_bank = VALUES(sinpe_bank),
                sinpe_holder_name = VALUES(sinpe_holder_name)`,
            [tenantId, phone, bank, holderName]
        );
    }
}

export default SinpeService;
