// ShippersPage.tsx - Página de gestión de remitentes frecuentes
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Users, TrendingUp, Package } from 'lucide-react';

interface Shipper {
    id: string;
    name: string;
    phone: string | null;
    email: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    total_shipments: number;
}

interface Stats {
    total: number;
    totalShipments: number;
    topShippers: Shipper[];
}

const ShippersPage: React.FC = () => {
    const { tenant } = useTenant();
    const [shippers, setShippers] = useState<Shipper[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (tenant) {
            fetchShippers();
            fetchStats();
        }
    }, [tenant, searchTerm]);

    const fetchShippers = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/shippers`;
            if (searchTerm) url += `?search=${searchTerm}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setShippers(data.shippers || []);
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
            const response = await fetch(`${apiUrl}/api/shippers/stats`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="shippers-page">
            <div className="page-header">
                <div>
                    <h1>Remitentes Frecuentes</h1>
                    <p>{shippers.length} remitentes registrados</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Users size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Remitentes</p>
                            <p className="stat-value">{stats.total}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <Package size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Envíos</p>
                            <p className="stat-value">{stats.totalShipments}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <TrendingUp size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Promedio por Remitente</p>
                            <p className="stat-value">{stats.total > 0 ? (stats.totalShipments / stats.total).toFixed(1) : 0}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Top Shippers */}
            {stats && stats.topShippers.length > 0 && (
                <div className="top-section">
                    <h2>🏆 Top 5 Remitentes</h2>
                    <div className="top-grid">
                        {stats.topShippers.map((shipper, index) => (
                            <div key={shipper.id} className="top-card">
                                <div className="rank">#{index + 1}</div>
                                <div className="top-info">
                                    <h3>{shipper.name}</h3>
                                    <p className="shipments">{shipper.total_shipments} envíos</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Búsqueda */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Buscar por nombre, teléfono o email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Lista de remitentes */}
            <div className="shippers-section">
                <h2>Todos los Remitentes</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : shippers.length === 0 ? (
                    <div className="empty-state">
                        <Users size={48} />
                        <h3>No hay remitentes</h3>
                        <p>No se encontraron remitentes con los criterios de búsqueda</p>
                    </div>
                ) : (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Teléfono</th>
                                    <th>Email</th>
                                    <th>Ciudad</th>
                                    <th>Dirección</th>
                                    <th>Envíos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shippers.map((shipper) => (
                                    <tr key={shipper.id}>
                                        <td><strong>{shipper.name}</strong></td>
                                        <td>{shipper.phone || '-'}</td>
                                        <td>{shipper.email || '-'}</td>
                                        <td>{shipper.city || '-'}</td>
                                        <td>{shipper.address || '-'}</td>
                                        <td>
                                            <span className="shipments-badge">
                                                {shipper.total_shipments}
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
                .shippers-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .top-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .top-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                .top-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
                .top-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 16px; color: white; display: flex; align-items: center; gap: 16px; }
                .rank { font-size: 32px; font-weight: 700; opacity: 0.8; }
                .top-info h3 { margin: 0 0 4px 0; font-size: 16px; }
                .shipments { margin: 0; opacity: 0.9; font-size: 14px; }
                
                .search-section { margin-bottom: 24px; }
                .search-section input { width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
                
                .shippers-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .shippers-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                
                .shipments-badge { display: inline-block; padding: 4px 12px; background: #dbeafe; color: #1e40af; border-radius: 12px; font-weight: 600; font-size: 13px; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default ShippersPage;
