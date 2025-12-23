// domainService.ts - Gestión de dominios personalizados (White Label)
import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';
import dns from 'dns';
import { promisify } from 'util';

const resolveCname = promisify(dns.resolveCname);

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

export class DomainService {
    // Dominio base del SaaS (configurable)
    static SAAS_DOMAIN = process.env.SAAS_DOMAIN || 'sistemacourier.com';
    static CNAME_TARGET = process.env.CNAME_TARGET || 'custom.sistemacourier.com';

    /**
     * Obtener todos los dominios de un tenant
     */
    static async getByTenantId(tenantId: string): Promise<TenantDomain[]> {
        const [rows] = await pool.execute(
            'SELECT * FROM tenant_domains WHERE tenant_id = ? ORDER BY is_primary DESC',
            [tenantId]
        );
        return rows as TenantDomain[];
    }

    /**
     * Obtener dominio principal
     */
    static async getPrimaryDomain(tenantId: string): Promise<TenantDomain | null> {
        const [rows] = await pool.execute(
            'SELECT * FROM tenant_domains WHERE tenant_id = ? AND is_primary = TRUE LIMIT 1',
            [tenantId]
        );
        return (rows as TenantDomain[])[0] || null;
    }

    /**
     * Buscar tenant por dominio personalizado
     */
    static async getTenantByDomain(domain: string): Promise<string | null> {
        const [rows] = await pool.execute(
            'SELECT tenant_id FROM tenant_domains WHERE domain = ? AND ssl_status = "active"',
            [domain.toLowerCase()]
        );
        return (rows as any[])[0]?.tenant_id || null;
    }

    /**
     * Agregar dominio personalizado (Enterprise)
     */
    static async addCustomDomain(tenantId: string, domain: string): Promise<TenantDomain> {
        // Validar formato de dominio
        if (!this.isValidDomain(domain)) {
            throw new Error('Formato de dominio inválido');
        }

        // Verificar que no exista
        const [existing] = await pool.execute(
            'SELECT id FROM tenant_domains WHERE domain = ?',
            [domain.toLowerCase()]
        ) as any;

        if (existing.length > 0) {
            throw new Error('Este dominio ya está registrado');
        }

        // Verificar que el tenant tiene plan Enterprise
        const [tenantRows] = await pool.execute(
            'SELECT plan_id FROM tenants WHERE id = ?',
            [tenantId]
        ) as any;

        if (tenantRows[0]?.plan_id !== 'enterprise') {
            throw new Error('Los dominios personalizados requieren plan Enterprise');
        }

        // Crear registro de dominio
        const id = uuidv4();
        await pool.execute(
            `INSERT INTO tenant_domains (id, tenant_id, domain_type, domain, is_primary, ssl_status)
       VALUES (?, ?, 'custom', ?, FALSE, 'pending')`,
            [id, tenantId, domain.toLowerCase()]
        );

        return (await this.getById(id))!;
    }

    /**
     * Obtener dominio por ID
     */
    static async getById(id: string): Promise<TenantDomain | null> {
        const [rows] = await pool.execute(
            'SELECT * FROM tenant_domains WHERE id = ?',
            [id]
        );
        return (rows as TenantDomain[])[0] || null;
    }

    /**
     * Verificar configuración DNS del dominio
     */
    static async verifyDNS(domainId: string): Promise<{ verified: boolean; message: string }> {
        const domain = await this.getById(domainId);
        if (!domain) {
            throw new Error('Dominio no encontrado');
        }

        try {
            const records = await resolveCname(domain.domain);

            // Verificar que apunta a nuestro CNAME target
            if (records.includes(this.CNAME_TARGET)) {
                // Marcar como verificado
                await pool.execute(
                    `UPDATE tenant_domains SET verified_at = NOW(), ssl_status = 'provisioning' WHERE id = ?`,
                    [domainId]
                );

                return {
                    verified: true,
                    message: 'DNS verificado correctamente. Iniciando provisión de SSL.'
                };
            } else {
                return {
                    verified: false,
                    message: `El CNAME debe apuntar a ${this.CNAME_TARGET}. Actualmente apunta a: ${records.join(', ')}`
                };
            }
        } catch (error: any) {
            if (error.code === 'ENODATA' || error.code === 'ENOTFOUND') {
                return {
                    verified: false,
                    message: `No se encontró registro CNAME. Configure: ${domain.domain} CNAME ${this.CNAME_TARGET}`
                };
            }
            throw error;
        }
    }

    /**
     * Establecer dominio como principal
     */
    static async setPrimary(tenantId: string, domainId: string): Promise<void> {
        // Quitar primary de otros dominios
        await pool.execute(
            'UPDATE tenant_domains SET is_primary = FALSE WHERE tenant_id = ?',
            [tenantId]
        );

        // Establecer el nuevo primary
        await pool.execute(
            'UPDATE tenant_domains SET is_primary = TRUE WHERE id = ? AND tenant_id = ?',
            [domainId, tenantId]
        );
    }

    /**
     * Eliminar dominio personalizado
     */
    static async delete(domainId: string, tenantId: string): Promise<void> {
        const domain = await this.getById(domainId);

        if (!domain) {
            throw new Error('Dominio no encontrado');
        }

        if (domain.tenant_id !== tenantId) {
            throw new Error('No tiene permiso para eliminar este dominio');
        }

        if (domain.domain_type === 'subdomain') {
            throw new Error('No se puede eliminar el subdominio principal');
        }

        await pool.execute('DELETE FROM tenant_domains WHERE id = ?', [domainId]);
    }

    /**
     * Actualizar estado de SSL
     */
    static async updateSSLStatus(
        domainId: string,
        status: 'pending' | 'provisioning' | 'active' | 'failed',
        expiresAt?: Date
    ): Promise<void> {
        await pool.execute(
            `UPDATE tenant_domains SET ssl_status = ?, ssl_expires_at = ? WHERE id = ?`,
            [status, expiresAt || null, domainId]
        );
    }

    /**
     * Validar formato de dominio
     */
    private static isValidDomain(domain: string): boolean {
        const pattern = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
        return pattern.test(domain);
    }

    /**
     * Obtener instrucciones de configuración DNS
     */
    static getDNSInstructions(domain: string): {
        type: string;
        name: string;
        value: string;
        instructions: string;
    } {
        return {
            type: 'CNAME',
            name: domain,
            value: this.CNAME_TARGET,
            instructions: `
        Para configurar su dominio personalizado:
        
        1. Acceda al panel de control de su proveedor de dominio
        2. Busque la sección de registros DNS
        3. Agregue un nuevo registro CNAME:
           - Tipo: CNAME
           - Nombre/Host: ${domain.split('.')[0]} (o @ para el dominio raíz)
           - Valor/Target: ${this.CNAME_TARGET}
           - TTL: 3600 (o Auto)
        4. Espere hasta 24 horas para la propagación DNS
        5. Regrese aquí y haga clic en "Verificar DNS"
      `
        };
    }
}

export default DomainService;
