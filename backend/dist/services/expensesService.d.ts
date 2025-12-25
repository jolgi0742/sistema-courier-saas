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
export declare class ExpensesService {
    /**
     * Obtener todos los gastos recurrentes
     */
    static getAll(tenantId: string, filters?: {
        status?: string;
        category?: string;
    }): Promise<RecurringExpense[]>;
    /**
     * Obtener gasto por ID
     */
    static getById(id: string, tenantId: string): Promise<RecurringExpense | null>;
    /**
     * Obtener gastos próximos a vencer
     */
    static getUpcoming(tenantId: string, days?: number): Promise<RecurringExpense[]>;
    /**
     * Crear nuevo gasto recurrente
     */
    static create(data: Omit<RecurringExpense, 'id' | 'created_at' | 'updated_at'>, tenantId: string): Promise<RecurringExpense>;
    /**
     * Actualizar gasto recurrente
     */
    static update(id: string, data: Partial<RecurringExpense>, tenantId: string): Promise<RecurringExpense | null>;
    /**
     * Eliminar gasto recurrente
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de gastos
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        active: number;
        paused: number;
        totalMonthly: number;
        totalYearly: number;
    }>;
    /**
     * Obtener categorías únicas
     */
    static getCategories(tenantId: string): Promise<string[]>;
}
export default ExpensesService;
//# sourceMappingURL=expensesService.d.ts.map