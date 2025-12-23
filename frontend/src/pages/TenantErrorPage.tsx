// TenantErrorPage.tsx - Página de error cuando no se encuentra el tenant
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
    message: string;
}

const TenantErrorPage: React.FC<Props> = ({ message }) => {
    return (
        <div className="error-page">
            <div className="error-container">
                <div className="error-icon">
                    <AlertTriangle size={64} />
                </div>
                <h1>No se pudo cargar</h1>
                <p className="error-message">{message}</p>
                <div className="error-actions">
                    <button onClick={() => window.location.reload()} className="btn-retry">
                        Intentar de nuevo
                    </button>
                    <a href="https://sistemacourier.com" className="btn-home">
                        Ir al inicio
                    </a>
                </div>
            </div>

            <style>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .error-container {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          max-width: 400px;
        }
        
        .error-icon {
          color: #dc2626;
          margin-bottom: 20px;
        }
        
        h1 {
          font-size: 24px;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .error-message {
          color: #6b7280;
          margin-bottom: 24px;
        }
        
        .error-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        
        .btn-retry {
          padding: 10px 20px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s;
        }
        
        .btn-retry:hover {
          background: #2563eb;
        }
        
        .btn-home {
          padding: 10px 20px;
          color: #6b7280;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.2s;
        }
        
        .btn-home:hover {
          background: #f3f4f6;
        }
      `}</style>
        </div>
    );
};

export default TenantErrorPage;
