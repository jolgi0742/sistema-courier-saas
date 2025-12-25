// ratesRoutes.ts - Rutas para gestión de tarifas
import { Router, Request, Response } from 'express';
import { RatesService } from '../services/ratesService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

// Todas las rutas requieren tenant
router.use(tenantMiddleware);

/**
 * GET /api/rates
 * Obtener todas las tarifas
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const activeOnly = req.query.active === 'true';

        const rates = await RatesService.getAll(tenantId, activeOnly);
        res.json({ rates });
    } catch (error) {
        console.error('Error fetching rates:', error);
        res.status(500).json({ error: 'Error obteniendo tarifas' });
    }
});

/**
 * GET /api/rates/zones
 * Obtener zonas disponibles
 */
router.get('/zones', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const zones = await RatesService.getZones(tenantId);
        res.json({ zones });
    } catch (error) {
        console.error('Error fetching zones:', error);
        res.status(500).json({ error: 'Error obteniendo zonas' });
    }
});

/**
 * GET /api/rates/calculate
 * Calcular tarifa para un envío
 */
router.get('/calculate', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { zone, weight, serviceType } = req.query;

        if (!zone || !weight || !serviceType) {
            return res.status(400).json({ error: 'Faltan parámetros requeridos' });
        }

        const result = await RatesService.calculateRate(
            zone as string,
            parseFloat(weight as string),
            serviceType as any,
            tenantId
        );

        res.json(result);
    } catch (error) {
        console.error('Error calculating rate:', error);
        res.status(500).json({ error: 'Error calculando tarifa' });
    }
});

/**
 * GET /api/rates/:id
 * Obtener tarifa por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const rate = await RatesService.getById(id, tenantId);

        if (!rate) {
            return res.status(404).json({ error: 'Tarifa no encontrada' });
        }

        res.json(rate);
    } catch (error) {
        console.error('Error fetching rate:', error);
        res.status(500).json({ error: 'Error obteniendo tarifa' });
    }
});

/**
 * POST /api/rates
 * Crear nueva tarifa
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const rate = await RatesService.create(req.body, tenantId);
        res.status(201).json(rate);
    } catch (error) {
        console.error('Error creating rate:', error);
        res.status(500).json({ error: 'Error creando tarifa' });
    }
});

/**
 * PUT /api/rates/:id
 * Actualizar tarifa
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const rate = await RatesService.update(id, req.body, tenantId);

        if (!rate) {
            return res.status(404).json({ error: 'Tarifa no encontrada' });
        }

        res.json(rate);
    } catch (error) {
        console.error('Error updating rate:', error);
        res.status(500).json({ error: 'Error actualizando tarifa' });
    }
});

/**
 * DELETE /api/rates/:id
 * Eliminar tarifa
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const deleted = await RatesService.delete(id, tenantId);

        if (!deleted) {
            return res.status(404).json({ error: 'Tarifa no encontrada' });
        }

        res.json({ success: true, message: 'Tarifa eliminada' });
    } catch (error) {
        console.error('Error deleting rate:', error);
        res.status(500).json({ error: 'Error eliminando tarifa' });
    }
});

export default router;
