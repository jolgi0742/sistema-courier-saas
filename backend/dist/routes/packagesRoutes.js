"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// packagesRoutes.ts - Rutas API de paquetes multi-tenant
const express_1 = require("express");
const packagesService_1 = require("../services/packagesService");
const clientsService_1 = require("../services/clientsService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas requieren tenant
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/packages
 * Listar paquetes con filtros
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { status, client_id, courier_id, search, date_from, date_to, page = 1, limit = 20 } = req.query;
        const { packages, total } = await packagesService_1.PackagesService.getAll({
            tenant_id: tenantId,
            status: status,
            client_id: client_id,
            courier_id: courier_id,
            search: search,
            date_from: date_from,
            date_to: date_to,
            limit: Number(limit),
            offset: (Number(page) - 1) * Number(limit)
        });
        res.json({
            packages,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Error listando paquetes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/packages/stats
 * Estadísticas de paquetes
 */
router.get('/stats', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const stats = await packagesService_1.PackagesService.getStats(tenantId);
        res.json(stats);
    }
    catch (error) {
        console.error('Error obteniendo stats:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/packages/track/:tracking
 * Buscar paquete por tracking number
 */
router.get('/track/:tracking', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { tracking } = req.params;
        const pkg = await packagesService_1.PackagesService.getByTracking(tracking, tenantId);
        if (!pkg) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json(pkg);
    }
    catch (error) {
        console.error('Error buscando paquete:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/packages/:id
 * Obtener paquete por ID
 */
router.get('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const pkg = await packagesService_1.PackagesService.getById(id, tenantId);
        if (!pkg) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json(pkg);
    }
    catch (error) {
        console.error('Error obteniendo paquete:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/packages
 * Crear nuevo paquete
 */
router.post('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { client_id, sender_name, sender_phone, recipient_name, recipient_phone, recipient_address, weight, dimensions, declared_value, notes } = req.body;
        // Validaciones básicas
        if (!client_id || !recipient_name || !recipient_address) {
            return res.status(400).json({
                error: 'Campos requeridos: client_id, recipient_name, recipient_address'
            });
        }
        // Verificar que el cliente existe
        const client = await clientsService_1.ClientsService.getById(client_id, tenantId);
        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        const pkg = await packagesService_1.PackagesService.create({
            tenant_id: tenantId,
            client_id,
            sender_name: sender_name || client.name,
            sender_phone: sender_phone || client.phone,
            recipient_name,
            recipient_phone,
            recipient_address,
            weight: weight || 0,
            dimensions,
            declared_value,
            notes
        });
        // Incrementar contador de paquetes del cliente
        await clientsService_1.ClientsService.incrementPackages(client_id, tenantId);
        res.status(201).json(pkg);
    }
    catch (error) {
        console.error('Error creando paquete:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * PUT /api/packages/:id
 * Actualizar paquete
 */
router.put('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const pkg = await packagesService_1.PackagesService.update(id, tenantId, req.body);
        if (!pkg) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json(pkg);
    }
    catch (error) {
        console.error('Error actualizando paquete:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * PUT /api/packages/:id/status
 * Actualizar estado del paquete
 */
router.put('/:id/status', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const { status } = req.body;
        const validStatuses = ['pending', 'processing', 'in_transit', 'out_for_delivery', 'delivered', 'cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Estado inválido' });
        }
        const pkg = await packagesService_1.PackagesService.updateStatus(id, tenantId, status);
        if (!pkg) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json(pkg);
    }
    catch (error) {
        console.error('Error actualizando estado:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/packages/:id/assign
 * Asignar courier a paquete
 */
router.post('/:id/assign', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const { courier_id } = req.body;
        if (!courier_id) {
            return res.status(400).json({ error: 'courier_id requerido' });
        }
        const pkg = await packagesService_1.PackagesService.assignCourier(id, tenantId, courier_id);
        if (!pkg) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json(pkg);
    }
    catch (error) {
        console.error('Error asignando courier:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * DELETE /api/packages/:id
 * Eliminar paquete
 */
router.delete('/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const deleted = await packagesService_1.PackagesService.delete(id, tenantId);
        if (!deleted) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json({ message: 'Paquete eliminado' });
    }
    catch (error) {
        console.error('Error eliminando paquete:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
exports.default = router;
//# sourceMappingURL=packagesRoutes.js.map