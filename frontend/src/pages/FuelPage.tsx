// FuelPage.tsx - Página de control de combustible
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Fuel, TrendingUp, DollarSign, Droplet } from 'lucide-react';

interface FuelRecord {
    id: string;
    courier_id: string | null;
    courier_name: string | null;
    liters: number;
    cost: number;
    price_per_liter: number | null;
    odometer_reading: number | null;
    distance_traveled: number | null;
    efficiency: number | null;
    station: string | null;
    created_at: string;
}

interface Stats {
    totalCost: number;
    totalLiters: number;
    averageEfficiency: number;
    recordCount: number;
}

const FuelPage: React.FC = () => {
    const { tenant } = useTenant();
    const [records, setRecords] = useState<FuelRecord[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (tenant) {
            fetchRecords();
            fetchStats();
        }
    }, [tenant]);

    const fetchRecords = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/fuel`, {
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

    const fetchStats = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/fuel/stats`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="fuel-page">
            <div className="page-header">
                <div>
                    <h1>Control de Combustible</h1>
                    <p>{records.length} registros de combustible</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                            <DollarSign size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Costo Total</p>
                            <p className="stat-value">₡{stats.totalCost.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Droplet size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Litros Totales</p>
                            <p className="stat-value">{stats.totalLiters.toFixed(2)} L</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <TrendingUp size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Rendimiento Promedio</p>
                            <p className="stat-value">{stats.averageEfficiency.toFixed(2)} km/L</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <Fuel size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Registros</p>
                            <p className="stat-value">{stats.recordCount}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Lista de registros */}
            <div className="records-list">
                <h2>Registros de Combustible</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : records.length === 0 ? (
                    <div className="empty-state">
                        <Fuel size={48} />
                        <h3>No hay registros</h3>
                        <p>No se encontraron registros de combustible</p>
                    </div>
                ) : (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Courier</th>
                                    <th>Litros</th>
                                    <th>Costo</th>
                                    <th>Precio/L</th>
                                    <th>Odómetro</th>
                                    <th>Distancia</th>
                                    <th>Rendimiento</th>
                                    <th>Estación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((record) => (
                                    <tr key={record.id}>
                                        <td>{new Date(record.created_at).toLocaleDateString('es-CR')}</td>
                                        <td>{record.courier_name || '-'}</td>
                                        <td>{record.liters.toFixed(2)} L</td>
                                        <td>₡{record.cost.toLocaleString()}</td>
                                        <td>₡{record.price_per_liter?.toFixed(2) || '-'}</td>
                                        <td>{record.odometer_reading?.toLocaleString() || '-'} km</td>
                                        <td>{record.distance_traveled?.toLocaleString() || '-'} km</td>
                                        <td>
                                            {record.efficiency ? (
                                                <span className="efficiency">
                                                    {record.efficiency.toFixed(2)} km/L
                                                </span>
                                            ) : '-'}
                                        </td>
                                        <td>{record.station || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style>{`
                .fuel-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 32px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .records-list { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .records-list h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                
                .efficiency { padding: 4px 12px; background: #d1fae5; color: #065f46; border-radius: 12px; font-size: 13px; font-weight: 600; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default FuelPage;
