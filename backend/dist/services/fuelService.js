"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelService = void 0;
// fuelService.ts - Servicio para control de combustible
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class FuelService {
    /**
     * Obtener todos los registros de combustible
     */
    static async getAll(tenantId, filters) {
        let query = `
            SELECT 
                f.*,
                c.name as courier_name
            FROM fuel_records f
            LEFT JOIN couriers c ON f.courier_id = c.id
            WHERE f.tenant_id = ?
        `;
        const params = [tenantId];
        if (filters?.courierId) {
            query += ' AND f.courier_id = ?';
            params.push(filters.courierId);
        }
        if (filters?.startDate) {
            query += ' AND f.created_at >= ?';
            params.push(filters.startDate);
        }
        if (filters?.endDate) {
            query += ' AND f.created_at <= ?';
            params.push(filters.endDate);
        }
        query += ' ORDER BY f.created_at DESC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener registro por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                f.*,
                c.name as courier_name
            FROM fuel_records f
            LEFT JOIN couriers c ON f.courier_id = c.id
            WHERE f.id = ? AND f.tenant_id = ?`, [id, tenantId]);
        const records = rows;
        return records.length > 0 ? records[0] : null;
    }
    /**
     * Obtener registros por courier
     */
    static async getByCourier(courierId, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM fuel_records WHERE courier_id = ? AND tenant_id = ? ORDER BY created_at DESC', [courierId, tenantId]);
        return rows;
    }
    /**
     * Calcular eficiencia basado en odómetro anterior
     */
    static async calculateEfficiency(courierId, currentOdometer, liters, tenantId) {
        if (!courierId || !currentOdometer) {
            return { previousOdometer: null, distanceTraveled: null, efficiency: null };
        }
        // Obtener último registro del courier
        const [rows] = await database_1.default.execute(`SELECT odometer_reading 
             FROM fuel_records 
             WHERE courier_id = ? AND tenant_id = ? AND odometer_reading IS NOT NULL
             ORDER BY created_at DESC 
             LIMIT 1`, [courierId, tenantId]);
        const records = rows;
        if (records.length === 0) {
            return { previousOdometer: null, distanceTraveled: null, efficiency: null };
        }
        const previousOdometer = records[0].odometer_reading;
        const distanceTraveled = currentOdometer - previousOdometer;
        const efficiency = distanceTraveled > 0 ? distanceTraveled / liters : null;
        return { previousOdometer, distanceTraveled, efficiency };
    }
    /**
     * Crear nuevo registro
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        // Calcular precio por litro si no se proporciona
        const pricePerLiter = data.price_per_liter || (data.cost / data.liters);
        // Calcular eficiencia si hay odómetro
        let efficiencyData = { previousOdometer: null, distanceTraveled: null, efficiency: null };
        if (data.odometer_reading && data.courier_id) {
            efficiencyData = await this.calculateEfficiency(data.courier_id, data.odometer_reading, data.liters, tenantId);
        }
        await database_1.default.execute(`INSERT INTO fuel_records (
                id, tenant_id, courier_id, vehicle_id, liters, cost, price_per_liter,
                odometer_reading, previous_odometer, distance_traveled, efficiency,
                station, receipt_url, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.courier_id || null,
            data.vehicle_id || null,
            data.liters,
            data.cost,
            pricePerLiter,
            data.odometer_reading || null,
            efficiencyData.previousOdometer,
            efficiencyData.distanceTraveled,
            efficiencyData.efficiency,
            data.station || null,
            data.receipt_url || null,
            data.notes || null
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar registro
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM fuel_records WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de combustible
     */
    static async getStats(tenantId, period) {
        let query = `
            SELECT 
                COALESCE(SUM(cost), 0) as totalCost,
                COALESCE(SUM(liters), 0) as totalLiters,
                COALESCE(AVG(efficiency), 0) as averageEfficiency,
                COUNT(*) as recordCount
            FROM fuel_records 
            WHERE tenant_id = ?
        `;
        const params = [tenantId];
        if (period?.startDate) {
            query += ' AND created_at >= ?';
            params.push(period.startDate);
        }
        if (period?.endDate) {
            query += ' AND created_at <= ?';
            params.push(period.endDate);
        }
        const [rows] = await database_1.default.execute(query, params);
        const stats = rows[0];
        return {
            totalCost: parseFloat(stats.totalCost) || 0,
            totalLiters: parseFloat(stats.totalLiters) || 0,
            averageEfficiency: parseFloat(stats.averageEfficiency) || 0,
            recordCount: stats.recordCount || 0
        };
    }
}
exports.FuelService = FuelService;
exports.default = FuelService;
//# sourceMappingURL=fuelService.js.map