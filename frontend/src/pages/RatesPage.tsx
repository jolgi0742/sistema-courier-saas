// RatesPage.tsx - Página de gestión de tarifas
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Plus, Edit, Trash2, DollarSign } from 'lucide-react';

interface Rate {
    id: string;
    name: string;
    description: string | null;
    zone: string | null;
    min_weight: number;
    max_weight: number | null;
    base_price: number;
    price_per_kg: number;
    service_type: string;
    active: boolean;
}

const RatesPage: React.FC = () => {
    const { tenant } = useTenant();
    const [rates, setRates] = useState<Rate[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingRate, setEditingRate] = useState<Rate | null>(null);

    useEffect(() => {
        if (tenant) fetchRates();
    }, [tenant]);

    const fetchRates = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/rates`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setRates(data.rates || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Eliminar esta tarifa?')) return;

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/rates/${id}`, {
                method: 'DELETE',
                headers: { 'X-Tenant-ID': tenant!.id }
            });

            if (response.ok) {
                fetchRates();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getServiceTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            'standard': 'Estándar',
            'express': 'Express',
            'same_day': 'Mismo Día',
            'scheduled': 'Programado'
        };
        return labels[type] || type;
    };

    return (
        <div className="rates-page">
            <div className="page-header">
                <div>
                    <h1>Tarifas</h1>
                    <p>{rates.length} tarifas configuradas</p>
                </div>
                <button className="btn-primary" onClick={() => setShowForm(true)}>
                    <Plus size={20} />
                    Nueva Tarifa
                </button>
            </div>

            <div className="table-container">
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : rates.length === 0 ? (
                    <div className="empty-state">
                        <DollarSign size={48} />
                        <h3>No hay tarifas configuradas</h3>
                        <p>Crea tu primera tarifa para comenzar</p>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Zona</th>
                                <th>Peso (kg)</th>
                                <th>Precio Base</th>
                                <th>Precio/kg</th>
                                <th>Tipo</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rates.map((rate) => (
                                <tr key={rate.id}>
                                    <td>
                                        <strong>{rate.name}</strong>
                                        {rate.description && (
                                            <div className="description">{rate.description}</div>
                                        )}
                                    </td>
                                    <td>{rate.zone || '-'}</td>
                                    <td>
                                        {rate.min_weight} - {rate.max_weight || '∞'}
                                    </td>
                                    <td>₡{rate.base_price.toLocaleString()}</td>
                                    <td>₡{rate.price_per_kg.toLocaleString()}</td>
                                    <td>{getServiceTypeLabel(rate.service_type)}</td>
                                    <td>
                                        <span className={`status ${rate.active ? 'active' : 'inactive'}`}>
                                            {rate.active ? 'Activa' : 'Inactiva'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="actions">
                                            <button
                                                className="btn-icon"
                                                onClick={() => {
                                                    setEditingRate(rate);
                                                    setShowForm(true);
                                                }}
                                                title="Editar"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                className="btn-icon danger"
                                                onClick={() => handleDelete(rate.id)}
                                                title="Eliminar"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <style>{`
                .rates-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .btn-primary { display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: ${tenant?.branding?.primary_color || '#3b82f6'}; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
                .btn-primary:hover { opacity: 0.9; }
                .table-container { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                .description { font-size: 12px; color: #6b7280; margin-top: 4px; }
                .status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status.active { background: #d1fae5; color: #065f46; }
                .status.inactive { background: #fee2e2; color: #991b1b; }
                .actions { display: flex; gap: 8px; }
                .btn-icon { padding: 6px; background: white; border: 1px solid #e5e7eb; border-radius: 6px; cursor: pointer; color: #6b7280; display: flex; align-items: center; justify-content: center; }
                .btn-icon:hover { background: #f3f4f6; }
                .btn-icon.danger:hover { background: #fee2e2; color: #dc2626; }
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default RatesPage;
