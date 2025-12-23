export interface CreateTenantInput {
    name: string;
    subdomain: string;
    admin_email: string;
    admin_password: string;
}
export interface Tenant {
    id: string;
    name: string;
    subdomain: string;
    status: 'trial' | 'active' | 'suspended' | 'cancelled';
    plan_id: string;
    trial_ends_at: Date | null;
    created_at: Date;
    updated_at: Date;
}
export declare class TenantService {
    /**
     * Obtener tenant por ID
     */
    static getById(id: string): Promise<Tenant | null>;
    /**
     * Obtener tenant por subdominio
     */
    static getBySubdomain(subdomain: string): Promise<Tenant | null>;
    /**
     * Obtener tenant por dominio personalizado
     */
    static getByCustomDomain(domain: string): Promise<Tenant | null>;
    /**
     * Crear nuevo tenant (con período de prueba)
     */
    static create(input: CreateTenantInput): Promise<Tenant>;
    /**
     * Actualizar tenant
     */
    static update(id: string, data: Partial<Tenant>): Promise<Tenant>;
    /**
     * Activar tenant (después de pago)
     */
    static activate(id: string, planId: string): Promise<Tenant>;
    /**
     * Suspender tenant
     */
    static suspend(id: string, reason?: string): Promise<Tenant>;
    /**
     * Cancelar tenant
     */
    static cancel(id: string): Promise<Tenant>;
    /**
     * Listar todos los tenants (para Super Admin)
     */
    static getAll(filters?: {
        status?: string;
        plan_id?: string;
        search?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        tenants: Tenant[];
        total: number;
    }>;
    /**
     * Verificar disponibilidad de subdominio
     */
    static isSubdomainAvailable(subdomain: string): Promise<boolean>;
}
export default TenantService;
//# sourceMappingURL=tenantService.d.ts.map