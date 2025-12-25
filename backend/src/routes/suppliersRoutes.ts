// suppliersRoutes.ts - Rutas para gestión de proveedores
import { Router, Request, Response } from 'express';
import { SuppliersService } from '../services/suppliersService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

/**
 * GET /api/suppliers
 * Obtener todos los proveedores
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { status, category, search } = req.query;

        const suppliers = await SuppliersService.getAll(tenantId, {
            status: status as string,
            category: category as string,
            search: search as string
        });

        res.json({ suppliers });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo proveedores' });
    }
});

/**
 * GET /api/suppliers/stats
 * Obtener estadísticas de proveedores
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const stats = await SuppliersService.getStats(req.tenant!.id);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/suppliers/categories
 * Obtener categorías únicas
 */
router.get('/categories', async (req: Request, res: Response) => {
    try {
        const categories = await SuppliersService.getCategories(req.tenant!.id);
        res.json({ categories });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo categorías' });
    }
});

/**
 * GET /api/suppliers/:id
 * Obtener proveedor por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const supplier = await SuppliersService.getById(req.params.id, req.tenant!.id);
        if (!supplier) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json(supplier);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo proveedor' });
    }
});

/**
 * POST /api/suppliers
 * Crear nuevo proveedor
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const supplier = await SuppliersService.create(req.body, req.tenant!.id);
        res.status(201).json(supplier);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando proveedor' });
    }
});

/**
 * PUT /api/suppliers/:id
 * Actualizar proveedor
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const supplier = await SuppliersService.update(req.params.id, req.body, req.tenant!.id);
        if (!supplier) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json(supplier);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando proveedor' });
    }
});

/**
 * DELETE /api/suppliers/:id
 * Eliminar proveedor
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await SuppliersService.delete(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json({ success: true, message: 'Proveedor eliminado' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando proveedor' });
    }
});

export default router;
