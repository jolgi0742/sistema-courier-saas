// vehiclesRoutes.ts - Rutas para gestión de vehículos
import { Router, Request, Response } from 'express';
import { VehiclesService } from '../services/vehiclesService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { status } = req.query;
        const vehicles = await VehiclesService.getAll(tenantId, { status: status as string });
        res.json({ vehicles });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo vehículos' });
    }
});

router.get('/stats', async (req: Request, res: Response) => {
    try {
        const stats = await VehiclesService.getStats(req.tenant!.id);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const vehicle = await VehiclesService.getById(req.params.id, req.tenant!.id);
        if (!vehicle) return res.status(404).json({ error: 'Vehículo no encontrado' });
        res.json(vehicle);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo vehículo' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const vehicle = await VehiclesService.create(req.body, req.tenant!.id);
        res.status(201).json(vehicle);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando vehículo' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const vehicle = await VehiclesService.update(req.params.id, req.body, req.tenant!.id);
        if (!vehicle) return res.status(404).json({ error: 'Vehículo no encontrado' });
        res.json(vehicle);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando vehículo' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await VehiclesService.delete(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Vehículo no encontrado' });
        res.json({ success: true, message: 'Vehículo eliminado' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando vehículo' });
    }
});

export default router;
