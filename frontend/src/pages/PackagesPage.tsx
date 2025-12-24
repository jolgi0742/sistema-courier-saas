// PackagesPage.tsx - Lista de paquetes
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Package, Truck, Search, Plus, Filter, Eye, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PackageItem {
    id: string;
    tracking_number: string;
    client_id: string;
    recipient_name: string;
    recipient_address: string;
    status: string;
    created_at: string;
    courier_id: string | null;
}

const PackagesPage: React.FC = () => {
    const { tenant } = useTenant();
    const navigate = useNavigate();
    const [packages, setPackages] = useState<PackageItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 20;

    useEffect(() => {
        if (tenant) {
            fetchPackages();
        }
    }, [tenant, page, search, statusFilter]);

    const fetchPackages = async () => {
        if (!tenant) return;

        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            const params = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString(),
                ...(search && { search }),
                ...(statusFilter && { status: statusFilter })
            });

            const response = await fetch(`${apiUrl}/api/packages?${params}`, {
                headers: {
                    'X-Tenant-ID': tenant.id
                }
            });

            const data = await response.json();
            setPackages(data.packages || []);
            setTotal(data.pagination?.total || 0);
        } catch (error) {
            console.error('Error fetching packages:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusBadge = (status: string) => {
        const statusConfig: Record<string, { label: string; color: string }> = {
            'pending': { label: 'Pendiente', color: '#6b7280' },
            'processing': { label: 'Procesando', color: '#3b82f6' },
            'assigned': { label: 'Asignado', color: '#8b5cf6' },
            'in_transit': { label: 'En tránsito', color: '#f59e0b' },
            'out_for_delivery': { label: 'En reparto', color: '#10b981' },
            'delivered': { label: 'Entregado', color: '#059669' },
            'cancelled': { label: 'Cancelado', color: '#ef4444' }
        };

        const config = statusConfig[status] || { label: status, color: '#6b7280' };

        return (
            <span style={{
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                backgroundColor: `${config.color}20`,
                color: config.color
            }}>
                {config.label}
            </span>
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="packages-page">
            {/* Header */}
            <div className="page-header">
                <div>
                    <h1>Paquetes</h1>
                    <p>{total} paquetes en total</p>
                </div>
                <button
                    className="btn-primary"
                    onClick={() => navigate('/packages/new')}
                >
                    <Plus size={20} />
                    Nuevo Paquete
                </button>
            </div>

            {/* Filters */}
            <div className="filters-bar">
                <div className="search-box">
                    <Search size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por tracking, destinatario..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setPage(1);
                    }}
                    className="status-filter"
                >
                    <option value="">Todos los estados</option>
                    <option value="pending">Pendiente</option>
                    <option value="processing">Procesando</option>
                    <option value="assigned">Asignado</option>
                    <option value="in_transit">En tránsito</option>
                    <option value="out_for_delivery">En reparto</option>
                    <option value="delivered">Entregado</option>
                    <option value="cancelled">Cancelado</option>
                </select>
            </div>

            {/* Table */}
            <div className="table-container">
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : packages.length === 0 ? (
                    <div className="empty-state">
                        <Package size={48} />
                        <h3>No hay paquetes</h3>
                        <p>Crea tu primer paquete para comenzar</p>
                        <button className="btn-primary" onClick={() => navigate('/packages/new')}>
                            <Plus size={20} />
                            Crear Paquete
                        </button>
                    </div>
                ) : (
                    <table className="packages-table">
                        <thead>
                            <tr>
                                <th>Tracking</th>
                                <th>Destinatario</th>
                                <th>Dirección</th>
                                <th>Estado</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {packages.map((pkg) => (
                                <tr key={pkg.id}>
                                    <td>
                                        <span className="tracking-number">{pkg.tracking_number}</span>
                                    </td>
                                    <td>{pkg.recipient_name}</td>
                                    <td className="address-cell">{pkg.recipient_address}</td>
                                    <td>{getStatusBadge(pkg.status)}</td>
                                    <td>{formatDate(pkg.created_at)}</td>
                                    <td>
                                        <div className="actions">
                                            <button
                                                className="btn-icon"
                                                onClick={() => navigate(`/packages/${pkg.id}`)}
                                                title="Ver detalle"
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button
                                                className="btn-icon"
                                                onClick={() => navigate(`/packages/${pkg.id}/edit`)}
                                                title="Editar"
                                            >
                                                <Edit size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Pagination */}
            {!loading && total > limit && (
                <div className="pagination">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        Anterior
                    </button>
                    <span>
                        Página {page} de {Math.ceil(total / limit)}
                    </span>
                    <button
                        disabled={page >= Math.ceil(total / limit)}
                        onClick={() => setPage(page + 1)}
                    >
                        Siguiente
                    </button>
                </div>
            )}

            <style>{`
                .packages-page {
                    padding: 24px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .page-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1f2937;
                    margin: 0 0 4px 0;
                }

                .page-header p {
                    color: #6b7280;
                    margin: 0;
                }

                .btn-primary {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: ${tenant?.branding?.primary_color || '#3b82f6'};
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }

                .btn-primary:hover {
                    opacity: 0.9;
                }

                .filters-bar {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .search-box {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                }

                .search-box input {
                    flex: 1;
                    border: none;
                    outline: none;
                    font-size: 14px;
                }

                .status-filter {
                    padding: 12px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 14px;
                    cursor: pointer;
                }

                .table-container {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    overflow: hidden;
                }

                .packages-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .packages-table th {
                    background: #f9fafb;
                    padding: 12px 16px;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    text-transform: uppercase;
                    border-bottom: 1px solid #e5e7eb;
                }

                .packages-table td {
                    padding: 16px;
                    border-bottom: 1px solid #f3f4f6;
                    font-size: 14px;
                    color: #1f2937;
                }

                .packages-table tbody tr:hover {
                    background: #f9fafb;
                }

                .tracking-number {
                    font-weight: 600;
                    color: ${tenant?.branding?.primary_color || '#3b82f6'};
                }

                .address-cell {
                    max-width: 300px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .actions {
                    display: flex;
                    gap: 8px;
                }

                .btn-icon {
                    padding: 6px;
                    background: transparent;
                    border: 1px solid #e5e7eb;
                    border-radius: 6px;
                    cursor: pointer;
                    color: #6b7280;
                    transition: all 0.2s;
                }

                .btn-icon:hover {
                    background: #f3f4f6;
                    color: #1f2937;
                }

                .loading, .empty-state {
                    padding: 60px 20px;
                    text-align: center;
                    color: #6b7280;
                }

                .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                }

                .empty-state h3 {
                    margin: 0;
                    color: #1f2937;
                }

                .empty-state p {
                    margin: 0;
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    margin-top: 24px;
                }

                .pagination button {
                    padding: 8px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pagination button:hover:not(:disabled) {
                    background: #f3f4f6;
                }

                .pagination button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    );
};

export default PackagesPage;
