"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vehiclesRoutes.ts - Rutas para gestión de vehículos
const express_1 = require("express");
const vehiclesService_1 = require("../services/vehiclesService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { status } = req.query;
        const vehicles = await vehiclesService_1.VehiclesService.getAll(tenantId, { status: status });
        res.json({ vehicles });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo vehículos' });
    }
});
router.get('/stats', async (req, res) => {
    try {
        const stats = await vehiclesService_1.VehiclesService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const vehicle = await vehiclesService_1.VehiclesService.getById(req.params.id, req.tenant.id);
        if (!vehicle)
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        res.json(vehicle);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo vehículo' });
    }
});
router.post('/', async (req, res) => {
    try {
        const vehicle = await vehiclesService_1.VehiclesService.create(req.body, req.tenant.id);
        res.status(201).json(vehicle);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando vehículo' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const vehicle = await vehiclesService_1.VehiclesService.update(req.params.id, req.body, req.tenant.id);
        if (!vehicle)
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        res.json(vehicle);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando vehículo' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await vehiclesService_1.VehiclesService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        res.json({ success: true, message: 'Vehículo eliminado' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando vehículo' });
    }
});
exports.default = router;
//# sourceMappingURL=vehiclesRoutes.js.map