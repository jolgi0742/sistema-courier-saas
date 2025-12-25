// shippersRoutes.ts - Rutas para gestión de remitentes frecuentes
import { Router, Request, Response } from 'express';
import { ShippersService } from '../services/shippersService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

/**
 * GET /api/shippers
 * Obtener todos los remitentes frecuentes
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { search } = req.query;

        const shippers = await ShippersService.getAll(tenantId, search as string);
        res.json({ shippers });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo remitentes' });
    }
});

/**
 * GET /api/shippers/stats
 * Obtener estadísticas de remitentes
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const stats = await ShippersService.getStats(req.tenant!.id);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/shippers/search
 * Buscar remitentes
 */
router.get('/search', async (req: Request, res: Response) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Parámetro de búsqueda requerido' });
        }

        const shippers = await ShippersService.search(q as string, req.tenant!.id);
        res.json({ shippers });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error buscando remitentes' });
    }
});

/**
 * GET /api/shippers/:id
 * Obtener remitente por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const shipper = await ShippersService.getById(req.params.id, req.tenant!.id);
        if (!shipper) return res.status(404).json({ error: 'Remitente no encontrado' });
        res.json(shipper);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo remitente' });
    }
});

/**
 * POST /api/shippers
 * Crear nuevo remitente frecuente
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const shipper = await ShippersService.create(req.body, req.tenant!.id);
        res.status(201).json(shipper);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando remitente' });
    }
});

/**
 * PUT /api/shippers/:id
 * Actualizar remitente frecuente
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const shipper = await ShippersService.update(req.params.id, req.body, req.tenant!.id);
        if (!shipper) return res.status(404).json({ error: 'Remitente no encontrado' });
        res.json(shipper);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando remitente' });
    }
});

/**
 * DELETE /api/shippers/:id
 * Eliminar remitente frecuente
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await ShippersService.delete(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Remitente no encontrado' });
        res.json({ success: true, message: 'Remitente eliminado' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando remitente' });
    }
});

export default router;
