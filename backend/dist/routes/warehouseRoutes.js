"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// warehouseRoutes.ts - Rutas para gestión de almacén
const express_1 = require("express");
const warehouseService_1 = require("../services/warehouseService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/warehouse/locations
 * Obtener todas las ubicaciones
 */
router.get('/locations', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { zone, status } = req.query;
        const locations = await warehouseService_1.WarehouseService.getAllLocations(tenantId, {
            zone: zone,
            status: status
        });
        res.json({ locations });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo ubicaciones' });
    }
});
/**
 * GET /api/warehouse/stats
 * Obtener estadísticas de almacén
 */
router.get('/stats', async (req, res) => {
    try {
        const stats = await warehouseService_1.WarehouseService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/warehouse/zones
 * Obtener zonas únicas
 */
router.get('/zones', async (req, res) => {
    try {
        const zones = await warehouseService_1.WarehouseService.getZones(req.tenant.id);
        res.json({ zones });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo zonas' });
    }
});
/**
 * GET /api/warehouse/locations/:id
 * Obtener ubicación por ID
 */
router.get('/locations/:id', async (req, res) => {
    try {
        const location = await warehouseService_1.WarehouseService.getLocationById(req.params.id, req.tenant.id);
        if (!location)
            return res.status(404).json({ error: 'Ubicación no encontrada' });
        res.json(location);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo ubicación' });
    }
});
/**
 * GET /api/warehouse/locations/:id/packages
 * Obtener paquetes en una ubicación
 */
router.get('/locations/:id/packages', async (req, res) => {
    try {
        const packages = await warehouseService_1.WarehouseService.getPackagesInLocation(req.params.id, req.tenant.id);
        res.json({ packages });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo paquetes' });
    }
});
/**
 * GET /api/warehouse/search/:trackingNumber
 * Buscar paquete por tracking number
 */
router.get('/search/:trackingNumber', async (req, res) => {
    try {
        const location = await warehouseService_1.WarehouseService.findPackageLocation(req.params.trackingNumber, req.tenant.id);
        if (!location)
            return res.status(404).json({ error: 'Paquete no encontrado en almacén' });
        res.json(location);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error buscando paquete' });
    }
});
/**
 * POST /api/warehouse/locations
 * Crear nueva ubicación
 */
router.post('/locations', async (req, res) => {
    try {
        const location = await warehouseService_1.WarehouseService.createLocation(req.body, req.tenant.id);
        res.status(201).json(location);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando ubicación' });
    }
});
/**
 * PUT /api/warehouse/locations/:id
 * Actualizar ubicación
 */
router.put('/locations/:id', async (req, res) => {
    try {
        const location = await warehouseService_1.WarehouseService.updateLocation(req.params.id, req.body, req.tenant.id);
        if (!location)
            return res.status(404).json({ error: 'Ubicación no encontrada' });
        res.json(location);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando ubicación' });
    }
});
/**
 * DELETE /api/warehouse/locations/:id
 * Eliminar ubicación
 */
router.delete('/locations/:id', async (req, res) => {
    try {
        const deleted = await warehouseService_1.WarehouseService.deleteLocation(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Ubicación no encontrada' });
        res.json({ success: true, message: 'Ubicación eliminada' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando ubicación' });
    }
});
/**
 * POST /api/warehouse/assign
 * Asignar paquete a ubicación
 */
router.post('/assign', async (req, res) => {
    try {
        const { packageId, locationId } = req.body;
        if (!packageId || !locationId) {
            return res.status(400).json({ error: 'packageId y locationId son requeridos' });
        }
        const assignment = await warehouseService_1.WarehouseService.assignPackage(packageId, locationId, req.tenant.id);
        res.status(201).json(assignment);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error asignando paquete' });
    }
});
/**
 * POST /api/warehouse/remove
 * Remover paquete de ubicación
 */
router.post('/remove', async (req, res) => {
    try {
        const { packageId } = req.body;
        if (!packageId) {
            return res.status(400).json({ error: 'packageId es requerido' });
        }
        const removed = await warehouseService_1.WarehouseService.removePackage(packageId, req.tenant.id);
        if (!removed)
            return res.status(404).json({ error: 'Paquete no encontrado en almacén' });
        res.json({ success: true, message: 'Paquete removido de almacén' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error removiendo paquete' });
    }
});
exports.default = router;
//# sourceMappingURL=warehouseRoutes.js.map