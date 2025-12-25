"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersService = void 0;
// suppliersService.ts - Servicio para gestión de proveedores
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class SuppliersService {
    /**
     * Obtener todos los proveedores
     */
    static async getAll(tenantId, filters) {
        let query = 'SELECT * FROM suppliers WHERE tenant_id = ?';
        const params = [tenantId];
        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }
        if (filters?.category) {
            query += ' AND category = ?';
            params.push(filters.category);
        }
        if (filters?.search) {
            query += ' AND (name LIKE ? OR contact_name LIKE ? OR email LIKE ?)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }
        query += ' ORDER BY name ASC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener proveedor por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM suppliers WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        const suppliers = rows;
        return suppliers.length > 0 ? suppliers[0] : null;
    }
    /**
     * Crear nuevo proveedor
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO suppliers (
                id, tenant_id, name, contact_name, phone, email, 
                address, city, state, postal_code, category, notes, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.name,
            data.contact_name || null,
            data.phone || null,
            data.email || null,
            data.address || null,
            data.city || null,
            data.state || null,
            data.postal_code || null,
            data.category || null,
            data.notes || null,
            data.status || 'active'
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar proveedor
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.name !== undefined) {
            fields.push('name = ?');
            values.push(data.name);
        }
        if (data.contact_name !== undefined) {
            fields.push('contact_name = ?');
            values.push(data.contact_name);
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
        if (data.category !== undefined) {
            fields.push('category = ?');
            values.push(data.category);
        }
        if (data.notes !== undefined) {
            fields.push('notes = ?');
            values.push(data.notes);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
        }
        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE suppliers SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar proveedor
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM suppliers WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de proveedores
     */
    static async getStats(tenantId) {
        const [countRows] = await database_1.default.execute(`SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'inactive' THEN 1 ELSE 0 END) as inactive
            FROM suppliers WHERE tenant_id = ?`, [tenantId]);
        const stats = countRows[0];
        const [categoryRows] = await database_1.default.execute(`SELECT category, COUNT(*) as count 
             FROM suppliers 
             WHERE tenant_id = ? AND category IS NOT NULL
             GROUP BY category
             ORDER BY count DESC`, [tenantId]);
        return {
            total: stats.total || 0,
            active: stats.active || 0,
            inactive: stats.inactive || 0,
            byCategory: categoryRows
        };
    }
    /**
     * Obtener categorías únicas
     */
    static async getCategories(tenantId) {
        const [rows] = await database_1.default.execute('SELECT DISTINCT category FROM suppliers WHERE tenant_id = ? AND category IS NOT NULL ORDER BY category', [tenantId]);
        return rows.map(row => row.category);
    }
}
exports.SuppliersService = SuppliersService;
exports.default = SuppliersService;
//# sourceMappingURL=suppliersService.js.map