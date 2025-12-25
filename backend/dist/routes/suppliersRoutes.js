"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// suppliersRoutes.ts - Rutas para gestión de proveedores
const express_1 = require("express");
const suppliersService_1 = require("../services/suppliersService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/suppliers
 * Obtener todos los proveedores
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { status, category, search } = req.query;
        const suppliers = await suppliersService_1.SuppliersService.getAll(tenantId, {
            status: status,
            category: category,
            search: search
        });
        res.json({ suppliers });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo proveedores' });
    }
});
/**
 * GET /api/suppliers/stats
 * Obtener estadísticas de proveedores
 */
router.get('/stats', async (req, res) => {
    try {
        const stats = await suppliersService_1.SuppliersService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/suppliers/categories
 * Obtener categorías únicas
 */
router.get('/categories', async (req, res) => {
    try {
        const categories = await suppliersService_1.SuppliersService.getCategories(req.tenant.id);
        res.json({ categories });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo categorías' });
    }
});
/**
 * GET /api/suppliers/:id
 * Obtener proveedor por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const supplier = await suppliersService_1.SuppliersService.getById(req.params.id, req.tenant.id);
        if (!supplier)
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json(supplier);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo proveedor' });
    }
});
/**
 * POST /api/suppliers
 * Crear nuevo proveedor
 */
router.post('/', async (req, res) => {
    try {
        const supplier = await suppliersService_1.SuppliersService.create(req.body, req.tenant.id);
        res.status(201).json(supplier);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando proveedor' });
    }
});
/**
 * PUT /api/suppliers/:id
 * Actualizar proveedor
 */
router.put('/:id', async (req, res) => {
    try {
        const supplier = await suppliersService_1.SuppliersService.update(req.params.id, req.body, req.tenant.id);
        if (!supplier)
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json(supplier);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando proveedor' });
    }
});
/**
 * DELETE /api/suppliers/:id
 * Eliminar proveedor
 */
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await suppliersService_1.SuppliersService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json({ success: true, message: 'Proveedor eliminado' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando proveedor' });
    }
});
exports.default = router;
//# sourceMappingURL=suppliersRoutes.js.map