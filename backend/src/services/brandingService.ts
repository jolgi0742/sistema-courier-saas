// brandingService.ts - Gestión de branding por tenant
import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

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

export class BrandingService {
    /**
     * Obtener branding por tenant ID
     */
    static async getByTenantId(tenantId: string): Promise<TenantBranding | null> {
        const { rows } = await pool.query(
            'SELECT * FROM tenant_branding WHERE tenant_id = ?',
            [tenantId]
        );
        return (rows as TenantBranding[])[0] || null;
    }

    /**
     * Crear branding inicial para un tenant
     */
    static async create(tenantId: string, companyName: string): Promise<TenantBranding> {
        await pool.query(
            `INSERT INTO tenant_branding (tenant_id, company_name, primary_color, secondary_color, accent_color)
       VALUES (?, ?, '#3B82F6', '#1E40AF', '#10B981')`,
            [tenantId, companyName]
        );
        return (await this.getByTenantId(tenantId))!;
    }

    /**
     * Actualizar branding
     */
    static async update(tenantId: string, data: Partial<TenantBranding>): Promise<TenantBranding> {
        const allowedFields = [
            'logo_url', 'logo_white_url', 'favicon_url',
            'primary_color', 'secondary_color', 'accent_color',
            'company_name', 'tagline',
            'contact_email', 'contact_phone', 'address', 'website_url',
            'email_from_name', 'email_footer_text'
        ];

        const updates: string[] = [];
        const values: any[] = [];

        for (const field of allowedFields) {
            if (data[field as keyof TenantBranding] !== undefined) {
                updates.push(`${field} = ?`);
                values.push(data[field as keyof TenantBranding]);
            }
        }

        if (updates.length > 0) {
            values.push(tenantId);
            await pool.query(
                `UPDATE tenant_branding SET ${updates.join(', ')} WHERE tenant_id = ?`,
                values
            );
        }

        return (await this.getByTenantId(tenantId))!;
    }

    /**
     * Subir logo (devuelve URL después de guardar)
     */
    static async uploadLogo(
        tenantId: string,
        type: 'logo' | 'logo_white' | 'favicon',
        fileBuffer: Buffer,
        mimeType: string
    ): Promise<string> {
        // En producción, subir a Firebase Storage o S3
        // Por ahora, guardamos como base64 data URL (solo para desarrollo)
        const base64 = fileBuffer.toString('base64');
        const dataUrl = `data:${mimeType};base64,${base64}`;

        const fieldName = type === 'logo' ? 'logo_url' :
            type === 'logo_white' ? 'logo_white_url' : 'favicon_url';

        await pool.query(
            `UPDATE tenant_branding SET ${fieldName} = ? WHERE tenant_id = ?`,
            [dataUrl, tenantId]
        );

        return dataUrl;
    }

    /**
     * Obtener configuración de emails
     */
    static async getEmailConfig(tenantId: string): Promise<{
        from_name: string;
        from_email: string;
        footer_text: string;
        logo_url: string | null;
    }> {
        const branding = await this.getByTenantId(tenantId);

        return {
            from_name: branding?.email_from_name || branding?.company_name || 'Sistema Courier',
            from_email: branding?.contact_email || 'notificaciones@sistemacourier.com',
            footer_text: branding?.email_footer_text || '',
            logo_url: branding?.logo_url || null
        };
    }

    /**
     * Generar CSS variables para el frontend
     */
    static generateCSSVariables(branding: TenantBranding): string {
        return `
      :root {
        --primary-color: ${branding.primary_color};
        --secondary-color: ${branding.secondary_color};
        --accent-color: ${branding.accent_color};
      }
    `;
    }
}

export default BrandingService;
