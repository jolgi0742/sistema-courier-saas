"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// paypalRoutes.ts - Rutas API para pagos con PayPal
const express_1 = require("express");
const paypalService_1 = require("../services/paypalService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Verificar si PayPal está habilitado
const PAYPAL_ENABLED = process.env.PAYPAL_ENABLED === 'true';
/**
 * GET /api/paypal/status
 * Verificar si PayPal está habilitado
 */
router.get('/status', (req, res) => {
    res.json({
        enabled: PAYPAL_ENABLED,
        mode: process.env.PAYPAL_MODE || 'sandbox'
    });
});
/**
 * POST /api/paypal/create-order
 * Crear orden de pago
 */
router.post('/create-order', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        if (!PAYPAL_ENABLED) {
            return res.status(501).json({
                error: 'PayPal no está habilitado. Use SINPE Móvil para pagos.',
                sinpe_available: true
            });
        }
        const { plan_id, billing_cycle } = req.body;
        const tenantId = req.tenant.id;
        if (!plan_id || !billing_cycle) {
            return res.status(400).json({ error: 'Plan y ciclo de facturación requeridos' });
        }
        const order = await paypalService_1.PayPalService.createOrder({
            tenant_id: tenantId,
            plan_id,
            billing_cycle,
            return_url: `${process.env.FRONTEND_URL}/account/billing?paypal=success`,
            cancel_url: `${process.env.FRONTEND_URL}/account/billing?paypal=canceled`
        });
        res.json({
            orderId: order.id,
            approvalUrl: order.approvalUrl
        });
    }
    catch (error) {
        console.error('Error creando orden PayPal:', error);
        res.status(500).json({ error: error.message || 'Error creando orden' });
    }
});
/**
 * POST /api/paypal/capture-order
 * Capturar pago después de aprobación del usuario
 */
router.post('/capture-order', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        if (!PAYPAL_ENABLED) {
            return res.status(501).json({ error: 'PayPal no está habilitado' });
        }
        const { order_id } = req.body;
        if (!order_id) {
            return res.status(400).json({ error: 'ID de orden requerido' });
        }
        const captureData = await paypalService_1.PayPalService.captureOrder(order_id);
        res.json({
            success: captureData.status === 'COMPLETED',
            status: captureData.status,
            details: captureData
        });
    }
    catch (error) {
        console.error('Error capturando orden PayPal:', error);
        res.status(500).json({ error: error.message || 'Error capturando pago' });
    }
});
/**
 * GET /api/paypal/order/:orderId
 * Obtener detalles de una orden
 */
router.get('/order/:orderId', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        if (!PAYPAL_ENABLED) {
            return res.status(501).json({ error: 'PayPal no está habilitado' });
        }
        const { orderId } = req.params;
        const orderDetails = await paypalService_1.PayPalService.getOrderDetails(orderId);
        res.json(orderDetails);
    }
    catch (error) {
        console.error('Error obteniendo orden PayPal:', error);
        res.status(500).json({ error: error.message || 'Error obteniendo orden' });
    }
});
/**
 * GET /api/paypal/payments
 * Obtener historial de pagos del tenant
 */
router.get('/payments', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const payments = await paypalService_1.PayPalService.getPaymentHistory(tenantId);
        res.json(payments);
    }
    catch (error) {
        console.error('Error obteniendo pagos PayPal:', error);
        res.status(500).json({ error: error.message || 'Error obteniendo pagos' });
    }
});
/**
 * POST /api/paypal/webhook
 * Webhook de PayPal para notificaciones
 */
router.post('/webhook', async (req, res) => {
    try {
        if (!PAYPAL_ENABLED) {
            return res.status(501).json({ error: 'PayPal no está habilitado' });
        }
        // TODO: Implementar verificación de firma del webhook
        const event = req.body;
        console.log('PayPal Webhook recibido:', event.event_type);
        // Procesar diferentes tipos de eventos
        switch (event.event_type) {
            case 'CHECKOUT.ORDER.APPROVED':
                // Orden aprobada por el usuario
                console.log('Orden aprobada:', event.resource.id);
                break;
            case 'PAYMENT.CAPTURE.COMPLETED':
                // Pago capturado exitosamente
                console.log('Pago completado:', event.resource.id);
                break;
            case 'PAYMENT.CAPTURE.DENIED':
                // Pago denegado
                console.log('Pago denegado:', event.resource.id);
                break;
            default:
                console.log('Evento no manejado:', event.event_type);
        }
        res.json({ received: true });
    }
    catch (error) {
        console.error('Error procesando webhook PayPal:', error);
        res.status(500).json({ error: 'Error procesando webhook' });
    }
});
exports.default = router;
//# sourceMappingURL=paypalRoutes.js.map