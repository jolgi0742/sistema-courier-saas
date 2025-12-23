// LoginPage.tsx - Página de login con branding dinámico
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTenant } from '../contexts/TenantContext';
import { useAuth } from '../shared/hooks/useAuth';
import { Mail, Lock, LogIn } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { tenant, isWhiteLabel } = useTenant();
  const { login, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Obtener la ruta de redirección si existe
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    clearError();

    try {
      await login(email, password);
      // Redirigir a la ruta original o al dashboard
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  // Obtener colores del branding
  const primaryColor = tenant?.branding?.primary_color || '#3b82f6';

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo */}
        <div className="login-logo">
          {tenant?.branding?.logo_url ? (
            <img src={tenant.branding.logo_url} alt={tenant.branding.company_name} />
          ) : (
            <div className="logo-placeholder">
              {tenant?.branding?.company_name?.charAt(0) || 'C'}
            </div>
          )}
        </div>

        {/* Título */}
        <h1>{tenant?.branding?.company_name || 'Sistema Courier'}</h1>
        {tenant?.branding?.tagline && <p className="tagline">{tenant.branding.tagline}</p>}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <Mail size={20} className="input-icon" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <Lock size={20} className="input-icon" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-login"
            disabled={loading}
            style={{ backgroundColor: primaryColor }}
          >
            {loading ? 'Iniciando sesión...' : (
              <>
                <LogIn size={20} />
                Iniciar Sesión
              </>
            )}
          </button>

          <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
        </form>

        {/* Footer - solo si NO es White Label */}
        {!isWhiteLabel && (
          <div className="login-footer">
            <p>Powered by <a href="https://sistemacourier.com">Sistema Courier</a></p>
          </div>
        )}
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${primaryColor}22 0%, ${primaryColor}44 100%);
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .login-container {
          background: white;
          padding: 48px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 420px;
          text-align: center;
        }
        
        .login-logo img {
          max-width: 180px;
          max-height: 60px;
          margin-bottom: 24px;
        }
        
        .logo-placeholder {
          width: 80px;
          height: 80px;
          background: ${primaryColor};
          color: white;
          font-size: 36px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          margin: 0 auto 24px;
        }
        
        h1 {
          font-size: 28px;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .tagline {
          color: #6b7280;
          margin-bottom: 32px;
        }
        
        .error-message {
          background: #fef2f2;
          color: #dc2626;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 14px;
        }
        
        .input-group {
          position: relative;
          margin-bottom: 16px;
        }
        
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        
        input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 16px;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        
        input:focus {
          outline: none;
          border-color: ${primaryColor};
        }
        
        .btn-login {
          width: 100%;
          padding: 14px;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity 0.2s;
        }
        
        .btn-login:hover {
          opacity: 0.9;
        }
        
        .btn-login:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .forgot-password {
          display: block;
          margin-top: 16px;
          color: ${primaryColor};
          text-decoration: none;
          font-size: 14px;
        }
        
        .forgot-password:hover {
          text-decoration: underline;
        }
        
        .login-footer {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
          color: #9ca3af;
          font-size: 14px;
        }
        
        .login-footer a {
          color: ${primaryColor};
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
