"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// couriersRoutes.ts - Rutas API de couriers multi-tenant
const express_1 = require("express");
const couriersService_1 = require("../services/couriersService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/couriers
 * Listar couriers
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { status, zone, search } = req.query;
        const couriers = await couriersService_1.CouriersService.getAll(tenantId, {
            status: status,
            zone: zone,
            search: search
        });
        res.json(couriers);
    }
    catch (error) {
        console.error('Error listando couriers:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/couriers/available
 * Listar couriers disponibles para asignación
 */
router.get('/available', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { zone } = req.query;
        const couriers = await couriersService_1.CouriersService.getAvailable(tenantId, zone);
        res.json(couriers);
    }
    catch (error) {
        console.error('Error listando couriers disponibles:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/couriers/stats
 * Estadísticas de couriers
 */
router.get('/stats', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const stats = await couriersService_1.CouriersService.getStats(tenantId);
        res.json(stats);
    }
    catch (error) {
        console.error('Error obteniendo stats:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/couriers/:id
 * Obtener courier por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const courier = await couriersService_1.CouriersService.getById(id, tenantId);
        if (!courier) {
            return res.status(404).json({ error: 'Courier no encontrado' });
        }
        res.json(courier);
    }
    catch (error) {
        console.error('Error obteniendo courier:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/couriers
 * Crear nuevo courier
 */
router.post('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { name, email, phone, vehicle_type, vehicle_plate, zone, commission_rate } = req.body;
        if (!name || !email || !phone || !vehicle_type) {
            return res.status(400).json({
                error: 'Campos requeridos: name, email, phone, vehicle_type'
            });
        }
        const courier = await couriersService_1.CouriersService.create({
            tenant_id: tenantId,
            name,
            email,
            phone,
            vehicle_type,
            vehicle_plate,
            zone,
            commission_rate
        });
        res.status(201).json(courier);
    }
    catch (error) {
        console.error('Error creando courier:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * PUT /api/couriers/:id
 * Actualizar courier
 */
router.put('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const courier = await couriersService_1.CouriersService.update(id, tenantId, req.body);
        if (!courier) {
            return res.status(404).json({ error: 'Courier no encontrado' });
        }
        res.json(courier);
    }
    catch (error) {
        console.error('Error actualizando courier:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * PUT /api/couriers/:id/status
 * Actualizar estado del courier
 */
router.put('/:id/status', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const { status } = req.body;
        const validStatuses = ['active', 'inactive', 'on_delivery'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Estado inválido' });
        }
        const courier = await couriersService_1.CouriersService.updateStatus(id, tenantId, status);
        if (!courier) {
            return res.status(404).json({ error: 'Courier no encontrado' });
        }
        res.json(courier);
    }
    catch (error) {
        console.error('Error actualizando estado:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/couriers/:id/pay
 * Pagar balance al courier
 */
router.post('/:id/pay', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const { amount } = req.body;
        if (!amount || amount <= 0) {
            return res.status(400).json({ error: 'Monto inválido' });
        }
        const courier = await couriersService_1.CouriersService.getById(id, tenantId);
        if (!courier) {
            return res.status(404).json({ error: 'Courier no encontrado' });
        }
        if (courier.balance < amount) {
            return res.status(400).json({ error: 'Balance insuficiente' });
        }
        await couriersService_1.CouriersService.payBalance(id, tenantId, amount);
        res.json({ message: 'Pago registrado', amount });
    }
    catch (error) {
        console.error('Error procesando pago:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * DELETE /api/couriers/:id
 * Eliminar courier
 */
router.delete('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const deleted = await couriersService_1.CouriersService.delete(id, tenantId);
        if (!deleted) {
            return res.status(404).json({ error: 'Courier no encontrado' });
        }
        res.json({ message: 'Courier eliminado' });
    }
    catch (error) {
        console.error('Error eliminando courier:', error);
        res.status(400).json({ error: error.message || 'Error interno' });
    }
});
exports.default = router;
//# sourceMappingURL=couriersRoutes.js.map