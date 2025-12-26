// expensesService.ts - Servicio para gestión de gastos recurrentes
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface RecurringExpense {
    id: string;
    tenant_id: string;
    name: string;
    category: string | null;
    amount: number;
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    next_due_date: string | null;
    status: 'active' | 'paused' | 'cancelled';
    notes: string | null;
    created_at: string;
    updated_at: string;
}

export class ExpensesService {
    /**
     * Obtener todos los gastos recurrentes
     */
    static async getAll(tenantId: string, filters?: {
        status?: string;
        category?: string;
    }): Promise<RecurringExpense[]> {
        let query = 'SELECT * FROM recurring_expenses WHERE tenant_id = ?';
        const params: any[] = [tenantId];

        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }

        if (filters?.category) {
            query += ' AND category = ?';
            params.push(filters.category);
        }

        query += ' ORDER BY next_due_date ASC, name ASC';

        const { rows } = await pool.query(query, params);
        return rows as RecurringExpense[];
    }

    /**
     * Obtener gasto por ID
     */
    static async getById(id: string, tenantId: string): Promise<RecurringExpense | null> {
        const { rows } = await pool.query(
            'SELECT * FROM recurring_expenses WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        const expenses = rows as RecurringExpense[];
        return expenses.length > 0 ? expenses[0] : null;
    }

    /**
     * Obtener gastos próximos a vencer
     */
    static async getUpcoming(tenantId: string, days: number = 30): Promise<RecurringExpense[]> {
        const { rows } = await pool.query(
            `SELECT * FROM recurring_expenses 
             WHERE tenant_id = $1 
             AND status = 'active'
             AND next_due_date IS NOT NULL
             AND next_due_date <= DATE_ADD(CURDATE(), INTERVAL $2 DAY)
             ORDER BY next_due_date ASC`,
            [tenantId, days]
        );
        return rows as RecurringExpense[];
    }

    /**
     * Crear nuevo gasto recurrente
     */
    static async create(data: Omit<RecurringExpense, 'id' | 'created_at' | 'updated_at'>, tenantId: string): Promise<RecurringExpense> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO recurring_expenses (
                id, tenant_id, name, category, amount, frequency, next_due_date, status, notes
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
                id,
                tenantId,
                data.name,
                data.category || null,
                data.amount,
                data.frequency,
                data.next_due_date || null,
                data.status || 'active',
                data.notes || null
            ]
        );

        return this.getById(id, tenantId) as Promise<RecurringExpense>;
    }

    /**
     * Actualizar gasto recurrente
     */
    static async update(id: string, data: Partial<RecurringExpense>, tenantId: string): Promise<RecurringExpense | null> {
        const fields: string[] = [];
        const values: any[] = [];

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

        await pool.query(
            `UPDATE recurring_expenses SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar gasto recurrente
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM recurring_expenses WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de gastos
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        active: number;
        paused: number;
        totalMonthly: number;
        totalYearly: number;
    }> {
        const { rows } = await pool.query(
            `SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'paused' THEN 1 ELSE 0 END) as paused
            FROM recurring_expenses WHERE tenant_id = $1`,
            [tenantId]
        );

        const stats = (rows as any[])[0];

        // Calcular total mensual y anual
        const { rows: amountRows } = await pool.query(
            `SELECT 
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
            WHERE tenant_id = $1 AND status = 'active'`,
            [tenantId]
        );

        const amounts = (amountRows as any[])[0];

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
    static async getCategories(tenantId: string): Promise<string[]> {
        const { rows } = await pool.query(
            'SELECT DISTINCT category FROM recurring_expenses WHERE tenant_id = ? AND category IS NOT NULL ORDER BY category',
            [tenantId]
        );
        return (rows as any[]).map(row => row.category);
    }
}

export default ExpensesService;
