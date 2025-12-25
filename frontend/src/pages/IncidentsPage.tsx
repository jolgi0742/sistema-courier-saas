// IncidentsPage.tsx - Página de gestión de incidencias
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Plus, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';

interface Incident {
    id: string;
    package_id: string;
    tracking_number: string;
    client_name: string;
    type: string;
    status: string;
    priority: string;
    description: string;
    resolution: string | null;
    created_at: string;
    resolved_at: string | null;
}

const IncidentsPage: React.FC = () => {
    const { tenant } = useTenant();
    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('');
    const [filterPriority, setFilterPriority] = useState('');

    useEffect(() => {
        if (tenant) fetchIncidents();
    }, [tenant, filterStatus, filterPriority]);

    const fetchIncidents = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/incidents?`;
            if (filterStatus) url += `status=${filterStatus}&`;
            if (filterPriority) url += `priority=${filterPriority}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setIncidents(data.incidents || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const getTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            'delay': 'Retraso',
            'damage': 'Daño',
            'loss': 'Pérdida',
            'client_absent': 'Cliente Ausente',
            'address_error': 'Error de Dirección',
            'other': 'Otro'
        };
        return labels[type] || type;
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'open': return <AlertTriangle size={16} />;
            case 'investigating': return <Clock size={16} />;
            case 'resolved': return <CheckCircle size={16} />;
            case 'closed': return <XCircle size={16} />;
            default: return null;
        }
    };

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            'open': 'Abierta',
            'investigating': 'Investigando',
            'resolved': 'Resuelta',
            'closed': 'Cerrada'
        };
        return labels[status] || status;
    };

    const getPriorityColor = (priority: string) => {
        const colors: Record<string, string> = {
            'low': '#10b981',
            'medium': '#f59e0b',
            'high': '#ef4444',
            'critical': '#991b1b'
        };
        return colors[priority] || '#6b7280';
    };

    return (
        <div className="incidents-page">
            <div className="page-header">
                <div>
                    <h1>Incidencias</h1>
                    <p>{incidents.length} incidencias registradas</p>
                </div>
            </div>

            <div className="filters">
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="">Todos los estados</option>
                    <option value="open">Abierta</option>
                    <option value="investigating">Investigando</option>
                    <option value="resolved">Resuelta</option>
                    <option value="closed">Cerrada</option>
                </select>
                <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
                    <option value="">Todas las prioridades</option>
                    <option value="low">Baja</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                    <option value="critical">Crítica</option>
                </select>
            </div>

            <div className="incidents-list">
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : incidents.length === 0 ? (
                    <div className="empty-state">
                        <AlertTriangle size={48} />
                        <h3>No hay incidencias</h3>
                        <p>No se encontraron incidencias con los filtros seleccionados</p>
                    </div>
                ) : (
                    incidents.map((incident) => (
                        <div key={incident.id} className="incident-card">
                            <div className="incident-header">
                                <div className="incident-title">
                                    <span className="incident-icon" style={{ color: getPriorityColor(incident.priority) }}>
                                        {getStatusIcon(incident.status)}
                                    </span>
                                    <div>
                                        <h3>{getTypeLabel(incident.type)}</h3>
                                        <p className="tracking">Paquete: {incident.tracking_number}</p>
                                    </div>
                                </div>
                                <div className="incident-badges">
                                    <span className={`status-badge status-${incident.status}`}>
                                        {getStatusLabel(incident.status)}
                                    </span>
                                    <span
                                        className="priority-badge"
                                        style={{
                                            backgroundColor: `${getPriorityColor(incident.priority)}20`,
                                            color: getPriorityColor(incident.priority)
                                        }}
                                    >
                                        {incident.priority.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="incident-body">
                                <p className="description">{incident.description}</p>
                                {incident.resolution && (
                                    <div className="resolution">
                                        <strong>Resolución:</strong> {incident.resolution}
                                    </div>
                                )}
                            </div>
                            <div className="incident-footer">
                                <span className="date">
                                    {new Date(incident.created_at).toLocaleDateString('es-CR')}
                                </span>
                                <span className="client">{incident.client_name}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <style>{`
                .incidents-page { padding: 24px; max-width: 1200px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .filters { display: flex; gap: 12px; margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .incidents-list { display: grid; gap: 16px; }
                .incident-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #e5e7eb; }
                
                .incident-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
                .incident-title { display: flex; gap: 12px; align-items: flex-start; }
                .incident-icon { display: flex; align-items: center; margin-top: 2px; }
                .incident-title h3 { font-size: 16px; font-weight: 600; color: #1f2937; margin: 0; }
                .tracking { font-size: 13px; color: #6b7280; margin: 4px 0 0 0; }
                
                .incident-badges { display: flex; gap: 8px; }
                .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-open { background: #fee2e2; color: #991b1b; }
                .status-badge.status-investigating { background: #fef3c7; color: #92400e; }
                .status-badge.status-resolved { background: #d1fae5; color: #065f46; }
                .status-badge.status-closed { background: #f3f4f6; color: #374151; }
                
                .priority-badge { padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700; }
                
                .incident-body { margin-bottom: 12px; }
                .description { color: #374151; font-size: 14px; line-height: 1.5; margin: 0; }
                .resolution { margin-top: 12px; padding: 12px; background: #f0fdf4; border-radius: 8px; font-size: 13px; color: #166534; }
                
                .incident-footer { display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default IncidentsPage;
