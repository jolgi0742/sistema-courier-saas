// DeliverySignatureModal.tsx - Modal para capturar firma de entrega
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { X, Check, RotateCcw, Camera } from 'lucide-react';
import { useTenant } from '../contexts/TenantContext';

interface DeliverySignatureModalProps {
    packageId: string;
    trackingNumber: string;
    recipientName: string;
    onClose: () => void;
    onSuccess: () => void;
}

const DeliverySignatureModal: React.FC<DeliverySignatureModalProps> = ({
    packageId,
    trackingNumber,
    recipientName,
    onClose,
    onSuccess
}) => {
    const { tenant } = useTenant();
    const signatureRef = useRef<SignatureCanvas>(null);
    const [recipientIdInput, setRecipientIdInput] = useState('');
    const [loading, setLoading] = useState(false);

    const clearSignature = () => {
        signatureRef.current?.clear();
    };

    const handleSubmit = async () => {
        if (signatureRef.current?.isEmpty()) {
            alert('Por favor firme antes de confirmar');
            return;
        }

        if (!recipientIdInput.trim()) {
            alert('Por favor ingrese la cédula del destinatario');
            return;
        }

        try {
            setLoading(true);

            // Obtener firma como data URL
            const signatureDataUrl = signatureRef.current?.toDataURL();

            // En una implementación completa, subirías la firma a Firebase Storage
            // Por ahora, enviamos el data URL directamente
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/delivery-signature/${packageId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Tenant-ID': tenant!.id
                },
                body: JSON.stringify({
                    signatureUrl: signatureDataUrl,
                    recipientName: recipientName,
                    recipientId: recipientIdInput
                })
            });

            if (response.ok) {
                alert('Entrega confirmada exitosamente');
                onSuccess();
            } else {
                const error = await response.json();
                alert(`Error: ${error.error || 'No se pudo confirmar la entrega'}`);
            }
        } catch (error) {
            console.error('Error confirmando entrega:', error);
            alert('Error al confirmar la entrega');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Confirmar Entrega</h2>
                    <button className="btn-close" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="package-info">
                        <p><strong>Tracking:</strong> {trackingNumber}</p>
                        <p><strong>Destinatario:</strong> {recipientName}</p>
                    </div>

                    <div className="form-group">
                        <label>Cédula del Destinatario *</label>
                        <input
                            type="text"
                            value={recipientIdInput}
                            onChange={(e) => setRecipientIdInput(e.target.value)}
                            placeholder="Ej: 1-2345-6789"
                            disabled={loading}
                        />
                    </div>

                    <div className="signature-section">
                        <label>Firma del Destinatario *</label>
                        <div className="signature-canvas-container">
                            <SignatureCanvas
                                ref={signatureRef}
                                canvasProps={{
                                    className: 'signature-canvas'
                                }}
                            />
                        </div>
                        <button className="btn-clear" onClick={clearSignature} disabled={loading}>
                            <RotateCcw size={16} />
                            Limpiar
                        </button>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-secondary" onClick={onClose} disabled={loading}>
                        Cancelar
                    </button>
                    <button className="btn-primary" onClick={handleSubmit} disabled={loading}>
                        <Check size={20} />
                        {loading ? 'Confirmando...' : 'Confirmar Entrega'}
                    </button>
                </div>

                <style>{`
                    .modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        padding: 20px;
                    }

                    .modal-content {
                        background: white;
                        border-radius: 12px;
                        max-width: 600px;
                        width: 100%;
                        max-height: 90vh;
                        overflow-y: auto;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                    }

                    .modal-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px 24px;
                        border-bottom: 1px solid #e5e7eb;
                    }

                    .modal-header h2 {
                        margin: 0;
                        font-size: 20px;
                        font-weight: 600;
                        color: #1f2937;
                    }

                    .btn-close {
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: #6b7280;
                        padding: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 4px;
                        transition: background 0.2s;
                    }

                    .btn-close:hover {
                        background: #f3f4f6;
                    }

                    .modal-body {
                        padding: 24px;
                    }

                    .package-info {
                        background: #f9fafb;
                        padding: 16px;
                        border-radius: 8px;
                        margin-bottom: 20px;
                    }

                    .package-info p {
                        margin: 4px 0;
                        font-size: 14px;
                        color: #374151;
                    }

                    .form-group {
                        margin-bottom: 20px;
                    }

                    .form-group label {
                        display: block;
                        font-size: 14px;
                        font-weight: 500;
                        color: #374151;
                        margin-bottom: 6px;
                    }

                    .form-group input {
                        width: 100%;
                        padding: 10px 12px;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        font-size: 14px;
                    }

                    .form-group input:focus {
                        outline: none;
                        border-color: ${tenant?.branding?.primary_color || '#3b82f6'};
                    }

                    .signature-section {
                        margin-bottom: 20px;
                    }

                    .signature-section label {
                        display: block;
                        font-size: 14px;
                        font-weight: 500;
                        color: #374151;
                        margin-bottom: 8px;
                    }

                    .signature-canvas-container {
                        border: 2px solid #d1d5db;
                        border-radius: 8px;
                        background: white;
                        margin-bottom: 8px;
                    }

                    .signature-canvas {
                        width: 100%;
                        height: 200px;
                        cursor: crosshair;
                    }

                    .btn-clear {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        padding: 6px 12px;
                        background: white;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        cursor: pointer;
                        font-size: 13px;
                        color: #6b7280;
                        transition: all 0.2s;
                    }

                    .btn-clear:hover:not(:disabled) {
                        background: #f3f4f6;
                    }

                    .btn-clear:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .modal-footer {
                        display: flex;
                        justify-content: flex-end;
                        gap: 12px;
                        padding: 20px 24px;
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
                        font-size: 14px;
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

                    .btn-secondary:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default DeliverySignatureModal;
