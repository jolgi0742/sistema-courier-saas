"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
// emailService.ts - Servicio de emails con branding personalizado (White Label)
const mail_1 = __importDefault(require("@sendgrid/mail"));
const database_1 = __importDefault(require("../config/database"));
const brandingService_1 = require("./brandingService");
// Inicializar SendGrid
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
// Template IDs de SendGrid (configurar en dashboard)
const TEMPLATES = {
    welcome: process.env.SENDGRID_TEMPLATE_WELCOME || 'd-welcome',
    password_reset: process.env.SENDGRID_TEMPLATE_PASSWORD_RESET || 'd-reset',
    package_notification: process.env.SENDGRID_TEMPLATE_PACKAGE || 'd-package',
    invoice: process.env.SENDGRID_TEMPLATE_INVOICE || 'd-invoice',
    trial_reminder: process.env.SENDGRID_TEMPLATE_TRIAL || 'd-trial'
};
class EmailService {
    /**
     * Enviar email con branding del tenant
     */
    static async send(options) {
        const { tenantId, to, template, data, attachments } = options;
        // Obtener branding del tenant
        const branding = await brandingService_1.BrandingService.getByTenantId(tenantId);
        // Obtener info del tenant
        const [tenantRows] = await database_1.default.execute('SELECT plan_id FROM tenants WHERE id = ?', [tenantId]);
        const isEnterprise = tenantRows[0]?.plan_id === 'enterprise';
        // Determinar remitente
        // Enterprise usa su propio dominio, otros usan el dominio del SaaS
        const fromEmail = isEnterprise && branding?.contact_email
            ? branding.contact_email
            : process.env.SENDGRID_FROM_EMAIL || 'notificaciones@sistemacourier.com';
        const fromName = branding?.email_from_name || branding?.company_name || 'Sistema Courier';
        // Construir datos dinámicos con branding
        const dynamicData = {
            ...data,
            // Branding
            company_name: branding?.company_name || 'Sistema Courier',
            logo_url: branding?.logo_url || '/default-logo.png',
            primary_color: branding?.primary_color || '#3b82f6',
            // Contacto
            contact_email: branding?.contact_email || 'soporte@sistemacourier.com',
            contact_phone: branding?.contact_phone || '',
            website_url: branding?.website_url || 'https://sistemacourier.com',
            // Footer
            footer_text: branding?.email_footer_text || '',
            // Solo mostrar "Powered by" si NO es Enterprise
            show_powered_by: !isEnterprise,
            current_year: new Date().getFullYear()
        };
        try {
            await mail_1.default.send({
                to: Array.isArray(to) ? to : [to],
                from: {
                    email: fromEmail,
                    name: fromName
                },
                templateId: TEMPLATES[template],
                dynamicTemplateData: dynamicData,
                attachments: attachments?.map(att => ({
                    content: att.content,
                    filename: att.filename,
                    type: att.type,
                    disposition: 'attachment'
                }))
            });
            // Log del email enviado
            console.log(`✉️ Email enviado: ${template} a ${to} (tenant: ${tenantId})`);
        }
        catch (error) {
            console.error('Error enviando email:', error.response?.body || error.message);
            throw new Error('Error enviando email');
        }
    }
    /**
     * Enviar email de bienvenida
     */
    static async sendWelcome(tenantId, userEmail, userName) {
        await this.send({
            tenantId,
            to: userEmail,
            template: 'welcome',
            data: {
                user_name: userName,
                login_url: `https://${process.env.SAAS_DOMAIN}/login`
            }
        });
    }
    /**
     * Enviar notificación de paquete
     */
    static async sendPackageNotification(tenantId, to, packageData) {
        await this.send({
            tenantId,
            to,
            template: 'package_notification',
            data: {
                tracking_number: packageData.tracking_number,
                status: packageData.status,
                description: packageData.description,
                estimated_date: packageData.estimated_date || 'Próximamente',
                tracking_url: `https://${process.env.SAAS_DOMAIN}/tracking/${packageData.tracking_number}`
            }
        });
    }
    /**
     * Enviar recordatorio de trial
     */
    static async sendTrialReminder(tenantId, adminEmail, daysRemaining) {
        await this.send({
            tenantId,
            to: adminEmail,
            template: 'trial_reminder',
            data: {
                days_remaining: daysRemaining,
                upgrade_url: `https://${process.env.SAAS_DOMAIN}/account/billing`
            }
        });
    }
    /**
     * Enviar factura
     */
    static async sendInvoice(tenantId, to, invoiceData) {
        await this.send({
            tenantId,
            to,
            template: 'invoice',
            data: {
                invoice_number: invoiceData.invoice_number,
                amount: invoiceData.amount.toFixed(2),
                currency: invoiceData.currency,
                invoice_date: invoiceData.date,
                pdf_url: invoiceData.pdf_url
            }
        });
    }
    /**
     * Enviar email genérico (sin template)
     */
    static async sendGeneric(tenantId, to, subject, htmlContent) {
        const branding = await brandingService_1.BrandingService.getByTenantId(tenantId);
        const [tenantRows] = await database_1.default.execute('SELECT plan_id FROM tenants WHERE id = ?', [tenantId]);
        const isEnterprise = tenantRows[0]?.plan_id === 'enterprise';
        const fromEmail = isEnterprise && branding?.contact_email
            ? branding.contact_email
            : process.env.SENDGRID_FROM_EMAIL || 'notificaciones@sistemacourier.com';
        const fromName = branding?.company_name || 'Sistema Courier';
        await mail_1.default.send({
            to,
            from: { email: fromEmail, name: fromName },
            subject,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          ${branding?.logo_url ? `<img src="${branding.logo_url}" alt="${fromName}" style="max-height: 50px; margin-bottom: 20px;">` : ''}
          ${htmlContent}
          ${!isEnterprise ? `
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
              Powered by Sistema Courier
            </div>
          ` : ''}
        </div>
      `
        });
    }
}
exports.EmailService = EmailService;
exports.default = EmailService;
//# sourceMappingURL=emailService.js.map