// ClientsPage.tsx - Lista de clientes
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Users, Search } from 'lucide-react';

interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    company_name: string | null;
    total_packages: number;
}

const ClientsPage: React.FC = () => {
    const { tenant } = useTenant();
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (tenant) fetchClients();
    }, [tenant, search]);

    const fetchClients = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            const params = new URLSearchParams({ ...(search && { search }) });
            const response = await fetch(`${apiUrl}/api/clients?${params}`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setClients(data.clients || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="clients-page">
            <div className="page-header">
                <h1>Clientes</h1>
                <p>{clients.length} clientes registrados</p>
            </div>

            <div className="search-box">
                <Search size={20} />
                <input
                    type="text"
                    placeholder="Buscar cliente..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="table-container">
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : clients.length === 0 ? (
                    <div className="empty-state">
                        <Users size={48} />
                        <h3>No hay clientes</h3>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Empresa</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Paquetes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.name}</td>
                                    <td>{client.company_name || '-'}</td>
                                    <td>{client.email}</td>
                                    <td>{client.phone}</td>
                                    <td>{client.total_packages}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <style>{`
                .clients-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .search-box { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 24px; }
                .search-box input { flex: 1; border: none; outline: none; font-size: 14px; }
                .table-container { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
            `}</style>
        </div>
    );
};

export default ClientsPage;
