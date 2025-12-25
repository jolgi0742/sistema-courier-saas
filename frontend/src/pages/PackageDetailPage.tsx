// PackageDetailPage.tsx - Vista de detalle de paquete
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Printer, FileText, CheckCircle } from 'lucide-react';
import DeliverySignatureModal from '../components/DeliverySignatureModal';

interface PackageDetail {
    id: string;
    tracking_number: string;
    client_name: string;
    courier_name: string | null;
    sender_name: string;
    sender_phone: string;
    recipient_name: string;
    recipient_phone: string;
    recipient_address: string;
    weight: number;
    dimensions: string | null;
    declared_value: number;
    status: string;
    notes: string | null;
    created_at: string;
    delivered_at: string | null;
}

interface HistoryItem {
    id: string;
    status: string;
    notes: string;
    location: string | null;
    created_at: string;
}

const PackageDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { tenant } = useTenant();
    const navigate = useNavigate();
    const [pkg, setPkg] = useState<PackageDetail | null>(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [showSignatureModal, setShowSignatureModal] = useState(false);

    useEffect(() => {
        if (tenant && id) {
            fetchPackageDetail();
        }
    }, [tenant, id]);

    const fetchPackageDetail = async () => {
        if (!tenant || !id) return;

        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;

            // Fetch package details
            const pkgRes = await fetch(`${apiUrl}/api/packages/${id}`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const pkgData = await pkgRes.json();
            setPkg(pkgData);

            // Fetch history (if endpoint exists)
            // const histRes = await fetch(`${apiUrl}/api/packages/${id}/history`, {
            //     headers: { 'X-Tenant-ID': tenant.id }
            // });
            // const histData = await histRes.json();
            // setHistory(histData);

        } catch (error) {
            console.error('Error fetching package:', error);
        } finally {
            setLoading(false);
        }
    };

    const downloadLabel = async () => {
        if (!tenant || !id) return;

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/labels/package/${id}`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `etiqueta-${pkg?.tracking_number}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
        } catch (error) {
            console.error('Error downloading label:', error);
            alert('Error al descargar la etiqueta');
        }
    };

    const downloadDeliveryNote = async () => {
        if (!tenant || !id) return;

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/labels/delivery-note/${id}`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `nota-entrega-${pkg?.tracking_number}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
        } catch (error) {
            console.error('Error downloading delivery note:', error);
            alert('Error al descargar la nota de entrega');
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
                padding: '6px 16px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor: `${config.color}20`,
                color: config.color
            }}>
                {config.label}
            </span>
        );
    };

    if (loading) {
        return <div className="loading-page">Cargando...</div>;
    }

    if (!pkg) {
        return <div className="error-page">Paquete no encontrado</div>;
    }

    return (
        <div className="package-detail-page">
            {/* Header */}
            <div className="page-header">
                <button className="btn-back" onClick={() => navigate('/packages')}>
                    <ArrowLeft size={20} />
                    Volver
                </button>
                <div className="header-info">
                    <h1>{pkg.tracking_number}</h1>
                    {getStatusBadge(pkg.status)}
                </div>
                <div className="header-actions">
                    <button className="btn-action" onClick={downloadLabel} title="Imprimir Etiqueta">
                        <Printer size={20} />
                        Etiqueta
                    </button>
                    <button className="btn-action" onClick={downloadDeliveryNote} title="Nota de Entrega">
                        <FileText size={20} />
                        Nota
                    </button>
                    {pkg.status !== 'delivered' && pkg.status !== 'cancelled' && (
                        <button
                            className="btn-deliver"
                            onClick={() => setShowSignatureModal(true)}
                            title="Confirmar Entrega"
                        >
                            <CheckCircle size={20} />
                            Confirmar Entrega
                        </button>
                    )}
                    <button
                        className="btn-edit"
                        onClick={() => navigate(`/packages/${id}/edit`)}
                    >
                        <Edit size={20} />
                        Editar
                    </button>
                </div>
            </div>

            <div className="detail-grid">
                {/* Información General */}
                <div className="detail-card">
                    <h2>Información General</h2>
                    <div className="detail-row">
                        <span className="label">Cliente:</span>
                        <span className="value">{pkg.client_name}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Courier:</span>
                        <span className="value">{pkg.courier_name || 'Sin asignar'}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Peso:</span>
                        <span className="value">{pkg.weight} kg</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Dimensiones:</span>
                        <span className="value">{pkg.dimensions || 'N/A'}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Valor Declarado:</span>
                        <span className="value">₡{pkg.declared_value.toLocaleString()}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Fecha Creación:</span>
                        <span className="value">{new Date(pkg.created_at).toLocaleString('es-CR')}</span>
                    </div>
                    {pkg.delivered_at && (
                        <div className="detail-row">
                            <span className="label">Fecha Entrega:</span>
                            <span className="value">{new Date(pkg.delivered_at).toLocaleString('es-CR')}</span>
                        </div>
                    )}
                </div>

                {/* Remitente */}
                <div className="detail-card">
                    <h2>Remitente</h2>
                    <div className="detail-row">
                        <span className="label">Nombre:</span>
                        <span className="value">{pkg.sender_name}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Teléfono:</span>
                        <span className="value">{pkg.sender_phone}</span>
                    </div>
                </div>

                {/* Destinatario */}
                <div className="detail-card">
                    <h2>Destinatario</h2>
                    <div className="detail-row">
                        <span className="label">Nombre:</span>
                        <span className="value">{pkg.recipient_name}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Teléfono:</span>
                        <span className="value">{pkg.recipient_phone}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Dirección:</span>
                        <span className="value">{pkg.recipient_address}</span>
                    </div>
                </div>

                {/* Notas */}
                {pkg.notes && (
                    <div className="detail-card full-width">
                        <h2>Notas</h2>
                        <p>{pkg.notes}</p>
                    </div>
                )}
            </div>

            {/* Modal de Firma Digital */}
            {showSignatureModal && (
                <DeliverySignatureModal
                    packageId={id!}
                    trackingNumber={pkg.tracking_number}
                    recipientName={pkg.recipient_name}
                    onClose={() => setShowSignatureModal(false)}
                    onSuccess={() => {
                        setShowSignatureModal(false);
                        fetchPackageDetail(); // Recargar datos
                    }}
                />
            )}

            <style>{`
                .package-detail-page {
                    padding: 24px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .page-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .header-info {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .page-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1f2937;
                    margin: 0;
                }

                .btn-back, .btn-edit, .btn-action, .btn-deliver {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    color: #6b7280;
                    font-weight: 500;
                    transition: all 0.2s;
                    font-size: 14px;
                }

                .btn-back:hover, .btn-edit:hover, .btn-action:hover, .btn-deliver:hover {
                    background: #f3f4f6;
                    color: #1f2937;
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
                }

                .btn-deliver {
                    background: #10b981;
                    color: white;
                    border: none;
                }

                .btn-deliver:hover {
                    background: #059669;
                }

                .btn-edit {
                    background: ${tenant?.branding?.primary_color || '#3b82f6'};
                    color: white;
                    border: none;
                }

                .btn-edit:hover {
                    opacity: 0.9;
                    background: ${tenant?.branding?.primary_color || '#3b82f6'};
                }

                .detail-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 24px;
                }

                .detail-card {
                    background: white;
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }

                .detail-card.full-width {
                    grid-column: 1 / -1;
                }

                .detail-card h2 {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0 0 16px 0;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .detail-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 0;
                    border-bottom: 1px solid #f3f4f6;
                }

                .detail-row:last-child {
                    border-bottom: none;
                }

                .detail-row .label {
                    font-weight: 500;
                    color: #6b7280;
                }

                .detail-row .value {
                    color: #1f2937;
                    text-align: right;
                }

                .loading-page, .error-page {
                    padding: 60px 20px;
                    text-align: center;
                    color: #6b7280;
                    font-size: 18px;
                }
            `}</style>
        </div>
    );
};

export default PackageDetailPage;
