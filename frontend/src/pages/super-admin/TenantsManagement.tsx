// TenantsManagement.tsx - Gestión de empresas/tenants
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Search,
    Plus,
    MoreVertical,
    Filter,
    Building2,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Pause,
    Play,
    Trash2
} from 'lucide-react';

interface Tenant {
    id: string;
    name: string;
    subdomain: string;
    status: string;
    plan_id: string;
    created_at: string;
    branding?: {
        company_name: string;
        logo_url: string;
        primary_color: string;
    };
}

interface PaginationInfo {
    page: number;
    limit: number;
    total: number;
    pages: number;
}

const TenantsManagement: React.FC = () => {
    const navigate = useNavigate();
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [pagination, setPagination] = useState<PaginationInfo>({ page: 1, limit: 20, total: 0, pages: 0 });
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [selectedTenant, setSelectedTenant] = useState<string | null>(null);

    useEffect(() => {
        fetchTenants();
    }, [pagination.page, statusFilter]);

    const fetchTenants = async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams({
                page: pagination.page.toString(),
                limit: pagination.limit.toString(),
                ...(statusFilter && { status: statusFilter }),
                ...(search && { search })
            });

            const response = await fetch(`/api/super-admin/tenants?${params}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            const result = await response.json();
            setTenants(result.tenants);
            setPagination(result.pagination);
        } catch (error) {
            console.error('Error fetching tenants:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPagination({ ...pagination, page: 1 });
        fetchTenants();
    };

    const handleSuspend = async (id: string) => {
        if (!confirm('¿Seguro que deseas suspender este tenant?')) return;

        try {
            await fetch(`/api/super-admin/tenants/${id}/suspend`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ reason: 'Manual suspension' })
            });
            fetchTenants();
        } catch (error) {
            console.error('Error suspending tenant:', error);
        }
    };

    const handleActivate = async (id: string) => {
        try {
            await fetch(`/api/super-admin/tenants/${id}/activate`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ plan_id: 'starter' })
            });
            fetchTenants();
        } catch (error) {
            console.error('Error activating tenant:', error);
        }
    };

    const getStatusBadge = (status: string) => {
        const colors: Record<string, string> = {
            active: 'bg-green',
            trial: 'bg-yellow',
            suspended: 'bg-red',
            cancelled: 'bg-gray'
        };
        return `status-badge ${colors[status] || 'bg-blue'}`;
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('es', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="tenants-management">
            {/* Header */}
            <header className="page-header">
                <div className="header-left">
                    <Link to="/super-admin" className="back-link">
                        <ChevronLeft size={20} />
                    </Link>
                    <div>
                        <h1>Gestión de Empresas</h1>
                        <p>{pagination.total} empresas registradas</p>
                    </div>
                </div>
                <Link to="/super-admin/tenants/new" className="btn btn-primary">
                    <Plus size={20} />
                    Nueva Empresa
                </Link>
            </header>

            {/* Filters */}
            <div className="filters-bar">
                <form onSubmit={handleSearch} className="search-box">
                    <Search size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o subdominio..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                <div className="filter-group">
                    <Filter size={18} />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="">Todos los estados</option>
                        <option value="active">Activos</option>
                        <option value="trial">En prueba</option>
                        <option value="suspended">Suspendidos</option>
                        <option value="cancelled">Cancelados</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Subdominio</th>
                            <th>Plan</th>
                            <th>Estado</th>
                            <th>Creado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan={6} className="loading-cell">Cargando...</td></tr>
                        ) : tenants.length === 0 ? (
                            <tr><td colSpan={6} className="empty-cell">No hay empresas</td></tr>
                        ) : tenants.map((tenant) => (
                            <tr key={tenant.id}>
                                <td>
                                    <div className="tenant-cell">
                                        <div
                                            className="tenant-avatar"
                                            style={{ backgroundColor: tenant.branding?.primary_color || '#3b82f6' }}
                                        >
                                            {tenant.branding?.logo_url ? (
                                                <img src={tenant.branding.logo_url} alt="" />
                                            ) : (
                                                tenant.name.charAt(0)
                                            )}
                                        </div>
                                        <div>
                                            <div className="tenant-name">{tenant.branding?.company_name || tenant.name}</div>
                                            <div className="tenant-id">{tenant.id.slice(0, 8)}...</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a
                                        href={`https://${tenant.subdomain}.sistemacourier.com`}
                                        target="_blank"
                                        className="subdomain-link"
                                    >
                                        {tenant.subdomain}
                                        <ExternalLink size={14} />
                                    </a>
                                </td>
                                <td>
                                    <span className="plan-badge">{tenant.plan_id}</span>
                                </td>
                                <td>
                                    <span className={getStatusBadge(tenant.status)}>{tenant.status}</span>
                                </td>
                                <td>{formatDate(tenant.created_at)}</td>
                                <td>
                                    <div className="actions-cell">
                                        <button
                                            onClick={() => navigate(`/super-admin/tenants/${tenant.id}`)}
                                            className="action-btn"
                                            title="Ver detalles"
                                        >
                                            <MoreVertical size={18} />
                                        </button>
                                        {tenant.status === 'active' ? (
                                            <button
                                                onClick={() => handleSuspend(tenant.id)}
                                                className="action-btn danger"
                                                title="Suspender"
                                            >
                                                <Pause size={18} />
                                            </button>
                                        ) : tenant.status === 'suspended' && (
                                            <button
                                                onClick={() => handleActivate(tenant.id)}
                                                className="action-btn success"
                                                title="Activar"
                                            >
                                                <Play size={18} />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                        disabled={pagination.page === 1}
                    >
                        <ChevronLeft size={18} />
                        Anterior
                    </button>
                    <span>Página {pagination.page} de {pagination.pages}</span>
                    <button
                        onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                        disabled={pagination.page === pagination.pages}
                    >
                        Siguiente
                        <ChevronRight size={18} />
                    </button>
                </div>
            )}

            <style>{`
        .tenants-management {
          min-height: 100vh;
          background: #0f172a;
          color: #f1f5f9;
          font-family: system-ui, -apple-system, sans-serif;
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
          transition: background 0.2s;
        }

        .back-link:hover {
          background: #334155;
        }

        .page-header h1 {
          font-size: 24px;
          font-weight: 700;
        }

        .page-header p {
          color: #64748b;
          font-size: 14px;
          margin-top: 2px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          background: #2563eb;
        }

        .filters-bar {
          padding: 16px 32px;
          display: flex;
          gap: 16px;
          border-bottom: 1px solid #1e293b;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #1e293b;
          padding: 0 16px;
          border-radius: 10px;
          max-width: 400px;
        }

        .search-box input {
          flex: 1;
          background: none;
          border: none;
          color: #f1f5f9;
          padding: 12px 0;
          font-size: 14px;
        }

        .search-box input::placeholder {
          color: #64748b;
        }

        .search-box svg {
          color: #64748b;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1e293b;
          padding: 0 16px;
          border-radius: 10px;
        }

        .filter-group svg {
          color: #64748b;
        }

        .filter-group select {
          background: none;
          border: none;
          color: #f1f5f9;
          padding: 12px 0;
          font-size: 14px;
          cursor: pointer;
        }

        .table-container {
          padding: 0 32px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          text-align: left;
          padding: 16px;
          color: #64748b;
          font-weight: 500;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #1e293b;
        }

        td {
          padding: 16px;
          border-bottom: 1px solid #1e293b;
        }

        .loading-cell, .empty-cell {
          text-align: center;
          color: #64748b;
          padding: 48px;
        }

        .tenant-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tenant-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          overflow: hidden;
        }

        .tenant-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tenant-name {
          font-weight: 500;
        }

        .tenant-id {
          font-size: 12px;
          color: #64748b;
          font-family: monospace;
        }

        .subdomain-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #3b82f6;
          text-decoration: none;
        }

        .subdomain-link:hover {
          text-decoration: underline;
        }

        .plan-badge {
          background: #334155;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          text-transform: capitalize;
        }

        .status-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .bg-green { background: #10b98120; color: #10b981; }
        .bg-yellow { background: #f59e0b20; color: #f59e0b; }
        .bg-red { background: #ef444420; color: #ef4444; }
        .bg-gray { background: #64748b20; color: #64748b; }

        .actions-cell {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: #334155;
          border-radius: 6px;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background: #475569;
        }

        .action-btn.danger:hover {
          background: #ef4444;
          color: white;
        }

        .action-btn.success:hover {
          background: #10b981;
          color: white;
        }

        .pagination {
          padding: 24px 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
        }

        .pagination button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #1e293b;
          border: none;
          border-radius: 8px;
          color: #f1f5f9;
          cursor: pointer;
          transition: background 0.2s;
        }

        .pagination button:hover:not(:disabled) {
          background: #334155;
        }

        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination span {
          color: #64748b;
          font-size: 14px;
        }
      `}</style>
        </div>
    );
};

export default TenantsManagement;
