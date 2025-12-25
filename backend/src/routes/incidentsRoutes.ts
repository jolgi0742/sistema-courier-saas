// incidentsRoutes.ts - Rutas para gestión de incidencias
import { Router, Request, Response } from 'express';
import { IncidentsService } from '../services/incidentsService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

// Todas las rutas requieren tenant
router.use(tenantMiddleware);

/**
 * GET /api/incidents
 * Obtener todas las incidencias
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { status, priority, type } = req.query;

        const incidents = await IncidentsService.getAll(tenantId, {
            status: status as string,
            priority: priority as string,
            type: type as string
        });

        res.json({ incidents });
    } catch (error) {
        console.error('Error fetching incidents:', error);
        res.status(500).json({ error: 'Error obteniendo incidencias' });
    }
});

/**
 * GET /api/incidents/stats
 * Obtener estadísticas de incidencias
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const stats = await IncidentsService.getStats(tenantId);
        res.json(stats);
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/incidents/package/:packageId
 * Obtener incidencias por paquete
 */
router.get('/package/:packageId', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { packageId } = req.params;

        const incidents = await IncidentsService.getByPackage(packageId, tenantId);
        res.json({ incidents });
    } catch (error) {
        console.error('Error fetching package incidents:', error);
        res.status(500).json({ error: 'Error obteniendo incidencias del paquete' });
    }
});

/**
 * GET /api/incidents/:id
 * Obtener incidencia por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const incident = await IncidentsService.getById(id, tenantId);

        if (!incident) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }

        res.json(incident);
    } catch (error) {
        console.error('Error fetching incident:', error);
        res.status(500).json({ error: 'Error obteniendo incidencia' });
    }
});

/**
 * POST /api/incidents
 * Crear nueva incidencia
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const incident = await IncidentsService.create(req.body, tenantId);
        res.status(201).json(incident);
    } catch (error) {
        console.error('Error creating incident:', error);
        res.status(500).json({ error: 'Error creando incidencia' });
    }
});

/**
 * PUT /api/incidents/:id
 * Actualizar incidencia
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const incident = await IncidentsService.update(id, req.body, tenantId);

        if (!incident) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }

        res.json(incident);
    } catch (error) {
        console.error('Error updating incident:', error);
        res.status(500).json({ error: 'Error actualizando incidencia' });
    }
});

/**
 * PUT /api/incidents/:id/resolve
 * Resolver incidencia
 */
router.put('/:id/resolve', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;
        const { resolution } = req.body;

        if (!resolution) {
            return res.status(400).json({ error: 'Resolución requerida' });
        }

        const incident = await IncidentsService.resolve(id, resolution, tenantId);

        if (!incident) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }

        res.json(incident);
    } catch (error) {
        console.error('Error resolving incident:', error);
        res.status(500).json({ error: 'Error resolviendo incidencia' });
    }
});

/**
 * DELETE /api/incidents/:id
 * Eliminar incidencia
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const deleted = await IncidentsService.delete(id, tenantId);

        if (!deleted) {
            return res.status(404).json({ error: 'Incidencia no encontrada' });
        }

        res.json({ success: true, message: 'Incidencia eliminada' });
    } catch (error) {
        console.error('Error deleting incident:', error);
        res.status(500).json({ error: 'Error eliminando incidencia' });
    }
});

export default router;
