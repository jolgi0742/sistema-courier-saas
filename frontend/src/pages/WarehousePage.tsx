// WarehousePage.tsx - Página de gestión de almacén
import React, { useState, useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { Package, MapPin, Search, TrendingUp, Layers } from 'lucide-react';

interface Location {
    id: string;
    code: string;
    name: string | null;
    zone: string | null;
    capacity: number | null;
    current_packages: number;
    status: string;
}

interface Stats {
    totalLocations: number;
    activeLocations: number;
    fullLocations: number;
    totalPackages: number;
    totalCapacity: number;
    utilizationRate: number;
}

const WarehousePage: React.FC = () => {
    const { tenant } = useTenant();
    const [locations, setLocations] = useState<Location[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [zones, setZones] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterZone, setFilterZone] = useState('');
    const [searchTracking, setSearchTracking] = useState('');
    const [searchResult, setSearchResult] = useState<any>(null);

    useEffect(() => {
        if (tenant) {
            fetchLocations();
            fetchStats();
            fetchZones();
        }
    }, [tenant, filterZone]);

    const fetchLocations = async () => {
        if (!tenant) return;
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            let url = `${apiUrl}/api/warehouse/locations`;
            if (filterZone) url += `?zone=${filterZone}`;

            const response = await fetch(url, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setLocations(data.locations || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/warehouse/stats`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchZones = async () => {
        if (!tenant) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/warehouse/zones`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            const data = await response.json();
            setZones(data.zones || []);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSearch = async () => {
        if (!tenant || !searchTracking.trim()) return;
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/warehouse/search/${searchTracking}`, {
                headers: { 'X-Tenant-ID': tenant.id }
            });
            if (response.ok) {
                const data = await response.json();
                setSearchResult(data);
            } else {
                setSearchResult({ error: 'Paquete no encontrado en almacén' });
            }
        } catch (error) {
            console.error('Error:', error);
            setSearchResult({ error: 'Error buscando paquete' });
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return '#10b981';
            case 'full': return '#ef4444';
            case 'inactive': return '#6b7280';
            default: return '#6b7280';
        }
    };

    const getUtilizationColor = (rate: number) => {
        if (rate >= 90) return '#ef4444';
        if (rate >= 70) return '#f59e0b';
        return '#10b981';
    };

    return (
        <div className="warehouse-page">
            <div className="page-header">
                <div>
                    <h1>Gestión de Almacén</h1>
                    <p>{locations.length} ubicaciones registradas</p>
                </div>
            </div>

            {/* Estadísticas */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                            <Layers size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Ubicaciones Activas</p>
                            <p className="stat-value">{stats.activeLocations} / {stats.totalLocations}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                            <Package size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Paquetes en Almacén</p>
                            <p className="stat-value">{stats.totalPackages}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                            <MapPin size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Capacidad Total</p>
                            <p className="stat-value">{stats.totalCapacity}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: `${getUtilizationColor(stats.utilizationRate)}20`, color: getUtilizationColor(stats.utilizationRate) }}>
                            <TrendingUp size={24} />
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Utilización</p>
                            <p className="stat-value">{stats.utilizationRate}%</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Búsqueda rápida */}
            <div className="search-section">
                <h2>Búsqueda Rápida</h2>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Buscar por tracking number..."
                        value={searchTracking}
                        onChange={(e) => setSearchTracking(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button onClick={handleSearch}>
                        <Search size={20} />
                        Buscar
                    </button>
                </div>
                {searchResult && (
                    <div className={`search-result ${searchResult.error ? 'error' : 'success'}`}>
                        {searchResult.error ? (
                            <p>{searchResult.error}</p>
                        ) : (
                            <div>
                                <p><strong>Paquete encontrado:</strong> {searchResult.tracking_number}</p>
                                <p><strong>Ubicación:</strong> {searchResult.location_code} - {searchResult.location_name}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Filtros */}
            <div className="filters">
                <select value={filterZone} onChange={(e) => setFilterZone(e.target.value)}>
                    <option value="">Todas las zonas</option>
                    {zones.map(zone => (
                        <option key={zone} value={zone}>{zone}</option>
                    ))}
                </select>
            </div>

            {/* Mapa de ubicaciones */}
            <div className="locations-section">
                <h2>Mapa de Ubicaciones</h2>
                {loading ? (
                    <div className="loading">Cargando...</div>
                ) : locations.length === 0 ? (
                    <div className="empty-state">
                        <MapPin size={48} />
                        <h3>No hay ubicaciones</h3>
                        <p>No se encontraron ubicaciones con los filtros seleccionados</p>
                    </div>
                ) : (
                    <div className="locations-grid">
                        {locations.map((location) => {
                            const utilizationRate = location.capacity
                                ? (location.current_packages / location.capacity) * 100
                                : 0;
                            return (
                                <div key={location.id} className="location-card">
                                    <div className="location-header">
                                        <div className="location-code" style={{ color: getStatusColor(location.status) }}>
                                            <MapPin size={20} />
                                            {location.code}
                                        </div>
                                        <span className={`status-badge status-${location.status}`}>
                                            {location.status === 'active' ? 'Activo' : location.status === 'full' ? 'Lleno' : 'Inactivo'}
                                        </span>
                                    </div>
                                    <div className="location-body">
                                        <p className="location-name">{location.name || '-'}</p>
                                        {location.zone && <p className="location-zone">Zona: {location.zone}</p>}
                                        <div className="capacity-info">
                                            <div className="capacity-bar">
                                                <div
                                                    className="capacity-fill"
                                                    style={{
                                                        width: `${utilizationRate}%`,
                                                        backgroundColor: getUtilizationColor(utilizationRate)
                                                    }}
                                                />
                                            </div>
                                            <p className="capacity-text">
                                                {location.current_packages} / {location.capacity || 0} paquetes
                                                <span className="utilization">({utilizationRate.toFixed(0)}%)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <style>{`
                .warehouse-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .search-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .search-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .search-box { display: flex; gap: 12px; }
                .search-box input { flex: 1; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
                .search-box button { padding: 12px 24px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; }
                .search-box button:hover { background: #1d4ed8; }
                .search-result { margin-top: 16px; padding: 16px; border-radius: 8px; }
                .search-result.success { background: #d1fae5; color: #065f46; }
                .search-result.error { background: #fee2e2; color: #991b1b; }
                .search-result p { margin: 4px 0; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .locations-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .locations-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .locations-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
                .location-card { background: #f9fafb; border-radius: 12px; padding: 16px; border: 2px solid #e5e7eb; transition: transform 0.2s; }
                .location-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .location-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
                .location-code { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; }
                .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-active { background: #d1fae5; color: #065f46; }
                .status-badge.status-full { background: #fee2e2; color: #991b1b; }
                .status-badge.status-inactive { background: #f3f4f6; color: #6b7280; }
                
                .location-body { }
                .location-name { font-size: 14px; color: #374151; margin: 0 0 4px 0; }
                .location-zone { font-size: 13px; color: #6b7280; margin: 0 0 12px 0; }
                
                .capacity-info { }
                .capacity-bar { height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; margin-bottom: 8px; }
                .capacity-fill { height: 100%; transition: width 0.3s; }
                .capacity-text { font-size: 13px; color: #374151; margin: 0; display: flex; justify-content: space-between; }
                .utilization { color: #6b7280; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `}</style>
        </div>
    );
};

export default WarehousePage;
