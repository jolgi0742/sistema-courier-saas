"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainService = void 0;
// domainService.ts - Gestión de dominios personalizados (White Label)
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
const dns_1 = __importDefault(require("dns"));
const util_1 = require("util");
const resolveCname = (0, util_1.promisify)(dns_1.default.resolveCname);
class DomainService {
    /**
     * Obtener todos los dominios de un tenant
     */
    static async getByTenantId(tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM tenant_domains WHERE tenant_id = ? ORDER BY is_primary DESC', [tenantId]);
        return rows;
    }
    /**
     * Obtener dominio principal
     */
    static async getPrimaryDomain(tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM tenant_domains WHERE tenant_id = ? AND is_primary = TRUE LIMIT 1', [tenantId]);
        return rows[0] || null;
    }
    /**
     * Buscar tenant por dominio personalizado
     */
    static async getTenantByDomain(domain) {
        const [rows] = await database_1.default.execute('SELECT tenant_id FROM tenant_domains WHERE domain = ? AND ssl_status = "active"', [domain.toLowerCase()]);
        return rows[0]?.tenant_id || null;
    }
    /**
     * Agregar dominio personalizado (Enterprise)
     */
    static async addCustomDomain(tenantId, domain) {
        // Validar formato de dominio
        if (!this.isValidDomain(domain)) {
            throw new Error('Formato de dominio inválido');
        }
        // Verificar que no exista
        const [existing] = await database_1.default.execute('SELECT id FROM tenant_domains WHERE domain = ?', [domain.toLowerCase()]);
        if (existing.length > 0) {
            throw new Error('Este dominio ya está registrado');
        }
        // Verificar que el tenant tiene plan Enterprise
        const [tenantRows] = await database_1.default.execute('SELECT plan_id FROM tenants WHERE id = ?', [tenantId]);
        if (tenantRows[0]?.plan_id !== 'enterprise') {
            throw new Error('Los dominios personalizados requieren plan Enterprise');
        }
        // Crear registro de dominio
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO tenant_domains (id, tenant_id, domain_type, domain, is_primary, ssl_status)
       VALUES (?, ?, 'custom', ?, FALSE, 'pending')`, [id, tenantId, domain.toLowerCase()]);
        return (await this.getById(id));
    }
    /**
     * Obtener dominio por ID
     */
    static async getById(id) {
        const [rows] = await database_1.default.execute('SELECT * FROM tenant_domains WHERE id = ?', [id]);
        return rows[0] || null;
    }
    /**
     * Verificar configuración DNS del dominio
     */
    static async verifyDNS(domainId) {
        const domain = await this.getById(domainId);
        if (!domain) {
            throw new Error('Dominio no encontrado');
        }
        try {
            const records = await resolveCname(domain.domain);
            // Verificar que apunta a nuestro CNAME target
            if (records.includes(this.CNAME_TARGET)) {
                // Marcar como verificado
                await database_1.default.execute(`UPDATE tenant_domains SET verified_at = NOW(), ssl_status = 'provisioning' WHERE id = ?`, [domainId]);
                return {
                    verified: true,
                    message: 'DNS verificado correctamente. Iniciando provisión de SSL.'
                };
            }
            else {
                return {
                    verified: false,
                    message: `El CNAME debe apuntar a ${this.CNAME_TARGET}. Actualmente apunta a: ${records.join(', ')}`
                };
            }
        }
        catch (error) {
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
    static async setPrimary(tenantId, domainId) {
        // Quitar primary de otros dominios
        await database_1.default.execute('UPDATE tenant_domains SET is_primary = FALSE WHERE tenant_id = ?', [tenantId]);
        // Establecer el nuevo primary
        await database_1.default.execute('UPDATE tenant_domains SET is_primary = TRUE WHERE id = ? AND tenant_id = ?', [domainId, tenantId]);
    }
    /**
     * Eliminar dominio personalizado
     */
    static async delete(domainId, tenantId) {
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
        await database_1.default.execute('DELETE FROM tenant_domains WHERE id = ?', [domainId]);
    }
    /**
     * Actualizar estado de SSL
     */
    static async updateSSLStatus(domainId, status, expiresAt) {
        await database_1.default.execute(`UPDATE tenant_domains SET ssl_status = ?, ssl_expires_at = ? WHERE id = ?`, [status, expiresAt || null, domainId]);
    }
    /**
     * Validar formato de dominio
     */
    static isValidDomain(domain) {
        const pattern = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
        return pattern.test(domain);
    }
    /**
     * Obtener instrucciones de configuración DNS
     */
    static getDNSInstructions(domain) {
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
exports.DomainService = DomainService;
// Dominio base del SaaS (configurable)
DomainService.SAAS_DOMAIN = process.env.SAAS_DOMAIN || 'sistemacourier.com';
DomainService.CNAME_TARGET = process.env.CNAME_TARGET || 'custom.sistemacourier.com';
exports.default = DomainService;
//# sourceMappingURL=domainService.js.map