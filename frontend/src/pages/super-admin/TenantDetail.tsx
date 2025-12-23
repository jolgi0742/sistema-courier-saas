// TenantDetail.tsx - Detalle de un tenant individual
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ChevronLeft,
    Building2,
    Globe,
    Mail,
    Phone,
    Calendar,
    CreditCard,
    Package,
    Users,
    HardDrive,
    ExternalLink,
    Edit,
    Pause,
    Play,
    Trash2,
    Save
} from 'lucide-react';

interface TenantData {
    id: string;
    name: string;
    subdomain: string;
    status: string;
    plan_id: string;
    trial_ends_at: string | null;
    created_at: string;
    branding: {
        logo_url: string | null;
        company_name: string;
        primary_color: string;
        contact_email: string | null;
        contact_phone: string | null;
        website_url: string | null;
    };
    subscription: {
        status: string;
        current_period_end: string;
    } | null;
    domains: Array<{ domain: string; is_primary: boolean; ssl_status: string }>;
    usage: {
        users: number;
        packages_this_month: number;
        storage_used_mb: number;
    };
}

const TenantDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [tenant, setTenant] = useState<TenantData | null>(null);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({ name: '', plan_id: '' });

    useEffect(() => {
        fetchTenant();
    }, [id]);

    const fetchTenant = async () => {
        try {
            const response = await fetch(`/api/super-admin/tenants/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            const data = await response.json();
            setTenant(data);
            setEditData({ name: data.name, plan_id: data.plan_id });
        } catch (error) {
            console.error('Error fetching tenant:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            await fetch(`/api/super-admin/tenants/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editData)
            });
            setEditing(false);
            fetchTenant();
        } catch (error) {
            console.error('Error updating tenant:', error);
        }
    };

    const handleStatusChange = async (action: 'suspend' | 'activate') => {
        const confirmMsg = action === 'suspend'
            ? '¿Suspender este tenant? Los usuarios no podrán acceder.'
            : '¿Activar este tenant?';

        if (!confirm(confirmMsg)) return;

        try {
            await fetch(`/api/super-admin/tenants/${id}/${action}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });
            fetchTenant();
        } catch (error) {
            console.error('Error changing status:', error);
        }
    };

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            active: '#10b981', trial: '#f59e0b', suspended: '#ef4444', cancelled: '#6b7280'
        };
        return colors[status] || '#3b82f6';
    };

    if (loading) {
        return <div className="loading-page">Cargando...</div>;
    }

    if (!tenant) {
        return <div className="error-page">Tenant no encontrado</div>;
    }

    return (
        <div className="tenant-detail">
            {/* Header */}
            <header className="page-header">
                <div className="header-left">
                    <Link to="/super-admin/tenants" className="back-link">
                        <ChevronLeft size={20} />
                    </Link>
                    <div className="tenant-header">
                        <div
                            className="tenant-avatar"
                            style={{ backgroundColor: tenant.branding.primary_color }}
                        >
                            {tenant.branding.logo_url ? (
                                <img src={tenant.branding.logo_url} alt="" />
                            ) : (
                                tenant.name.charAt(0)
                            )}
                        </div>
                        <div>
                            <h1>{tenant.branding.company_name || tenant.name}</h1>
                            <div className="tenant-meta">
                                <span
                                    className="status-dot"
                                    style={{ backgroundColor: getStatusColor(tenant.status) }}
                                ></span>
                                <span>{tenant.status}</span>
                                <span className="separator">•</span>
                                <span>{tenant.plan_id}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-actions">
                    <a
                        href={`https://${tenant.subdomain}.sistemacourier.com`}
                        target="_blank"
                        className="btn btn-secondary"
                    >
                        <ExternalLink size={18} />
                        Visitar
                    </a>
                    {tenant.status === 'active' ? (
                        <button onClick={() => handleStatusChange('suspend')} className="btn btn-danger">
                            <Pause size={18} />
                            Suspender
                        </button>
                    ) : tenant.status === 'suspended' && (
                        <button onClick={() => handleStatusChange('activate')} className="btn btn-success">
                            <Play size={18} />
                            Activar
                        </button>
                    )}
                </div>
            </header>

            {/* Content */}
            <div className="detail-content">
                {/* Info Card */}
                <div className="card">
                    <div className="card-header">
                        <h3>Información General</h3>
                        {!editing ? (
                            <button onClick={() => setEditing(true)} className="btn-icon">
                                <Edit size={18} />
                            </button>
                        ) : (
                            <button onClick={handleSave} className="btn btn-primary btn-sm">
                                <Save size={16} />
                                Guardar
                            </button>
                        )}
                    </div>
                    <div className="card-content info-grid">
                        <div className="info-item">
                            <Building2 size={18} />
                            <div>
                                <label>Nombre</label>
                                {editing ? (
                                    <input
                                        value={editData.name}
                                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                    />
                                ) : (
                                    <span>{tenant.name}</span>
                                )}
                            </div>
                        </div>
                        <div className="info-item">
                            <Globe size={18} />
                            <div>
                                <label>Subdominio</label>
                                <span>{tenant.subdomain}.sistemacourier.com</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={18} />
                            <div>
                                <label>Email</label>
                                <span>{tenant.branding.contact_email || '-'}</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone size={18} />
                            <div>
                                <label>Teléfono</label>
                                <span>{tenant.branding.contact_phone || '-'}</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <Calendar size={18} />
                            <div>
                                <label>Creado</label>
                                <span>{new Date(tenant.created_at).toLocaleDateString('es')}</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <CreditCard size={18} />
                            <div>
                                <label>Plan</label>
                                {editing ? (
                                    <select
                                        value={editData.plan_id}
                                        onChange={(e) => setEditData({ ...editData, plan_id: e.target.value })}
                                    >
                                        <option value="trial">Trial</option>
                                        <option value="starter">Starter</option>
                                        <option value="professional">Professional</option>
                                        <option value="enterprise">Enterprise</option>
                                    </select>
                                ) : (
                                    <span className="plan-badge">{tenant.plan_id}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Usage Card */}
                <div className="card">
                    <div className="card-header">
                        <h3>Uso del Servicio</h3>
                    </div>
                    <div className="card-content usage-grid">
                        <div className="usage-item">
                            <div className="usage-icon"><Users size={24} /></div>
                            <div className="usage-value">{tenant.usage.users}</div>
                            <div className="usage-label">Usuarios</div>
                        </div>
                        <div className="usage-item">
                            <div className="usage-icon"><Package size={24} /></div>
                            <div className="usage-value">{tenant.usage.packages_this_month}</div>
                            <div className="usage-label">Paquetes/mes</div>
                        </div>
                        <div className="usage-item">
                            <div className="usage-icon"><HardDrive size={24} /></div>
                            <div className="usage-value">{tenant.usage.storage_used_mb} MB</div>
                            <div className="usage-label">Almacenamiento</div>
                        </div>
                    </div>
                </div>

                {/* Domains Card */}
                <div className="card">
                    <div className="card-header">
                        <h3>Dominios</h3>
                    </div>
                    <div className="card-content">
                        {tenant.domains.length === 0 ? (
                            <p className="empty-text">No hay dominios configurados</p>
                        ) : (
                            tenant.domains.map((domain, i) => (
                                <div key={i} className="domain-row">
                                    <Globe size={16} />
                                    <span>{domain.domain}</span>
                                    {domain.is_primary && <span className="badge primary">Principal</span>}
                                    <span className={`badge ${domain.ssl_status === 'active' ? 'success' : 'warning'}`}>
                                        SSL: {domain.ssl_status}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Subscription Card */}
                {tenant.subscription && (
                    <div className="card">
                        <div className="card-header">
                            <h3>Suscripción</h3>
                        </div>
                        <div className="card-content">
                            <div className="subscription-info">
                                <div>
                                    <label>Estado</label>
                                    <span className={`badge ${tenant.subscription.status === 'active' ? 'success' : 'warning'}`}>
                                        {tenant.subscription.status}
                                    </span>
                                </div>
                                <div>
                                    <label>Próximo cobro</label>
                                    <span>{new Date(tenant.subscription.current_period_end).toLocaleDateString('es')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .tenant-detail {
          min-height: 100vh;
          background: #0f172a;
          color: #f1f5f9;
          font-family: system-ui, sans-serif;
        }

        .page-header {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #1e293b;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .back-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e293b;
          border-radius: 10px;
          color: #94a3b8;
        }

        .tenant-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .tenant-avatar {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .tenant-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
        }

        h1 { font-size: 24px; }

        .tenant-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 14px;
          margin-top: 4px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .separator { color: #334155; }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-primary { background: #3b82f6; color: white; }
        .btn-secondary { background: #334155; color: #f1f5f9; }
        .btn-danger { background: #ef4444; color: white; }
        .btn-success { background: #10b981; color: white; }
        .btn-sm { padding: 6px 12px; font-size: 14px; }

        .btn-icon {
          width: 36px;
          height: 36px;
          background: #334155;
          border: none;
          border-radius: 8px;
          color: #94a3b8;
          cursor: pointer;
        }

        .detail-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          padding: 32px;
        }

        @media (max-width: 900px) {
          .detail-content { grid-template-columns: 1fr; }
        }

        .card {
          background: #1e293b;
          border-radius: 16px;
        }

        .card-header {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #334155;
        }

        .card-header h3 { font-size: 16px; }

        .card-content { padding: 20px 24px; }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .info-item svg { color: #64748b; margin-top: 2px; }
        .info-item label { display: block; font-size: 12px; color: #64748b; }
        .info-item span { display: block; margin-top: 2px; }
        .info-item input, .info-item select {
          background: #0f172a;
          border: 1px solid #334155;
          padding: 8px;
          border-radius: 6px;
          color: #f1f5f9;
          width: 100%;
          margin-top: 4px;
        }

        .usage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .usage-item { text-align: center; }
        .usage-icon { color: #3b82f6; margin-bottom: 8px; }
        .usage-value { font-size: 28px; font-weight: 700; }
        .usage-label { font-size: 13px; color: #64748b; }

        .domain-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #334155;
        }

        .domain-row:last-child { border-bottom: none; }

        .badge {
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .badge.success { background: #10b98120; color: #10b981; }
        .badge.warning { background: #f59e0b20; color: #f59e0b; }
        .badge.primary { background: #3b82f620; color: #3b82f6; }

        .plan-badge {
          background: #334155;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 13px;
          text-transform: capitalize;
        }

        .empty-text { color: #64748b; font-style: italic; }

        .subscription-info {
          display: flex;
          gap: 32px;
        }

        .subscription-info label {
          display: block;
          font-size: 12px;
          color: #64748b;
          margin-bottom: 4px;
        }

        .loading-page, .error-page {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: #64748b;
        }
      `}</style>
        </div>
    );
};

export default TenantDetail;
