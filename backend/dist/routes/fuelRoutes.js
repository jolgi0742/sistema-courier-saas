"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// fuelRoutes.ts - Rutas para control de combustible
const express_1 = require("express");
const fuelService_1 = require("../services/fuelService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas requieren tenant
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/fuel
 * Obtener todos los registros de combustible
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { courierId, startDate, endDate } = req.query;
        const records = await fuelService_1.FuelService.getAll(tenantId, {
            courierId: courierId,
            startDate: startDate,
            endDate: endDate
        });
        res.json({ records });
    }
    catch (error) {
        console.error('Error fetching fuel records:', error);
        res.status(500).json({ error: 'Error obteniendo registros de combustible' });
    }
});
/**
 * GET /api/fuel/stats
 * Obtener estadísticas de combustible
 */
router.get('/stats', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { startDate, endDate } = req.query;
        const stats = await fuelService_1.FuelService.getStats(tenantId, {
            startDate: startDate,
            endDate: endDate
        });
        res.json(stats);
    }
    catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/fuel/courier/:courierId
 * Obtener registros por courier
 */
router.get('/courier/:courierId', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { courierId } = req.params;
        const records = await fuelService_1.FuelService.getByCourier(courierId, tenantId);
        res.json({ records });
    }
    catch (error) {
        console.error('Error fetching courier fuel records:', error);
        res.status(500).json({ error: 'Error obteniendo registros del courier' });
    }
});
/**
 * GET /api/fuel/:id
 * Obtener registro por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const record = await fuelService_1.FuelService.getById(id, tenantId);
        if (!record) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
        res.json(record);
    }
    catch (error) {
        console.error('Error fetching fuel record:', error);
        res.status(500).json({ error: 'Error obteniendo registro' });
    }
});
/**
 * POST /api/fuel
 * Crear nuevo registro
 */
router.post('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const record = await fuelService_1.FuelService.create(req.body, tenantId);
        res.status(201).json(record);
    }
    catch (error) {
        console.error('Error creating fuel record:', error);
        res.status(500).json({ error: 'Error creando registro' });
    }
});
/**
 * DELETE /api/fuel/:id
 * Eliminar registro
 */
router.delete('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const deleted = await fuelService_1.FuelService.delete(id, tenantId);
        if (!deleted) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
        res.json({ success: true, message: 'Registro eliminado' });
    }
    catch (error) {
        console.error('Error deleting fuel record:', error);
        res.status(500).json({ error: 'Error eliminando registro' });
    }
});
exports.default = router;
//# sourceMappingURL=fuelRoutes.js.map