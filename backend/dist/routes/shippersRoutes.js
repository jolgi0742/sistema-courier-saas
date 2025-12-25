"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// shippersRoutes.ts - Rutas para gestión de remitentes frecuentes
const express_1 = require("express");
const shippersService_1 = require("../services/shippersService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/shippers
 * Obtener todos los remitentes frecuentes
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { search } = req.query;
        const shippers = await shippersService_1.ShippersService.getAll(tenantId, search);
        res.json({ shippers });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo remitentes' });
    }
});
/**
 * GET /api/shippers/stats
 * Obtener estadísticas de remitentes
 */
router.get('/stats', async (req, res) => {
    try {
        const stats = await shippersService_1.ShippersService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/shippers/search
 * Buscar remitentes
 */
router.get('/search', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Parámetro de búsqueda requerido' });
        }
        const shippers = await shippersService_1.ShippersService.search(q, req.tenant.id);
        res.json({ shippers });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error buscando remitentes' });
    }
});
/**
 * GET /api/shippers/:id
 * Obtener remitente por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const shipper = await shippersService_1.ShippersService.getById(req.params.id, req.tenant.id);
        if (!shipper)
            return res.status(404).json({ error: 'Remitente no encontrado' });
        res.json(shipper);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo remitente' });
    }
});
/**
 * POST /api/shippers
 * Crear nuevo remitente frecuente
 */
router.post('/', async (req, res) => {
    try {
        const shipper = await shippersService_1.ShippersService.create(req.body, req.tenant.id);
        res.status(201).json(shipper);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando remitente' });
    }
});
/**
 * PUT /api/shippers/:id
 * Actualizar remitente frecuente
 */
router.put('/:id', async (req, res) => {
    try {
        const shipper = await shippersService_1.ShippersService.update(req.params.id, req.body, req.tenant.id);
        if (!shipper)
            return res.status(404).json({ error: 'Remitente no encontrado' });
        res.json(shipper);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando remitente' });
    }
});
/**
 * DELETE /api/shippers/:id
 * Eliminar remitente frecuente
 */
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await shippersService_1.ShippersService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Remitente no encontrado' });
        res.json({ success: true, message: 'Remitente eliminado' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando remitente' });
    }
});
exports.default = router;
//# sourceMappingURL=shippersRoutes.js.map