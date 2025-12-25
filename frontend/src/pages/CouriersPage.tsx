// CouriersPage.tsx - Lista de couriers
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Truck, Search } from 'lucide-react';

interface Courier {
    id: string;
    name: string;
    email: string;
    phone: string;
    vehicle_type: string;
    vehicle_plate: string | null;
    zone: string | null;
    status: string;
    completed_deliveries: number;
    rating: number;
}

const CouriersPage: React.FC = () => {
    const { tenant } = useTenant();
    const [couriers, setCouriers] = useState<Courier[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (tenant) fetchCouriers();
    }, [tenant, search]);

    const fetchCouriers = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            const params = new URLSearchParams({ ...(search && { search }) });
            const response = await fetch(`${apiUrl}/api/couriers?${params}`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setCouriers(data.couriers || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const getVehicleLabel = (type: string) => {
        const labels: Record<string, string> = {
            'motorcycle': 'Motocicleta',
            'bicycle': 'Bicicleta',
            'car': 'Carro',
            'van': 'Van',
            'truck': 'Camión',
            'walk': 'A pie'
        };
        return labels[type] || type;
    };

    return (
        <div className="couriers-page">
            <div className="page-header">
                <h1>Couriers</h1>
                <p>{couriers.length} mensajeros registrados</p>
            </div>

            <div className="search-box">
                <Search size={20} />
                <input
                    type="text"
                    placeholder="Buscar courier..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="table-container">
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : couriers.length === 0 ? (
                    <div className="empty-state">
                        <Truck size={48} />
                        <h3>No hay couriers</h3>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Vehículo</th>
                                <th>Placa</th>
                                <th>Zona</th>
                                <th>Entregas</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {couriers.map((courier) => (
                                <tr key={courier.id}>
                                    <td>{courier.name}</td>
                                    <td>{courier.phone}</td>
                                    <td>{getVehicleLabel(courier.vehicle_type)}</td>
                                    <td>{courier.vehicle_plate || '-'}</td>
                                    <td>{courier.zone || '-'}</td>
                                    <td>{courier.completed_deliveries}</td>
                                    <td>⭐ {courier.rating.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <style>{`
                .couriers-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
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

export default CouriersPage;
