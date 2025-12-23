"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
// clientsService.ts - Servicio de clientes multi-tenant
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
class ClientsService {
    /**
     * Crear nuevo cliente
     */
    static async create(input) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO clients (
        id, tenant_id, name, email, phone, company_name, 
        address, city, country, tax_id, credit_limit, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')`, [
            id, input.tenant_id, input.name, input.email, input.phone,
            input.company_name || null, input.address || null,
            input.city || null, input.country || 'CR',
            input.tax_id || null, input.credit_limit || 0
        ]);
        return (await this.getById(id, input.tenant_id));
    }
    /**
     * Obtener cliente por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM clients WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return rows[0] || null;
    }
    /**
     * Obtener cliente por email
     */
    static async getByEmail(email, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM clients WHERE email = ? AND tenant_id = ?', [email, tenantId]);
        return rows[0] || null;
    }
    /**
     * Listar clientes
     */
    static async getAll(tenantId, filters) {
        let query = 'SELECT * FROM clients WHERE tenant_id = ?';
        let countQuery = 'SELECT COUNT(*) as total FROM clients WHERE tenant_id = ?';
        const params = [tenantId];
        if (filters?.status) {
            query += ' AND status = ?';
            countQuery += ' AND status = ?';
            params.push(filters.status);
        }
        if (filters?.search) {
            query += ' AND (name LIKE ? OR email LIKE ? OR company_name LIKE ? OR phone LIKE ?)';
            countQuery += ' AND (name LIKE ? OR email LIKE ? OR company_name LIKE ? OR phone LIKE ?)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm, searchTerm);
        }
        // Count
        const [countRows] = await database_1.default.execute(countQuery, params);
        const total = countRows[0]?.total || 0;
        // Results
        query += ' ORDER BY name ASC';
        if (filters?.limit) {
            query += ` LIMIT ${filters.limit}`;
            if (filters.offset) {
                query += ` OFFSET ${filters.offset}`;
            }
        }
        const [rows] = await database_1.default.execute(query, params);
        return { clients: rows, total };
    }
    /**
     * Actualizar cliente
     */
    static async update(id, tenantId, data) {
        const allowedFields = ['name', 'email', 'phone', 'company_name',
            'address', 'city', 'country', 'tax_id',
            'credit_limit', 'status'];
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
        await database_1.default.execute(`UPDATE clients SET ${updates.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar balance de crédito
     */
    static async updateCreditBalance(id, tenantId, amount) {
        await database_1.default.execute(`UPDATE clients SET credit_balance = credit_balance + ?, updated_at = NOW() 
       WHERE id = ? AND tenant_id = ?`, [amount, id, tenantId]);
    }
    /**
     * Incrementar contador de paquetes
     */
    static async incrementPackages(id, tenantId) {
        await database_1.default.execute(`UPDATE clients SET total_packages = total_packages + 1, updated_at = NOW() 
       WHERE id = ? AND tenant_id = ?`, [id, tenantId]);
    }
    /**
     * Obtener paquetes del cliente
     */
    static async getPackages(id, tenantId, limit = 50) {
        const [rows] = await database_1.default.execute(`SELECT * FROM packages WHERE client_id = ? AND tenant_id = ? 
       ORDER BY created_at DESC LIMIT ?`, [id, tenantId, limit]);
        return rows;
    }
    /**
     * Estadísticas de clientes
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
        SUM(total_packages) as total_packages,
        SUM(credit_balance) as total_credit
       FROM clients WHERE tenant_id = ?`, [tenantId]);
        const [topRows] = await database_1.default.execute(`SELECT id, name, company_name, total_packages FROM clients 
       WHERE tenant_id = ? ORDER BY total_packages DESC LIMIT 5`, [tenantId]);
        return {
            ...rows[0],
            top_clients: topRows
        };
    }
    /**
     * Eliminar cliente
     */
    static async delete(id, tenantId) {
        // Solo eliminar si no tiene paquetes
        const [packages] = await database_1.default.execute('SELECT COUNT(*) as count FROM packages WHERE client_id = ? AND tenant_id = ?', [id, tenantId]);
        if (packages[0]?.count > 0) {
            // Desactivar en lugar de eliminar
            await this.update(id, tenantId, { status: 'inactive' });
            return true;
        }
        const [result] = await database_1.default.execute('DELETE FROM clients WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
}
exports.ClientsService = ClientsService;
exports.default = ClientsService;
//# sourceMappingURL=clientsService.js.map