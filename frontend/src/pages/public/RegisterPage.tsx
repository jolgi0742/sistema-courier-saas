// RegisterPage.tsx - Página de registro de nuevas empresas
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Package,
    Building2,
    User,
    Mail,
    Lock,
    Globe,
    Check,
    AlertCircle,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';

interface FormData {
    company_name: string;
    subdomain: string;
    admin_name: string;
    admin_email: string;
    password: string;
    confirm_password: string;
}

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [subdomainStatus, setSubdomainStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle');

    const [formData, setFormData] = useState<FormData>({
        company_name: '',
        subdomain: '',
        admin_name: '',
        admin_email: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');

        // Auto-generar subdomain desde company_name
        if (name === 'company_name') {
            const subdomain = value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '')
                .slice(0, 30);
            setFormData(prev => ({ ...prev, subdomain }));
            if (subdomain.length >= 3) {
                checkSubdomain(subdomain);
            }
        }

        if (name === 'subdomain') {
            const cleanValue = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
            setFormData(prev => ({ ...prev, subdomain: cleanValue }));
            if (cleanValue.length >= 3) {
                checkSubdomain(cleanValue);
            }
        }
    };

    const checkSubdomain = async (subdomain: string) => {
        setSubdomainStatus('checking');
        try {
            const response = await fetch('/api/tenants/check-subdomain', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subdomain })
            });
            const data = await response.json();
            setSubdomainStatus(data.available ? 'available' : 'taken');
        } catch {
            setSubdomainStatus('idle');
        }
    };

    const validateStep1 = (): boolean => {
        if (!formData.company_name.trim()) {
            setError('Ingresa el nombre de tu empresa');
            return false;
        }
        if (formData.subdomain.length < 3) {
            setError('El subdominio debe tener al menos 3 caracteres');
            return false;
        }
        if (subdomainStatus === 'taken') {
            setError('Este subdominio no está disponible');
            return false;
        }
        return true;
    };

    const validateStep2 = (): boolean => {
        if (!formData.admin_name.trim()) {
            setError('Ingresa tu nombre');
            return false;
        }
        if (!formData.admin_email.includes('@')) {
            setError('Ingresa un email válido');
            return false;
        }
        if (formData.password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            return false;
        }
        if (formData.password !== formData.confirm_password) {
            setError('Las contraseñas no coinciden');
            return false;
        }
        return true;
    };

    const handleNext = () => {
        if (step === 1 && validateStep1()) {
            setStep(2);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep2()) return;

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/tenants/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.company_name,
                    subdomain: formData.subdomain,
                    admin_email: formData.admin_email,
                    admin_password: formData.password,
                    admin_name: formData.admin_name
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al crear la cuenta');
            }

            // Redirigir al wizard de configuración
            navigate(`/onboarding?tenant=${data.tenant.subdomain}`);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                {/* Left Panel - Branding */}
                <div className="register-brand">
                    <Link to="/" className="brand-logo">
                        <Package size={40} />
                        <span>Sistema Courier</span>
                    </Link>
                    <div className="brand-content">
                        <h2>Comienza tu prueba gratuita</h2>
                        <p>14 días gratis. Sin tarjeta de crédito.</p>
                        <ul className="brand-features">
                            <li><Check size={20} /> Configuración en minutos</li>
                            <li><Check size={20} /> Soporte incluido</li>
                            <li><Check size={20} /> Cancela cuando quieras</li>
                        </ul>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="register-form-container">
                    <div className="form-header">
                        <h1>Crear cuenta</h1>
                        <p>Paso {step} de 2</p>
                    </div>

                    {/* Progress */}
                    <div className="progress-bar">
                        <div className="progress-step active">1</div>
                        <div className="progress-line"></div>
                        <div className={`progress-step ${step === 2 ? 'active' : ''}`}>2</div>
                    </div>

                    {error && (
                        <div className="error-message">
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {step === 1 ? (
                            <div className="form-step">
                                <h3>Información de la empresa</h3>

                                <div className="input-group">
                                    <label>Nombre de la empresa</label>
                                    <div className="input-wrapper">
                                        <Building2 size={20} />
                                        <input
                                            type="text"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            placeholder="Mi Empresa de Courier"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Tu subdominio</label>
                                    <div className="input-wrapper subdomain-input">
                                        <Globe size={20} />
                                        <input
                                            type="text"
                                            name="subdomain"
                                            value={formData.subdomain}
                                            onChange={handleChange}
                                            placeholder="miempresa"
                                            required
                                        />
                                        <span className="subdomain-suffix">.sistemacourier.com</span>
                                    </div>
                                    {subdomainStatus === 'checking' && (
                                        <span className="subdomain-status checking">Verificando...</span>
                                    )}
                                    {subdomainStatus === 'available' && (
                                        <span className="subdomain-status available">
                                            <Check size={14} /> Disponible
                                        </span>
                                    )}
                                    {subdomainStatus === 'taken' && (
                                        <span className="subdomain-status taken">
                                            <AlertCircle size={14} /> No disponible
                                        </span>
                                    )}
                                </div>

                                <button type="button" onClick={handleNext} className="btn-next">
                                    Continuar <ArrowRight size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="form-step">
                                <button type="button" onClick={() => setStep(1)} className="btn-back">
                                    <ArrowLeft size={18} /> Atrás
                                </button>

                                <h3>Tu cuenta de administrador</h3>

                                <div className="input-group">
                                    <label>Tu nombre</label>
                                    <div className="input-wrapper">
                                        <User size={20} />
                                        <input
                                            type="text"
                                            name="admin_name"
                                            value={formData.admin_name}
                                            onChange={handleChange}
                                            placeholder="Juan Pérez"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Email</label>
                                    <div className="input-wrapper">
                                        <Mail size={20} />
                                        <input
                                            type="email"
                                            name="admin_email"
                                            value={formData.admin_email}
                                            onChange={handleChange}
                                            placeholder="juan@miempresa.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Contraseña</label>
                                    <div className="input-wrapper">
                                        <Lock size={20} />
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Mínimo 8 caracteres"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Confirmar contraseña</label>
                                    <div className="input-wrapper">
                                        <Lock size={20} />
                                        <input
                                            type="password"
                                            name="confirm_password"
                                            value={formData.confirm_password}
                                            onChange={handleChange}
                                            placeholder="Repite la contraseña"
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" disabled={loading} className="btn-submit">
                                    {loading ? 'Creando cuenta...' : 'Crear Cuenta Gratis'}
                                </button>

                                <p className="terms">
                                    Al crear una cuenta, aceptas nuestros{' '}
                                    <a href="/terms">Términos de Servicio</a> y{' '}
                                    <a href="/privacy">Política de Privacidad</a>.
                                </p>
                            </div>
                        )}
                    </form>

                    <div className="login-link">
                        ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
                    </div>
                </div>
            </div>

            <style>{`
        .register-page {
          min-height: 100vh;
          background: #f3f4f6;
          font-family: system-ui, sans-serif;
        }

        .register-container {
          display: flex;
          min-height: 100vh;
        }

        .register-brand {
          flex: 1;
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          color: white;
          padding: 60px;
          display: flex;
          flex-direction: column;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          margin-bottom: 80px;
        }

        .brand-content {
          margin-top: auto;
          margin-bottom: auto;
        }

        .brand-content h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .brand-content p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .brand-features {
          list-style: none;
        }

        .brand-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          padding: 12px 0;
          opacity: 0.9;
        }

        .register-form-container {
          flex: 1;
          background: white;
          padding: 60px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .form-header p {
          color: #6b7280;
          margin-bottom: 32px;
        }

        .progress-bar {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
        }

        .progress-step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e5e7eb;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .progress-step.active {
          background: #3b82f6;
          color: white;
        }

        .progress-line {
          flex: 1;
          height: 2px;
          background: #e5e7eb;
          margin: 0 12px;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .form-step h3 {
          font-size: 20px;
          margin-bottom: 24px;
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

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          transition: border-color 0.2s;
        }

        .input-wrapper:focus-within {
          border-color: #3b82f6;
        }

        .input-wrapper svg {
          color: #9ca3af;
        }

        .input-wrapper input {
          flex: 1;
          padding: 14px 0;
          border: none;
          font-size: 16px;
          background: transparent;
        }

        .input-wrapper input:focus {
          outline: none;
        }

        .subdomain-input {
          flex-wrap: wrap;
        }

        .subdomain-suffix {
          color: #6b7280;
          font-size: 14px;
        }

        .subdomain-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          margin-top: 8px;
        }

        .subdomain-status.checking { color: #6b7280; }
        .subdomain-status.available { color: #10b981; }
        .subdomain-status.taken { color: #dc2626; }

        .btn-next, .btn-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: 24px;
        }

        .btn-next:hover, .btn-submit:hover {
          background: #2563eb;
        }

        .btn-submit:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        .btn-back {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .btn-back:hover {
          color: #374151;
        }

        .terms {
          font-size: 13px;
          color: #6b7280;
          text-align: center;
          margin-top: 16px;
        }

        .terms a {
          color: #3b82f6;
        }

        .login-link {
          text-align: center;
          margin-top: 32px;
          color: #6b7280;
        }

        .login-link a {
          color: #3b82f6;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .register-brand { display: none; }
          .register-form-container { padding: 40px 24px; }
        }
      `}</style>
        </div>
    );
};

export default RegisterPage;
