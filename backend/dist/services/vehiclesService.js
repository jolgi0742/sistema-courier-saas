"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
// vehiclesService.ts - Servicio para gestión de vehículos
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class VehiclesService {
    /**
     * Obtener todos los vehículos
     */
    static async getAll(tenantId, filters) {
        let query = `
            SELECT 
                v.*,
                c.name as courier_name
            FROM vehicles v
            LEFT JOIN couriers c ON v.assigned_to = c.id
            WHERE v.tenant_id = ?
        `;
        const params = [tenantId];
        if (filters?.status) {
            query += ' AND v.status = ?';
            params.push(filters.status);
        }
        query += ' ORDER BY v.created_at DESC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener vehículo por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                v.*,
                c.name as courier_name
            FROM vehicles v
            LEFT JOIN couriers c ON v.assigned_to = c.id
            WHERE v.id = ? AND v.tenant_id = ?`, [id, tenantId]);
        const vehicles = rows;
        return vehicles.length > 0 ? vehicles[0] : null;
    }
    /**
     * Crear nuevo vehículo
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO vehicles (
                id, tenant_id, plate, brand, model, year, type, assigned_to, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.plate,
            data.brand || null,
            data.model || null,
            data.year || null,
            data.type || null,
            data.assigned_to || null,
            data.status || 'active'
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar vehículo
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.plate !== undefined) {
            fields.push('plate = ?');
            values.push(data.plate);
        }
        if (data.brand !== undefined) {
            fields.push('brand = ?');
            values.push(data.brand);
        }
        if (data.model !== undefined) {
            fields.push('model = ?');
            values.push(data.model);
        }
        if (data.year !== undefined) {
            fields.push('year = ?');
            values.push(data.year);
        }
        if (data.type !== undefined) {
            fields.push('type = ?');
            values.push(data.type);
        }
        if (data.assigned_to !== undefined) {
            fields.push('assigned_to = ?');
            values.push(data.assigned_to);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
        }
        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE vehicles SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar vehículo
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM vehicles WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de vehículos
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'maintenance' THEN 1 ELSE 0 END) as maintenance,
                SUM(CASE WHEN status = 'inactive' THEN 1 ELSE 0 END) as inactive
            FROM vehicles WHERE tenant_id = ?`, [tenantId]);
        const stats = rows[0];
        return {
            total: stats.total || 0,
            active: stats.active || 0,
            maintenance: stats.maintenance || 0,
            inactive: stats.inactive || 0
        };
    }
}
exports.VehiclesService = VehiclesService;
exports.default = VehiclesService;
//# sourceMappingURL=vehiclesService.js.map