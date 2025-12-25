"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// incidentsRoutes.ts - Rutas para gestión de incidencias
const express_1 = require("express");
const incidentsService_1 = require("../services/incidentsService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas requieren tenant
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/incidents
 * Obtener todas las incidencias
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { status, priority, type } = req.query;
        const incidents = await incidentsService_1.IncidentsService.getAll(tenantId, {
            status: status,
            priority: priority,
            type: type
        });
        res.json({ incidents });
    }
    catch (error) {
        console.error('Error fetching incidents:', error);
        res.status(500).json({ error: 'Error obteniendo incidencias' });
    }
});
/**
 * GET /api/incidents/stats
 * Obtener estadísticas de incidencias
 */
router.get('/stats', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const stats = await incidentsService_1.IncidentsService.getStats(tenantId);
        res.json(stats);
    }
    catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/incidents/package/:packageId
 * Obtener incidencias por paquete
 */
router.get('/package/:packageId', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { packageId } = req.params;
        const incidents = await incidentsService_1.IncidentsService.getByPackage(packageId, tenantId);
        res.json({ incidents });
    }
    catch (error) {
        console.error('Error fetching package incidents:', error);
        res.status(500).json({ error: 'Error obteniendo incidencias del paquete' });
    }
});
/**
 * GET /api/incidents/:id
 * Obtener incidencia por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const incident = await incidentsService_1.IncidentsService.getById(id, tenantId);
        if (!incident) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }
        res.json(incident);
    }
    catch (error) {
        console.error('Error fetching incident:', error);
        res.status(500).json({ error: 'Error obteniendo incidencia' });
    }
});
/**
 * POST /api/incidents
 * Crear nueva incidencia
 */
router.post('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const incident = await incidentsService_1.IncidentsService.create(req.body, tenantId);
        res.status(201).json(incident);
    }
    catch (error) {
        console.error('Error creating incident:', error);
        res.status(500).json({ error: 'Error creando incidencia' });
    }
});
/**
 * PUT /api/incidents/:id
 * Actualizar incidencia
 */
router.put('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const incident = await incidentsService_1.IncidentsService.update(id, req.body, tenantId);
        if (!incident) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }
        res.json(incident);
    }
    catch (error) {
        console.error('Error updating incident:', error);
        res.status(500).json({ error: 'Error actualizando incidencia' });
    }
});
/**
 * PUT /api/incidents/:id/resolve
 * Resolver incidencia
 */
router.put('/:id/resolve', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const { resolution } = req.body;
        if (!resolution) {
            return res.status(400).json({ error: 'Resolución requerida' });
        }
        const incident = await incidentsService_1.IncidentsService.resolve(id, resolution, tenantId);
        if (!incident) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }
        res.json(incident);
    }
    catch (error) {
        console.error('Error resolving incident:', error);
        res.status(500).json({ error: 'Error resolviendo incidencia' });
    }
});
/**
 * DELETE /api/incidents/:id
 * Eliminar incidencia
 */
router.delete('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const deleted = await incidentsService_1.IncidentsService.delete(id, tenantId);
        if (!deleted) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }
        res.json({ success: true, message: 'Incidencia eliminada' });
    }
    catch (error) {
        console.error('Error deleting incident:', error);
        res.status(500).json({ error: 'Error eliminando incidencia' });
    }
});
exports.default = router;
//# sourceMappingURL=incidentsRoutes.js.map