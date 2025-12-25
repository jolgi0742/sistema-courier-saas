"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// documentsRoutes.ts - Rutas para gestión de documentos
const express_1 = require("express");
const documentsService_1 = require("../services/documentsService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/documents
 * Obtener todos los documentos
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { entityType, entityId, status } = req.query;
        const documents = await documentsService_1.DocumentsService.getAll(tenantId, {
            entityType: entityType,
            entityId: entityId,
            status: status
        });
        res.json({ documents });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documentos' });
    }
});
/**
 * GET /api/documents/stats
 * Obtener estadísticas de documentos
 */
router.get('/stats', async (req, res) => {
    try {
        const stats = await documentsService_1.DocumentsService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/documents/expiring
 * Obtener documentos próximos a vencer
 */
router.get('/expiring', async (req, res) => {
    try {
        const days = parseInt(req.query.days) || 30;
        const documents = await documentsService_1.DocumentsService.getExpiring(req.tenant.id, days);
        res.json({ documents });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documentos por vencer' });
    }
});
/**
 * GET /api/documents/entity/:entityType/:entityId
 * Obtener documentos por entidad
 */
router.get('/entity/:entityType/:entityId', async (req, res) => {
    try {
        const { entityType, entityId } = req.params;
        const documents = await documentsService_1.DocumentsService.getByEntity(entityType, entityId, req.tenant.id);
        res.json({ documents });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documentos de la entidad' });
    }
});
/**
 * GET /api/documents/:id
 * Obtener documento por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const document = await documentsService_1.DocumentsService.getById(req.params.id, req.tenant.id);
        if (!document)
            return res.status(404).json({ error: 'Documento no encontrado' });
        res.json(document);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documento' });
    }
});
/**
 * POST /api/documents
 * Crear nuevo documento
 */
router.post('/', async (req, res) => {
    try {
        const document = await documentsService_1.DocumentsService.create(req.body, req.tenant.id);
        res.status(201).json(document);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando documento' });
    }
});
/**
 * PUT /api/documents/:id
 * Actualizar documento
 */
router.put('/:id', async (req, res) => {
    try {
        const document = await documentsService_1.DocumentsService.update(req.params.id, req.body, req.tenant.id);
        if (!document)
            return res.status(404).json({ error: 'Documento no encontrado' });
        res.json(document);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando documento' });
    }
});
/**
 * DELETE /api/documents/:id
 * Eliminar documento
 */
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await documentsService_1.DocumentsService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Documento no encontrado' });
        res.json({ success: true, message: 'Documento eliminado' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando documento' });
    }
});
exports.default = router;
//# sourceMappingURL=documentsRoutes.js.map