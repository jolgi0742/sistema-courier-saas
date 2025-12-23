"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantService = void 0;
// tenantService.ts - Servicio de gestión de Tenants
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
class TenantService {
    /**
     * Obtener tenant por ID
     */
    static async getById(id) {
        const [rows] = await database_1.default.execute('SELECT * FROM tenants WHERE id = ?', [id]);
        return rows[0] || null;
    }
    /**
     * Obtener tenant por subdominio
     */
    static async getBySubdomain(subdomain) {
        const [rows] = await database_1.default.execute('SELECT * FROM tenants WHERE subdomain = ?', [subdomain.toLowerCase()]);
        return rows[0] || null;
    }
    /**
     * Obtener tenant por dominio personalizado
     */
    static async getByCustomDomain(domain) {
        const [rows] = await database_1.default.execute(`SELECT t.* FROM tenants t
       INNER JOIN tenant_domains td ON t.id = td.tenant_id
       WHERE td.domain = ? AND td.ssl_status = 'active'`, [domain.toLowerCase()]);
        return rows[0] || null;
    }
    /**
     * Crear nuevo tenant (con período de prueba)
     */
    static async create(input) {
        const id = (0, uuid_1.v4)();
        const trialEndsAt = new Date();
        trialEndsAt.setDate(trialEndsAt.getDate() + 14); // 14 días de trial
        // Verificar que el subdominio esté disponible
        const existing = await this.getBySubdomain(input.subdomain);
        if (existing) {
            throw new Error('El subdominio ya está en uso');
        }
        // Verificar subdominios reservados
        const reserved = ['www', 'api', 'admin', 'app', 'dashboard', 'billing', 'support'];
        if (reserved.includes(input.subdomain.toLowerCase())) {
            throw new Error('Este subdominio está reservado');
        }
        await database_1.default.execute(`INSERT INTO tenants (id, name, subdomain, status, plan_id, trial_ends_at)
       VALUES (?, ?, ?, 'trial', 'trial', ?)`, [id, input.name, input.subdomain.toLowerCase(), trialEndsAt]);
        // Crear branding por defecto
        await database_1.default.execute(`INSERT INTO tenant_branding (tenant_id, company_name, primary_color, secondary_color, accent_color)
       VALUES (?, ?, '#3B82F6', '#1E40AF', '#10B981')`, [id, input.name]);
        // Crear dominio de subdominio
        await database_1.default.execute(`INSERT INTO tenant_domains (id, tenant_id, domain_type, domain, is_primary, ssl_status)
       VALUES (?, ?, 'subdomain', ?, TRUE, 'active')`, [(0, uuid_1.v4)(), id, `${input.subdomain.toLowerCase()}.sistemacourier.com`]);
        return (await this.getById(id));
    }
    /**
     * Actualizar tenant
     */
    static async update(id, data) {
        const updates = [];
        const values = [];
        if (data.name) {
            updates.push('name = ?');
            values.push(data.name);
        }
        if (data.status) {
            updates.push('status = ?');
            values.push(data.status);
        }
        if (data.plan_id) {
            updates.push('plan_id = ?');
            values.push(data.plan_id);
        }
        if (updates.length > 0) {
            values.push(id);
            await database_1.default.execute(`UPDATE tenants SET ${updates.join(', ')} WHERE id = ?`, values);
        }
        return (await this.getById(id));
    }
    /**
     * Activar tenant (después de pago)
     */
    static async activate(id, planId) {
        await database_1.default.execute(`UPDATE tenants SET status = 'active', plan_id = ?, trial_ends_at = NULL WHERE id = ?`, [planId, id]);
        return (await this.getById(id));
    }
    /**
     * Suspender tenant
     */
    static async suspend(id, reason) {
        await database_1.default.execute(`UPDATE tenants SET status = 'suspended' WHERE id = ?`, [id]);
        // TODO: Log de suspensión con razón
        return (await this.getById(id));
    }
    /**
     * Cancelar tenant
     */
    static async cancel(id) {
        await database_1.default.execute(`UPDATE tenants SET status = 'cancelled' WHERE id = ?`, [id]);
        return (await this.getById(id));
    }
    /**
     * Listar todos los tenants (para Super Admin)
     */
    static async getAll(filters) {
        let query = 'SELECT * FROM tenants WHERE 1=1';
        let countQuery = 'SELECT COUNT(*) as total FROM tenants WHERE 1=1';
        const values = [];
        if (filters?.status) {
            query += ' AND status = ?';
            countQuery += ' AND status = ?';
            values.push(filters.status);
        }
        if (filters?.plan_id) {
            query += ' AND plan_id = ?';
            countQuery += ' AND plan_id = ?';
            values.push(filters.plan_id);
        }
        if (filters?.search) {
            query += ' AND (name LIKE ? OR subdomain LIKE ?)';
            countQuery += ' AND (name LIKE ? OR subdomain LIKE ?)';
            values.push(`%${filters.search}%`, `%${filters.search}%`);
        }
        // Count total
        const [countRows] = await database_1.default.execute(countQuery, values);
        const total = countRows[0].total;
        // Add pagination
        query += ' ORDER BY created_at DESC';
        if (filters?.limit) {
            query += ` LIMIT ${filters.limit}`;
            if (filters?.offset) {
                query += ` OFFSET ${filters.offset}`;
            }
        }
        const [rows] = await database_1.default.execute(query, values);
        return { tenants: rows, total };
    }
    /**
     * Verificar disponibilidad de subdominio
     */
    static async isSubdomainAvailable(subdomain) {
        const reserved = ['www', 'api', 'admin', 'app', 'dashboard', 'billing', 'support', 'help'];
        if (reserved.includes(subdomain.toLowerCase())) {
            return false;
        }
        const existing = await this.getBySubdomain(subdomain);
        return !existing;
    }
}
exports.TenantService = TenantService;
exports.default = TenantService;
//# sourceMappingURL=tenantService.js.map