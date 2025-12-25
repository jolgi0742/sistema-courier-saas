// expensesRoutes.ts - Rutas para gestión de gastos recurrentes
import { Router, Request, Response } from 'express';
import { ExpensesService } from '../services/expensesService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();
router.use(tenantMiddleware);

/**
 * GET /api/expenses
 * Obtener todos los gastos recurrentes
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { status, category } = req.query;

        const expenses = await ExpensesService.getAll(tenantId, {
            status: status as string,
            category: category as string
        });

        res.json({ expenses });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo gastos' });
    }
});

/**
 * GET /api/expenses/stats
 * Obtener estadísticas de gastos
 */
router.get('/stats', async (req: Request, res: Response) => {
    try {
        const stats = await ExpensesService.getStats(req.tenant!.id);
        res.json(stats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});

/**
 * GET /api/expenses/upcoming
 * Obtener gastos próximos a vencer
 */
router.get('/upcoming', async (req: Request, res: Response) => {
    try {
        const days = parseInt(req.query.days as string) || 30;
        const expenses = await ExpensesService.getUpcoming(req.tenant!.id, days);
        res.json({ expenses });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo gastos próximos' });
    }
});

/**
 * GET /api/expenses/categories
 * Obtener categorías únicas
 */
router.get('/categories', async (req: Request, res: Response) => {
    try {
        const categories = await ExpensesService.getCategories(req.tenant!.id);
        res.json({ categories });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo categorías' });
    }
});

/**
 * GET /api/expenses/:id
 * Obtener gasto por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const expense = await ExpensesService.getById(req.params.id, req.tenant!.id);
        if (!expense) return res.status(404).json({ error: 'Gasto no encontrado' });
        res.json(expense);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo gasto' });
    }
});

/**
 * POST /api/expenses
 * Crear nuevo gasto recurrente
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const expense = await ExpensesService.create(req.body, req.tenant!.id);
        res.status(201).json(expense);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando gasto' });
    }
});

/**
 * PUT /api/expenses/:id
 * Actualizar gasto recurrente
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const expense = await ExpensesService.update(req.params.id, req.body, req.tenant!.id);
        if (!expense) return res.status(404).json({ error: 'Gasto no encontrado' });
        res.json(expense);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando gasto' });
    }
});

/**
 * DELETE /api/expenses/:id
 * Eliminar gasto recurrente
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await ExpensesService.delete(req.params.id, req.tenant!.id);
        if (!deleted) return res.status(404).json({ error: 'Gasto no encontrado' });
        res.json({ success: true, message: 'Gasto eliminado' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando gasto' });
    }
});

export default router;
