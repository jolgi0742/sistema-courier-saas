// DashboardPage.tsx - Dashboard principal con branding dinámico
import React from 'react';
import { useTenant } from '../contexts/TenantContext';
import {
    Package,
    Truck,
    Users,
    DollarSign,
    TrendingUp,
    AlertCircle,
    Clock,
    CheckCircle
} from 'lucide-react';

const DashboardPage: React.FC = () => {
    const { tenant, isWhiteLabel } = useTenant();
    const primaryColor = tenant?.branding?.primary_color || '#3b82f6';

    // Datos de ejemplo (en producción vendrían de la API)
    const stats = [
        { icon: Package, label: 'Paquetes Hoy', value: '127', color: primaryColor },
        { icon: Truck, label: 'En Tránsito', value: '45', color: '#10b981' },
        { icon: Users, label: 'Clientes Activos', value: '1,234', color: '#8b5cf6' },
        { icon: DollarSign, label: 'Ingresos Mes', value: '$45,890', color: '#f59e0b' }
    ];

    const recentPackages = [
        { id: 'PKG-001', client: 'Juan Pérez', status: 'En tránsito', time: 'Hace 5 min' },
        { id: 'PKG-002', client: 'María García', status: 'Entregado', time: 'Hace 15 min' },
        { id: 'PKG-003', client: 'Carlos López', status: 'En bodega', time: 'Hace 30 min' },
        { id: 'PKG-004', client: 'Ana Martínez', status: 'Pendiente', time: 'Hace 1 hora' }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Entregado': return <CheckCircle size={16} className="status-icon success" />;
            case 'En tránsito': return <Truck size={16} className="status-icon warning" />;
            case 'En bodega': return <Package size={16} className="status-icon info" />;
            default: return <Clock size={16} className="status-icon pending" />;
        }
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-left">
                    {tenant?.branding?.logo_url ? (
                        <img src={tenant.branding.logo_url} alt="Logo" className="header-logo" />
                    ) : (
                        <span className="header-title">{tenant?.branding?.company_name || 'Sistema Courier'}</span>
                    )}
                </div>
                <div className="header-right">
                    <span className="user-name">Admin</span>
                    <button className="btn-logout">Cerrar Sesión</button>
                </div>
            </header>

            {/* Main Content */}
            <main className="dashboard-main">
                {/* Stats Grid */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                                <stat.icon size={24} />
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="dashboard-grid">
                    <div className="card">
                        <div className="card-header">
                            <h3>Paquetes Recientes</h3>
                            <a href="/packages" style={{ color: primaryColor }}>Ver todos</a>
                        </div>
                        <div className="card-content">
                            {recentPackages.map((pkg, index) => (
                                <div key={index} className="package-item">
                                    <div className="package-info">
                                        <span className="package-id">{pkg.id}</span>
                                        <span className="package-client">{pkg.client}</span>
                                    </div>
                                    <div className="package-status">
                                        {getStatusIcon(pkg.status)}
                                        <span>{pkg.status}</span>
                                    </div>
                                    <span className="package-time">{pkg.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>Rendimiento</h3>
                            <TrendingUp size={20} style={{ color: '#10b981' }} />
                        </div>
                        <div className="card-content performance-grid">
                            <div className="performance-item">
                                <span className="perf-label">Entregas a tiempo</span>
                                <span className="perf-value success">94%</span>
                            </div>
                            <div className="performance-item">
                                <span className="perf-label">Satisfacción cliente</span>
                                <span className="perf-value success">4.8/5</span>
                            </div>
                            <div className="performance-item">
                                <span className="perf-label">Incidentes</span>
                                <span className="perf-value warning">3</span>
                            </div>
                            <div className="performance-item">
                                <span className="perf-label">Tiempo promedio entrega</span>
                                <span className="perf-value">2.3 días</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trial Notice - solo si está en trial */}
                {tenant?.status === 'trial' && (
                    <div className="trial-notice">
                        <AlertCircle size={20} />
                        <span>Tu período de prueba termina pronto. </span>
                        <a href="/account/billing" style={{ color: primaryColor }}>Actualizar plan</a>
                    </div>
                )}
            </main>

            <style>{`
        .dashboard {
          min-height: 100vh;
          background: #f3f4f6;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .dashboard-header {
          background: white;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .header-logo {
          max-height: 40px;
        }

        .header-title {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-name {
          color: #6b7280;
        }

        .btn-logout {
          padding: 8px 16px;
          background: #f3f4f6;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: #6b7280;
          transition: background 0.2s;
        }

        .btn-logout:hover {
          background: #e5e7eb;
        }

        .dashboard-main {
          padding: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          color: #6b7280;
          font-size: 14px;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .card-header {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .card-header a {
          font-size: 14px;
          text-decoration: none;
        }

        .card-content {
          padding: 16px 24px;
        }

        .package-item {
          display: flex;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .package-item:last-child {
          border-bottom: none;
        }

        .package-info {
          flex: 1;
        }

        .package-id {
          font-weight: 600;
          color: #1f2937;
          display: block;
        }

        .package-client {
          font-size: 14px;
          color: #6b7280;
        }

        .package-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #6b7280;
        }

        .status-icon.success { color: #10b981; }
        .status-icon.warning { color: #f59e0b; }
        .status-icon.info { color: #3b82f6; }
        .status-icon.pending { color: #6b7280; }

        .package-time {
          font-size: 12px;
          color: #9ca3af;
          margin-left: 16px;
        }

        .performance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .performance-item {
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
        }

        .perf-label {
          display: block;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .perf-value {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
        }

        .perf-value.success { color: #10b981; }
        .perf-value.warning { color: #f59e0b; }

        .trial-notice {
          margin-top: 24px;
          padding: 16px 20px;
          background: #fef3c7;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #92400e;
        }

        .trial-notice a {
          font-weight: 600;
        }
      `}</style>
        </div>
    );
};

export default DashboardPage;
