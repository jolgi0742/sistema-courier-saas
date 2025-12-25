// MaintenancePage.tsx - Página de gestión de mantenimiento
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Wrench, Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface Maintenance {
    id: string;
    vehicle_id: string;
    vehicle_plate: string;
    vehicle_brand: string | null;
    vehicle_model: string | null;
    type: string;
    description: string;
    cost: number | null;
    provider: string | null;
    next_service_date: string | null;
    status: string;
    created_at: string;
}

interface Stats {
    total: number;
    scheduled: number;
    inProgress: number;
    completed: number;
    upcoming: number;
}

const MaintenancePage: React.FC = () => {
    const { tenant } = useTenant();
    const [records, setRecords] = useState<Maintenance[]>([]);
    const [upcoming, setUpcoming] = useState<Maintenance[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        if (tenant) {
            fetchRecords();
            fetchUpcoming();
            fetchStats();
        }
    }, [tenant, filterStatus]);

    const fetchRecords = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/maintenance`;
            if (filterStatus) url += `?status=${filterStatus}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setRecords(data.records || []);
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
            const response = await fetch(`${apiUrl}/api/maintenance/upcoming?days=30`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setUpcoming(data.records || []);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchStats = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/maintenance/stats`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            'preventive': 'Preventivo',
            'corrective': 'Correctivo',
            'inspection': 'Inspección'
        };
        return labels[type] || type;
    };

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            'scheduled': 'Programado',
            'in_progress': 'En Progreso',
            'completed': 'Completado'
        };
        return labels[status] || status;
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'scheduled': return <Calendar size={16} />;
            case 'in_progress': return <Clock size={16} />;
            case 'completed': return <CheckCircle size={16} />;
            default: return null;
        }
    };

    const getDaysUntil = (date: string) => {
        const today = new Date();
        const serviceDate = new Date(date);
        const diffTime = serviceDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="maintenance-page">
            <div className="page-header">
                <div>
                    <h1>Mantenimiento de Vehículos</h1>
                    <p>{records.length} registros de mantenimiento</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Calendar size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Programados</p>
                            <p className="stat-value">{stats.scheduled}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <Clock size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">En Progreso</p>
                            <p className="stat-value">{stats.inProgress}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <CheckCircle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Completados</p>
                            <p className="stat-value">{stats.completed}</p>
                        </div>
                    </div>
                    <div className="stat-card alert">
                        <div className="stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Próximos 30 días</p>
                            <p className="stat-value">{stats.upcoming}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Alertas de próximos servicios */}
            {upcoming.length > 0 && (
                <div className="upcoming-section">
                    <h2>⚠️ Próximos Servicios (30 días)</h2>
                    <div className="upcoming-list">
                        {upcoming.map((record) => {
                            const daysUntil = getDaysUntil(record.next_service_date!);
                            return (
                                <div key={record.id} className={`upcoming-card ${daysUntil <= 7 ? 'urgent' : ''}`}>
                                    <div className="upcoming-header">
                                        <span className="vehicle-info">
                                            {record.vehicle_plate} - {record.vehicle_brand} {record.vehicle_model}
                                        </span>
                                        <span className={`days-badge ${daysUntil <= 7 ? 'urgent' : ''}`}>
                                            {daysUntil <= 0 ? 'Vencido' : `${daysUntil} días`}
                                        </span>
                                    </div>
                                    <div className="upcoming-body">
                                        <p>{record.description}</p>
                                        <span className="type-badge">{getTypeLabel(record.type)}</span>
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
                    <option value="scheduled">Programados</option>
                    <option value="in_progress">En Progreso</option>
                    <option value="completed">Completados</option>
                </select>
            </div>

            {/* Lista de mantenimientos */}
            <div className="records-list">
                <h2>Historial de Mantenimientos</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : records.length === 0 ? (
                    <div className="empty-state">
                        <Wrench size={48} />
                        <h3>No hay registros</h3>
                        <p>No se encontraron mantenimientos con los filtros seleccionados</p>
                    </div>
                ) : (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Vehículo</th>
                                    <th>Tipo</th>
                                    <th>Descripción</th>
                                    <th>Costo</th>
                                    <th>Proveedor</th>
                                    <th>Próximo Servicio</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((record) => (
                                    <tr key={record.id}>
                                        <td>{new Date(record.created_at).toLocaleDateString('es-CR')}</td>
                                        <td>
                                            <strong>{record.vehicle_plate}</strong>
                                            <br />
                                            <small>{record.vehicle_brand} {record.vehicle_model}</small>
                                        </td>
                                        <td>{getTypeLabel(record.type)}</td>
                                        <td>{record.description}</td>
                                        <td>{record.cost ? `₡${record.cost.toLocaleString()}` : '-'}</td>
                                        <td>{record.provider || '-'}</td>
                                        <td>
                                            {record.next_service_date ? (
                                                new Date(record.next_service_date).toLocaleDateString('es-CR')
                                            ) : '-'}
                                        </td>
                                        <td>
                                            <span className={`status-badge status-${record.status}`}>
                                                {getStatusIcon(record.status)}
                                                {getStatusLabel(record.status)}
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
                .maintenance-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-card.alert { border: 2px solid #fee2e2; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .upcoming-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .upcoming-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .upcoming-list { display: flex; flex-direction: column; gap: 12px; }
                .upcoming-card { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 8px; }
                .upcoming-card.urgent { background: #fee2e2; border-left-color: #dc2626; }
                .upcoming-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
                .vehicle-info { font-weight: 600; color: #1f2937; }
                .days-badge { padding: 4px 12px; background: white; border-radius: 12px; font-size: 12px; font-weight: 600; color: #d97706; }
                .days-badge.urgent { color: #dc2626; }
                .upcoming-body p { margin: 0 0 8px 0; color: #374151; font-size: 14px; }
                .type-badge { padding: 4px 12px; background: white; border-radius: 12px; font-size: 12px; font-weight: 600; color: #6b7280; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .records-list { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .records-list h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                td small { color: #6b7280; font-size: 12px; }
                tbody tr:hover { background: #f9fafb; }
                
                .status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-scheduled { background: #dbeafe; color: #2563eb; }
                .status-badge.status-in_progress { background: #fef3c7; color: #d97706; }
                .status-badge.status-completed { background: #d1fae5; color: #065f46; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default MaintenancePage;
