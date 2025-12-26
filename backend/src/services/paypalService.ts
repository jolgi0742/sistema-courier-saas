// paypalService.ts - Integración con PayPal para Sistema Courier SaaS
import pool from '../config/database';
import { TenantService } from './tenantService';

// PayPal es OPCIONAL - solo se usa si está habilitado
const PAYPAL_ENABLED = process.env.PAYPAL_ENABLED === 'true';
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || 'sandbox';

// URL base de PayPal según el modo
const PAYPAL_BASE_URL = PAYPAL_MODE === 'production'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

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

// Tipos para respuestas de PayPal API
interface PayPalTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

interface PayPalLink {
    href: string;
    rel: string;
    method: string;
}

interface PayPalOrderResponse {
    id: string;
    status: string;
    links: PayPalLink[];
}

interface PayPalCaptureResponse {
    id: string;
    status: string;
    purchase_units: Array<{
        custom_id?: string;
        payments?: {
            captures?: Array<{
                amount?: {
                    value?: string;
                    currency_code?: string;
                };
            }>;
        };
    }>;
}

export class PayPalService {
    /**
     * Verificar si PayPal está habilitado
     */
    static isEnabled(): boolean {
        return PAYPAL_ENABLED;
    }

    /**
     * Obtener access token de PayPal
     */
    private static async getAccessToken(): Promise<string> {
        if (!PAYPAL_ENABLED) {
            throw new Error('PayPal no está habilitado');
        }

        const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');

        const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        if (!response.ok) {
            throw new Error('Error obteniendo token de PayPal');
        }

        const data = await response.json() as PayPalTokenResponse;
        return data.access_token;
    }

    /**
     * Crear orden de pago única (para pagos únicos)
     */
    static async createOrder(input: PayPalOrderInput): Promise<{ id: string; approvalUrl: string }> {
        if (!PAYPAL_ENABLED) {
            throw new Error('PayPal no está habilitado. Use SINPE Móvil para pagos.');
        }

        // Obtener precio del plan
        const { rows: planRows } = await pool.query(
            `SELECT name, price_monthly, price_annual FROM plans WHERE id = $1`,
            [input.plan_id]
        ) as any;

        if (!planRows[0]) {
            throw new Error('Plan no encontrado');
        }

        const price = input.billing_cycle === 'annual'
            ? planRows[0].price_annual
            : planRows[0].price_monthly;

        const accessToken = await this.getAccessToken();

        const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [{
                    reference_id: input.tenant_id,
                    description: `${planRows[0].name} - ${input.billing_cycle === 'annual' $1 'Anual' : 'Mensual'}`,
                    amount: {
                        currency_code: 'USD',
                        value: price.toFixed(2)
                    },
                    custom_id: JSON.stringify({
                        tenant_id: input.tenant_id,
                        plan_id: input.plan_id,
                        billing_cycle: input.billing_cycle
                    })
                }],
                application_context: {
                    brand_name: 'Sistema Courier SaaS',
                    landing_page: 'BILLING',
                    user_action: 'PAY_NOW',
                    return_url: input.return_url,
                    cancel_url: input.cancel_url
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Error creando orden: ${JSON.stringify(error)}`);
        }

        const order = await response.json() as PayPalOrderResponse;
        const approvalLink = order.links.find((link) => link.rel === 'approve');

        return {
            id: order.id,
            approvalUrl: approvalLink.href || ''
        };
    }

    /**
     * Capturar pago después de aprobación
     */
    static async captureOrder(orderId: string): Promise<any> {
        if (!PAYPAL_ENABLED) {
            throw new Error('PayPal no está habilitado');
        }

        const accessToken = await this.getAccessToken();

        const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Error capturando pago: ${JSON.stringify(error)}`);
        }

        const captureData = await response.json() as PayPalCaptureResponse;

        // Procesar datos del pago
        if (captureData.status === 'COMPLETED') {
            const customData = JSON.parse(
                captureData.purchase_units[0].custom_id || '{}'
            );

            if (customData.tenant_id && customData.plan_id) {
                // Registrar pago en base de datos
                await pool.query(
                    `INSERT INTO paypal_payments (id, tenant_id, paypal_order_id, plan_id, amount, currency, status, created_at)
                     VALUES (UUID(), $1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)`,
                    [
                        customData.tenant_id,
                        orderId,
                        customData.plan_id,
                        captureData.purchase_units[0].payments.captures.[0].amount.value || 0,
                        captureData.purchase_units[0].payments.captures.[0].amount.currency_code || 'USD',
                        'completed'
                    ]
                );

                // Activar tenant con el plan
                await TenantService.activate(customData.tenant_id, customData.plan_id);
            }
        }

        return captureData;
    }

    /**
     * Obtener detalles de una orden
     */
    static async getOrderDetails(orderId: string): Promise<any> {
        if (!PAYPAL_ENABLED) {
            throw new Error('PayPal no está habilitado');
        }

        const accessToken = await this.getAccessToken();

        const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error obteniendo detalles de orden');
        }

        return await response.json();
    }

    /**
     * Obtener historial de pagos PayPal de un tenant
     */
    static async getPaymentHistory(tenantId: string): Promise<any[]> {
        const { rows } = await pool.query(
            `SELECT * FROM paypal_payments WHERE tenant_id = $1 ORDER BY created_at DESC LIMIT 20`,
            [tenantId]
        ) as any;

        return rows;
    }
}

export default PayPalService;
