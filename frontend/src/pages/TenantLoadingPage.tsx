// TenantLoadingPage.tsx - Página de carga mientras se resuelve el tenant
import React from 'react';

const TenantLoadingPage: React.FC = () => {
    return (
        <div className="loading-page">
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <h2>Cargando...</h2>
                <p>Preparando tu espacio de trabajo</p>
            </div>

            <style>{`
        .loading-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .loading-container {
          text-align: center;
          color: white;
        }
        
        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          margin: 0 auto 20px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        h2 {
          font-size: 24px;
          margin-bottom: 8px;
        }
        
        p {
          opacity: 0.8;
        }
      `}</style>
        </div>
    );
};

export default TenantLoadingPage;
