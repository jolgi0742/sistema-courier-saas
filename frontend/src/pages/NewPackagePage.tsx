// NewPackagePage.tsx - Formulario para crear nuevo paquete
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { useNavigate } from 'react-router-dom';
import { Package, ArrowLeft, Save } from 'lucide-react';

interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
}

const NewPackagePage: React.FC = () => {
    const { tenant } = useTenant();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [clients, setClients] = useState<Client[]>([]);
    const [formData, setFormData] = useState({
        client_id: '',
        sender_name: '',
        sender_phone: '',
        recipient_name: '',
        recipient_phone: '',
        recipient_address: '',
        weight: '',
        dimensions: '',
        declared_value: '',
        notes: ''
    });

    useEffect(() => {
        if (tenant) {
            fetchClients();
        }
    }, [tenant]);

    const fetchClients = async () => {
        if (!tenant) return;

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/clients`, {
                headers: {
                    'X-Tenant-ID': tenant.id
                }
            });
            const data = await response.json();
            setClients(data.clients || []);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const handleClientChange = (clientId: string) => {
        const client = clients.find(c => c.id === clientId);
        if (client) {
            setFormData({
                ...formData,
                client_id: clientId,
                sender_name: client.name,
                sender_phone: client.phone
            });
        } else {
            setFormData({
                ...formData,
                client_id: clientId
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!tenant) return;

        // Validaciones
        if (!formData.client_id || !formData.recipient_name || !formData.recipient_address) {
            alert('Por favor completa los campos requeridos');
            return;
        }

        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;

            const response = await fetch(`${apiUrl}/api/packages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Tenant-ID': tenant.id
                },
                body: JSON.stringify({
                    ...formData,
                    weight: parseFloat(formData.weight) || 0,
                    declared_value: parseFloat(formData.declared_value) || 0
                })
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Paquete creado exitosamente! Tracking: ${data.tracking_number}`);
                navigate('/packages');
            } else {
                const error = await response.json();
                alert(`Error: ${error.error || 'No se pudo crear el paquete'}`);
            }
        } catch (error) {
            console.error('Error creating package:', error);
            alert('Error al crear el paquete');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="new-package-page">
            <div className="page-header">
                <button className="btn-back" onClick={() => navigate('/packages')}>
                    <ArrowLeft size={20} />
                    Volver
                </button>
                <h1>Nuevo Paquete</h1>
            </div>

            <form onSubmit={handleSubmit} className="package-form">
                {/* Cliente */}
                <div className="form-section">
                    <h2>Información del Cliente</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Cliente *</label>
                            <select
                                value={formData.client_id}
                                onChange={(e) => handleClientChange(e.target.value)}
                                required
                            >
                                <option value="">Seleccionar cliente</option>
                                {clients.map(client => (
                                    <option key={client.id} value={client.id}>
                                        {client.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Remitente */}
                <div className="form-section">
                    <h2>Datos del Remitente</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nombre del Remitente</label>
                            <input
                                type="text"
                                value={formData.sender_name}
                                onChange={(e) => setFormData({ ...formData, sender_name: e.target.value })}
                                placeholder="Nombre completo"
                            />
                        </div>
                        <div className="form-group">
                            <label>Teléfono del Remitente</label>
                            <input
                                type="tel"
                                value={formData.sender_phone}
                                onChange={(e) => setFormData({ ...formData, sender_phone: e.target.value })}
                                placeholder="8888-8888"
                            />
                        </div>
                    </div>
                </div>

                {/* Destinatario */}
                <div className="form-section">
                    <h2>Datos del Destinatario</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nombre del Destinatario *</label>
                            <input
                                type="text"
                                value={formData.recipient_name}
                                onChange={(e) => setFormData({ ...formData, recipient_name: e.target.value })}
                                placeholder="Nombre completo"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Teléfono del Destinatario *</label>
                            <input
                                type="tel"
                                value={formData.recipient_phone}
                                onChange={(e) => setFormData({ ...formData, recipient_phone: e.target.value })}
                                placeholder="8888-8888"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group full-width">
                            <label>Dirección de Entrega *</label>
                            <textarea
                                value={formData.recipient_address}
                                onChange={(e) => setFormData({ ...formData, recipient_address: e.target.value })}
                                placeholder="Dirección completa de entrega"
                                rows={3}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Detalles del Paquete */}
                <div className="form-section">
                    <h2>Detalles del Paquete</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Peso (kg)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={formData.weight}
                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                placeholder="0.00"
                            />
                        </div>
                        <div className="form-group">
                            <label>Dimensiones</label>
                            <input
                                type="text"
                                value={formData.dimensions}
                                onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                                placeholder="Ej: 30x20x15 cm"
                            />
                        </div>
                        <div className="form-group">
                            <label>Valor Declarado (₡)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={formData.declared_value}
                                onChange={(e) => setFormData({ ...formData, declared_value: e.target.value })}
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group full-width">
                            <label>Notas</label>
                            <textarea
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                placeholder="Notas adicionales sobre el paquete"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div className="form-actions">
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => navigate('/packages')}
                        disabled={loading}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                    >
                        <Save size={20} />
                        {loading ? 'Creando...' : 'Crear Paquete'}
                    </button>
                </div>
            </form>

            <style>{`
                .new-package-page {
                    padding: 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .page-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .page-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1f2937;
                    margin: 0;
                }

                .btn-back {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    color: #6b7280;
                    transition: all 0.2s;
                }

                .btn-back:hover {
                    background: #f3f4f6;
                    color: #1f2937;
                }

                .package-form {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    padding: 24px;
                }

                .form-section {
                    margin-bottom: 32px;
                    padding-bottom: 32px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .form-section:last-of-type {
                    border-bottom: none;
                }

                .form-section h2 {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0 0 16px 0;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 16px;
                    margin-bottom: 16px;
                }

                .form-row:last-child {
                    margin-bottom: 0;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .form-group.full-width {
                    grid-column: 1 / -1;
                }

                .form-group label {
                    font-size: 14px;
                    font-weight: 500;
                    color: #374151;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    padding: 10px 12px;
                    border: 1px solid #d1d5db;
                    border-radius: 6px;
                    font-size: 14px;
                    transition: border-color 0.2s;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: ${tenant?.branding?.primary_color || '#3b82f6'};
                }

                .form-group textarea {
                    resize: vertical;
                    font-family: inherit;
                }

                .form-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    margin-top: 24px;
                    padding-top: 24px;
                    border-top: 1px solid #e5e7eb;
                }

                .btn-primary, .btn-secondary {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    border: none;
                }

                .btn-primary {
                    background: ${tenant?.branding?.primary_color || '#3b82f6'};
                    color: white;
                }

                .btn-primary:hover:not(:disabled) {
                    opacity: 0.9;
                }

                .btn-primary:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .btn-secondary {
                    background: white;
                    color: #6b7280;
                    border: 1px solid #e5e7eb;
                }

                .btn-secondary:hover:not(:disabled) {
                    background: #f3f4f6;
                }

                @media (max-width: 768px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default NewPackagePage;
