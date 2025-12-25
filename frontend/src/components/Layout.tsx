// Layout.tsx - Layout principal con Sidebar y Header
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { LogOut, User } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any auth data
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <div className="layout">
            <Sidebar />

            <div className="main-content">
                <header className="top-header">
                    <div className="header-left">
                        {/* Breadcrumbs or page title can go here */}
                    </div>

                    <div className="header-right">
                        <div className="user-menu">
                            <User size={20} />
                            <span>Admin</span>
                        </div>
                        <button onClick={handleLogout} className="logout-btn">
                            <LogOut size={18} />
                            <span>Cerrar Sesión</span>
                        </button>
                    </div>
                </header>

                <main className="page-content">
                    {children}
                </main>
            </div>

            <style>{`
        .layout {
          display: flex;
          min-height: 100vh;
          background: #f3f4f6;
        }

        .main-content {
          flex: 1;
          margin-left: 260px;
          display: flex;
          flex-direction: column;
        }

        .top-header {
          height: 64px;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-left {
          flex: 1;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          background: #f3f4f6;
          color: #1f2937;
          font-size: 14px;
          font-weight: 500;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          background: #ef4444;
          color: white;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .logout-btn:hover {
          background: #dc2626;
        }

        .page-content {
          flex: 1;
          padding: 0;
          overflow-y: auto;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .main-content {
            margin-left: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default Layout;
