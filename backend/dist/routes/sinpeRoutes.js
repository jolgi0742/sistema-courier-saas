"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sinpeRoutes.ts - Rutas para pagos SINPE Móvil (Costa Rica)
const express_1 = require("express");
const sinpeService_1 = require("../services/sinpeService");
const router = (0, express_1.Router)();
/**
 * GET /sinpe/info
 * Obtener información de SINPE para mostrar al cliente
 */
router.get('/info', async (req, res) => {
    try {
        const tenantId = req.tenant?.id || req.headers['x-tenant-id'];
        if (!tenantId) {
            return res.status(400).json({ error: 'Tenant ID requerido' });
        }
        const sinpeInfo = await sinpeService_1.SinpeService.getSinpeInfo(tenantId);
        res.json({
            success: true,
            data: {
                ...sinpeInfo,
                instructions: [
                    `1. Abra su aplicación de banca móvil`,
                    `2. Seleccione SINPE Móvil`,
                    `3. Ingrese el número: ${sinpeInfo.phone}`,
                    `4. Ingrese el monto exacto`,
                    `5. En la descripción, incluya su nombre y número de orden`,
                    `6. Tome captura del comprobante`,
                    `7. Suba el comprobante en esta página`
                ]
            }
        });
    }
    catch (error) {
        console.error('Error obteniendo info SINPE:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /sinpe/payment
 * Registrar un nuevo pago SINPE (pendiente de verificación)
 */
router.post('/payment', async (req, res) => {
    try {
        const tenantId = req.tenant?.id || req.headers['x-tenant-id'];
        const { amount, description, customer_name, customer_phone, reference_number, receipt_url } = req.body;
        if (!tenantId) {
            return res.status(400).json({ error: 'Tenant ID requerido' });
        }
        if (!amount || !customer_name || !reference_number) {
            return res.status(400).json({
                error: 'Campos requeridos: amount, customer_name, reference_number'
            });
        }
        const payment = await sinpeService_1.SinpeService.createPayment({
            tenant_id: tenantId,
            amount,
            description: description || 'Pago SINPE Móvil',
            customer_name,
            customer_phone: customer_phone || '',
            reference_number,
            receipt_url
        });
        res.status(201).json({
            success: true,
            message: 'Pago registrado. Pendiente de verificación.',
            data: payment
        });
    }
    catch (error) {
        console.error('Error creando pago SINPE:', error);
        res.status(500).json({ error: 'Error al registrar pago' });
    }
});
/**
 * GET /sinpe/payments/pending
 * Obtener pagos pendientes de verificación (admin)
 */
router.get('/payments/pending', async (req, res) => {
    try {
        const tenantId = req.tenant?.id || req.headers['x-tenant-id'];
        if (!tenantId) {
            return res.status(400).json({ error: 'Tenant ID requerido' });
        }
        const payments = await sinpeService_1.SinpeService.getPendingPayments(tenantId);
        res.json({
            success: true,
            count: payments.length,
            data: payments
        });
    }
    catch (error) {
        console.error('Error obteniendo pagos pendientes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /sinpe/payments
 * Obtener historial de pagos
 */
router.get('/payments', async (req, res) => {
    try {
        const tenantId = req.tenant?.id || req.headers['x-tenant-id'];
        const limit = parseInt(req.query.limit) || 50;
        if (!tenantId) {
            return res.status(400).json({ error: 'Tenant ID requerido' });
        }
        const payments = await sinpeService_1.SinpeService.getPaymentHistory(tenantId, limit);
        res.json({
            success: true,
            data: payments
        });
    }
    catch (error) {
        console.error('Error obteniendo historial de pagos:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /sinpe/payments/:id/verify
 * Verificar (aprobar) un pago SINPE
 */
router.post('/payments/:id/verify', async (req, res) => {
    try {
        const { id } = req.params;
        const { notes } = req.body;
        const verifiedBy = req.user?.email || 'admin';
        const payment = await sinpeService_1.SinpeService.verifyPayment(id, verifiedBy, notes);
        res.json({
            success: true,
            message: 'Pago verificado exitosamente',
            data: payment
        });
    }
    catch (error) {
        console.error('Error verificando pago:', error);
        res.status(500).json({ error: 'Error al verificar pago' });
    }
});
/**
 * POST /sinpe/payments/:id/reject
 * Rechazar un pago SINPE
 */
router.post('/payments/:id/reject', async (req, res) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        const rejectedBy = req.user?.email || 'admin';
        if (!reason) {
            return res.status(400).json({ error: 'Razón del rechazo requerida' });
        }
        const payment = await sinpeService_1.SinpeService.rejectPayment(id, rejectedBy, reason);
        res.json({
            success: true,
            message: 'Pago rechazado',
            data: payment
        });
    }
    catch (error) {
        console.error('Error rechazando pago:', error);
        res.status(500).json({ error: 'Error al rechazar pago' });
    }
});
/**
 * PUT /sinpe/config
 * Configurar SINPE para el tenant (admin)
 */
router.put('/config', async (req, res) => {
    try {
        const tenantId = req.tenant?.id || req.headers['x-tenant-id'];
        const { phone, bank, holder_name } = req.body;
        if (!tenantId) {
            return res.status(400).json({ error: 'Tenant ID requerido' });
        }
        if (!phone) {
            return res.status(400).json({ error: 'Número de teléfono SINPE requerido' });
        }
        await sinpeService_1.SinpeService.configureSinpe(tenantId, phone, bank || 'Banco Nacional de Costa Rica', holder_name || 'Sistema Courier');
        res.json({
            success: true,
            message: 'Configuración SINPE actualizada'
        });
    }
    catch (error) {
        console.error('Error configurando SINPE:', error);
        res.status(500).json({ error: 'Error al configurar SINPE' });
    }
});
exports.default = router;
//# sourceMappingURL=sinpeRoutes.js.map