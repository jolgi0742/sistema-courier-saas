// DocumentsPage.tsx - Página de gestión de documentos
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { FileText, AlertTriangle, CheckCircle, XCircle, Calendar } from 'lucide-react';

interface Document {
    id: string;
    entity_type: string;
    entity_id: string;
    entity_name: string | null;
    entity_identifier: string | null;
    document_type: string;
    document_number: string | null;
    file_url: string | null;
    file_name: string | null;
    issue_date: string | null;
    expiration_date: string | null;
    status: string;
    notes: string | null;
    created_at: string;
}

interface Stats {
    total: number;
    valid: number;
    expiringSoon: number;
    expired: number;
}

const DocumentsPage: React.FC = () => {
    const { tenant } = useTenant();
    const [documents, setDocuments] = useState<Document[]>([]);
    const [expiring, setExpiring] = useState<Document[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        if (tenant) {
            fetchDocuments();
            fetchExpiring();
            fetchStats();
        }
    }, [tenant, filterStatus]);

    const fetchDocuments = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/documents`;
            if (filterStatus) url += `?status=${filterStatus}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setDocuments(data.documents || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchExpiring = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/documents/expiring?days=30`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setExpiring(data.documents || []);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchStats = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/documents/stats`, {
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
            case 'valid': return <CheckCircle size={16} />;
            case 'expiring_soon': return <AlertTriangle size={16} />;
            case 'expired': return <XCircle size={16} />;
            default: return null;
        }
    };

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            'valid': 'Válido',
            'expiring_soon': 'Por Vencer',
            'expired': 'Vencido'
        };
        return labels[status] || status;
    };

    const getDaysUntil = (date: string) => {
        const today = new Date();
        const expDate = new Date(date);
        const diffTime = expDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="documents-page">
            <div className="page-header">
                <div>
                    <h1>Gestión de Documentos</h1>
                    <p>{documents.length} documentos registrados</p>
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
                            <p className="stat-label">Válidos</p>
                            <p className="stat-value">{stats.valid}</p>
                        </div>
                    </div>
                    <div className="stat-card alert">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Por Vencer</p>
                            <p className="stat-value">{stats.expiringSoon}</p>
                        </div>
                    </div>
                    <div className="stat-card alert-danger">
                        <div className="stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                            <XCircle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Vencidos</p>
                            <p className="stat-value">{stats.expired}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <FileText size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total</p>
                            <p className="stat-value">{stats.total}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Alertas de documentos por vencer */}
            {expiring.length > 0 && (
                <div className="expiring-section">
                    <h2>⚠️ Documentos por Vencer (30 días)</h2>
                    <div className="expiring-list">
                        {expiring.map((doc) => {
                            const daysUntil = getDaysUntil(doc.expiration_date!);
                            const isExpired = daysUntil < 0;
                            return (
                                <div key={doc.id} className={`expiring-card ${isExpired ? 'expired' : ''}`}>
                                    <div className="expiring-header">
                                        <div className="doc-info">
                                            <strong>{doc.document_type}</strong>
                                            <span className="entity-info">
                                                {doc.entity_type === 'courier' ? '👤' : '🚗'} {doc.entity_identifier}
                                            </span>
                                        </div>
                                        <span className={`days-badge ${isExpired ? 'expired' : daysUntil <= 7 ? 'urgent' : ''}`}>
                                            {isExpired ? 'VENCIDO' : `${daysUntil} días`}
                                        </span>
                                    </div>
                                    <div className="expiring-body">
                                        {doc.document_number && <p>Número: {doc.document_number}</p>}
                                        <p>Vence: {new Date(doc.expiration_date!).toLocaleDateString('es-CR')}</p>
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
                    <option value="valid">Válidos</option>
                    <option value="expiring_soon">Por Vencer</option>
                    <option value="expired">Vencidos</option>
                </select>
            </div>

            {/* Lista de documentos */}
            <div className="documents-list">
                <h2>Todos los Documentos</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : documents.length === 0 ? (
                    <div className="empty-state">
                        <FileText size={48} />
                        <h3>No hay documentos</h3>
                        <p>No se encontraron documentos con los filtros seleccionados</p>
                    </div>
                ) : (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Entidad</th>
                                    <th>Número</th>
                                    <th>Emisión</th>
                                    <th>Vencimiento</th>
                                    <th>Estado</th>
                                    <th>Notas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {documents.map((doc) => (
                                    <tr key={doc.id}>
                                        <td><strong>{doc.document_type}</strong></td>
                                        <td>
                                            <span className="entity-badge">
                                                {doc.entity_type === 'courier' ? '👤 Courier' : '🚗 Vehículo'}
                                            </span>
                                            <br />
                                            <small>{doc.entity_identifier}</small>
                                        </td>
                                        <td>{doc.document_number || '-'}</td>
                                        <td>
                                            {doc.issue_date ? (
                                                new Date(doc.issue_date).toLocaleDateString('es-CR')
                                            ) : '-'}
                                        </td>
                                        <td>
                                            {doc.expiration_date ? (
                                                <span className={doc.status === 'expired' ? 'expired-date' : ''}>
                                                    {new Date(doc.expiration_date).toLocaleDateString('es-CR')}
                                                </span>
                                            ) : '-'}
                                        </td>
                                        <td>
                                            <span className={`status-badge status-${doc.status}`}>
                                                {getStatusIcon(doc.status)}
                                                {getStatusLabel(doc.status)}
                                            </span>
                                        </td>
                                        <td>{doc.notes || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style>{`
                .documents-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-card.alert { border: 2px solid #fef3c7; }
                .stat-card.alert-danger { border: 2px solid #fee2e2; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .expiring-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .expiring-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .expiring-list { display: flex; flex-direction: column; gap: 12px; }
                .expiring-card { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 8px; }
                .expiring-card.expired { background: #fee2e2; border-left-color: #dc2626; }
                .expiring-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
                .doc-info { display: flex; flex-direction: column; gap: 4px; }
                .doc-info strong { color: #1f2937; }
                .entity-info { font-size: 13px; color: #6b7280; }
                .days-badge { padding: 4px 12px; background: white; border-radius: 12px; font-size: 12px; font-weight: 600; color: #d97706; }
                .days-badge.urgent { color: #dc2626; }
                .days-badge.expired { background: #dc2626; color: white; }
                .expiring-body p { margin: 4px 0; color: #374151; font-size: 13px; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .documents-list { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .documents-list h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                td small { color: #6b7280; font-size: 12px; }
                tbody tr:hover { background: #f9fafb; }
                
                .entity-badge { padding: 4px 8px; background: #f3f4f6; border-radius: 6px; font-size: 12px; font-weight: 500; }
                .expired-date { color: #dc2626; font-weight: 600; }
                
                .status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-valid { background: #d1fae5; color: #065f46; }
                .status-badge.status-expiring_soon { background: #fef3c7; color: #92400e; }
                .status-badge.status-expired { background: #fee2e2; color: #991b1b; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default DocumentsPage;
