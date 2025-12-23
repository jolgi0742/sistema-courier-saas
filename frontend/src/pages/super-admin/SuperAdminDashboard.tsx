// SuperAdminDashboard.tsx - Dashboard principal de Super Admin
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Building2,
    Users,
    DollarSign,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    Clock,
    Plus,
    Search,
    MoreVertical
} from 'lucide-react';

interface DashboardData {
    summary: {
        total_tenants: number;
        active_tenants: number;
        trial_tenants: number;
        mrr: number;
        new_this_month: number;
        churn_rate: number;
    };
    by_status: Array<{ status: string; count: number }>;
    by_plan: Array<{ plan_id: string; count: number }>;
    revenue_by_month: Array<{ month: string; revenue: number }>;
    recent_tenants: Array<{
        id: string;
        name: string;
        subdomain: string;
        status: string;
        plan_id: string;
        created_at: string;
        company_name?: string;
        logo_url?: string;
    }>;
}

const SuperAdminDashboard: React.FC = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const response = await fetch('/api/super-admin/dashboard', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching dashboard:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Cargando dashboard...</div>;
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return '#10b981';
            case 'trial': return '#f59e0b';
            case 'suspended': return '#ef4444';
            case 'cancelled': return '#6b7280';
            default: return '#3b82f6';
        }
    };

    return (
        <div className="super-admin-dashboard">
            {/* Header */}
            <header className="dashboard-header">
                <div>
                    <h1>Super Admin Dashboard</h1>
                    <p>Sistema Courier SaaS - Panel de Control</p>
                </div>
                <div className="header-actions">
                    <Link to="/super-admin/tenants/new" className="btn btn-primary">
                        <Plus size={20} />
                        Nuevo Tenant
                    </Link>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card primary">
                    <div className="stat-icon"><Building2 size={28} /></div>
                    <div className="stat-content">
                        <div className="stat-value">{data?.summary.total_tenants || 0}</div>
                        <div className="stat-label">Total Empresas</div>
                    </div>
                </div>

                <div className="stat-card success">
                    <div className="stat-icon"><Users size={28} /></div>
                    <div className="stat-content">
                        <div className="stat-value">{data?.summary.active_tenants || 0}</div>
                        <div className="stat-label">Activas</div>
                        <div className="stat-sub">{data?.summary.trial_tenants || 0} en trial</div>
                    </div>
                </div>

                <div className="stat-card warning">
                    <div className="stat-icon"><DollarSign size={28} /></div>
                    <div className="stat-content">
                        <div className="stat-value">{formatCurrency(data?.summary.mrr || 0)}</div>
                        <div className="stat-label">MRR</div>
                        <div className="stat-sub">+{data?.summary.new_this_month || 0} este mes</div>
                    </div>
                </div>

                <div className="stat-card danger">
                    <div className="stat-icon"><TrendingDown size={28} /></div>
                    <div className="stat-content">
                        <div className="stat-value">{data?.summary.churn_rate || 0}%</div>
                        <div className="stat-label">Churn Rate</div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="content-grid">
                {/* Recent Tenants */}
                <div className="card">
                    <div className="card-header">
                        <h3>Empresas Recientes</h3>
                        <Link to="/super-admin/tenants" className="link">Ver todas</Link>
                    </div>
                    <div className="card-content">
                        {data?.recent_tenants.map((tenant) => (
                            <div key={tenant.id} className="tenant-row">
                                <div className="tenant-avatar">
                                    {tenant.logo_url ? (
                                        <img src={tenant.logo_url} alt={tenant.name} />
                                    ) : (
                                        <span>{tenant.name.charAt(0)}</span>
                                    )}
                                </div>
                                <div className="tenant-info">
                                    <div className="tenant-name">{tenant.company_name || tenant.name}</div>
                                    <div className="tenant-subdomain">{tenant.subdomain}.sistemacourier.com</div>
                                </div>
                                <div className="tenant-status" style={{ color: getStatusColor(tenant.status) }}>
                                    {tenant.status}
                                </div>
                                <div className="tenant-plan">{tenant.plan_id}</div>
                                <Link to={`/super-admin/tenants/${tenant.id}`} className="btn-icon">
                                    <MoreVertical size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Revenue Chart */}
                <div className="card">
                    <div className="card-header">
                        <h3>Ingresos Mensuales</h3>
                        <TrendingUp size={20} className="success" />
                    </div>
                    <div className="card-content chart-container">
                        <div className="simple-chart">
                            {data?.revenue_by_month.map((item, index) => (
                                <div key={index} className="chart-bar">
                                    <div
                                        className="bar"
                                        style={{
                                            height: `${(item.revenue / 15000) * 100}%`,
                                            backgroundColor: '#3b82f6'
                                        }}
                                    ></div>
                                    <span className="bar-label">{item.month}</span>
                                    <span className="bar-value">{formatCurrency(item.revenue)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Distribution by Plan */}
                <div className="card small">
                    <div className="card-header">
                        <h3>Por Plan</h3>
                    </div>
                    <div className="card-content">
                        {data?.by_plan.map((item, index) => (
                            <div key={index} className="distribution-row">
                                <span className="dist-label">{item.plan_id}</span>
                                <div className="dist-bar">
                                    <div
                                        className="dist-fill"
                                        style={{
                                            width: `${(item.count / (data?.summary.total_tenants || 1)) * 100}%`,
                                            backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'][index % 4]
                                        }}
                                    ></div>
                                </div>
                                <span className="dist-count">{item.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card small">
                    <div className="card-header">
                        <h3>Acciones Rápidas</h3>
                    </div>
                    <div className="card-content quick-actions">
                        <Link to="/super-admin/tenants" className="quick-action">
                            <Building2 size={24} />
                            <span>Gestionar Empresas</span>
                        </Link>
                        <Link to="/super-admin/subscriptions" className="quick-action">
                            <DollarSign size={24} />
                            <span>Ver Suscripciones</span>
                        </Link>
                        <Link to="/super-admin/plans" className="quick-action">
                            <TrendingUp size={24} />
                            <span>Configurar Planes</span>
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        .super-admin-dashboard {
          min-height: 100vh;
          background: #0f172a;
          color: #f1f5f9;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .dashboard-header {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #1e293b;
        }

        .dashboard-header h1 {
          font-size: 28px;
          font-weight: 700;
        }

        .dashboard-header p {
          color: #64748b;
          margin-top: 4px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          background: #2563eb;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 24px 32px;
        }

        @media (max-width: 1200px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-card {
          background: #1e293b;
          padding: 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-card.primary .stat-icon { background: #3b82f620; color: #3b82f6; }
        .stat-card.success .stat-icon { background: #10b98120; color: #10b981; }
        .stat-card.warning .stat-icon { background: #f59e0b20; color: #f59e0b; }
        .stat-card.danger .stat-icon { background: #ef444420; color: #ef4444; }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 14px;
        }

        .stat-sub {
          color: #64748b;
          font-size: 12px;
          margin-top: 2px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          padding: 0 32px 32px;
        }

        @media (max-width: 1024px) {
          .content-grid { grid-template-columns: 1fr; }
        }

        .card {
          background: #1e293b;
          border-radius: 16px;
          overflow: hidden;
        }

        .card.small {
          max-height: 300px;
        }

        .card-header {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #334155;
        }

        .card-header h3 {
          font-size: 18px;
          font-weight: 600;
        }

        .link {
          color: #3b82f6;
          font-size: 14px;
          text-decoration: none;
        }

        .success { color: #10b981; }

        .card-content {
          padding: 16px 24px;
        }

        .tenant-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid #334155;
        }

        .tenant-row:last-child {
          border-bottom: none;
        }

        .tenant-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          overflow: hidden;
        }

        .tenant-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tenant-info {
          flex: 1;
        }

        .tenant-name {
          font-weight: 500;
        }

        .tenant-subdomain {
          font-size: 12px;
          color: #64748b;
        }

        .tenant-status {
          font-size: 12px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .tenant-plan {
          font-size: 12px;
          color: #94a3b8;
          background: #334155;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: capitalize;
        }

        .btn-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: background 0.2s;
        }

        .btn-icon:hover {
          background: #334155;
        }

        .chart-container {
          height: 200px;
        }

        .simple-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 100%;
          gap: 8px;
        }

        .chart-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          height: 100%;
        }

        .bar {
          width: 100%;
          border-radius: 4px 4px 0 0;
          min-height: 4px;
          margin-top: auto;
        }

        .bar-label {
          font-size: 11px;
          color: #64748b;
          margin-top: 8px;
        }

        .bar-value {
          font-size: 10px;
          color: #94a3b8;
        }

        .distribution-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
        }

        .dist-label {
          width: 80px;
          font-size: 14px;
          text-transform: capitalize;
        }

        .dist-bar {
          flex: 1;
          height: 8px;
          background: #334155;
          border-radius: 4px;
          overflow: hidden;
        }

        .dist-fill {
          height: 100%;
          border-radius: 4px;
        }

        .dist-count {
          width: 30px;
          text-align: right;
          font-weight: 600;
        }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-action {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #334155;
          border-radius: 8px;
          color: #f1f5f9;
          text-decoration: none;
          transition: background 0.2s;
        }

        .quick-action:hover {
          background: #475569;
        }

        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: #94a3b8;
        }
      `}</style>
        </div>
    );
};

export default SuperAdminDashboard;
