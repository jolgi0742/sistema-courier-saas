// SuppliersPage.tsx - Página de gestión de proveedores
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

interface Supplier {
    id: string;
    name: string;
    contact_name: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    city: string | null;
    category: string | null;
    status: string;
}

interface Stats {
    total: number;
    active: number;
    inactive: number;
    byCategory: { category: string; count: number }[];
}

const SuppliersPage: React.FC = () => {
    const { tenant } = useTenant();
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        if (tenant) {
            fetchSuppliers();
            fetchStats();
        }
    }, [tenant, searchTerm, filterStatus]);

    const fetchSuppliers = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/suppliers?`;
            if (searchTerm) url += `search=${searchTerm}&`;
            if (filterStatus) url += `status=${filterStatus}&`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setSuppliers(data.suppliers || []);
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
            const response = await fetch(`${apiUrl}/api/suppliers/stats`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="suppliers-page">
            <div className="page-header">
                <div>
                    <h1>Proveedores</h1>
                    <p>{suppliers.length} proveedores registrados</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Building2 size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Proveedores</p>
                            <p className="stat-value">{stats.total}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <Building2 size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Activos</p>
                            <p className="stat-value">{stats.active}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                            <Building2 size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Inactivos</p>
                            <p className="stat-value">{stats.inactive}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Categorías */}
            {stats && stats.byCategory.length > 0 && (
                <div className="categories-section">
                    <h2>Por Categoría</h2>
                    <div className="categories-grid">
                        {stats.byCategory.map((cat) => (
                            <div key={cat.category} className="category-card">
                                <span className="category-name">{cat.category}</span>
                                <span className="category-count">{cat.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Filtros */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Buscar por nombre, contacto o email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="">Todos los estados</option>
                    <option value="active">Activos</option>
                    <option value="inactive">Inactivos</option>
                </select>
            </div>

            {/* Lista de proveedores */}
            <div className="suppliers-section">
                <h2>Todos los Proveedores</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : suppliers.length === 0 ? (
                    <div className="empty-state">
                        <Building2 size={48} />
                        <h3>No hay proveedores</h3>
                        <p>No se encontraron proveedores con los criterios de búsqueda</p>
                    </div>
                ) : (
                    <div className="suppliers-grid">
                        {suppliers.map((supplier) => (
                            <div key={supplier.id} className="supplier-card">
                                <div className="supplier-header">
                                    <div className="supplier-name">
                                        <Building2 size={20} />
                                        <strong>{supplier.name}</strong>
                                    </div>
                                    <span className={`status-badge status-${supplier.status}`}>
                                        {supplier.status === 'active' ? 'Activo' : 'Inactivo'}
                                    </span>
                                </div>
                                <div className="supplier-body">
                                    {supplier.contact_name && (
                                        <p className="contact-name">👤 {supplier.contact_name}</p>
                                    )}
                                    {supplier.phone && (
                                        <p className="contact-item">
                                            <Phone size={14} /> {supplier.phone}
                                        </p>
                                    )}
                                    {supplier.email && (
                                        <p className="contact-item">
                                            <Mail size={14} /> {supplier.email}
                                        </p>
                                    )}
                                    {supplier.city && (
                                        <p className="contact-item">
                                            <MapPin size={14} /> {supplier.city}
                                        </p>
                                    )}
                                    {supplier.category && (
                                        <div className="category-tag">{supplier.category}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .suppliers-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .categories-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .categories-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .categories-grid { display: flex; flex-wrap: wrap; gap: 12px; }
                .category-card { background: #f3f4f6; padding: 12px 20px; border-radius: 8px; display: flex; align-items: center; gap: 12px; }
                .category-name { font-weight: 600; color: #1f2937; }
                .category-count { background: #2563eb; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 700; }
                
                .filters { display: flex; gap: 12px; margin-bottom: 24px; }
                .filters input { flex: 1; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
                .filters select { padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .suppliers-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .suppliers-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .suppliers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
                .supplier-card { background: #f9fafb; border-radius: 12px; padding: 20px; border: 2px solid #e5e7eb; transition: transform 0.2s; }
                .supplier-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .supplier-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb; }
                .supplier-name { display: flex; align-items: center; gap: 8px; font-size: 16px; color: #1f2937; }
                .status-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-active { background: #d1fae5; color: #065f46; }
                .status-badge.status-inactive { background: #fee2e2; color: #991b1b; }
                
                .supplier-body { }
                .contact-name { margin: 8px 0; font-size: 14px; color: #374151; font-weight: 600; }
                .contact-item { margin: 6px 0; font-size: 14px; color: #6b7280; display: flex; align-items: center; gap: 8px; }
                .category-tag { display: inline-block; margin-top: 12px; padding: 6px 12px; background: #dbeafe; color: #1e40af; border-radius: 6px; font-size: 12px; font-weight: 600; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default SuppliersPage;
