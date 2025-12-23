// OnboardingWizard.tsx - Wizard de configuración inicial
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    Package,
    Upload,
    Palette,
    Check,
    ArrowRight,
    ArrowLeft,
    Sparkles
} from 'lucide-react';

interface OnboardingData {
    logo: File | null;
    logo_preview: string;
    primary_color: string;
    company_phone: string;
    company_address: string;
}

const OnboardingWizard: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const tenant = searchParams.get('tenant');

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<OnboardingData>({
        logo: null,
        logo_preview: '',
        primary_color: '#3b82f6',
        company_phone: '',
        company_address: ''
    });

    const colors = [
        '#3b82f6', // Blue
        '#10b981', // Green
        '#8b5cf6', // Purple
        '#f59e0b', // Amber
        '#ef4444', // Red
        '#ec4899', // Pink
        '#06b6d4', // Cyan
        '#1f2937'  // Dark gray
    ];

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData({
                ...data,
                logo: file,
                logo_preview: URL.createObjectURL(file)
            });
        }
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            // Subir logo si existe
            if (data.logo) {
                const formData = new FormData();
                formData.append('logo', data.logo);
                await fetch('/api/tenants/branding/logo', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
                    body: formData
                });
            }

            // Guardar branding
            await fetch('/api/tenants/branding', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    primary_color: data.primary_color,
                    contact_phone: data.company_phone,
                    address: data.company_address
                })
            });

            // Redirigir al dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error('Error saving onboarding:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSkip = () => {
        navigate('/dashboard');
    };

    return (
        <div className="onboarding-wizard">
            <div className="wizard-container">
                {/* Header */}
                <div className="wizard-header">
                    <Package size={32} color="#3b82f6" />
                    <h1>¡Bienvenido a Sistema Courier!</h1>
                    <p>Personaliza tu espacio de trabajo en unos simples pasos</p>
                </div>

                {/* Progress */}
                <div className="wizard-progress">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`progress-dot ${step >= i ? 'active' : ''}`}>
                            {step > i ? <Check size={16} /> : i}
                        </div>
                    ))}
                </div>

                {/* Steps */}
                <div className="wizard-content">
                    {step === 1 && (
                        <div className="wizard-step">
                            <div className="step-icon">
                                <Upload size={32} />
                            </div>
                            <h2>Sube tu logo</h2>
                            <p>Tu logo aparecerá en el sistema, PDFs y notificaciones</p>

                            <div className="logo-upload">
                                {data.logo_preview ? (
                                    <div className="logo-preview">
                                        <img src={data.logo_preview} alt="Logo preview" />
                                        <button onClick={() => setData({ ...data, logo: null, logo_preview: '' })}>
                                            Cambiar
                                        </button>
                                    </div>
                                ) : (
                                    <label className="upload-area">
                                        <Upload size={40} />
                                        <span>Arrastra o haz clic para subir</span>
                                        <span className="upload-hint">PNG, JPG hasta 2MB</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleLogoUpload}
                                        />
                                    </label>
                                )}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="wizard-step">
                            <div className="step-icon">
                                <Palette size={32} />
                            </div>
                            <h2>Elige tus colores</h2>
                            <p>Personaliza la apariencia de tu plataforma</p>

                            <div className="color-picker">
                                {colors.map(color => (
                                    <button
                                        key={color}
                                        className={`color-option ${data.primary_color === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setData({ ...data, primary_color: color })}
                                    >
                                        {data.primary_color === color && <Check size={20} />}
                                    </button>
                                ))}
                            </div>

                            <div className="color-preview" style={{ backgroundColor: data.primary_color }}>
                                <span>Vista previa del color primario</span>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="wizard-step">
                            <div className="step-icon">
                                <Sparkles size={32} />
                            </div>
                            <h2>Información de contacto</h2>
                            <p>Esta información aparecerá en los PDFs y emails</p>

                            <div className="contact-form">
                                <div className="input-group">
                                    <label>Teléfono (opcional)</label>
                                    <input
                                        type="tel"
                                        value={data.company_phone}
                                        onChange={(e) => setData({ ...data, company_phone: e.target.value })}
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Dirección (opcional)</label>
                                    <input
                                        type="text"
                                        value={data.company_address}
                                        onChange={(e) => setData({ ...data, company_address: e.target.value })}
                                        placeholder="Calle Principal #123, Ciudad"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="wizard-nav">
                    {step > 1 ? (
                        <button onClick={() => setStep(step - 1)} className="btn-back">
                            <ArrowLeft size={20} /> Atrás
                        </button>
                    ) : (
                        <button onClick={handleSkip} className="btn-skip">
                            Omitir configuración
                        </button>
                    )}

                    {step < 3 ? (
                        <button onClick={() => setStep(step + 1)} className="btn-next">
                            Continuar <ArrowRight size={20} />
                        </button>
                    ) : (
                        <button onClick={handleSubmit} disabled={loading} className="btn-finish">
                            {loading ? 'Guardando...' : 'Finalizar'} <Sparkles size={20} />
                        </button>
                    )}
                </div>
            </div>

            <style>{`
        .onboarding-wizard {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          font-family: system-ui, sans-serif;
        }

        .wizard-container {
          background: white;
          border-radius: 24px;
          padding: 48px;
          max-width: 560px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .wizard-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .wizard-header h1 {
          font-size: 28px;
          margin: 16px 0 8px;
        }

        .wizard-header p {
          color: #6b7280;
        }

        .wizard-progress {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 40px;
        }

        .progress-dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e5e7eb;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.3s;
        }

        .progress-dot.active {
          background: #3b82f6;
          color: white;
        }

        .wizard-content {
          min-height: 320px;
        }

        .wizard-step {
          text-align: center;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #3b82f6;
        }

        .wizard-step h2 {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .wizard-step p {
          color: #6b7280;
          margin-bottom: 32px;
        }

        .logo-upload {
          margin: 24px 0;
        }

        .upload-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px;
          border: 2px dashed #d1d5db;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
          color: #6b7280;
        }

        .upload-area:hover {
          border-color: #3b82f6;
          background: #f8fafc;
        }

        .upload-area input {
          display: none;
        }

        .upload-hint {
          font-size: 12px;
          color: #9ca3af;
        }

        .logo-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .logo-preview img {
          max-width: 200px;
          max-height: 100px;
          object-fit: contain;
        }

        .logo-preview button {
          background: none;
          border: none;
          color: #3b82f6;
          cursor: pointer;
          font-weight: 500;
        }

        .color-picker {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .color-option {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 3px solid transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.2s;
        }

        .color-option:hover {
          transform: scale(1.1);
        }

        .color-option.selected {
          border-color: #1f2937;
        }

        .color-preview {
          padding: 20px;
          border-radius: 12px;
          color: white;
          font-weight: 500;
        }

        .contact-form {
          text-align: left;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
        }

        .input-group input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 16px;
          transition: border-color 0.2s;
        }

        .input-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .wizard-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .btn-back, .btn-skip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #6b7280;
          font-size: 15px;
          cursor: pointer;
        }

        .btn-back:hover, .btn-skip:hover {
          color: #374151;
        }

        .btn-next, .btn-finish {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #3b82f6;
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-next:hover, .btn-finish:hover {
          background: #2563eb;
        }

        .btn-finish:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        @media (max-width: 600px) {
          .onboarding-wizard { padding: 20px; }
          .wizard-container { padding: 32px 24px; }
        }
      `}</style>
        </div>
    );
};

export default OnboardingWizard;
