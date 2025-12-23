"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// domainRoutes.ts - Rutas API para gestión de dominios (White Label)
const express_1 = require("express");
const domainService_1 = require("../services/domainService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas requieren auth y tenant
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/domains
 * Listar dominios del tenant actual
 */
router.get('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const domains = await domainService_1.DomainService.getByTenantId(tenantId);
        res.json(domains);
    }
    catch (error) {
        console.error('Error listando dominios:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/domains/instructions
 * Obtener instrucciones de configuración DNS
 */
router.get('/instructions', async (req, res) => {
    try {
        const { domain } = req.query;
        if (!domain) {
            return res.status(400).json({ error: 'Dominio requerido' });
        }
        const instructions = domainService_1.DomainService.getDNSInstructions(domain);
        res.json(instructions);
    }
    catch (error) {
        console.error('Error obteniendo instrucciones:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/domains
 * Agregar dominio personalizado (Enterprise only)
 */
router.post('/', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { domain } = req.body;
        if (!domain) {
            return res.status(400).json({ error: 'Dominio requerido' });
        }
        const newDomain = await domainService_1.DomainService.addCustomDomain(tenantId, domain);
        res.status(201).json({
            message: 'Dominio agregado. Configure el DNS y verifique.',
            domain: newDomain,
            dns_instructions: domainService_1.DomainService.getDNSInstructions(domain)
        });
    }
    catch (error) {
        console.error('Error agregando dominio:', error);
        res.status(400).json({ error: error.message || 'Error agregando dominio' });
    }
});
/**
 * POST /api/domains/:id/verify
 * Verificar configuración DNS de un dominio
 */
router.post('/:id/verify', async (req, res) => {
    try {
        const { id } = req.params;
        const tenantId = req.tenant.id;
        // Verificar que el dominio pertenece al tenant
        const domain = await domainService_1.DomainService.getById(id);
        if (!domain || domain.tenant_id !== tenantId) {
            return res.status(404).json({ error: 'Dominio no encontrado' });
        }
        const result = await domainService_1.DomainService.verifyDNS(id);
        if (result.verified) {
            // TODO: Iniciar provisión de SSL
            // SSLService.provisionCertificate(domain.domain)
        }
        res.json(result);
    }
    catch (error) {
        console.error('Error verificando DNS:', error);
        res.status(500).json({ error: error.message || 'Error verificando DNS' });
    }
});
/**
 * POST /api/domains/:id/set-primary
 * Establecer dominio como principal
 */
router.post('/:id/set-primary', async (req, res) => {
    try {
        const { id } = req.params;
        const tenantId = req.tenant.id;
        // Verificar que el dominio pertenece al tenant y tiene SSL activo
        const domain = await domainService_1.DomainService.getById(id);
        if (!domain || domain.tenant_id !== tenantId) {
            return res.status(404).json({ error: 'Dominio no encontrado' });
        }
        if (domain.ssl_status !== 'active') {
            return res.status(400).json({
                error: 'El dominio debe tener SSL activo para ser principal'
            });
        }
        await domainService_1.DomainService.setPrimary(tenantId, id);
        res.json({ message: 'Dominio establecido como principal' });
    }
    catch (error) {
        console.error('Error estableciendo dominio principal:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * DELETE /api/domains/:id
 * Eliminar dominio personalizado
 */
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const tenantId = req.tenant.id;
        await domainService_1.DomainService.delete(id, tenantId);
        res.json({ message: 'Dominio eliminado' });
    }
    catch (error) {
        console.error('Error eliminando dominio:', error);
        res.status(400).json({ error: error.message || 'Error eliminando dominio' });
    }
});
exports.default = router;
//# sourceMappingURL=domainRoutes.js.map