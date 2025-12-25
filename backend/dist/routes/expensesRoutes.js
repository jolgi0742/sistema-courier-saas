"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// expensesRoutes.ts - Rutas para gestión de gastos recurrentes
const express_1 = require("express");
const expensesService_1 = require("../services/expensesService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/expenses
 * Obtener todos los gastos recurrentes
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { status, category } = req.query;
        const expenses = await expensesService_1.ExpensesService.getAll(tenantId, {
            status: status,
            category: category
        });
        res.json({ expenses });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo gastos' });
    }
});
/**
 * GET /api/expenses/stats
 * Obtener estadísticas de gastos
 */
router.get('/stats', async (req, res) => {
    try {
        const stats = await expensesService_1.ExpensesService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/expenses/upcoming
 * Obtener gastos próximos a vencer
 */
router.get('/upcoming', async (req, res) => {
    try {
        const days = parseInt(req.query.days) || 30;
        const expenses = await expensesService_1.ExpensesService.getUpcoming(req.tenant.id, days);
        res.json({ expenses });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo gastos próximos' });
    }
});
/**
 * GET /api/expenses/categories
 * Obtener categorías únicas
 */
router.get('/categories', async (req, res) => {
    try {
        const categories = await expensesService_1.ExpensesService.getCategories(req.tenant.id);
        res.json({ categories });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo categorías' });
    }
});
/**
 * GET /api/expenses/:id
 * Obtener gasto por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const expense = await expensesService_1.ExpensesService.getById(req.params.id, req.tenant.id);
        if (!expense)
            return res.status(404).json({ error: 'Gasto no encontrado' });
        res.json(expense);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo gasto' });
    }
});
/**
 * POST /api/expenses
 * Crear nuevo gasto recurrente
 */
router.post('/', async (req, res) => {
    try {
        const expense = await expensesService_1.ExpensesService.create(req.body, req.tenant.id);
        res.status(201).json(expense);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando gasto' });
    }
});
/**
 * PUT /api/expenses/:id
 * Actualizar gasto recurrente
 */
router.put('/:id', async (req, res) => {
    try {
        const expense = await expensesService_1.ExpensesService.update(req.params.id, req.body, req.tenant.id);
        if (!expense)
            return res.status(404).json({ error: 'Gasto no encontrado' });
        res.json(expense);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando gasto' });
    }
});
/**
 * DELETE /api/expenses/:id
 * Eliminar gasto recurrente
 */
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await expensesService_1.ExpensesService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Gasto no encontrado' });
        res.json({ success: true, message: 'Gasto eliminado' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando gasto' });
    }
});
exports.default = router;
//# sourceMappingURL=expensesRoutes.js.map