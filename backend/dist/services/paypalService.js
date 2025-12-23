"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalService = void 0;
// paypalService.ts - Integración con PayPal para Sistema Courier SaaS
const database_1 = __importDefault(require("../config/database"));
const tenantService_1 = require("./tenantService");
// PayPal es OPCIONAL - solo se usa si está habilitado
const PAYPAL_ENABLED = process.env.PAYPAL_ENABLED === 'true';
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || 'sandbox';
// URL base de PayPal según el modo
const PAYPAL_BASE_URL = PAYPAL_MODE === 'production'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';
class PayPalService {
    /**
     * Verificar si PayPal está habilitado
     */
    static isEnabled() {
        return PAYPAL_ENABLED;
    }
    /**
     * Obtener access token de PayPal
     */
    static async getAccessToken() {
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
        const data = await response.json();
        return data.access_token;
    }
    /**
     * Crear orden de pago única (para pagos únicos)
     */
    static async createOrder(input) {
        if (!PAYPAL_ENABLED) {
            throw new Error('PayPal no está habilitado. Use SINPE Móvil para pagos.');
        }
        // Obtener precio del plan
        const [planRows] = await database_1.default.execute(`SELECT name, price_monthly, price_annual FROM plans WHERE id = ?`, [input.plan_id]);
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
                        description: `${planRows[0].name} - ${input.billing_cycle === 'annual' ? 'Anual' : 'Mensual'}`,
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
        const order = await response.json();
        const approvalLink = order.links.find((link) => link.rel === 'approve');
        return {
            id: order.id,
            approvalUrl: approvalLink?.href || ''
        };
    }
    /**
     * Capturar pago después de aprobación
     */
    static async captureOrder(orderId) {
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
        const captureData = await response.json();
        // Procesar datos del pago
        if (captureData.status === 'COMPLETED') {
            const customData = JSON.parse(captureData.purchase_units[0]?.custom_id || '{}');
            if (customData.tenant_id && customData.plan_id) {
                // Registrar pago en base de datos
                await database_1.default.execute(`INSERT INTO paypal_payments (id, tenant_id, paypal_order_id, plan_id, amount, currency, status, created_at)
                     VALUES (UUID(), ?, ?, ?, ?, ?, ?, NOW())`, [
                    customData.tenant_id,
                    orderId,
                    customData.plan_id,
                    captureData.purchase_units[0]?.payments?.captures?.[0]?.amount?.value || 0,
                    captureData.purchase_units[0]?.payments?.captures?.[0]?.amount?.currency_code || 'USD',
                    'completed'
                ]);
                // Activar tenant con el plan
                await tenantService_1.TenantService.activate(customData.tenant_id, customData.plan_id);
            }
        }
        return captureData;
    }
    /**
     * Obtener detalles de una orden
     */
    static async getOrderDetails(orderId) {
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
    static async getPaymentHistory(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT * FROM paypal_payments WHERE tenant_id = ? ORDER BY created_at DESC LIMIT 20`, [tenantId]);
        return rows;
    }
}
exports.PayPalService = PayPalService;
exports.default = PayPalService;
//# sourceMappingURL=paypalService.js.map