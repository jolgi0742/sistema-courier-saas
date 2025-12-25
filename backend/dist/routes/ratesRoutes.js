"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ratesRoutes.ts - Rutas para gestión de tarifas
const express_1 = require("express");
const ratesService_1 = require("../services/ratesService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas requieren tenant
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/rates
 * Obtener todas las tarifas
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const activeOnly = req.query.active === 'true';
        const rates = await ratesService_1.RatesService.getAll(tenantId, activeOnly);
        res.json({ rates });
    }
    catch (error) {
        console.error('Error fetching rates:', error);
        res.status(500).json({ error: 'Error obteniendo tarifas' });
    }
});
/**
 * GET /api/rates/zones
 * Obtener zonas disponibles
 */
router.get('/zones', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const zones = await ratesService_1.RatesService.getZones(tenantId);
        res.json({ zones });
    }
    catch (error) {
        console.error('Error fetching zones:', error);
        res.status(500).json({ error: 'Error obteniendo zonas' });
    }
});
/**
 * GET /api/rates/calculate
 * Calcular tarifa para un envío
 */
router.get('/calculate', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { zone, weight, serviceType } = req.query;
        if (!zone || !weight || !serviceType) {
            return res.status(400).json({ error: 'Faltan parámetros requeridos' });
        }
        const result = await ratesService_1.RatesService.calculateRate(zone, parseFloat(weight), serviceType, tenantId);
        res.json(result);
    }
    catch (error) {
        console.error('Error calculating rate:', error);
        res.status(500).json({ error: 'Error calculando tarifa' });
    }
});
/**
 * GET /api/rates/:id
 * Obtener tarifa por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const rate = await ratesService_1.RatesService.getById(id, tenantId);
        if (!rate) {
            return res.status(404).json({ error: 'Tarifa no encontrada' });
        }
        res.json(rate);
    }
    catch (error) {
        console.error('Error fetching rate:', error);
        res.status(500).json({ error: 'Error obteniendo tarifa' });
    }
});
/**
 * POST /api/rates
 * Crear nueva tarifa
 */
router.post('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const rate = await ratesService_1.RatesService.create(req.body, tenantId);
        res.status(201).json(rate);
    }
    catch (error) {
        console.error('Error creating rate:', error);
        res.status(500).json({ error: 'Error creando tarifa' });
    }
});
/**
 * PUT /api/rates/:id
 * Actualizar tarifa
 */
router.put('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const rate = await ratesService_1.RatesService.update(id, req.body, tenantId);
        if (!rate) {
            return res.status(404).json({ error: 'Tarifa no encontrada' });
        }
        res.json(rate);
    }
    catch (error) {
        console.error('Error updating rate:', error);
        res.status(500).json({ error: 'Error actualizando tarifa' });
    }
});
/**
 * DELETE /api/rates/:id
 * Eliminar tarifa
 */
router.delete('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const deleted = await ratesService_1.RatesService.delete(id, tenantId);
        if (!deleted) {
            return res.status(404).json({ error: 'Tarifa no encontrada' });
        }
        res.json({ success: true, message: 'Tarifa eliminada' });
    }
    catch (error) {
        console.error('Error deleting rate:', error);
        res.status(500).json({ error: 'Error eliminando tarifa' });
    }
});
exports.default = router;
//# sourceMappingURL=ratesRoutes.js.map