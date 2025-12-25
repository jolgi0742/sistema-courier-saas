// warehouseRoutes.ts - Rutas para gestión de almacén
import { Router, Request, Response } from 'express';
import { WarehouseService } from '../services/warehouseService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

/**
 * GET /api/warehouse/locations
 * Obtener todas las ubicaciones
 */
router.get('/locations', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { zone, status } = req.query;

        const locations = await WarehouseService.getAllLocations(tenantId, {
            zone: zone as string,
            status: status as string
        });

        res.json({ locations });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo ubicaciones' });
    }
});

/**
 * GET /api/warehouse/stats
 * Obtener estadísticas de almacén
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const stats = await WarehouseService.getStats(req.tenant!.id);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/warehouse/zones
 * Obtener zonas únicas
 */
router.get('/zones', async (req: Request, res: Response) => {
    try {
        const zones = await WarehouseService.getZones(req.tenant!.id);
        res.json({ zones });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo zonas' });
    }
});

/**
 * GET /api/warehouse/locations/:id
 * Obtener ubicación por ID
 */
router.get('/locations/:id', async (req: Request, res: Response) => {
    try {
        const location = await WarehouseService.getLocationById(req.params.id, req.tenant!.id);
        if (!location) return res.status(404).json({ error: 'Ubicación no encontrada' });
        res.json(location);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo ubicación' });
    }
});

/**
 * GET /api/warehouse/locations/:id/packages
 * Obtener paquetes en una ubicación
 */
router.get('/locations/:id/packages', async (req: Request, res: Response) => {
    try {
        const packages = await WarehouseService.getPackagesInLocation(req.params.id, req.tenant!.id);
        res.json({ packages });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo paquetes' });
    }
});

/**
 * GET /api/warehouse/search/:trackingNumber
 * Buscar paquete por tracking number
 */
router.get('/search/:trackingNumber', async (req: Request, res: Response) => {
    try {
        const location = await WarehouseService.findPackageLocation(req.params.trackingNumber, req.tenant!.id);
        if (!location) return res.status(404).json({ error: 'Paquete no encontrado en almacén' });
        res.json(location);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error buscando paquete' });
    }
});

/**
 * POST /api/warehouse/locations
 * Crear nueva ubicación
 */
router.post('/locations', async (req: Request, res: Response) => {
    try {
        const location = await WarehouseService.createLocation(req.body, req.tenant!.id);
        res.status(201).json(location);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando ubicación' });
    }
});

/**
 * PUT /api/warehouse/locations/:id
 * Actualizar ubicación
 */
router.put('/locations/:id', async (req: Request, res: Response) => {
    try {
        const location = await WarehouseService.updateLocation(req.params.id, req.body, req.tenant!.id);
        if (!location) return res.status(404).json({ error: 'Ubicación no encontrada' });
        res.json(location);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando ubicación' });
    }
});

/**
 * DELETE /api/warehouse/locations/:id
 * Eliminar ubicación
 */
router.delete('/locations/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await WarehouseService.deleteLocation(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Ubicación no encontrada' });
        res.json({ success: true, message: 'Ubicación eliminada' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando ubicación' });
    }
});

/**
 * POST /api/warehouse/assign
 * Asignar paquete a ubicación
 */
router.post('/assign', async (req: Request, res: Response) => {
    try {
        const { packageId, locationId } = req.body;
        if (!packageId || !locationId) {
            return res.status(400).json({ error: 'packageId y locationId son requeridos' });
        }

        const assignment = await WarehouseService.assignPackage(packageId, locationId, req.tenant!.id);
        res.status(201).json(assignment);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error asignando paquete' });
    }
});

/**
 * POST /api/warehouse/remove
 * Remover paquete de ubicación
 */
router.post('/remove', async (req: Request, res: Response) => {
    try {
        const { packageId } = req.body;
        if (!packageId) {
            return res.status(400).json({ error: 'packageId es requerido' });
        }

        const removed = await WarehouseService.removePackage(packageId, req.tenant!.id);
        if (!removed) return res.status(404).json({ error: 'Paquete no encontrado en almacén' });
        res.json({ success: true, message: 'Paquete removido de almacén' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error removiendo paquete' });
    }
});

export default router;
