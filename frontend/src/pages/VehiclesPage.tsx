// VehiclesPage.tsx - Página de gestión de vehículos
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Truck, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface Vehicle {
    id: string;
    plate: string;
    brand: string | null;
    model: string | null;
    year: number | null;
    type: string | null;
    assigned_to: string | null;
    courier_name: string | null;
    status: string;
    created_at: string;
}

interface Stats {
    total: number;
    active: number;
    maintenance: number;
    inactive: number;
}

const VehiclesPage: React.FC = () => {
    const { tenant } = useTenant();
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        if (tenant) {
            fetchVehicles();
            fetchStats();
        }
    }, [tenant, filterStatus]);

    const fetchVehicles = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/vehicles`;
            if (filterStatus) url += `?status=${filterStatus}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setVehicles(data.vehicles || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/vehicles/stats`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'active': return <CheckCircle size={20} />;
            case 'maintenance': return <AlertCircle size={20} />;
            case 'inactive': return <XCircle size={20} />;
            default: return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return '#10b981';
            case 'maintenance': return '#f59e0b';
            case 'inactive': return '#ef4444';
            default: return '#6b7280';
        }
    };

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            'active': 'Activo',
            'maintenance': 'Mantenimiento',
            'inactive': 'Inactivo'
        };
        return labels[status] || status;
    };

    return (
        <div className="vehicles-page">
            <div className="page-header">
                <div>
                    <h1>Vehículos</h1>
                    <p>{vehicles.length} vehículos registrados</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <CheckCircle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Activos</p>
                            <p className="stat-value">{stats.active}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <AlertCircle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">En Mantenimiento</p>
                            <p className="stat-value">{stats.maintenance}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                            <XCircle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Inactivos</p>
                            <p className="stat-value">{stats.inactive}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Truck size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total</p>
                            <p className="stat-value">{stats.total}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Filtros */}
            <div className="filters">
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="">Todos los estados</option>
                    <option value="active">Activos</option>
                    <option value="maintenance">En Mantenimiento</option>
                    <option value="inactive">Inactivos</option>
                </select>
            </div>

            {/* Lista de vehículos */}
            <div className="vehicles-grid">
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : vehicles.length === 0 ? (
                    <div className="empty-state">
                        <Truck size={48} />
                        <h3>No hay vehículos</h3>
                        <p>No se encontraron vehículos con los filtros seleccionados</p>
                    </div>
                ) : (
                    vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="vehicle-card">
                            <div className="vehicle-header">
                                <div className="vehicle-icon" style={{ color: getStatusColor(vehicle.status) }}>
                                    {getStatusIcon(vehicle.status)}
                                </div>
                                <div className="vehicle-plate">{vehicle.plate}</div>
                            </div>
                            <div className="vehicle-body">
                                <h3>{vehicle.brand} {vehicle.model}</h3>
                                <div className="vehicle-details">
                                    {vehicle.year && <span>Año: {vehicle.year}</span>}
                                    {vehicle.type && <span>Tipo: {vehicle.type}</span>}
                                </div>
                                {vehicle.courier_name && (
                                    <div className="vehicle-assigned">
                                        Asignado a: {vehicle.courier_name}
                                    </div>
                                )}
                            </div>
                            <div className="vehicle-footer">
                                <span
                                    className="status-badge"
                                    style={{
                                        backgroundColor: `${getStatusColor(vehicle.status)}20`,
                                        color: getStatusColor(vehicle.status)
                                    }}
                                >
                                    {getStatusLabel(vehicle.status)}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <style>{`
                .vehicles-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .vehicles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
                .vehicle-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: transform 0.2s; }
                .vehicle-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .vehicle-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
                .vehicle-icon { display: flex; align-items: center; }
                .vehicle-plate { font-size: 20px; font-weight: 700; color: #1f2937; }
                
                .vehicle-body h3 { font-size: 16px; font-weight: 600; color: #374151; margin: 0 0 8px 0; }
                .vehicle-details { display: flex; flex-direction: column; gap: 4px; font-size: 14px; color: #6b7280; margin-bottom: 8px; }
                .vehicle-assigned { font-size: 13px; color: #059669; font-weight: 500; }
                
                .vehicle-footer { margin-top: 16px; padding-top: 16px; border-top: 1px solid #f3f4f6; }
                .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; grid-column: 1 / -1; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default VehiclesPage;
