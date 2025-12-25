"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesService = void 0;
// expensesService.ts - Servicio para gestión de gastos recurrentes
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class ExpensesService {
    /**
     * Obtener todos los gastos recurrentes
     */
    static async getAll(tenantId, filters) {
        let query = 'SELECT * FROM recurring_expenses WHERE tenant_id = ?';
        const params = [tenantId];
        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }
        if (filters?.category) {
            query += ' AND category = ?';
            params.push(filters.category);
        }
        query += ' ORDER BY next_due_date ASC, name ASC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener gasto por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM recurring_expenses WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        const expenses = rows;
        return expenses.length > 0 ? expenses[0] : null;
    }
    /**
     * Obtener gastos próximos a vencer
     */
    static async getUpcoming(tenantId, days = 30) {
        const [rows] = await database_1.default.execute(`SELECT * FROM recurring_expenses 
             WHERE tenant_id = ? 
             AND status = 'active'
             AND next_due_date IS NOT NULL
             AND next_due_date <= DATE_ADD(CURDATE(), INTERVAL ? DAY)
             ORDER BY next_due_date ASC`, [tenantId, days]);
        return rows;
    }
    /**
     * Crear nuevo gasto recurrente
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO recurring_expenses (
                id, tenant_id, name, category, amount, frequency, next_due_date, status, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.name,
            data.category || null,
            data.amount,
            data.frequency,
            data.next_due_date || null,
            data.status || 'active',
            data.notes || null
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar gasto recurrente
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.name !== undefined) {
            fields.push('name = ?');
            values.push(data.name);
        }
        if (data.category !== undefined) {
            fields.push('category = ?');
            values.push(data.category);
        }
        if (data.amount !== undefined) {
            fields.push('amount = ?');
            values.push(data.amount);
        }
        if (data.frequency !== undefined) {
            fields.push('frequency = ?');
            values.push(data.frequency);
        }
        if (data.next_due_date !== undefined) {
            fields.push('next_due_date = ?');
            values.push(data.next_due_date);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
        }
        if (data.notes !== undefined) {
            fields.push('notes = ?');
            values.push(data.notes);
        }
        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE recurring_expenses SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar gasto recurrente
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM recurring_expenses WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de gastos
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'paused' THEN 1 ELSE 0 END) as paused
            FROM recurring_expenses WHERE tenant_id = ?`, [tenantId]);
        const stats = rows[0];
        // Calcular total mensual y anual
        const [amountRows] = await database_1.default.execute(`SELECT 
                SUM(CASE 
                    WHEN frequency = 'daily' THEN amount * 30
                    WHEN frequency = 'weekly' THEN amount * 4
                    WHEN frequency = 'monthly' THEN amount
                    WHEN frequency = 'yearly' THEN amount / 12
                END) as totalMonthly,
                SUM(CASE 
                    WHEN frequency = 'daily' THEN amount * 365
                    WHEN frequency = 'weekly' THEN amount * 52
                    WHEN frequency = 'monthly' THEN amount * 12
                    WHEN frequency = 'yearly' THEN amount
                END) as totalYearly
            FROM recurring_expenses 
            WHERE tenant_id = ? AND status = 'active'`, [tenantId]);
        const amounts = amountRows[0];
        return {
            total: stats.total || 0,
            active: stats.active || 0,
            paused: stats.paused || 0,
            totalMonthly: amounts.totalMonthly || 0,
            totalYearly: amounts.totalYearly || 0
        };
    }
    /**
     * Obtener categorías únicas
     */
    static async getCategories(tenantId) {
        const [rows] = await database_1.default.execute('SELECT DISTINCT category FROM recurring_expenses WHERE tenant_id = ? AND category IS NOT NULL ORDER BY category', [tenantId]);
        return rows.map(row => row.category);
    }
}
exports.ExpensesService = ExpensesService;
exports.default = ExpensesService;
//# sourceMappingURL=expensesService.js.map