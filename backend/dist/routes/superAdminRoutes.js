"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// superAdminRoutes.ts - Rutas API para Super Admin
const express_1 = require("express");
const tenantService_1 = require("../services/tenantService");
const brandingService_1 = require("../services/brandingService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const database_1 = __importDefault(require("../config/database"));
const router = (0, express_1.Router)();
// Todas las rutas requieren auth de super admin
router.use(tenantMiddleware_1.superAdminMiddleware);
/**
 * GET /api/super-admin/dashboard
 * Métricas generales del SaaS
 */
router.get('/dashboard', async (req, res) => {
    try {
        // Total de tenants por estado
        const [statusCounts] = await database_1.default.execute(`
      SELECT status, COUNT(*) as count 
      FROM tenants 
      GROUP BY status
    `);
        // Total de tenants por plan
        const [planCounts] = await database_1.default.execute(`
      SELECT plan_id, COUNT(*) as count 
      FROM tenants 
      GROUP BY plan_id
    `);
        // MRR (Monthly Recurring Revenue)
        const [mrrResult] = await database_1.default.execute(`
      SELECT SUM(p.price_monthly) as mrr
      FROM subscriptions s
      JOIN plans p ON s.plan_id = p.id
      WHERE s.status = 'active'
    `);
        // Nuevos tenants este mes
        const [newThisMonth] = await database_1.default.execute(`
      SELECT COUNT(*) as count
      FROM tenants
      WHERE MONTH(created_at) = MONTH(CURRENT_DATE())
      AND YEAR(created_at) = YEAR(CURRENT_DATE())
    `);
        // Churn rate (cancelados / activos)
        const [churnData] = await database_1.default.execute(`
      SELECT 
        (SELECT COUNT(*) FROM tenants WHERE status = 'cancelled') as cancelled,
        (SELECT COUNT(*) FROM tenants WHERE status = 'active') as active
    `);
        // Tenants recientes
        const [recentTenants] = await database_1.default.execute(`
      SELECT t.*, tb.company_name, tb.logo_url
      FROM tenants t
      LEFT JOIN tenant_branding tb ON t.id = tb.tenant_id
      ORDER BY t.created_at DESC
      LIMIT 5
    `);
        // Ingresos últimos 6 meses (simulado)
        const revenueByMonth = [];
        for (let i = 5; i >= 0; i--) {
            const date = new Date();
            date.setMonth(date.getMonth() - i);
            revenueByMonth.push({
                month: date.toLocaleDateString('es', { month: 'short', year: '2-digit' }),
                revenue: Math.floor(Math.random() * 10000) + 5000 // Simulado
            });
        }
        res.json({
            summary: {
                total_tenants: statusCounts.reduce((sum, s) => sum + s.count, 0),
                active_tenants: statusCounts.find((s) => s.status === 'active')?.count || 0,
                trial_tenants: statusCounts.find((s) => s.status === 'trial')?.count || 0,
                mrr: mrrResult[0]?.mrr || 0,
                new_this_month: newThisMonth[0]?.count || 0,
                churn_rate: churnData[0]?.active > 0
                    ? ((churnData[0]?.cancelled / churnData[0]?.active) * 100).toFixed(1)
                    : 0
            },
            by_status: statusCounts,
            by_plan: planCounts,
            revenue_by_month: revenueByMonth,
            recent_tenants: recentTenants
        });
    }
    catch (error) {
        console.error('Error obteniendo dashboard:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/super-admin/tenants
 * Listar todos los tenants con filtros
 */
router.get('/tenants', async (req, res) => {
    try {
        const { status, plan_id, search, page = 1, limit = 20 } = req.query;
        const offset = (Number(page) - 1) * Number(limit);
        const { tenants, total } = await tenantService_1.TenantService.getAll({
            status: status,
            plan_id: plan_id,
            search: search,
            limit: Number(limit),
            offset
        });
        // Obtener branding para cada tenant
        const tenantsWithBranding = await Promise.all(tenants.map(async (tenant) => {
            const branding = await brandingService_1.BrandingService.getByTenantId(tenant.id);
            return { ...tenant, branding };
        }));
        res.json({
            tenants: tenantsWithBranding,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Error listando tenants:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/super-admin/tenants/:id
 * Detalle de un tenant
 */
router.get('/tenants/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const tenant = await tenantService_1.TenantService.getById(id);
        if (!tenant) {
            return res.status(404).json({ error: 'Tenant no encontrado' });
        }
        const branding = await brandingService_1.BrandingService.getByTenantId(id);
        // Obtener suscripción
        const [subRows] = await database_1.default.execute('SELECT * FROM subscriptions WHERE tenant_id = ?', [id]);
        // Obtener dominios
        const [domainRows] = await database_1.default.execute('SELECT * FROM tenant_domains WHERE tenant_id = ?', [id]);
        // Estadísticas de uso (simuladas)
        const usage = {
            users: Math.floor(Math.random() * 50),
            packages_this_month: Math.floor(Math.random() * 500),
            storage_used_mb: Math.floor(Math.random() * 1000)
        };
        res.json({
            ...tenant,
            branding,
            subscription: subRows[0] || null,
            domains: domainRows,
            usage
        });
    }
    catch (error) {
        console.error('Error obteniendo tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * PUT /api/super-admin/tenants/:id
 * Actualizar tenant
 */
router.put('/tenants/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status, plan_id } = req.body;
        const updated = await tenantService_1.TenantService.update(id, { name, status, plan_id });
        res.json({
            message: 'Tenant actualizado',
            tenant: updated
        });
    }
    catch (error) {
        console.error('Error actualizando tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/super-admin/tenants/:id/suspend
 * Suspender tenant
 */
router.post('/tenants/:id/suspend', async (req, res) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        await tenantService_1.TenantService.suspend(id, reason);
        res.json({ message: 'Tenant suspendido' });
    }
    catch (error) {
        console.error('Error suspendiendo tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * POST /api/super-admin/tenants/:id/activate
 * Reactivar tenant
 */
router.post('/tenants/:id/activate', async (req, res) => {
    try {
        const { id } = req.params;
        const { plan_id } = req.body;
        await tenantService_1.TenantService.activate(id, plan_id || 'starter');
        res.json({ message: 'Tenant activado' });
    }
    catch (error) {
        console.error('Error activando tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/super-admin/subscriptions
 * Listar todas las suscripciones
 */
router.get('/subscriptions', async (req, res) => {
    try {
        const [rows] = await database_1.default.execute(`
      SELECT s.*, t.name as tenant_name, t.subdomain, p.name as plan_name, p.price_monthly
      FROM subscriptions s
      JOIN tenants t ON s.tenant_id = t.id
      JOIN plans p ON s.plan_id = p.id
      ORDER BY s.created_at DESC
    `);
        res.json(rows);
    }
    catch (error) {
        console.error('Error listando suscripciones:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/super-admin/plans
 * Gestionar planes
 */
router.get('/plans', async (req, res) => {
    try {
        const [rows] = await database_1.default.execute('SELECT * FROM plans ORDER BY price_monthly ASC');
        const plans = rows.map(plan => ({
            ...plan,
            limits: JSON.parse(plan.limits || '{}'),
            features: JSON.parse(plan.features || '[]')
        }));
        res.json(plans);
    }
    catch (error) {
        console.error('Error listando planes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
exports.default = router;
//# sourceMappingURL=superAdminRoutes.js.map