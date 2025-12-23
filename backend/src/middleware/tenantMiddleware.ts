// tenantMiddleware.ts - Middleware Multi-Tenant para Express
import { Request, Response, NextFunction } from 'express';
import { TenantService } from '../services/tenantService';
import { BrandingService } from '../services/brandingService';

// Extender Request para incluir tenant
declare global {
    namespace Express {
        interface Request {
            tenant?: {
                id: string;
                name: string;
                subdomain: string;
                status: string;
                plan_id: string;
                trial_ends_at: Date | null;
            };
            branding?: {
                logo_url: string | null;
                primary_color: string;
                secondary_color: string;
                company_name: string;
                contact_email: string | null;
            } | null;
        }
    }
}

/**
 * Middleware para resolver y validar el tenant de cada request
 */
export const tenantMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const hostname = req.hostname;
        let tenant = null;

        // 1. Intentar por dominio personalizado (White Label)
        tenant = await TenantService.getByCustomDomain(hostname);

        // 2. Si no, intentar por subdominio
        if (!tenant) {
            const subdomain = hostname.split('.')[0];

            // Ignorar subdominios del sistema
            if (!['www', 'api', 'admin', 'app'].includes(subdomain)) {
                tenant = await TenantService.getBySubdomain(subdomain);
            }
        }

        // 3. Verificar header X-Tenant-ID (para APIs)
        if (!tenant && req.headers['x-tenant-id']) {
            tenant = await TenantService.getById(req.headers['x-tenant-id'] as string);
        }

        // Si no se encontró tenant
        if (!tenant) {
            return res.status(404).json({
                error: 'Tenant no encontrado',
                message: 'La empresa solicitada no existe o no está configurada correctamente.'
            });
        }

        // Verificar estado del tenant
        if (tenant.status === 'suspended') {
            return res.status(403).json({
                error: 'Cuenta suspendida',
                message: 'Esta cuenta ha sido suspendida. Contacte al administrador.'
            });
        }

        if (tenant.status === 'cancelled') {
            return res.status(403).json({
                error: 'Cuenta cancelada',
                message: 'Esta cuenta ha sido cancelada.'
            });
        }

        // Verificar trial expirado
        if (tenant.status === 'trial' && tenant.trial_ends_at) {
            const trialEnd = new Date(tenant.trial_ends_at);
            if (trialEnd < new Date()) {
                return res.status(403).json({
                    error: 'Prueba expirada',
                    message: 'Su período de prueba ha terminado. Por favor, seleccione un plan para continuar.'
                });
            }
        }

        // Cargar branding
        const branding = await BrandingService.getByTenantId(tenant.id);

        // Adjuntar al request
        req.tenant = tenant;
        req.branding = branding;

        next();
    } catch (error) {
        console.error('Error en tenantMiddleware:', error);
        return res.status(500).json({
            error: 'Error interno',
            message: 'Error al procesar la solicitud.'
        });
    }
};

/**
 * Middleware para rutas que NO requieren tenant (ej: landing, registro)
 */
export const optionalTenantMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const hostname = req.hostname;

        // Intentar resolver tenant, pero no fallar si no existe
        let tenant = await TenantService.getByCustomDomain(hostname);

        if (!tenant) {
            const subdomain = hostname.split('.')[0];
            if (!['www', 'api', 'admin', 'app'].includes(subdomain)) {
                tenant = await TenantService.getBySubdomain(subdomain);
            }
        }

        if (tenant && tenant.status === 'active') {
            req.tenant = tenant;
            req.branding = await BrandingService.getByTenantId(tenant.id);
        }

        next();
    } catch (error) {
        // Continuar sin tenant
        next();
    }
};

/**
 * Middleware para Super Admin (sin tenant específico)
 */
export const superAdminMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Verificar que el usuario tiene permisos de super admin
    // Esto se combina con el middleware de autenticación
    const user = (req as any).user;

    if (!user || !user.is_super_admin) {
        return res.status(403).json({
            error: 'Acceso denegado',
            message: 'No tiene permisos para acceder a esta sección.'
        });
    }

    next();
};

export default tenantMiddleware;
