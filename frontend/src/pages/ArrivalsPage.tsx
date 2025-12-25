// ArrivalsPage.tsx - Página de registro de llegadas
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Package, CheckCircle, AlertTriangle, XCircle, Scan } from 'lucide-react';

interface Arrival {
    id: string;
    package_id: string;
    tracking_number: string;
    sender_name: string | null;
    receiver_name: string | null;
    condition_status: string;
    notes: string | null;
    arrived_at: string;
    receiver_name_user: string | null;
}

interface Stats {
    total: number;
    good: number;
    damaged: number;
    incomplete: number;
}

const ArrivalsPage: React.FC = () => {
    const { tenant } = useTenant();
    const [arrivals, setArrivals] = useState<Arrival[]>([]);
    const [todayArrivals, setTodayArrivals] = useState<Arrival[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [trackingInput, setTrackingInput] = useState('');
    const [registering, setRegistering] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    useEffect(() => {
        if (tenant) {
            fetchArrivals();
            fetchTodayArrivals();
            fetchStats();
        }
    }, [tenant]);

    const fetchArrivals = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/arrivals`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setArrivals(data.arrivals || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchTodayArrivals = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/arrivals/today`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setTodayArrivals(data.arrivals || []);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchStats = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const today = new Date().toISOString().split('T')[0];
            const response = await fetch(`${apiUrl}/api/arrivals/stats?date=${today}`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleRegisterArrival = async () => {
        if (!tenant || !trackingInput.trim()) return;

        try {
            setRegistering(true);
            setMessage(null);
            const apiUrl = import.meta.env.VITE_API_URL;

            const response = await fetch(`${apiUrl}/api/arrivals`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Tenant-ID': tenant.id
                },
                body: JSON.stringify({
                    trackingNumber: trackingInput,
                    condition: 'good'
                })
            });

            if (response.ok) {
                setMessage({ type: 'success', text: `Paquete ${trackingInput} registrado exitosamente` });
                setTrackingInput('');
                fetchArrivals();
                fetchTodayArrivals();
                fetchStats();
            } else {
                const error = await response.json();
                setMessage({ type: 'error', text: error.error || 'Error registrando llegada' });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage({ type: 'error', text: 'Error registrando llegada' });
        } finally {
            setRegistering(false);
        }
    };

    const getConditionIcon = (condition: string) => {
        switch (condition) {
            case 'good': return <CheckCircle size={16} />;
            case 'damaged': return <AlertTriangle size={16} />;
            case 'incomplete': return <XCircle size={16} />;
            default: return null;
        }
    };

    const getConditionLabel = (condition: string) => {
        const labels: Record<string, string> = {
            'good': 'Bueno',
            'damaged': 'Dañado',
            'incomplete': 'Incompleto'
        };
        return labels[condition] || condition;
    };

    return (
        <div className="arrivals-page">
            <div className="page-header">
                <div>
                    <h1>Registro de Llegadas</h1>
                    <p>{todayArrivals.length} llegadas hoy</p>
                </div>
            </div>

            {/* Estadísticas del día */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Package size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Hoy</p>
                            <p className="stat-value">{stats.total}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <CheckCircle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">En Buen Estado</p>
                            <p className="stat-value">{stats.good}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Dañados</p>
                            <p className="stat-value">{stats.damaged}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                            <XCircle size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Incompletos</p>
                            <p className="stat-value">{stats.incomplete}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Registro rápido */}
            <div className="register-section">
                <h2>Registrar Llegada</h2>
                <div className="register-box">
                    <div className="scan-icon">
                        <Scan size={32} />
                    </div>
                    <input
                        type="text"
                        placeholder="Escanear o ingresar tracking number..."
                        value={trackingInput}
                        onChange={(e) => setTrackingInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleRegisterArrival()}
                        disabled={registering}
                        autoFocus
                    />
                    <button onClick={handleRegisterArrival} disabled={registering || !trackingInput.trim()}>
                        {registering ? 'Registrando...' : 'Registrar'}
                    </button>
                </div>
                {message && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}
            </div>

            {/* Llegadas de hoy */}
            <div className="today-section">
                <h2>Llegadas de Hoy ({todayArrivals.length})</h2>
                {todayArrivals.length === 0 ? (
                    <div className="empty-state">
                        <Package size={48} />
                        <p>No hay llegadas registradas hoy</p>
                    </div>
                ) : (
                    <div className="arrivals-grid">
                        {todayArrivals.map((arrival) => (
                            <div key={arrival.id} className="arrival-card">
                                <div className="arrival-header">
                                    <span className="tracking">{arrival.tracking_number}</span>
                                    <span className={`condition-badge condition-${arrival.condition_status}`}>
                                        {getConditionIcon(arrival.condition_status)}
                                        {getConditionLabel(arrival.condition_status)}
                                    </span>
                                </div>
                                <div className="arrival-body">
                                    <p><strong>De:</strong> {arrival.sender_name || '-'}</p>
                                    <p><strong>Para:</strong> {arrival.receiver_name || '-'}</p>
                                    <p className="time">{new Date(arrival.arrived_at).toLocaleTimeString('es-CR')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Historial completo */}
            <div className="history-section">
                <h2>Historial de Llegadas</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : arrivals.length === 0 ? (
                    <div className="empty-state">
                        <Package size={48} />
                        <p>No hay llegadas registradas</p>
                    </div>
                ) : (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha/Hora</th>
                                    <th>Tracking</th>
                                    <th>Remitente</th>
                                    <th>Destinatario</th>
                                    <th>Condición</th>
                                    <th>Notas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrivals.map((arrival) => (
                                    <tr key={arrival.id}>
                                        <td>{new Date(arrival.arrived_at).toLocaleString('es-CR')}</td>
                                        <td><strong>{arrival.tracking_number}</strong></td>
                                        <td>{arrival.sender_name || '-'}</td>
                                        <td>{arrival.receiver_name || '-'}</td>
                                        <td>
                                            <span className={`condition-badge condition-${arrival.condition_status}`}>
                                                {getConditionIcon(arrival.condition_status)}
                                                {getConditionLabel(arrival.condition_status)}
                                            </span>
                                        </td>
                                        <td>{arrival.notes || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style>{`
                .arrivals-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .register-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .register-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .register-box { display: flex; align-items: center; gap: 12px; }
                .scan-icon { color: #2563eb; display: flex; align-items: center; }
                .register-box input { flex: 1; padding: 12px 16px; border: 2px solid #d1d5db; border-radius: 8px; font-size: 16px; }
                .register-box input:focus { outline: none; border-color: #2563eb; }
                .register-box button { padding: 12px 32px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
                .register-box button:hover:not(:disabled) { background: #1d4ed8; }
                .register-box button:disabled { background: #9ca3af; cursor: not-allowed; }
                .message { margin-top: 12px; padding: 12px 16px; border-radius: 8px; font-size: 14px; }
                .message.success { background: #d1fae5; color: #065f46; }
                .message.error { background: #fee2e2; color: #991b1b; }
                
                .today-section, .history-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .today-section h2, .history-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .arrivals-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
                .arrival-card { background: #f9fafb; border-radius: 12px; padding: 16px; border: 2px solid #e5e7eb; }
                .arrival-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
                .tracking { font-size: 16px; font-weight: 700; color: #1f2937; }
                .condition-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .condition-badge.condition-good { background: #d1fae5; color: #065f46; }
                .condition-badge.condition-damaged { background: #fef3c7; color: #92400e; }
                .condition-badge.condition-incomplete { background: #fee2e2; color: #991b1b; }
                .arrival-body p { margin: 4px 0; font-size: 14px; color: #374151; }
                .time { color: #6b7280; font-size: 13px; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default ArrivalsPage;
