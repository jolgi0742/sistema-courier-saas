// documentsRoutes.ts - Rutas para gestión de documentos
import { Router, Request, Response } from 'express';
import { DocumentsService } from '../services/documentsService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

/**
 * GET /api/documents
 * Obtener todos los documentos
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { entityType, entityId, status } = req.query;

        const documents = await DocumentsService.getAll(tenantId, {
            entityType: entityType as string,
            entityId: entityId as string,
            status: status as string
        });

        res.json({ documents });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documentos' });
    }
});

/**
 * GET /api/documents/stats
 * Obtener estadísticas de documentos
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const stats = await DocumentsService.getStats(req.tenant!.id);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/documents/expiring
 * Obtener documentos próximos a vencer
 */
router.get('/expiring', async (req: Request, res: Response) => {
    try {
        const days = parseInt(req.query.days as string) || 30;
        const documents = await DocumentsService.getExpiring(req.tenant!.id, days);
        res.json({ documents });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documentos por vencer' });
    }
});

/**
 * GET /api/documents/entity/:entityType/:entityId
 * Obtener documentos por entidad
 */
router.get('/entity/:entityType/:entityId', async (req: Request, res: Response) => {
    try {
        const { entityType, entityId } = req.params;
        const documents = await DocumentsService.getByEntity(entityType, entityId, req.tenant!.id);
        res.json({ documents });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documentos de la entidad' });
    }
});

/**
 * GET /api/documents/:id
 * Obtener documento por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const document = await DocumentsService.getById(req.params.id, req.tenant!.id);
        if (!document) return res.status(404).json({ error: 'Documento no encontrado' });
        res.json(document);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo documento' });
    }
});

/**
 * POST /api/documents
 * Crear nuevo documento
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const document = await DocumentsService.create(req.body, req.tenant!.id);
        res.status(201).json(document);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando documento' });
    }
});

/**
 * PUT /api/documents/:id
 * Actualizar documento
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const document = await DocumentsService.update(req.params.id, req.body, req.tenant!.id);
        if (!document) return res.status(404).json({ error: 'Documento no encontrado' });
        res.json(document);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando documento' });
    }
});

/**
 * DELETE /api/documents/:id
 * Eliminar documento
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await DocumentsService.delete(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Documento no encontrado' });
        res.json({ success: true, message: 'Documento eliminado' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando documento' });
    }
});

export default router;
