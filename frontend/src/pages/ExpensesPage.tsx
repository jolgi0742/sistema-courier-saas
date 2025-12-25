// ExpensesPage.tsx - Página de gestión de gastos recurrentes
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { DollarSign, Calendar, AlertCircle, TrendingUp } from 'lucide-react';

interface Expense {
    id: string;
    name: string;
    category: string | null;
    amount: number;
    frequency: string;
    next_due_date: string | null;
    status: string;
    notes: string | null;
}

interface Stats {
    total: number;
    active: number;
    paused: number;
    totalMonthly: number;
    totalYearly: number;
}

const ExpensesPage: React.FC = () => {
    const { tenant } = useTenant();
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [upcoming, setUpcoming] = useState<Expense[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        if (tenant) {
            fetchExpenses();
            fetchUpcoming();
            fetchStats();
        }
    }, [tenant, filterStatus]);

    const fetchExpenses = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/expenses`;
            if (filterStatus) url += `?status=${filterStatus}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setExpenses(data.expenses || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUpcoming = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/expenses/upcoming?days=30`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setUpcoming(data.expenses || []);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchStats = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/expenses/stats`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getFrequencyLabel = (frequency: string) => {
        const labels: Record<string, string> = {
            'daily': 'Diario',
            'weekly': 'Semanal',
            'monthly': 'Mensual',
            'yearly': 'Anual'
        };
        return labels[frequency] || frequency;
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-CR', {
            style: 'currency',
            currency: 'CRC',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const getDaysUntil = (date: string) => {
        const today = new Date();
        const dueDate = new Date(date);
        const diffTime = dueDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="expenses-page">
            <div className="page-header">
                <div>
                    <h1>Gastos Recurrentes</h1>
                    <p>{expenses.length} gastos registrados</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <DollarSign size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Gastos</p>
                            <p className="stat-value">{stats.total}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <Calendar size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Activos</p>
                            <p className="stat-value">{stats.active}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <TrendingUp size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Mensual</p>
                            <p className="stat-value">{formatCurrency(stats.totalMonthly)}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#e0e7ff', color: '#4f46e5' }}>
                            <TrendingUp size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Anual</p>
                            <p className="stat-value">{formatCurrency(stats.totalYearly)}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Próximos vencimientos */}
            {upcoming.length > 0 && (
                <div className="upcoming-section">
                    <h2><AlertCircle size={20} /> Próximos Vencimientos (30 días)</h2>
                    <div className="upcoming-grid">
                        {upcoming.map((expense) => {
                            const daysUntil = getDaysUntil(expense.next_due_date!);
                            const isUrgent = daysUntil <= 7;
                            return (
                                <div key={expense.id} className={`upcoming-card ${isUrgent ? 'urgent' : ''}`}>
                                    <div className="upcoming-header">
                                        <strong>{expense.name}</strong>
                                        <span className="amount">{formatCurrency(expense.amount)}</span>
                                    </div>
                                    <div className="upcoming-body">
                                        <p className="due-date">
                                            Vence: {new Date(expense.next_due_date!).toLocaleDateString('es-CR')}
                                        </p>
                                        <p className="days-left">
                                            {daysUntil > 0 ? `${daysUntil} días` : 'Vencido'}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Filtros */}
            <div className="filters">
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="">Todos los estados</option>
                    <option value="active">Activos</option>
                    <option value="paused">Pausados</option>
                    <option value="cancelled">Cancelados</option>
                </select>
            </div>

            {/* Lista de gastos */}
            <div className="expenses-section">
                <h2>Todos los Gastos</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : expenses.length === 0 ? (
                    <div className="empty-state">
                        <DollarSign size={48} />
                        <h3>No hay gastos</h3>
                        <p>No se encontraron gastos con los filtros seleccionados</p>
                    </div>
                ) : (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Monto</th>
                                    <th>Frecuencia</th>
                                    <th>Próximo Vencimiento</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses.map((expense) => (
                                    <tr key={expense.id}>
                                        <td><strong>{expense.name}</strong></td>
                                        <td>{expense.category || '-'}</td>
                                        <td className="amount-cell">{formatCurrency(expense.amount)}</td>
                                        <td>{getFrequencyLabel(expense.frequency)}</td>
                                        <td>
                                            {expense.next_due_date
                                                ? new Date(expense.next_due_date).toLocaleDateString('es-CR')
                                                : '-'
                                            }
                                        </td>
                                        <td>
                                            <span className={`status-badge status-${expense.status}`}>
                                                {expense.status === 'active' ? 'Activo' : expense.status === 'paused' ? 'Pausado' : 'Cancelado'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style>{`
                .expenses-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .upcoming-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .upcoming-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px; }
                .upcoming-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
                .upcoming-card { background: #fef3c7; border-radius: 12px; padding: 16px; border-left: 4px solid #f59e0b; }
                .upcoming-card.urgent { background: #fee2e2; border-left-color: #ef4444; }
                .upcoming-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
                .upcoming-header strong { color: #1f2937; }
                .amount { font-weight: 700; color: #059669; }
                .upcoming-body { }
                .due-date { margin: 4px 0; font-size: 14px; color: #374151; }
                .days-left { margin: 4px 0; font-size: 13px; color: #6b7280; font-weight: 600; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .expenses-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .expenses-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                .amount-cell { font-weight: 700; color: #059669; }
                
                .status-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-active { background: #d1fae5; color: #065f46; }
                .status-badge.status-paused { background: #fef3c7; color: #92400e; }
                .status-badge.status-cancelled { background: #fee2e2; color: #991b1b; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default ExpensesPage;
