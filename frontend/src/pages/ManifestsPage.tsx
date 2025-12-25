// ManifestsPage.tsx - Página de gestión de manifiestos de carga
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { FileText, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';

interface Manifest {
    id: string;
    manifest_number: string;
    courier_id: string | null;
    courier_name: string | null;
    route: string | null;
    date: string | null;
    total_packages: number;
    status: string;
    created_at: string;
    packages: any[];
}

interface Stats {
    total: number;
    draft: number;
    active: number;
    completed: number;
}

const ManifestsPage: React.FC = () => {
    const { tenant } = useTenant();
    const [manifests, setManifests] = useState<Manifest[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        if (tenant) {
            fetchManifests();
            fetchStats();
        }
    }, [tenant, filterStatus]);

    const fetchManifests = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/manifests`;
            if (filterStatus) url += `?status=${filterStatus}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setManifests(data.manifests || []);
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
            const response = await fetch(`${apiUrl}/api/manifests/stats`, {
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
            case 'draft': return <Clock size={16} />;
            case 'active': return <Truck size={16} />;
            case 'completed': return <CheckCircle size={16} />;
            default: return null;
        }
    };

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            'draft': 'Borrador',
            'active': 'Activo',
            'completed': 'Completado'
        };
        return labels[status] || status;
    };

    return (
        <div className="manifests-page">
            <div className="page-header">
                <div>
                    <h1>Manifiestos de Carga</h1>
                    <p>{manifests.length} manifiestos registrados</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <FileText size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total</p>
                            <p className="stat-value">{stats.total}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <Clock size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Borradores</p>
                            <p className="stat-value">{stats.draft}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Truck size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Activos</p>
                            <p className="stat-value">{stats.active}</p>
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
                </div>
            )}

            {/* Filtros */}
            <div className="filters">
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="">Todos los estados</option>
                    <option value="draft">Borradores</option>
                    <option value="active">Activos</option>
                    <option value="completed">Completados</option>
                </select>
            </div>

            {/* Lista de manifiestos */}
            <div className="manifests-section">
                <h2>Manifiestos</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : manifests.length === 0 ? (
                    <div className="empty-state">
                        <FileText size={48} />
                        <h3>No hay manifiestos</h3>
                        <p>No se encontraron manifiestos con los filtros seleccionados</p>
                    </div>
                ) : (
                    <div className="manifests-grid">
                        {manifests.map((manifest) => (
                            <div key={manifest.id} className="manifest-card">
                                <div className="manifest-header">
                                    <div className="manifest-number">
                                        <FileText size={20} />
                                        {manifest.manifest_number}
                                    </div>
                                    <span className={`status-badge status-${manifest.status}`}>
                                        {getStatusIcon(manifest.status)}
                                        {getStatusLabel(manifest.status)}
                                    </span>
                                </div>
                                <div className="manifest-body">
                                    {manifest.route && (
                                        <p className="route"><strong>Ruta:</strong> {manifest.route}</p>
                                    )}
                                    {manifest.courier_name && (
                                        <p><strong>Courier:</strong> {manifest.courier_name}</p>
                                    )}
                                    {manifest.date && (
                                        <p><strong>Fecha:</strong> {new Date(manifest.date).toLocaleDateString('es-CR')}</p>
                                    )}
                                    <div className="packages-count">
                                        <strong>{manifest.total_packages}</strong> paquetes
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .manifests-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
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
                
                .manifests-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .manifests-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .manifests-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
                .manifest-card { background: #f9fafb; border-radius: 12px; padding: 20px; border: 2px solid #e5e7eb; transition: transform 0.2s; }
                .manifest-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .manifest-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb; }
                .manifest-number { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #1f2937; }
                .status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-draft { background: #fef3c7; color: #92400e; }
                .status-badge.status-active { background: #dbeafe; color: #1e40af; }
                .status-badge.status-completed { background: #d1fae5; color: #065f46; }
                
                .manifest-body { }
                .manifest-body p { margin: 8px 0; font-size: 14px; color: #374151; }
                .route { color: #2563eb; font-weight: 600; }
                .packages-count { margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; }
                .packages-count strong { color: #2563eb; font-size: 20px; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default ManifestsPage;
