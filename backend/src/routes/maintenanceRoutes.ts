// maintenanceRoutes.ts - Rutas para gestión de mantenimiento
import { Router, Request, Response } from 'express';
import { MaintenanceService } from '../services/maintenanceService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { vehicleId, status, type } = req.query;
        const records = await MaintenanceService.getAll(tenantId, {
            vehicleId: vehicleId as string,
            status: status as string,
            type: type as string
        });
        res.json({ records });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimientos' });
    }
});

router.get('/stats', async (req: Request, res: Response) => {
    try {
        const stats = await MaintenanceService.getStats(req.tenant!.id);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

router.get('/upcoming', async (req: Request, res: Response) => {
    try {
        const days = parseInt(req.query.days as string) || 30;
        const records = await MaintenanceService.getUpcoming(req.tenant!.id, days);
        res.json({ records });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimientos próximos' });
    }
});

router.get('/vehicle/:vehicleId', async (req: Request, res: Response) => {
    try {
        const records = await MaintenanceService.getByVehicle(req.params.vehicleId, req.tenant!.id);
        res.json({ records });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimientos del vehículo' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const record = await MaintenanceService.getById(req.params.id, req.tenant!.id);
        if (!record) return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json(record);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo mantenimiento' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const record = await MaintenanceService.create(req.body, req.tenant!.id);
        res.status(201).json(record);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando mantenimiento' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const record = await MaintenanceService.update(req.params.id, req.body, req.tenant!.id);
        if (!record) return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json(record);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando mantenimiento' });
    }
});

router.put('/:id/complete', async (req: Request, res: Response) => {
    try {
        const record = await MaintenanceService.complete(req.params.id, req.tenant!.id);
        if (!record) return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json(record);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error completando mantenimiento' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await MaintenanceService.delete(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        res.json({ success: true, message: 'Mantenimiento eliminado' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando mantenimiento' });
    }
});

export default router;
