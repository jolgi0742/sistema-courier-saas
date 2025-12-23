"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandingService = void 0;
const database_1 = __importDefault(require("../config/database"));
class BrandingService {
    /**
     * Obtener branding por tenant ID
     */
    static async getByTenantId(tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM tenant_branding WHERE tenant_id = ?', [tenantId]);
        return rows[0] || null;
    }
    /**
     * Crear branding inicial para un tenant
     */
    static async create(tenantId, companyName) {
        await database_1.default.execute(`INSERT INTO tenant_branding (tenant_id, company_name, primary_color, secondary_color, accent_color)
       VALUES (?, ?, '#3B82F6', '#1E40AF', '#10B981')`, [tenantId, companyName]);
        return (await this.getByTenantId(tenantId));
    }
    /**
     * Actualizar branding
     */
    static async update(tenantId, data) {
        const allowedFields = [
            'logo_url', 'logo_white_url', 'favicon_url',
            'primary_color', 'secondary_color', 'accent_color',
            'company_name', 'tagline',
            'contact_email', 'contact_phone', 'address', 'website_url',
            'email_from_name', 'email_footer_text'
        ];
        const updates = [];
        const values = [];
        for (const field of allowedFields) {
            if (data[field] !== undefined) {
                updates.push(`${field} = ?`);
                values.push(data[field]);
            }
        }
        if (updates.length > 0) {
            values.push(tenantId);
            await database_1.default.execute(`UPDATE tenant_branding SET ${updates.join(', ')} WHERE tenant_id = ?`, values);
        }
        return (await this.getByTenantId(tenantId));
    }
    /**
     * Subir logo (devuelve URL después de guardar)
     */
    static async uploadLogo(tenantId, type, fileBuffer, mimeType) {
        // En producción, subir a Firebase Storage o S3
        // Por ahora, guardamos como base64 data URL (solo para desarrollo)
        const base64 = fileBuffer.toString('base64');
        const dataUrl = `data:${mimeType};base64,${base64}`;
        const fieldName = type === 'logo' ? 'logo_url' :
            type === 'logo_white' ? 'logo_white_url' : 'favicon_url';
        await database_1.default.execute(`UPDATE tenant_branding SET ${fieldName} = ? WHERE tenant_id = ?`, [dataUrl, tenantId]);
        return dataUrl;
    }
    /**
     * Obtener configuración de emails
     */
    static async getEmailConfig(tenantId) {
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
    static generateCSSVariables(branding) {
        return `
      :root {
        --primary-color: ${branding.primary_color};
        --secondary-color: ${branding.secondary_color};
        --accent-color: ${branding.accent_color};
      }
    `;
    }
}
exports.BrandingService = BrandingService;
exports.default = BrandingService;
//# sourceMappingURL=brandingService.js.map