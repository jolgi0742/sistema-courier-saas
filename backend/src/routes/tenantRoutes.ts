// tenantRoutes.ts - Rutas API para gestión de tenants
import { Router, Request, Response } from 'express';
import { TenantService } from '../services/tenantService';
import { BrandingService } from '../services/brandingService';
import { tenantMiddleware, optionalTenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

/**
 * GET /api/tenants/by-subdomain/:subdomain
 * Obtener tenant por subdominio (público - para resolver tenant)
 */
router.get('/by-subdomain/:subdomain', async (req: Request, res: Response) => {
    try {
        const { subdomain } = req.params;
        const tenant = await TenantService.getBySubdomain(subdomain);

        if (!tenant) {
            return res.status(404).json({ error: 'Tenant no encontrado' });
        }

        // Obtener branding
        const branding = await BrandingService.getByTenantId(tenant.id);

        // Obtener plan
        const { rows: planRows } = await (await import('../config/database')).default.query(
            'SELECT * FROM plans WHERE id = $1',
            [tenant.plan_id]
        ) as any;
        const plan = planRows[0];

        res.json({
            id: tenant.id,
            name: tenant.name,
            subdomain: tenant.subdomain,
            status: tenant.status,
            trial_ends_at: tenant.trial_ends_at,
            plan: plan ? {
                id: plan.id,
                name: plan.name,
                limits: plan.limits || {},
                features: plan.features || []
            } : null,
            branding: branding || {
                primary_color: '#3B82F6',
                secondary_color: '#1E40AF',
                accent_color: '#10B981',
                company_name: tenant.name
            },
            has_custom_domain: false // TODO: verificar en tenant_domains
        });
    } catch (error) {
        console.error('Error obteniendo tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/tenants/by-domain/:domain
 * Obtener tenant por dominio personalizado (White Label)
 */
router.get('/by-domain/:domain', async (req: Request, res: Response) => {
    try {
        const { domain } = req.params;
        const tenant = await TenantService.getByCustomDomain(domain);

        if (!tenant) {
            return res.status(404).json({ error: 'Dominio no encontrado' });
        }

        const branding = await BrandingService.getByTenantId(tenant.id);

        // Obtener plan
        const { rows: planRows } = await (await import('../config/database')).default.query(
            'SELECT * FROM plans WHERE id = $1',
            [tenant.plan_id]
        ) as any;
        const plan = planRows[0];

        res.json({
            id: tenant.id,
            name: tenant.name,
            subdomain: tenant.subdomain,
            status: tenant.status,
            trial_ends_at: tenant.trial_ends_at,
            plan: plan ? {
                id: plan.id,
                name: plan.name,
                limits: plan.limits || {},
                features: plan.features || []
            } : null,
            branding: branding || {
                primary_color: '#3B82F6',
                secondary_color: '#1E40AF',
                accent_color: '#10B981',
                company_name: tenant.name
            },
            has_custom_domain: true,
            custom_domain: domain
        });
    } catch (error) {
        console.error('Error obteniendo tenant por dominio:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * POST /api/tenants/check-subdomain
 * Verificar disponibilidad de subdominio
 */
router.post('/check-subdomain', async (req: Request, res: Response) => {
    try {
        const { subdomain } = req.body;

        if (!subdomain || subdomain.length < 3) {
            return res.status(400).json({
                available: false,
                message: 'El subdominio debe tener al menos 3 caracteres'
            });
        }

        // Validar formato
        if (!/^[a-z0-9-]+$/.test(subdomain)) {
            return res.status(400).json({
                available: false,
                message: 'Solo se permiten letras minúsculas, números y guiones'
            });
        }

        const available = await TenantService.isSubdomainAvailable(subdomain);

        res.json({
            available,
            message: available ? 'Subdominio disponible' : 'Subdominio no disponible'
        });
    } catch (error) {
        console.error('Error verificando subdominio:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * POST /api/tenants/register
 * Registrar nuevo tenant (signup)
 */
router.post('/register', async (req: Request, res: Response) => {
    try {
        const { name, subdomain, admin_email, admin_password } = req.body;

        // Validaciones
        if (!name || !subdomain || !admin_email || !admin_password) {
            return res.status(400).json({
                error: 'Todos los campos son requeridos'
            });
        }

        // Verificar disponibilidad
        const available = await TenantService.isSubdomainAvailable(subdomain);
        if (!available) {
            return res.status(400).json({
                error: 'El subdominio no está disponible'
            });
        }

        // Crear tenant
        const tenant = await TenantService.create({
            name,
            subdomain,
            admin_email,
            admin_password
        });

        // TODO: Crear usuario admin
        // TODO: Enviar email de bienvenida

        res.status(201).json({
            message: 'Cuenta creada exitosamente',
            tenant: {
                id: tenant.id,
                name: tenant.name,
                subdomain: tenant.subdomain,
                url: `https://${tenant.subdomain}.sistemacourier.com`
            },
            trial_ends_at: tenant.trial_ends_at
        });
    } catch (error: any) {
        console.error('Error registrando tenant:', error);
        res.status(400).json({ error: error.message || 'Error creando cuenta' });
    }
});

/**
 * GET /api/tenants/current
 * Obtener información del tenant actual (requiere auth)
 */
router.get('/current', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenant = req.tenant!;
        const branding = req.branding;

        res.json({
            id: tenant.id,
            name: tenant.name,
            subdomain: tenant.subdomain,
            status: tenant.status,
            plan_id: tenant.plan_id,
            trial_ends_at: tenant.trial_ends_at,
            branding
        });
    } catch (error) {
        console.error('Error obteniendo tenant actual:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * PUT /api/tenants/branding
 * Actualizar branding del tenant actual
 */
router.put('/branding', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const brandingData = req.body;

        const updated = await BrandingService.update(tenantId, brandingData);

        res.json({
            message: 'Branding actualizado',
            branding: updated
        });
    } catch (error) {
        console.error('Error actualizando branding:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

export default router;
