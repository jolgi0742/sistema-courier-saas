export interface TenantDomain {
    id: string;
    tenant_id: string;
    domain_type: 'subdomain' | 'custom';
    domain: string;
    is_primary: boolean;
    ssl_status: 'pending' | 'provisioning' | 'active' | 'failed';
    ssl_expires_at: Date | null;
    verified_at: Date | null;
    created_at: Date;
}
export declare class DomainService {
    static SAAS_DOMAIN: string;
    static CNAME_TARGET: string;
    /**
     * Obtener todos los dominios de un tenant
     */
    static getByTenantId(tenantId: string): Promise<TenantDomain[]>;
    /**
     * Obtener dominio principal
     */
    static getPrimaryDomain(tenantId: string): Promise<TenantDomain | null>;
    /**
     * Buscar tenant por dominio personalizado
     */
    static getTenantByDomain(domain: string): Promise<string | null>;
    /**
     * Agregar dominio personalizado (Enterprise)
     */
    static addCustomDomain(tenantId: string, domain: string): Promise<TenantDomain>;
    /**
     * Obtener dominio por ID
     */
    static getById(id: string): Promise<TenantDomain | null>;
    /**
     * Verificar configuración DNS del dominio
     */
    static verifyDNS(domainId: string): Promise<{
        verified: boolean;
        message: string;
    }>;
    /**
     * Establecer dominio como principal
     */
    static setPrimary(tenantId: string, domainId: string): Promise<void>;
    /**
     * Eliminar dominio personalizado
     */
    static delete(domainId: string, tenantId: string): Promise<void>;
    /**
     * Actualizar estado de SSL
     */
    static updateSSLStatus(domainId: string, status: 'pending' | 'provisioning' | 'active' | 'failed', expiresAt?: Date): Promise<void>;
    /**
     * Validar formato de dominio
     */
    private static isValidDomain;
    /**
     * Obtener instrucciones de configuración DNS
     */
    static getDNSInstructions(domain: string): {
        type: string;
        name: string;
        value: string;
        instructions: string;
    };
}
export default DomainService;
//# sourceMappingURL=domainService.d.ts.map