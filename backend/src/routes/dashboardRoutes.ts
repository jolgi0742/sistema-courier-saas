// dashboardRoutes.ts - Rutas para estadísticas del dashboard
import { Router, Request, Response } from 'express';
import pool from '../config/database';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

/**
 * GET /api/dashboard/stats
 * Obtener estadísticas del dashboard
 */
router.get('/stats', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;

        // Paquetes de hoy
        const { rows: packagesToday } = await pool.query(
            `SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND DATE(created_at) = CURDATE()`,
            [tenantId]
        );

        // Paquetes en tránsito
        const { rows: packagesInTransit } = await pool.query(
            `SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND status IN ('in_transit', 'out_for_delivery')`,
            [tenantId]
        );

        // Clientes activos
        const { rows: activeClients } = await pool.query(
            `SELECT COUNT(*) as count FROM clients 
             WHERE tenant_id = ? AND status = 'active'`,
            [tenantId]
        );

        // Ingresos del mes (simulado - necesitarías una tabla de pagos)
        const monthlyRevenue = 45890; // TODO: calcular desde tabla de pagos

        res.json({
            packagesToday: (packagesToday as any)[0].count,
            packagesInTransit: (packagesInTransit as any)[0].count,
            activeClients: (activeClients as any)[0].count,
            monthlyRevenue: monthlyRevenue
        });
    } catch (error) {
        console.error('Error obteniendo estadísticas:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/dashboard/recent-packages
 * Obtener paquetes recientes
 */
router.get('/recent-packages', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;

        const { rows: packages } = await pool.query(
            `SELECT 
                p.id,
                p.tracking_number,
                p.status,
                p.created_at,
                c.name as client_name
             FROM packages p
             LEFT JOIN clients c ON p.client_id = c.id
             WHERE p.tenant_id = ?
             ORDER BY p.created_at DESC
             LIMIT 10`,
            [tenantId]
        );

        res.json(packages);
    } catch (error) {
        console.error('Error obteniendo paquetes recientes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

/**
 * GET /api/dashboard/performance
 * Obtener métricas de rendimiento
 */
router.get('/performance', tenantMiddleware, async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;

        // Total de paquetes
        const { rows: totalPackages } = await pool.query(
            `SELECT COUNT(*) as count FROM packages WHERE tenant_id = ?`,
            [tenantId]
        );

        // Paquetes entregados
        const { rows: deliveredPackages } = await pool.query(
            `SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND status = 'delivered'`,
            [tenantId]
        );

        // Calcular porcentaje de entregas a tiempo (simulado)
        const onTimeDeliveries = 94;

        // Satisfacción del cliente (simulado)
        const customerSatisfaction = 4.8;

        // Incidentes (paquetes cancelados o con problemas)
        const { rows: incidents } = await pool.query(
            `SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND status = 'cancelled'`,
            [tenantId]
        );

        // Tiempo promedio de entrega (simulado)
        const avgDeliveryTime = 2.3;

        res.json({
            onTimeDeliveries,
            customerSatisfaction,
            incidents: (incidents as any)[0].count,
            avgDeliveryTime,
            totalPackages: (totalPackages as any)[0].count,
            deliveredPackages: (deliveredPackages as any)[0].count
        });
    } catch (error) {
        console.error('Error obteniendo rendimiento:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});

export default router;
