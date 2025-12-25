"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatesService = void 0;
// ratesService.ts - Servicio para gestión de tarifas
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class RatesService {
    /**
     * Obtener todas las tarifas del tenant
     */
    static async getAll(tenantId, activeOnly = false) {
        let query = 'SELECT * FROM rates WHERE tenant_id = ?';
        const params = [tenantId];
        if (activeOnly) {
            query += ' AND active = true';
        }
        query += ' ORDER BY zone, service_type, min_weight';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener tarifa por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM rates WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        const rates = rows;
        return rates.length > 0 ? rates[0] : null;
    }
    /**
     * Crear nueva tarifa
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO rates (
                id, tenant_id, name, description, zone, min_weight, max_weight,
                base_price, price_per_kg, service_type, active
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.name,
            data.description || null,
            data.zone || null,
            data.min_weight,
            data.max_weight || null,
            data.base_price,
            data.price_per_kg,
            data.service_type,
            data.active !== undefined ? data.active : true
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar tarifa
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.name !== undefined) {
            fields.push('name = ?');
            values.push(data.name);
        }
        if (data.description !== undefined) {
            fields.push('description = ?');
            values.push(data.description);
        }
        if (data.zone !== undefined) {
            fields.push('zone = ?');
            values.push(data.zone);
        }
        if (data.min_weight !== undefined) {
            fields.push('min_weight = ?');
            values.push(data.min_weight);
        }
        if (data.max_weight !== undefined) {
            fields.push('max_weight = ?');
            values.push(data.max_weight);
        }
        if (data.base_price !== undefined) {
            fields.push('base_price = ?');
            values.push(data.base_price);
        }
        if (data.price_per_kg !== undefined) {
            fields.push('price_per_kg = ?');
            values.push(data.price_per_kg);
        }
        if (data.service_type !== undefined) {
            fields.push('service_type = ?');
            values.push(data.service_type);
        }
        if (data.active !== undefined) {
            fields.push('active = ?');
            values.push(data.active);
        }
        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE rates SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar tarifa
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM rates WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Calcular tarifa para un paquete
     */
    static async calculateRate(zone, weight, serviceType, tenantId) {
        // Buscar tarifa que coincida con zona, peso y tipo de servicio
        const [rows] = await database_1.default.execute(`SELECT * FROM rates 
             WHERE tenant_id = ? 
             AND zone = ? 
             AND service_type = ?
             AND active = true
             AND min_weight <= ?
             AND (max_weight IS NULL OR max_weight >= ?)
             ORDER BY base_price ASC
             LIMIT 1`, [tenantId, zone, serviceType, weight, weight]);
        const rates = rows;
        if (rates.length === 0) {
            return { rate: null, totalPrice: 0 };
        }
        const rate = rates[0];
        // Calcular precio total
        const totalPrice = rate.base_price + (weight * rate.price_per_kg);
        return { rate, totalPrice };
    }
    /**
     * Obtener zonas disponibles
     */
    static async getZones(tenantId) {
        const [rows] = await database_1.default.execute('SELECT DISTINCT zone FROM rates WHERE tenant_id = ? AND zone IS NOT NULL ORDER BY zone', [tenantId]);
        return rows.map(row => row.zone);
    }
}
exports.RatesService = RatesService;
exports.default = RatesService;
//# sourceMappingURL=ratesService.js.map