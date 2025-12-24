"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dashboardRoutes.ts - Rutas para estadísticas del dashboard
const express_1 = require("express");
const database_1 = __importDefault(require("../config/database"));
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
/**
 * GET /api/dashboard/stats
 * Obtener estadísticas del dashboard
 */
router.get('/stats', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        // Paquetes de hoy
        const [packagesToday] = await database_1.default.execute(`SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND DATE(created_at) = CURDATE()`, [tenantId]);
        // Paquetes en tránsito
        const [packagesInTransit] = await database_1.default.execute(`SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND status IN ('in_transit', 'out_for_delivery')`, [tenantId]);
        // Clientes activos
        const [activeClients] = await database_1.default.execute(`SELECT COUNT(*) as count FROM clients 
             WHERE tenant_id = ? AND status = 'active'`, [tenantId]);
        // Ingresos del mes (simulado - necesitarías una tabla de pagos)
        const monthlyRevenue = 45890; // TODO: calcular desde tabla de pagos
        res.json({
            packagesToday: packagesToday[0].count,
            packagesInTransit: packagesInTransit[0].count,
            activeClients: activeClients[0].count,
            monthlyRevenue: monthlyRevenue
        });
    }
    catch (error) {
        console.error('Error obteniendo estadísticas:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/dashboard/recent-packages
 * Obtener paquetes recientes
 */
router.get('/recent-packages', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const [packages] = await database_1.default.execute(`SELECT 
                p.id,
                p.tracking_number,
                p.status,
                p.created_at,
                c.name as client_name
             FROM packages p
             LEFT JOIN clients c ON p.client_id = c.id
             WHERE p.tenant_id = ?
             ORDER BY p.created_at DESC
             LIMIT 10`, [tenantId]);
        res.json(packages);
    }
    catch (error) {
        console.error('Error obteniendo paquetes recientes:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
/**
 * GET /api/dashboard/performance
 * Obtener métricas de rendimiento
 */
router.get('/performance', tenantMiddleware_1.tenantMiddleware, async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        // Total de paquetes
        const [totalPackages] = await database_1.default.execute(`SELECT COUNT(*) as count FROM packages WHERE tenant_id = ?`, [tenantId]);
        // Paquetes entregados
        const [deliveredPackages] = await database_1.default.execute(`SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND status = 'delivered'`, [tenantId]);
        // Calcular porcentaje de entregas a tiempo (simulado)
        const onTimeDeliveries = 94;
        // Satisfacción del cliente (simulado)
        const customerSatisfaction = 4.8;
        // Incidentes (paquetes cancelados o con problemas)
        const [incidents] = await database_1.default.execute(`SELECT COUNT(*) as count FROM packages 
             WHERE tenant_id = ? AND status = 'cancelled'`, [tenantId]);
        // Tiempo promedio de entrega (simulado)
        const avgDeliveryTime = 2.3;
        res.json({
            onTimeDeliveries,
            customerSatisfaction,
            incidents: incidents[0].count,
            avgDeliveryTime,
            totalPackages: totalPackages[0].count,
            deliveredPackages: deliveredPackages[0].count
        });
    }
    catch (error) {
        console.error('Error obteniendo rendimiento:', error);
        res.status(500).json({ error: 'Error interno' });
    }
});
exports.default = router;
//# sourceMappingURL=dashboardRoutes.js.map