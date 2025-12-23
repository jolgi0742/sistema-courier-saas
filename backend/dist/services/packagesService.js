"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesService = void 0;
// packagesService.ts - Servicio de paquetes multi-tenant
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
class PackagesService {
    /**
     * Generar número de tracking único
     */
    static generateTrackingNumber() {
        const prefix = 'SC';
        const timestamp = Date.now().toString(36).toUpperCase();
        const random = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `${prefix}${timestamp}${random}`;
    }
    /**
     * Crear nuevo paquete
     */
    static async create(input) {
        const id = (0, uuid_1.v4)();
        const tracking_number = this.generateTrackingNumber();
        await database_1.default.execute(`INSERT INTO packages (
        id, tenant_id, tracking_number, client_id,
        sender_name, sender_phone, recipient_name, recipient_phone,
        recipient_address, weight, dimensions, declared_value, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?)`, [
            id, input.tenant_id, tracking_number, input.client_id,
            input.sender_name, input.sender_phone, input.recipient_name, input.recipient_phone,
            input.recipient_address, input.weight, input.dimensions || null,
            input.declared_value || 0, input.notes || null
        ]);
        return (await this.getById(id, input.tenant_id));
    }
    /**
     * Obtener paquete por ID (con validación de tenant)
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM packages WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return rows[0] || null;
    }
    /**
     * Obtener paquete por tracking number
     */
    static async getByTracking(tracking, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM packages WHERE tracking_number = ? AND tenant_id = ?', [tracking, tenantId]);
        return rows[0] || null;
    }
    /**
     * Listar paquetes con filtros
     */
    static async getAll(filters) {
        let query = 'SELECT * FROM packages WHERE tenant_id = ?';
        let countQuery = 'SELECT COUNT(*) as total FROM packages WHERE tenant_id = ?';
        const params = [filters.tenant_id];
        if (filters.status) {
            query += ' AND status = ?';
            countQuery += ' AND status = ?';
            params.push(filters.status);
        }
        if (filters.client_id) {
            query += ' AND client_id = ?';
            countQuery += ' AND client_id = ?';
            params.push(filters.client_id);
        }
        if (filters.courier_id) {
            query += ' AND courier_id = ?';
            countQuery += ' AND courier_id = ?';
            params.push(filters.courier_id);
        }
        if (filters.search) {
            query += ' AND (tracking_number LIKE ? OR recipient_name LIKE ? OR sender_name LIKE ?)';
            countQuery += ' AND (tracking_number LIKE ? OR recipient_name LIKE ? OR sender_name LIKE ?)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }
        if (filters.date_from) {
            query += ' AND DATE(created_at) >= ?';
            countQuery += ' AND DATE(created_at) >= ?';
            params.push(filters.date_from);
        }
        if (filters.date_to) {
            query += ' AND DATE(created_at) <= ?';
            countQuery += ' AND DATE(created_at) <= ?';
            params.push(filters.date_to);
        }
        // Count total
        const [countRows] = await database_1.default.execute(countQuery, params);
        const total = countRows[0]?.total || 0;
        // Add pagination
        query += ' ORDER BY created_at DESC';
        if (filters.limit) {
            query += ` LIMIT ${filters.limit}`;
            if (filters.offset) {
                query += ` OFFSET ${filters.offset}`;
            }
        }
        const [rows] = await database_1.default.execute(query, params);
        return { packages: rows, total };
    }
    /**
     * Actualizar estado del paquete
     */
    static async updateStatus(id, tenantId, status) {
        await database_1.default.execute('UPDATE packages SET status = ?, updated_at = NOW() WHERE id = ? AND tenant_id = ?', [status, id, tenantId]);
        return this.getById(id, tenantId);
    }
    /**
     * Asignar courier a paquete
     */
    static async assignCourier(id, tenantId, courierId) {
        await database_1.default.execute(`UPDATE packages SET courier_id = ?, status = 'assigned', updated_at = NOW() 
       WHERE id = ? AND tenant_id = ?`, [courierId, id, tenantId]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar paquete
     */
    static async update(id, tenantId, data) {
        const allowedFields = ['recipient_name', 'recipient_phone', 'recipient_address',
            'weight', 'dimensions', 'declared_value', 'notes'];
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
        await database_1.default.execute(`UPDATE packages SET ${updates.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar paquete
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM packages WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Estadísticas de paquetes
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT status, COUNT(*) as count FROM packages 
       WHERE tenant_id = ? GROUP BY status`, [tenantId]);
        const stats = {
            total: 0,
            pending: 0,
            in_transit: 0,
            delivered: 0,
            cancelled: 0
        };
        for (const row of rows) {
            stats[row.status] = row.count;
            stats.total += row.count;
        }
        return stats;
    }
}
exports.PackagesService = PackagesService;
exports.default = PackagesService;
//# sourceMappingURL=packagesService.js.map