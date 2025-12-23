// domainRoutes.ts - Rutas API para gestión de dominios (White Label)
import { Router, Request, Response } from 'express';
import { DomainService } from '../services/domainService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

// Todas las rutas requieren auth y tenant
router.use(tenantMiddleware);

/**
 * GET /api/domains
 * Listar dominios del tenant actual
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const domains = await DomainService.getByTenantId(tenantId);
        res.json(domains);
    } catch (error) {
        console.error('Error listando dominios:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/domains/instructions
 * Obtener instrucciones de configuración DNS
 */
router.get('/instructions', async (req: Request, res: Response) => {
    try {
        const { domain } = req.query;

        if (!domain) {
            return res.status(400).json({ error: 'Dominio requerido' });
        }

        const instructions = DomainService.getDNSInstructions(domain as string);
        res.json(instructions);
    } catch (error) {
        console.error('Error obteniendo instrucciones:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * POST /api/domains
 * Agregar dominio personalizado (Enterprise only)
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { domain } = req.body;

        if (!domain) {
            return res.status(400).json({ error: 'Dominio requerido' });
        }

        const newDomain = await DomainService.addCustomDomain(tenantId, domain);

        res.status(201).json({
            message: 'Dominio agregado. Configure el DNS y verifique.',
            domain: newDomain,
            dns_instructions: DomainService.getDNSInstructions(domain)
        });
    } catch (error: any) {
        console.error('Error agregando dominio:', error);
        res.status(400).json({ error: error.message || 'Error agregando dominio' });
    }
});

/**
 * POST /api/domains/:id/verify
 * Verificar configuración DNS de un dominio
 */
router.post('/:id/verify', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tenantId = req.tenant!.id;

        // Verificar que el dominio pertenece al tenant
        const domain = await DomainService.getById(id);
        if (!domain || domain.tenant_id !== tenantId) {
            return res.status(404).json({ error: 'Dominio no encontrado' });
        }

        const result = await DomainService.verifyDNS(id);

        if (result.verified) {
            // TODO: Iniciar provisión de SSL
            // SSLService.provisionCertificate(domain.domain)
        }

        res.json(result);
    } catch (error: any) {
        console.error('Error verificando DNS:', error);
        res.status(500).json({ error: error.message || 'Error verificando DNS' });
    }
});

/**
 * POST /api/domains/:id/set-primary
 * Establecer dominio como principal
 */
router.post('/:id/set-primary', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tenantId = req.tenant!.id;

        // Verificar que el dominio pertenece al tenant y tiene SSL activo
        const domain = await DomainService.getById(id);
        if (!domain || domain.tenant_id !== tenantId) {
            return res.status(404).json({ error: 'Dominio no encontrado' });
        }

        if (domain.ssl_status !== 'active') {
            return res.status(400).json({
                error: 'El dominio debe tener SSL activo para ser principal'
            });
        }

        await DomainService.setPrimary(tenantId, id);

        res.json({ message: 'Dominio establecido como principal' });
    } catch (error) {
        console.error('Error estableciendo dominio principal:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * DELETE /api/domains/:id
 * Eliminar dominio personalizado
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tenantId = req.tenant!.id;

        await DomainService.delete(id, tenantId);

        res.json({ message: 'Dominio eliminado' });
    } catch (error: any) {
        console.error('Error eliminando dominio:', error);
        res.status(400).json({ error: error.message || 'Error eliminando dominio' });
    }
});

export default router;
