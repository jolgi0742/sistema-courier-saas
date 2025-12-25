"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceService = void 0;
// maintenanceService.ts - Servicio para gestión de mantenimiento de vehículos
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class MaintenanceService {
    /**
     * Obtener todos los mantenimientos
     */
    static async getAll(tenantId, filters) {
        let query = `
            SELECT 
                m.*,
                v.plate as vehicle_plate,
                v.brand as vehicle_brand,
                v.model as vehicle_model
            FROM vehicle_maintenance m
            LEFT JOIN vehicles v ON m.vehicle_id = v.id
            WHERE m.tenant_id = ?
        `;
        const params = [tenantId];
        if (filters?.vehicleId) {
            query += ' AND m.vehicle_id = ?';
            params.push(filters.vehicleId);
        }
        if (filters?.status) {
            query += ' AND m.status = ?';
            params.push(filters.status);
        }
        if (filters?.type) {
            query += ' AND m.type = ?';
            params.push(filters.type);
        }
        query += ' ORDER BY m.created_at DESC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener mantenimiento por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                m.*,
                v.plate as vehicle_plate,
                v.brand as vehicle_brand,
                v.model as vehicle_model
            FROM vehicle_maintenance m
            LEFT JOIN vehicles v ON m.vehicle_id = v.id
            WHERE m.id = ? AND m.tenant_id = ?`, [id, tenantId]);
        const records = rows;
        return records.length > 0 ? records[0] : null;
    }
    /**
     * Obtener mantenimientos por vehículo
     */
    static async getByVehicle(vehicleId, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM vehicle_maintenance WHERE vehicle_id = ? AND tenant_id = ? ORDER BY created_at DESC', [vehicleId, tenantId]);
        return rows;
    }
    /**
     * Obtener mantenimientos próximos a vencer
     */
    static async getUpcoming(tenantId, days = 30) {
        const [rows] = await database_1.default.execute(`SELECT 
                m.*,
                v.plate as vehicle_plate,
                v.brand as vehicle_brand,
                v.model as vehicle_model
            FROM vehicle_maintenance m
            LEFT JOIN vehicles v ON m.vehicle_id = v.id
            WHERE m.tenant_id = ? 
            AND m.status = 'scheduled'
            AND m.next_service_date IS NOT NULL
            AND m.next_service_date <= DATE_ADD(CURDATE(), INTERVAL ? DAY)
            ORDER BY m.next_service_date ASC`, [tenantId, days]);
        return rows;
    }
    /**
     * Crear nuevo mantenimiento
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO vehicle_maintenance (
                id, tenant_id, vehicle_id, type, description, cost, provider,
                odometer_reading, next_service_date, next_service_odometer, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.vehicle_id,
            data.type,
            data.description,
            data.cost || null,
            data.provider || null,
            data.odometer_reading || null,
            data.next_service_date || null,
            data.next_service_odometer || null,
            data.status || 'scheduled'
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar mantenimiento
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.type !== undefined) {
            fields.push('type = ?');
            values.push(data.type);
        }
        if (data.description !== undefined) {
            fields.push('description = ?');
            values.push(data.description);
        }
        if (data.cost !== undefined) {
            fields.push('cost = ?');
            values.push(data.cost);
        }
        if (data.provider !== undefined) {
            fields.push('provider = ?');
            values.push(data.provider);
        }
        if (data.odometer_reading !== undefined) {
            fields.push('odometer_reading = ?');
            values.push(data.odometer_reading);
        }
        if (data.next_service_date !== undefined) {
            fields.push('next_service_date = ?');
            values.push(data.next_service_date);
        }
        if (data.next_service_odometer !== undefined) {
            fields.push('next_service_odometer = ?');
            values.push(data.next_service_odometer);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
        }
        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE vehicle_maintenance SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Completar mantenimiento
     */
    static async complete(id, tenantId) {
        await database_1.default.execute(`UPDATE vehicle_maintenance 
             SET status = 'completed', completed_at = NOW()
             WHERE id = ? AND tenant_id = ?`, [id, tenantId]);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar mantenimiento
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM vehicle_maintenance WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de mantenimiento
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'scheduled' THEN 1 ELSE 0 END) as scheduled,
                SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as inProgress,
                SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
                SUM(CASE WHEN status = 'scheduled' AND next_service_date <= DATE_ADD(CURDATE(), INTERVAL 30 DAY) THEN 1 ELSE 0 END) as upcoming
            FROM vehicle_maintenance WHERE tenant_id = ?`, [tenantId]);
        const stats = rows[0];
        return {
            total: stats.total || 0,
            scheduled: stats.scheduled || 0,
            inProgress: stats.inProgress || 0,
            completed: stats.completed || 0,
            upcoming: stats.upcoming || 0
        };
    }
}
exports.MaintenanceService = MaintenanceService;
exports.default = MaintenanceService;
//# sourceMappingURL=maintenanceService.js.map