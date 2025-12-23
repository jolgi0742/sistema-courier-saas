// ProtectedRoute.tsx - Componente para proteger rutas que requieren autenticación
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo?: string;
}

const ProtectedRoute = ({ children, redirectTo = '/login' }: ProtectedRouteProps) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // Mostrar loading mientras se verifica la autenticación
    if (loading) {
        return (
            <div className="loading-container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: '#f3f4f6'
            }}>
                <div className="loading-spinner" style={{
                    width: '48px',
                    height: '48px',
                    border: '4px solid #e5e7eb',
                    borderTopColor: '#3b82f6',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }} />
                <style>{`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    // Si no está autenticado, redirigir a login
    if (!user) {
        // Guardar la ubicación actual para redirigir después del login
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    // Si está autenticado, mostrar el contenido
    return <>{children}</>;
};

export default ProtectedRoute;
