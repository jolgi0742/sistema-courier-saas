// superAdminRoutes.ts - Rutas API para Super Admin
import { Router, Request, Response } from 'express';
import { TenantService } from '../services/tenantService';
import { BrandingService } from '../services/brandingService';
import { superAdminMiddleware } from '../middleware/tenantMiddleware';
import pool from '../config/database';

const router = Router();

// Todas las rutas requieren auth de super admin
router.use(superAdminMiddleware);

/**
 * GET /api/super-admin/dashboard
 * Métricas generales del SaaS
 */
router.get('/dashboard', async (req: Request, res: Response) => {
    try {
        // Total de tenants por estado
        const { rows: statusCounts } = await pool.query(`
      SELECT status, COUNT(*) as count 
      FROM tenants 
      GROUP BY status
    `) as any;

        // Total de tenants por plan
        const { rows: planCounts } = await pool.query(`
      SELECT plan_id, COUNT(*) as count 
      FROM tenants 
      GROUP BY plan_id
    `) as any;

        // MRR (Monthly Recurring Revenue)
        const { rows: mrrResult } = await pool.query(`
      SELECT SUM(p.price_monthly) as mrr
      FROM subscriptions s
      JOIN plans p ON s.plan_id = p.id
      WHERE s.status = 'active'
    `) as any;

        // Nuevos tenants este mes
        const { rows: newThisMonth } = await pool.query(`
      SELECT COUNT(*) as count
      FROM tenants
      WHERE MONTH(created_at) = MONTH(CURRENT_DATE())
      AND YEAR(created_at) = YEAR(CURRENT_DATE())
    `) as any;

        // Churn rate (cancelados / activos)
        const { rows: churnData } = await pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM tenants WHERE status = 'cancelled') as cancelled,
        (SELECT COUNT(*) FROM tenants WHERE status = 'active') as active
    `) as any;

        // Tenants recientes
        const { rows: recentTenants } = await pool.query(`
      SELECT t.*, tb.company_name, tb.logo_url
      FROM tenants t
      LEFT JOIN tenant_branding tb ON t.id = tb.tenant_id
      ORDER BY t.created_at DESC
      LIMIT 5
    `) as any;

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
                total_tenants: statusCounts.reduce((sum: number, s: any) => sum + s.count, 0),
                active_tenants: statusCounts.find((s: any) => s.status === 'active')?.count || 0,
                trial_tenants: statusCounts.find((s: any) => s.status === 'trial')?.count || 0,
                mrr: mrrResult[0].mrr || 0,
                new_this_month: newThisMonth[0].count || 0,
                churn_rate: churnData[0].active > 0
                    ? ((churnData[0].cancelled / churnData[0].active) * 100).toFixed(1)
                    : 0
            },
            by_status: statusCounts,
            by_plan: planCounts,
            revenue_by_month: revenueByMonth,
            recent_tenants: recentTenants
        });
    } catch (error) {
        console.error('Error obteniendo dashboard:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/super-admin/tenants
 * Listar todos los tenants con filtros
 */
router.get('/tenants', async (req: Request, res: Response) => {
    try {
        const { status, plan_id, search, page = 1, limit = 20 } = req.query;

        const offset = (Number(page) - 1) * Number(limit);
        const { tenants, total } = await TenantService.getAll({
            status: status as string,
            plan_id: plan_id as string,
            search: search as string,
            limit: Number(limit),
            offset
        });

        // Obtener branding para cada tenant
        const tenantsWithBranding = await Promise.all(
            tenants.map(async (tenant) => {
                const branding = await BrandingService.getByTenantId(tenant.id);
                return { ...tenant, branding };
            })
        );

        res.json({
            tenants: tenantsWithBranding,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    } catch (error) {
        console.error('Error listando tenants:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/super-admin/tenants/:id
 * Detalle de un tenant
 */
router.get('/tenants/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tenant = await TenantService.getById(id);

        if (!tenant) {
            return res.status(404).json({ error: 'Tenant no encontrado' });
        }

        const branding = await BrandingService.getByTenantId(id);

        // Obtener suscripción
        const { rows: subRows } = await pool.query(
            'SELECT * FROM subscriptions WHERE tenant_id = $9',
            [id]
        ) as any;

        // Obtener dominios
        const { rows: domainRows } = await pool.query(
            'SELECT * FROM tenant_domains WHERE tenant_id = $10',
            [id]
        ) as any;

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
    } catch (error) {
        console.error('Error obteniendo tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * PUT /api/super-admin/tenants/:id
 * Actualizar tenant
 */
router.put('/tenants/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, status, plan_id } = req.body;

        const updated = await TenantService.update(id, { name, status, plan_id });

        res.json({
            message: 'Tenant actualizado',
            tenant: updated
        });
    } catch (error) {
        console.error('Error actualizando tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * POST /api/super-admin/tenants/:id/suspend
 * Suspender tenant
 */
router.post('/tenants/:id/suspend', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;

        await TenantService.suspend(id, reason);

        res.json({ message: 'Tenant suspendido' });
    } catch (error) {
        console.error('Error suspendiendo tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * POST /api/super-admin/tenants/:id/activate
 * Reactivar tenant
 */
router.post('/tenants/:id/activate', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { plan_id } = req.body;

        await TenantService.activate(id, plan_id || 'starter');

        res.json({ message: 'Tenant activado' });
    } catch (error) {
        console.error('Error activando tenant:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/super-admin/subscriptions
 * Listar todas las suscripciones
 */
router.get('/subscriptions', async (req: Request, res: Response) => {
    try {
        const { rows } = await pool.query(`
      SELECT s.*, t.name as tenant_name, t.subdomain, p.name as plan_name, p.price_monthly
      FROM subscriptions s
      JOIN tenants t ON s.tenant_id = t.id
      JOIN plans p ON s.plan_id = p.id
      ORDER BY s.created_at DESC
    `) as any;

        res.json(rows);
    } catch (error) {
        console.error('Error listando suscripciones:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/super-admin/plans
 * Gestionar planes
 */
router.get('/plans', async (req: Request, res: Response) => {
    try {
        const { rows } = await pool.query('SELECT * FROM plans ORDER BY price_monthly ASC');

        const plans = (rows as any[]).map(plan => ({
            ...plan,
            limits: JSON.parse(plan.limits || '{}'),
            features: JSON.parse(plan.features || '[]')
        }));

        res.json(plans);
    } catch (error) {
        console.error('Error listando planes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

export default router;
