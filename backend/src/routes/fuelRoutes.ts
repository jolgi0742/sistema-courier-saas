// fuelRoutes.ts - Rutas para control de combustible
import { Router, Request, Response } from 'express';
import { FuelService } from '../services/fuelService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

// Todas las rutas requieren tenant
router.use(tenantMiddleware);

/**
 * GET /api/fuel
 * Obtener todos los registros de combustible
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { courierId, startDate, endDate } = req.query;

        const records = await FuelService.getAll(tenantId, {
            courierId: courierId as string,
            startDate: startDate as string,
            endDate: endDate as string
        });

        res.json({ records });
    } catch (error) {
        console.error('Error fetching fuel records:', error);
        res.status(500).json({ error: 'Error obteniendo registros de combustible' });
    }
});

/**
 * GET /api/fuel/stats
 * Obtener estadísticas de combustible
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { startDate, endDate } = req.query;

        const stats = await FuelService.getStats(tenantId, {
            startDate: startDate as string,
            endDate: endDate as string
        });

        res.json(stats);
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/fuel/courier/:courierId
 * Obtener registros por courier
 */
router.get('/courier/:courierId', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { courierId } = req.params;

        const records = await FuelService.getByCourier(courierId, tenantId);
        res.json({ records });
    } catch (error) {
        console.error('Error fetching courier fuel records:', error);
        res.status(500).json({ error: 'Error obteniendo registros del courier' });
    }
});

/**
 * GET /api/fuel/:id
 * Obtener registro por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const record = await FuelService.getById(id, tenantId);

        if (!record) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }

        res.json(record);
    } catch (error) {
        console.error('Error fetching fuel record:', error);
        res.status(500).json({ error: 'Error obteniendo registro' });
    }
});

/**
 * POST /api/fuel
 * Crear nuevo registro
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const record = await FuelService.create(req.body, tenantId);
        res.status(201).json(record);
    } catch (error) {
        console.error('Error creating fuel record:', error);
        res.status(500).json({ error: 'Error creando registro' });
    }
});

/**
 * DELETE /api/fuel/:id
 * Eliminar registro
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const deleted = await FuelService.delete(id, tenantId);

        if (!deleted) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }

        res.json({ success: true, message: 'Registro eliminado' });
    } catch (error) {
        console.error('Error deleting fuel record:', error);
        res.status(500).json({ error: 'Error eliminando registro' });
    }
});

export default router;
