// TenantContext.tsx - Contexto Multi-Tenant para Sistema Courier SaaS
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Tipos
export interface TenantBranding {
    logo_url: string | null;
    logo_white_url: string | null;
    favicon_url: string | null;
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    company_name: string;
    tagline: string | null;
    contact_email: string | null;
    contact_phone: string | null;
    address: string | null;
    website_url: string | null;
}

export interface TenantPlan {
    id: string;
    name: string;
    limits: {
        users: number;
        packages_per_month: number;
        agents: number;
        couriers: number;
        storage_gb: number;
    };
    features: string[];
}

export interface Tenant {
    id: string;
    name: string;
    subdomain: string;
    status: 'trial' | 'active' | 'suspended' | 'cancelled';
    plan: TenantPlan;
    branding: TenantBranding;
    trial_ends_at: string | null;
    has_custom_domain: boolean;
    custom_domain: string | null;
}

interface TenantContextType {
    tenant: Tenant | null;
    loading: boolean;
    error: string | null;
    isWhiteLabel: boolean;
    refreshTenant: () => Promise<void>;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

// Hook para usar el contexto
export const useTenant = () => {
    const context = useContext(TenantContext);
    if (context === undefined) {
        throw new Error('useTenant must be used within a TenantProvider');
    }
    return context;
};

// Aplicar branding dinámico
const applyBranding = (branding: TenantBranding) => {
    const root = document.documentElement;

    // Aplicar colores como variables CSS
    root.style.setProperty('--primary-color', branding.primary_color);
    root.style.setProperty('--secondary-color', branding.secondary_color);
    root.style.setProperty('--accent-color', branding.accent_color);

    // Actualizar favicon si existe
    if (branding.favicon_url) {
        const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
        if (favicon) {
            favicon.href = branding.favicon_url;
        }
    }

    // Actualizar título de la página
    if (branding.company_name) {
        document.title = branding.company_name;
    }
};

// Detectar tenant desde el hostname
const getTenantFromHostname = (): { type: 'subdomain' | 'custom', value: string } => {
    const hostname = window.location.hostname;

    // Si es localhost, usar subdomain del query param o 'demo'
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        const params = new URLSearchParams(window.location.search);
        return { type: 'subdomain', value: params.get('tenant') || 'demo' };
    }

    // Si termina en nuestro dominio SaaS, es subdomain
    const saasDomainsPattern = /^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/;
    const subdomainMatch = hostname.match(saasDomainsPattern);

    if (subdomainMatch) {
        return { type: 'subdomain', value: subdomainMatch[1] };
    }

    // Si no, es un dominio personalizado (White Label)
    return { type: 'custom', value: hostname };
};

interface TenantProviderProps {
    children: ReactNode;
}

export const TenantProvider: React.FC<TenantProviderProps> = ({ children }) => {
    const [tenant, setTenant] = useState<Tenant | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTenant = async () => {
        try {
            setLoading(true);
            setError(null);

            const { type, value } = getTenantFromHostname();
            const endpoint = type === 'subdomain'
                ? `/api/tenants/by-subdomain/${value}`
                : `/api/tenants/by-domain/${encodeURIComponent(value)}`;

            const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Empresa no encontrada');
                }
                throw new Error('Error al cargar la configuración');
            }

            const data: Tenant = await response.json();

            // Verificar estado del tenant
            if (data.status === 'suspended') {
                throw new Error('Cuenta suspendida. Contacte al administrador.');
            }

            if (data.status === 'cancelled') {
                throw new Error('Cuenta cancelada.');
            }

            setTenant(data);
            applyBranding(data.branding);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTenant();
    }, []);

    const isWhiteLabel = tenant?.plan.id === 'enterprise' && tenant?.has_custom_domain;

    return (
        <TenantContext.Provider
            value={{
                tenant,
                loading,
                error,
                isWhiteLabel,
                refreshTenant: fetchTenant
            }}
        >
            {children}
        </TenantContext.Provider>
    );
};

export default TenantContext;
