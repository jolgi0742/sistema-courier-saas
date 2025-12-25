// arrivalsRoutes.ts - Rutas para registro de llegadas
import { Router, Request, Response } from 'express';
import { ArrivalsService } from '../services/arrivalsService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

/**
 * GET /api/arrivals
 * Obtener todas las llegadas
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { date, condition } = req.query;

        const arrivals = await ArrivalsService.getAll(tenantId, {
            date: date as string,
            condition: condition as string
        });

        res.json({ arrivals });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegadas' });
    }
});

/**
 * GET /api/arrivals/stats
 * Obtener estadísticas de llegadas
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const { date } = req.query;
        const stats = await ArrivalsService.getStats(req.tenant!.id, date as string);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/arrivals/today
 * Obtener llegadas de hoy
 */
router.get('/today', async (req: Request, res: Response) => {
    try {
        const arrivals = await ArrivalsService.getTodayArrivals(req.tenant!.id);
        res.json({ arrivals });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegadas de hoy' });
    }
});

/**
 * GET /api/arrivals/package/:packageId
 * Obtener llegadas por paquete
 */
router.get('/package/:packageId', async (req: Request, res: Response) => {
    try {
        const arrivals = await ArrivalsService.getByPackage(req.params.packageId, req.tenant!.id);
        res.json({ arrivals });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegadas del paquete' });
    }
});

/**
 * GET /api/arrivals/:id
 * Obtener llegada por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const arrival = await ArrivalsService.getById(req.params.id, req.tenant!.id);
        if (!arrival) return res.status(404).json({ error: 'Llegada no encontrada' });
        res.json(arrival);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo llegada' });
    }
});

/**
 * POST /api/arrivals
 * Registrar nueva llegada
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const arrival = await ArrivalsService.registerArrival(req.body, req.tenant!.id);
        res.status(201).json(arrival);
    } catch (error: any) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message || 'Error registrando llegada' });
    }
});

/**
 * PUT /api/arrivals/:id
 * Actualizar llegada
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const arrival = await ArrivalsService.update(req.params.id, req.body, req.tenant!.id);
        if (!arrival) return res.status(404).json({ error: 'Llegada no encontrada' });
        res.json(arrival);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando llegada' });
    }
});

/**
 * DELETE /api/arrivals/:id
 * Eliminar llegada
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await ArrivalsService.delete(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Llegada no encontrada' });
        res.json({ success: true, message: 'Llegada eliminada' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando llegada' });
    }
});

export default router;
