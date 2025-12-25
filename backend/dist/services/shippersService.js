"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippersService = void 0;
// shippersService.ts - Servicio para gestión de remitentes frecuentes
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class ShippersService {
    /**
     * Obtener todos los remitentes frecuentes
     */
    static async getAll(tenantId, search) {
        let query = 'SELECT * FROM frequent_shippers WHERE tenant_id = ?';
        const params = [tenantId];
        if (search) {
            query += ' AND (name LIKE ? OR phone LIKE ? OR email LIKE ?)';
            const searchTerm = `%${search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }
        query += ' ORDER BY total_shipments DESC, name ASC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener remitente por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM frequent_shippers WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        const shippers = rows;
        return shippers.length > 0 ? shippers[0] : null;
    }
    /**
     * Buscar remitente por nombre, teléfono o email
     */
    static async search(query, tenantId) {
        const searchTerm = `%${query}%`;
        const [rows] = await database_1.default.execute(`SELECT * FROM frequent_shippers 
             WHERE tenant_id = ? 
             AND (name LIKE ? OR phone LIKE ? OR email LIKE ?)
             ORDER BY total_shipments DESC
             LIMIT 10`, [tenantId, searchTerm, searchTerm, searchTerm]);
        return rows;
    }
    /**
     * Crear nuevo remitente frecuente
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO frequent_shippers (
                id, tenant_id, name, phone, email, address, city, state, postal_code
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.name,
            data.phone || null,
            data.email || null,
            data.address || null,
            data.city || null,
            data.state || null,
            data.postal_code || null
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar remitente frecuente
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.name !== undefined) {
            fields.push('name = ?');
            values.push(data.name);
        }
        if (data.phone !== undefined) {
            fields.push('phone = ?');
            values.push(data.phone);
        }
        if (data.email !== undefined) {
            fields.push('email = ?');
            values.push(data.email);
        }
        if (data.address !== undefined) {
            fields.push('address = ?');
            values.push(data.address);
        }
        if (data.city !== undefined) {
            fields.push('city = ?');
            values.push(data.city);
        }
        if (data.state !== undefined) {
            fields.push('state = ?');
            values.push(data.state);
        }
        if (data.postal_code !== undefined) {
            fields.push('postal_code = ?');
            values.push(data.postal_code);
        }
        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE frequent_shippers SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar remitente frecuente
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM frequent_shippers WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Incrementar contador de envíos
     */
    static async incrementShipments(id, tenantId) {
        await database_1.default.execute('UPDATE frequent_shippers SET total_shipments = total_shipments + 1 WHERE id = ? AND tenant_id = ?', [id, tenantId]);
    }
    /**
     * Obtener estadísticas de remitentes
     */
    static async getStats(tenantId) {
        const [countRows] = await database_1.default.execute('SELECT COUNT(*) as total, SUM(total_shipments) as totalShipments FROM frequent_shippers WHERE tenant_id = ?', [tenantId]);
        const stats = countRows[0];
        const [topRows] = await database_1.default.execute('SELECT * FROM frequent_shippers WHERE tenant_id = ? ORDER BY total_shipments DESC LIMIT 5', [tenantId]);
        return {
            total: stats.total || 0,
            totalShipments: stats.totalShipments || 0,
            topShippers: topRows
        };
    }
}
exports.ShippersService = ShippersService;
exports.default = ShippersService;
//# sourceMappingURL=shippersService.js.map