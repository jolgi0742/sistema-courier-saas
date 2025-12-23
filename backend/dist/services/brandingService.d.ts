export interface TenantBranding {
    tenant_id: string;
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
    email_from_name: string | null;
    email_footer_text: string | null;
}
export declare class BrandingService {
    /**
     * Obtener branding por tenant ID
     */
    static getByTenantId(tenantId: string): Promise<TenantBranding | null>;
    /**
     * Crear branding inicial para un tenant
     */
    static create(tenantId: string, companyName: string): Promise<TenantBranding>;
    /**
     * Actualizar branding
     */
    static update(tenantId: string, data: Partial<TenantBranding>): Promise<TenantBranding>;
    /**
     * Subir logo (devuelve URL después de guardar)
     */
    static uploadLogo(tenantId: string, type: 'logo' | 'logo_white' | 'favicon', fileBuffer: Buffer, mimeType: string): Promise<string>;
    /**
     * Obtener configuración de emails
     */
    static getEmailConfig(tenantId: string): Promise<{
        from_name: string;
        from_email: string;
        footer_text: string;
        logo_url: string | null;
    }>;
    /**
     * Generar CSS variables para el frontend
     */
    static generateCSSVariables(branding: TenantBranding): string;
}
export default BrandingService;
//# sourceMappingURL=brandingService.d.ts.map