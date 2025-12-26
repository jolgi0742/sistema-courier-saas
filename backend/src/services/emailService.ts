// emailService.ts - Servicio de emails con branding personalizado (White Label)
import sgMail from '@sendgrid/mail';
import pool from '../config/database';
import { BrandingService } from './brandingService';

// Inicializar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Template IDs de SendGrid (configurar en dashboard)
const TEMPLATES = {
    welcome: process.env.SENDGRID_TEMPLATE_WELCOME || 'd-welcome',
    password_reset: process.env.SENDGRID_TEMPLATE_PASSWORD_RESET || 'd-reset',
    package_notification: process.env.SENDGRID_TEMPLATE_PACKAGE || 'd-package',
    invoice: process.env.SENDGRID_TEMPLATE_INVOICE || 'd-invoice',
    trial_reminder: process.env.SENDGRID_TEMPLATE_TRIAL || 'd-trial'
};

export interface EmailOptions {
    tenantId: string;
    to: string | string[];
    template: keyof typeof TEMPLATES;
    data: Record<string, any>;
    attachments?: Array<{
        content: string;
        filename: string;
        type: string;
    }>;
}

export class EmailService {
    /**
     * Enviar email con branding del tenant
     */
    static async send(options: EmailOptions): Promise<void> {
        const { tenantId, to, template, data, attachments } = options;

        // Obtener branding del tenant
        const branding = await BrandingService.getByTenantId(tenantId);

        // Obtener info del tenant
        const { rows: tenantRows } = await pool.query(
            'SELECT plan_id FROM tenants WHERE id = ?',
            [tenantId]
        ) as any;
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
            await sgMail.send({
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
        } catch (error: any) {
            console.error('Error enviando email:', error.response?.body || error.message);
            throw new Error('Error enviando email');
        }
    }

    /**
     * Enviar email de bienvenida
     */
    static async sendWelcome(tenantId: string, userEmail: string, userName: string): Promise<void> {
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
    static async sendPackageNotification(
        tenantId: string,
        to: string,
        packageData: {
            tracking_number: string;
            status: string;
            description: string;
            estimated_date?: string;
        }
    ): Promise<void> {
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
    static async sendTrialReminder(
        tenantId: string,
        adminEmail: string,
        daysRemaining: number
    ): Promise<void> {
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
    static async sendInvoice(
        tenantId: string,
        to: string,
        invoiceData: {
            invoice_number: string;
            amount: number;
            currency: string;
            date: string;
            pdf_url: string;
        }
    ): Promise<void> {
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
    static async sendGeneric(
        tenantId: string,
        to: string,
        subject: string,
        htmlContent: string
    ): Promise<void> {
        const branding = await BrandingService.getByTenantId(tenantId);
        const { rows: tenantRows } = await pool.query(
            'SELECT plan_id FROM tenants WHERE id = ?',
            [tenantId]
        ) as any;
        const isEnterprise = tenantRows[0]?.plan_id === 'enterprise';

        const fromEmail = isEnterprise && branding?.contact_email
            ? branding.contact_email
            : process.env.SENDGRID_FROM_EMAIL || 'notificaciones@sistemacourier.com';

        const fromName = branding?.company_name || 'Sistema Courier';

        await sgMail.send({
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

export default EmailService;
