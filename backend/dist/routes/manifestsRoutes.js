"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// manifestsRoutes.ts - Rutas para gestión de manifiestos de carga
const express_1 = require("express");
const manifestsService_1 = require("../services/manifestsService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/manifests
 * Obtener todos los manifiestos
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { status, courierId, date } = req.query;
        const manifests = await manifestsService_1.ManifestsService.getAll(tenantId, {
            status: status,
            courierId: courierId,
            date: date
        });
        res.json({ manifests });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo manifiestos' });
    }
});
/**
 * GET /api/manifests/stats
 * Obtener estadísticas de manifiestos
 */
router.get('/stats', async (req, res) => {
    try {
        const stats = await manifestsService_1.ManifestsService.getStats(req.tenant.id);
        res.json(stats);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    }
});
/**
 * GET /api/manifests/:id
 * Obtener manifiesto por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const manifest = await manifestsService_1.ManifestsService.getById(req.params.id, req.tenant.id);
        if (!manifest)
            return res.status(404).json({ error: 'Manifiesto no encontrado' });
        res.json(manifest);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error obteniendo manifiesto' });
    }
});
/**
 * POST /api/manifests
 * Crear nuevo manifiesto
 */
router.post('/', async (req, res) => {
    try {
        const manifest = await manifestsService_1.ManifestsService.create(req.body, req.tenant.id);
        res.status(201).json(manifest);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creando manifiesto' });
    }
});
/**
 * PUT /api/manifests/:id
 * Actualizar manifiesto
 */
router.put('/:id', async (req, res) => {
    try {
        const manifest = await manifestsService_1.ManifestsService.update(req.params.id, req.body, req.tenant.id);
        if (!manifest)
            return res.status(404).json({ error: 'Manifiesto no encontrado' });
        res.json(manifest);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error actualizando manifiesto' });
    }
});
/**
 * DELETE /api/manifests/:id
 * Eliminar manifiesto
 */
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await manifestsService_1.ManifestsService.delete(req.params.id, req.tenant.id);
        if (!deleted)
            return res.status(404).json({ error: 'Manifiesto no encontrado' });
        res.json({ success: true, message: 'Manifiesto eliminado' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error eliminando manifiesto' });
    }
});
/**
 * POST /api/manifests/:id/packages
 * Agregar paquetes al manifiesto
 */
router.post('/:id/packages', async (req, res) => {
    try {
        const { packageIds } = req.body;
        if (!packageIds || !Array.isArray(packageIds)) {
            return res.status(400).json({ error: 'packageIds debe ser un array' });
        }
        await manifestsService_1.ManifestsService.addPackages(req.params.id, packageIds, req.tenant.id);
        const manifest = await manifestsService_1.ManifestsService.getById(req.params.id, req.tenant.id);
        res.json(manifest);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message || 'Error agregando paquetes' });
    }
});
/**
 * DELETE /api/manifests/:id/packages/:packageId
 * Remover paquete del manifiesto
 */
router.delete('/:id/packages/:packageId', async (req, res) => {
    try {
        const removed = await manifestsService_1.ManifestsService.removePackage(req.params.id, req.params.packageId, req.tenant.id);
        if (!removed)
            return res.status(404).json({ error: 'Paquete no encontrado en manifiesto' });
        res.json({ success: true, message: 'Paquete removido del manifiesto' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error removiendo paquete' });
    }
});
exports.default = router;
//# sourceMappingURL=manifestsRoutes.js.map