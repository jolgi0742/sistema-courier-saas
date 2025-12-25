"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// maintenanceRoutes.ts - Rutas para gestión de mantenimiento
const express_1 = require("express");
const maintenanceService_1 = require("../services/maintenanceService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { vehicleId, status, type } = req.query;
        const records = await maintenanceService_1.MaintenanceService.getAll(tenantId, {
            vehicleId: vehicleId,
            status: status,
            type: type
        });
        res.json({ records });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimientos' });
    }
});
router.get('/stats', async (req, res) => {
    try {
        const stats = await maintenanceService_1.MaintenanceService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
router.get('/upcoming', async (req, res) => {
    try {
        const days = parseInt(req.query.days) || 30;
        const records = await maintenanceService_1.MaintenanceService.getUpcoming(req.tenant.id, days);
        res.json({ records });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimientos próximos' });
    }
});
router.get('/vehicle/:vehicleId', async (req, res) => {
    try {
        const records = await maintenanceService_1.MaintenanceService.getByVehicle(req.params.vehicleId, req.tenant.id);
        res.json({ records });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimientos del vehículo' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const record = await maintenanceService_1.MaintenanceService.getById(req.params.id, req.tenant.id);
        if (!record)
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json(record);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimiento' });
    }
});
router.post('/', async (req, res) => {
    try {
        const record = await maintenanceService_1.MaintenanceService.create(req.body, req.tenant.id);
        res.status(201).json(record);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando mantenimiento' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const record = await maintenanceService_1.MaintenanceService.update(req.params.id, req.body, req.tenant.id);
        if (!record)
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json(record);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando mantenimiento' });
    }
});
router.put('/:id/complete', async (req, res) => {
    try {
        const record = await maintenanceService_1.MaintenanceService.complete(req.params.id, req.tenant.id);
        if (!record)
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json(record);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error completando mantenimiento' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await maintenanceService_1.MaintenanceService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json({ success: true, message: 'Mantenimiento eliminado' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando mantenimiento' });
    }
});
exports.default = router;
//# sourceMappingURL=maintenanceRoutes.js.map