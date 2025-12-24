"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tenantRoutes.ts - Rutas API para gestión de tenants
const express_1 = require("express");
const tenantService_1 = require("../services/tenantService");
const brandingService_1 = require("../services/brandingService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
/**
 * GET /api/tenants/by-subdomain/:subdomain
 * Obtener tenant por subdominio (público - para resolver tenant)
 */
router.get('/by-subdomain/:subdomain', async (req, res) => {
    try {
        const { subdomain } = req.params;
        const tenant = await tenantService_1.TenantService.getBySubdomain(subdomain);
        if (!tenant) {
            return res.status(404).json({ error: 'Tenant no encontrado' });
        }
        // Obtener branding
        const branding = await brandingService_1.BrandingService.getByTenantId(tenant.id);
        // Obtener plan
        const [planRows] = await (await Promise.resolve().then(() => __importStar(require('../config/database')))).default.execute('SELECT * FROM plans WHERE id = ?', [tenant.plan_id]);
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
                limits: JSON.parse(plan.limits || '{}'),
                features: JSON.parse(plan.features || '[]')
            } : null,
            branding: branding || {
                primary_color: '#3B82F6',
                secondary_color: '#1E40AF',
                accent_color: '#10B981',
                company_name: tenant.name
            },
            has_custom_domain: false // TODO: verificar en tenant_domains
        });
    }
    catch (error) {
        console.error('Error obteniendo tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/tenants/by-domain/:domain
 * Obtener tenant por dominio personalizado (White Label)
 */
router.get('/by-domain/:domain', async (req, res) => {
    try {
        const { domain } = req.params;
        const tenant = await tenantService_1.TenantService.getByCustomDomain(domain);
        if (!tenant) {
            return res.status(404).json({ error: 'Dominio no encontrado' });
        }
        const branding = await brandingService_1.BrandingService.getByTenantId(tenant.id);
        // Obtener plan
        const [planRows] = await (await Promise.resolve().then(() => __importStar(require('../config/database')))).default.execute('SELECT * FROM plans WHERE id = ?', [tenant.plan_id]);
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
                limits: JSON.parse(plan.limits || '{}'),
                features: JSON.parse(plan.features || '[]')
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
    }
    catch (error) {
        console.error('Error obteniendo tenant por dominio:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/tenants/check-subdomain
 * Verificar disponibilidad de subdominio
 */
router.post('/check-subdomain', async (req, res) => {
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
        const available = await tenantService_1.TenantService.isSubdomainAvailable(subdomain);
        res.json({
            available,
            message: available ? 'Subdominio disponible' : 'Subdominio no disponible'
        });
    }
    catch (error) {
        console.error('Error verificando subdominio:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/tenants/register
 * Registrar nuevo tenant (signup)
 */
router.post('/register', async (req, res) => {
    try {
        const { name, subdomain, admin_email, admin_password } = req.body;
        // Validaciones
        if (!name || !subdomain || !admin_email || !admin_password) {
            return res.status(400).json({
                error: 'Todos los campos son requeridos'
            });
        }
        // Verificar disponibilidad
        const available = await tenantService_1.TenantService.isSubdomainAvailable(subdomain);
        if (!available) {
            return res.status(400).json({
                error: 'El subdominio no está disponible'
            });
        }
        // Crear tenant
        const tenant = await tenantService_1.TenantService.create({
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
    }
    catch (error) {
        console.error('Error registrando tenant:', error);
        res.status(400).json({ error: error.message || 'Error creando cuenta' });
    }
});
/**
 * GET /api/tenants/current
 * Obtener información del tenant actual (requiere auth)
 */
router.get('/current', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenant = req.tenant;
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
    }
    catch (error) {
        console.error('Error obteniendo tenant actual:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * PUT /api/tenants/branding
 * Actualizar branding del tenant actual
 */
router.put('/branding', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const brandingData = req.body;
        const updated = await brandingService_1.BrandingService.update(tenantId, brandingData);
        res.json({
            message: 'Branding actualizado',
            branding: updated
        });
    }
    catch (error) {
        console.error('Error actualizando branding:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
exports.default = router;
//# sourceMappingURL=tenantRoutes.js.map