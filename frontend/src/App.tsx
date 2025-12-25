// App.tsx - Componente principal con rutas completas
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTenant } from './contexts/TenantContext';
import { AuthProvider } from './shared/hooks/useAuth';
import ProtectedRoute from './shared/components/ProtectedRoute';

// Páginas públicas
import LandingPage from './pages/public/LandingPage';
import RegisterPage from './pages/public/RegisterPage';
import OnboardingWizard from './pages/public/OnboardingWizard';

// Páginas de Tenant
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PackagesPage from './pages/PackagesPage';
import NewPackagePage from './pages/NewPackagePage';
import PackageDetailPage from './pages/PackageDetailPage';
import ClientsPage from './pages/ClientsPage';
import CouriersPage from './pages/CouriersPage';
import RatesPage from './pages/RatesPage';
import IncidentsPage from './pages/IncidentsPage';
import FuelPage from './pages/FuelPage';
import VehiclesPage from './pages/VehiclesPage';
import MaintenancePage from './pages/MaintenancePage';
import DocumentsPage from './pages/DocumentsPage';
import WarehousePage from './pages/WarehousePage';
import ArrivalsPage from './pages/ArrivalsPage';
import ManifestsPage from './pages/ManifestsPage';
import ShippersPage from './pages/ShippersPage';
import ExpensesPage from './pages/ExpensesPage';
import TenantLoadingPage from './pages/TenantLoadingPage';
import TenantErrorPage from './pages/TenantErrorPage';

// Páginas de Account
import WhiteLabelSettings from './pages/account/WhiteLabelSettings';

// Páginas de Super Admin
import SuperAdminDashboard from './pages/super-admin/SuperAdminDashboard';
import TenantsManagement from './pages/super-admin/TenantsManagement';
import TenantDetail from './pages/super-admin/TenantDetail';

const App: React.FC = () => {
    const { tenant: _tenant, loading, error } = useTenant();
    const location = useLocation();

    // Rutas que no requieren tenant (públicas del SaaS principal)
    const publicPaths = ['/', '/register', '/onboarding', '/pricing', '/about'];
    const isPublicPath = publicPaths.some(p => location.pathname === p || location.pathname.startsWith('/onboarding'));

    // En el dominio principal, mostrar landing/registro
    const isMainDomain = window.location.hostname === 'sistemacourier.com' ||
        window.location.hostname === 'www.sistemacourier.com' ||
        window.location.hostname === 'localhost';

    // Si es ruta pública en dominio principal, no necesita tenant
    if (isMainDomain && isPublicPath) {
        return (
            <div className="app">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/onboarding" element={<OnboardingWizard />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        );
    }

    // Mostrar loading mientras se resuelve el tenant
    if (loading) {
        return <TenantLoadingPage />;
    }

    // Mostrar error si no se pudo resolver el tenant
    if (error && !isMainDomain) {
        return <TenantErrorPage message={error} />;
    }

    return (
        <AuthProvider>
            <div className="app">
                <Routes>
                    {/* Rutas públicas */}
                    <Route path="/login" element={<LoginPage />} />

                    {/* Rutas protegidas - requieren autenticación */}
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/packages" element={
                        <ProtectedRoute>
                            <PackagesPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/packages/new" element={
                        <ProtectedRoute>
                            <NewPackagePage />
                        </ProtectedRoute>
                    } />

                    <Route path="/packages/:id" element={
                        <ProtectedRoute>
                            <PackageDetailPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/clients" element={
                        <ProtectedRoute>
                            <ClientsPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/couriers" element={
                        <ProtectedRoute>
                            <CouriersPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/rates" element={
                        <ProtectedRoute>
                            <RatesPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/incidents" element={
                        <ProtectedRoute>
                            <IncidentsPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/fuel" element={
                        <ProtectedRoute>
                            <FuelPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/vehicles" element={
                        <ProtectedRoute>
                            <VehiclesPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/maintenance" element={
                        <ProtectedRoute>
                            <MaintenancePage />
                        </ProtectedRoute>
                    } />

                    <Route path="/documents" element={
                        <ProtectedRoute>
                            <DocumentsPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/warehouse" element={
                        <ProtectedRoute>
                            <WarehousePage />
                        </ProtectedRoute>
                    } />

                    <Route path="/arrivals" element={
                        <ProtectedRoute>
                            <ArrivalsPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/manifests" element={
                        <ProtectedRoute>
                            <ManifestsPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/shippers" element={
                        <ProtectedRoute>
                            <ShippersPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/expenses" element={
                        <ProtectedRoute>
                            <ExpensesPage />
                        </ProtectedRoute>
                    } />

                    {/* Account Settings */}
                    <Route path="/account/white-label" element={
                        <ProtectedRoute>
                            <WhiteLabelSettings />
                        </ProtectedRoute>
                    } />

                    {/* Super Admin (solo para administradores del SaaS) */}
                    <Route path="/super-admin" element={
                        <ProtectedRoute>
                            <SuperAdminDashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/super-admin/tenants" element={
                        <ProtectedRoute>
                            <TenantsManagement />
                        </ProtectedRoute>
                    } />
                    <Route path="/super-admin/tenants/:id" element={
                        <ProtectedRoute>
                            <TenantDetail />
                        </ProtectedRoute>
                    } />

                    {/* Redirección por defecto */}
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </div>
        </AuthProvider>
    );
};

export default App;
