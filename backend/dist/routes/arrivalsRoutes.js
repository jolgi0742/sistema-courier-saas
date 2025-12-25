"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// arrivalsRoutes.ts - Rutas para registro de llegadas
const express_1 = require("express");
const arrivalsService_1 = require("../services/arrivalsService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/arrivals
 * Obtener todas las llegadas
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { date, condition } = req.query;
        const arrivals = await arrivalsService_1.ArrivalsService.getAll(tenantId, {
            date: date,
            condition: condition
        });
        res.json({ arrivals });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegadas' });
    }
});
/**
 * GET /api/arrivals/stats
 * Obtener estadísticas de llegadas
 */
router.get('/stats', async (req, res) => {
    try {
        const { date } = req.query;
        const stats = await arrivalsService_1.ArrivalsService.getStats(req.tenant.id, date);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/arrivals/today
 * Obtener llegadas de hoy
 */
router.get('/today', async (req, res) => {
    try {
        const arrivals = await arrivalsService_1.ArrivalsService.getTodayArrivals(req.tenant.id);
        res.json({ arrivals });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegadas de hoy' });
    }
});
/**
 * GET /api/arrivals/package/:packageId
 * Obtener llegadas por paquete
 */
router.get('/package/:packageId', async (req, res) => {
    try {
        const arrivals = await arrivalsService_1.ArrivalsService.getByPackage(req.params.packageId, req.tenant.id);
        res.json({ arrivals });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegadas del paquete' });
    }
});
/**
 * GET /api/arrivals/:id
 * Obtener llegada por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const arrival = await arrivalsService_1.ArrivalsService.getById(req.params.id, req.tenant.id);
        if (!arrival)
            return res.status(404).json({ error: 'Llegada no encontrada' });
        res.json(arrival);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegada' });
    }
});
/**
 * POST /api/arrivals
 * Registrar nueva llegada
 */
router.post('/', async (req, res) => {
    try {
        const arrival = await arrivalsService_1.ArrivalsService.registerArrival(req.body, req.tenant.id);
        res.status(201).json(arrival);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message || 'Error registrando llegada' });
    }
});
/**
 * PUT /api/arrivals/:id
 * Actualizar llegada
 */
router.put('/:id', async (req, res) => {
    try {
        const arrival = await arrivalsService_1.ArrivalsService.update(req.params.id, req.body, req.tenant.id);
        if (!arrival)
            return res.status(404).json({ error: 'Llegada no encontrada' });
        res.json(arrival);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando llegada' });
    }
});
/**
 * DELETE /api/arrivals/:id
 * Eliminar llegada
 */
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await arrivalsService_1.ArrivalsService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Llegada no encontrada' });
        res.json({ success: true, message: 'Llegada eliminada' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando llegada' });
    }
});
exports.default = router;
//# sourceMappingURL=arrivalsRoutes.js.map