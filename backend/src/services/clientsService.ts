// clientsService.ts - Servicio de clientes multi-tenant
import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

export interface Client {
    id: string;
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    company_name: string | null;
    address: string | null;
    city: string | null;
    country: string;
    tax_id: string | null;
    status: 'active' | 'inactive';
    credit_limit: number;
    credit_balance: number;
    total_packages: number;
    created_at: Date;
    updated_at: Date;
}

export interface CreateClientInput {
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    company_name?: string;
    address?: string;
    city?: string;
    country?: string;
    tax_id?: string;
    credit_limit?: number;
}

export class ClientsService {
    /**
     * Crear nuevo cliente
     */
    static async create(input: CreateClientInput): Promise<Client> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO clients (
        id, tenant_id, name, email, phone, company_name, 
        address, city, country, tax_id, credit_limit, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 'active')`,
            [
                id, input.tenant_id, input.name, input.email, input.phone,
                input.company_name || null, input.address || null,
                input.city || null, input.country || 'CR',
                input.tax_id || null, input.credit_limit || 0
            ]
        );

        return (await this.getById(id, input.tenant_id))!;
    }

    /**
     * Obtener cliente por ID
     */
    static async getById(id: string, tenantId: string): Promise<Client | null> {
        const { rows } = await pool.query(
            'SELECT * FROM clients WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        return (rows as Client[])[0] || null;
    }

    /**
     * Obtener cliente por email
     */
    static async getByEmail(email: string, tenantId: string): Promise<Client | null> {
        const { rows } = await pool.query(
            'SELECT * FROM clients WHERE email = $1 AND tenant_id = $2',
            [email, tenantId]
        );
        return (rows as Client[])[0] || null;
    }

    /**
     * Listar clientes
     */
    static async getAll(tenantId: string, filters?: {
        status?: string;
        search?: string;
        limit?: number;
        offset?: number;
    }): Promise<{ clients: Client[]; total: number }> {
        let query = 'SELECT * FROM clients WHERE tenant_id = $1';
        let countQuery = 'SELECT COUNT(*) as total FROM clients WHERE tenant_id = $1';
        const params: any[] = [tenantId];

        if (filters?.status) {
            query += ' AND status = $1';
            countQuery += ' AND status = $1';
            params.push(filters.status);
        }

        if (filters?.search) {
            query += ' AND (name LIKE $1 OR email LIKE $2 OR company_name LIKE $3 OR phone LIKE $4)';
            countQuery += ' AND (name LIKE $1 OR email LIKE $2 OR company_name LIKE $3 OR phone LIKE $4)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm, searchTerm);
        }

        // Count
        const { rows: countRows } = await pool.query(countQuery, params) as any;
        const total = countRows[0].total || 0;

        // Results
        query += ' ORDER BY name ASC';
        if (filters$2.limit) {
            query += ` LIMIT ${filters.limit}`;
            if (filters.offset) {
                query += ` OFFSET ${filters.offset}`;
            }
        }

        const { rows } = await pool.query(query, params);
        return { clients: rows as Client[], total };
    }

    /**
     * Actualizar cliente
     */
    static async update(id: string, tenantId: string, data: Partial<Client>): Promise<Client | null> {
        const allowedFields = ['name', 'email', 'phone', 'company_name',
            'address', 'city', 'country', 'tax_id',
            'credit_limit', 'status'];

        const updates: string[] = [];
        const values: any[] = [];

        for (const field of allowedFields) {
            if (data[field as keyof Client] !== undefined) {
                updates.push(`${field} = $1`);
                values.push(data[field as keyof Client]);
            }
        }

        if (updates.length === 0) return this.getById(id, tenantId);

        updates.push('updated_at = CURRENT_TIMESTAMP');
        values.push(id, tenantId);

        await pool.query(
            `UPDATE clients SET ${updates.join(', ')} WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Actualizar balance de crédito
     */
    static async updateCreditBalance(id: string, tenantId: string, amount: number): Promise<void> {
        await pool.query(
            `UPDATE clients SET credit_balance = credit_balance + $1, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $2 AND tenant_id = $3`,
            [amount, id, tenantId]
        );
    }

    /**
     * Incrementar contador de paquetes
     */
    static async incrementPackages(id: string, tenantId: string): Promise<void> {
        await pool.query(
            `UPDATE clients SET total_packages = total_packages + 1, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $1 AND tenant_id = $2`,
            [id, tenantId]
        );
    }

    /**
     * Obtener paquetes del cliente
     */
    static async getPackages(id: string, tenantId: string, limit = 50): Promise<any[]> {
        const { rows } = await pool.query(
            `SELECT * FROM packages WHERE client_id = $1 AND tenant_id = $2 
       ORDER BY created_at DESC LIMIT $3`,
            [id, tenantId, limit]
        );
        return rows as any[];
    }

    /**
     * Estadísticas de clientes
     */
    static async getStats(tenantId: string): Promise<Record<string, any>> {
        const { rows } = await pool.query(
            `SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
        SUM(total_packages) as total_packages,
        SUM(credit_balance) as total_credit
       FROM clients WHERE tenant_id = $1`,
            [tenantId]
        ) as any;

        const { rows: topRows } = await pool.query(
            `SELECT id, name, company_name, total_packages FROM clients 
       WHERE tenant_id = $1 ORDER BY total_packages DESC LIMIT 5`,
            [tenantId]
        ) as any;

        return {
            ...rows[0],
            top_clients: topRows
        };
    }

    /**
     * Eliminar cliente
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        // Solo eliminar si no tiene paquetes
        const { rows: packages } = await pool.query(
            'SELECT COUNT(*) as count FROM packages WHERE client_id = $1 AND tenant_id = $2',
            [id, tenantId]
        ) as any;

        if (packages[0]?.count > 0) {
            // Desactivar en lugar de eliminar
            await this.update(id, tenantId, { status: 'inactive' });
            return true;
        }

        const { rows: result } = await pool.query(
            'DELETE FROM clients WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        ) as any;

        return result.affectedRows > 0;
    }
}

export default ClientsService;
