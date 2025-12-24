// DashboardPage.tsx - Dashboard principal con branding dinámico
import React, { useState, useEffect } from 'react';
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

interface DashboardStats {
  packagesToday: number;
  packagesInTransit: number;
  activeClients: number;
  monthlyRevenue: number;
}

interface RecentPackage {
  id: string;
  tracking_number: string;
  client_name: string;
  status: string;
  created_at: string;
}

const DashboardPage: React.FC = () => {
  const { tenant, isWhiteLabel } = useTenant();
  const primaryColor = tenant?.branding?.primary_color || '#3b82f6';

  const [stats, setStats] = useState<DashboardStats>({
    packagesToday: 0,
    packagesInTransit: 0,
    activeClients: 0,
    monthlyRevenue: 0
  });
  const [recentPackages, setRecentPackages] = useState<RecentPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, [tenant]);

  const fetchDashboardData = async () => {
    if (!tenant) return;

    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL;

      // Fetch stats
      const statsRes = await fetch(`${apiUrl}/api/dashboard/stats`, {
        headers: {
          'X-Tenant-ID': tenant.id
        }
      });
      const statsData = await statsRes.json();
      setStats(statsData);

      // Fetch recent packages
      const packagesRes = await fetch(`${apiUrl}/api/dashboard/recent-packages`, {
        headers: {
          'X-Tenant-ID': tenant.id
        }
      });
      const packagesData = await packagesRes.json();
      setRecentPackages(packagesData);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Hace un momento';
    if (diffMins < 60) return `Hace ${diffMins} min`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
    const diffDays = Math.floor(diffHours / 24);
    return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
  };

  const getStatusLabel = (status: string) => {
    const statusMap: Record<string, string> = {
      'pending': 'Pendiente',
      'processing': 'Procesando',
      'assigned': 'Asignado',
      'in_transit': 'En tránsito',
      'out_for_delivery': 'En reparto',
      'delivered': 'Entregado',
      'cancelled': 'Cancelado'
    };
    return statusMap[status] || status;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle size={16} className="status-icon success" />;
      case 'in_transit':
      case 'out_for_delivery': return <Truck size={16} className="status-icon warning" />;
      case 'assigned':
      case 'processing': return <Package size={16} className="status-icon info" />;
      default: return <Clock size={16} className="status-icon pending" />;
    }
  };

  const statsCards = [
    { icon: Package, label: 'Paquetes Hoy', value: stats.packagesToday.toString(), color: primaryColor },
    { icon: Truck, label: 'En Tránsito', value: stats.packagesInTransit.toString(), color: '#10b981' },
    { icon: Users, label: 'Clientes Activos', value: stats.activeClients.toString(), color: '#8b5cf6' },
    { icon: DollarSign, label: 'Ingresos Mes', value: formatCurrency(stats.monthlyRevenue), color: '#f59e0b' }
  ];

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
          {statsCards.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                <stat.icon size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{loading ? '...' : stat.value}</div>
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
              {loading ? (
                <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>
                  Cargando...
                </div>
              ) : recentPackages.length === 0 ? (
                <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>
                  No hay paquetes recientes
                </div>
              ) : (
                recentPackages.slice(0, 4).map((pkg) => (
                  <div key={pkg.id} className="package-item">
                    <div className="package-info">
                      <span className="package-id">{pkg.tracking_number}</span>
                      <span className="package-client">{pkg.client_name || 'Sin cliente'}</span>
                    </div>
                    <div className="package-status">
                      {getStatusIcon(pkg.status)}
                      <span>{getStatusLabel(pkg.status)}</span>
                    </div>
                    <span className="package-time">{getTimeAgo(pkg.created_at)}</span>
                  </div>
                ))
              )}
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
