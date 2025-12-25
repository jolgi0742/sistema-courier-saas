// Sidebar.tsx - Menú lateral de navegación
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Package,
    Users,
    Truck,
    DollarSign,
    AlertCircle,
    Fuel,
    Car,
    Wrench,
    FileText,
    Warehouse,
    PackageCheck,
    ClipboardList,
    UserPlus,
    Receipt,
    Building2
} from 'lucide-react';

const Sidebar: React.FC = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/packages', icon: Package, label: 'Paquetes' },
        { path: '/clients', icon: Users, label: 'Clientes' },
        { path: '/couriers', icon: Truck, label: 'Couriers' },
        { path: '/rates', icon: DollarSign, label: 'Tarifas' },
        { path: '/incidents', icon: AlertCircle, label: 'Incidencias' },
        { path: '/fuel', icon: Fuel, label: 'Combustible' },
        { path: '/vehicles', icon: Car, label: 'Vehículos' },
        { path: '/maintenance', icon: Wrench, label: 'Mantenimiento' },
        { path: '/documents', icon: FileText, label: 'Documentos' },
        { path: '/warehouse', icon: Warehouse, label: 'Almacén' },
        { path: '/arrivals', icon: PackageCheck, label: 'Llegadas' },
        { path: '/manifests', icon: ClipboardList, label: 'Manifiestos' },
        { path: '/shippers', icon: UserPlus, label: 'Remitentes' },
        { path: '/expenses', icon: Receipt, label: 'Gastos' },
        { path: '/suppliers', icon: Building2, label: 'Proveedores' }
    ];

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Sistema Courier</h2>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-item ${active ? 'active' : ''}`}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <style>{`
        .sidebar {
          width: 260px;
          height: 100vh;
          background: #1f2937;
          color: white;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          overflow-y: auto;
          z-index: 1000;
        }

        .sidebar-header {
          padding: 24px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-header h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: white;
        }

        .sidebar-nav {
          flex: 1;
          padding: 16px 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          color: #d1d5db;
          text-decoration: none;
          transition: all 0.2s;
          border-left: 3px solid transparent;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .nav-item.active {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-left-color: #3b82f6;
        }

        .nav-item span {
          font-size: 14px;
          font-weight: 500;
        }

        /* Scrollbar styling */
        .sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .sidebar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
        </div>
    );
};

export default Sidebar;
