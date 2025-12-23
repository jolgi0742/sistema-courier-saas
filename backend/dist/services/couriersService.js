"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouriersService = void 0;
// couriersService.ts - Servicio de couriers multi-tenant
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
class CouriersService {
    /**
     * Crear nuevo courier
     */
    static async create(input) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO couriers (
        id, tenant_id, name, email, phone, vehicle_type, 
        vehicle_plate, zone, status, commission_rate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', ?)`, [
            id, input.tenant_id, input.name, input.email, input.phone,
            input.vehicle_type, input.vehicle_plate || null,
            input.zone || null, input.commission_rate || 10
        ]);
        return (await this.getById(id, input.tenant_id));
    }
    /**
     * Obtener courier por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM couriers WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return rows[0] || null;
    }
    /**
     * Listar couriers
     */
    static async getAll(tenantId, filters) {
        let query = 'SELECT * FROM couriers WHERE tenant_id = ?';
        const params = [tenantId];
        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }
        if (filters?.zone) {
            query += ' AND zone = ?';
            params.push(filters.zone);
        }
        if (filters?.search) {
            query += ' AND (name LIKE ? OR email LIKE ? OR phone LIKE ?)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }
        query += ' ORDER BY name ASC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener couriers disponibles para asignación
     */
    static async getAvailable(tenantId, zone) {
        let query = `SELECT * FROM couriers WHERE tenant_id = ? AND status = 'active'`;
        const params = [tenantId];
        if (zone) {
            query += ' AND (zone = ? OR zone IS NULL)';
            params.push(zone);
        }
        query += ' ORDER BY completed_deliveries ASC, rating DESC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Actualizar courier
     */
    static async update(id, tenantId, data) {
        const allowedFields = ['name', 'email', 'phone', 'vehicle_type',
            'vehicle_plate', 'zone', 'status', 'commission_rate'];
        const updates = [];
        const values = [];
        for (const field of allowedFields) {
            if (data[field] !== undefined) {
                updates.push(`${field} = ?`);
                values.push(data[field]);
            }
        }
        if (updates.length === 0)
            return this.getById(id, tenantId);
        updates.push('updated_at = NOW()');
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE couriers SET ${updates.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar estado
     */
    static async updateStatus(id, tenantId, status) {
        await database_1.default.execute('UPDATE couriers SET status = ?, updated_at = NOW() WHERE id = ? AND tenant_id = ?', [status, id, tenantId]);
        return this.getById(id, tenantId);
    }
    /**
     * Registrar entrega completada
     */
    static async recordDelivery(id, tenantId, commission) {
        await database_1.default.execute(`UPDATE couriers SET 
        completed_deliveries = completed_deliveries + 1,
        balance = balance + ?,
        status = 'active',
        updated_at = NOW()
       WHERE id = ? AND tenant_id = ?`, [commission, id, tenantId]);
    }
    /**
     * Pagar balance al courier
     */
    static async payBalance(id, tenantId, amount) {
        await database_1.default.execute(`UPDATE couriers SET balance = balance - ?, updated_at = NOW() 
       WHERE id = ? AND tenant_id = ? AND balance >= ?`, [amount, id, tenantId, amount]);
    }
    /**
     * Estadísticas de couriers
     */
    static async getStats(tenantId) {
        const [statusRows] = await database_1.default.execute(`SELECT status, COUNT(*) as count FROM couriers 
       WHERE tenant_id = ? GROUP BY status`, [tenantId]);
        const [topRows] = await database_1.default.execute(`SELECT id, name, completed_deliveries, rating FROM couriers 
       WHERE tenant_id = ? ORDER BY completed_deliveries DESC LIMIT 5`, [tenantId]);
        const stats = {
            total: 0,
            active: 0,
            on_delivery: 0,
            inactive: 0,
            top_couriers: topRows
        };
        for (const row of statusRows) {
            stats[row.status] = row.count;
            stats.total += row.count;
        }
        return stats;
    }
    /**
     * Eliminar courier
     */
    static async delete(id, tenantId) {
        // Solo eliminar si no tiene paquetes asignados
        const [packages] = await database_1.default.execute(`SELECT COUNT(*) as count FROM packages 
       WHERE courier_id = ? AND tenant_id = ? AND status NOT IN ('delivered', 'cancelled')`, [id, tenantId]);
        if (packages[0]?.count > 0) {
            throw new Error('No se puede eliminar courier con paquetes asignados');
        }
        const [result] = await database_1.default.execute('DELETE FROM couriers WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
}
exports.CouriersService = CouriersService;
exports.default = CouriersService;
//# sourceMappingURL=couriersService.js.map