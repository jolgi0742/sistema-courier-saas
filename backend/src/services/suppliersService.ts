// suppliersService.ts - Servicio para gestión de proveedores
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface Supplier {
    id: string;
    tenant_id: string;
    name: string;
    contact_name: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    category: string | null;
    notes: string | null;
    status: 'active' | 'inactive';
    created_at: string;
    updated_at: string;
}

export class SuppliersService {
    /**
     * Obtener todos los proveedores
     */
    static async getAll(tenantId: string, filters?: {
        status?: string;
        category?: string;
        search?: string;
    }): Promise<Supplier[]> {
        let query = 'SELECT * FROM suppliers WHERE tenant_id = $1';
        const params: any[] = [tenantId];

        if (filters?.status) {
            query += ' AND status = $1';
            params.push(filters.status);
        }

        if (filters?.category) {
            query += ' AND category = $1';
            params.push(filters.category);
        }

        if (filters?.search) {
            query += ' AND (name LIKE $1 OR contact_name LIKE $2 OR email LIKE $3)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }

        query += ' ORDER BY name ASC';

        const { rows } = await pool.query(query, params);
        return rows as Supplier[];
    }

    /**
     * Obtener proveedor por ID
     */
    static async getById(id: string, tenantId: string): Promise<Supplier | null> {
        const { rows } = await pool.query(
            'SELECT * FROM suppliers WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        const suppliers = rows as Supplier[];
        return suppliers.length > 0 $3 suppliers[0] : null;
    }

    /**
     * Crear nuevo proveedor
     */
    static async create(data: Omit<Supplier, 'id' | 'created_at' | 'updated_at'>, tenantId: string): Promise<Supplier> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO suppliers (
                id, tenant_id, name, contact_name, phone, email, 
                address, city, state, postal_code, category, notes, status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
            [
                id,
                tenantId,
                data.name,
                data.contact_name || null,
                data.phone || null,
                data.email || null,
                data.address || null,
                data.city || null,
                data.state || null,
                data.postal_code || null,
                data.category || null,
                data.notes || null,
                data.status || 'active'
            ]
        );

        return this.getById(id, tenantId) as Promise<Supplier>;
    }

    /**
     * Actualizar proveedor
     */
    static async update(id: string, data: Partial<Supplier>, tenantId: string): Promise<Supplier | null> {
        const fields: string[] = [];
        const values: any[] = [];

        if (data.name !== undefined) {
            fields.push('name = ?');
            values.push(data.name);
        }
        if (data.contact_name !== undefined) {
            fields.push('contact_name = ?');
            values.push(data.contact_name);
        }
        if (data.phone !== undefined) {
            fields.push('phone = ?');
            values.push(data.phone);
        }
        if (data.email !== undefined) {
            fields.push('email = ?');
            values.push(data.email);
        }
        if (data.address !== undefined) {
            fields.push('address = ?');
            values.push(data.address);
        }
        if (data.city !== undefined) {
            fields.push('city = ?');
            values.push(data.city);
        }
        if (data.state !== undefined) {
            fields.push('state = ?');
            values.push(data.state);
        }
        if (data.postal_code !== undefined) {
            fields.push('postal_code = ?');
            values.push(data.postal_code);
        }
        if (data.category !== undefined) {
            fields.push('category = ?');
            values.push(data.category);
        }
        if (data.notes !== undefined) {
            fields.push('notes = ?');
            values.push(data.notes);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
        }

        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }

        values.push(id, tenantId);

        await pool.query(
            `UPDATE suppliers SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar proveedor
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM suppliers WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de proveedores
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        active: number;
        inactive: number;
        byCategory: { category: string; count: number }[];
    }> {
        const { rows: countRows } = await pool.query(
            `SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'inactive' THEN 1 ELSE 0 END) as inactive
            FROM suppliers WHERE tenant_id = $1`,
            [tenantId]
        );

        const stats = (countRows as any[])[0];

        const { rows: categoryRows } = await pool.query(
            `SELECT category, COUNT(*) as count 
             FROM suppliers 
             WHERE tenant_id = $1 AND category IS NOT NULL
             GROUP BY category
             ORDER BY count DESC`,
            [tenantId]
        );

        return {
            total: stats.total || 0,
            active: stats.active || 0,
            inactive: stats.inactive || 0,
            byCategory: categoryRows as { category: string; count: number }[]
        };
    }

    /**
     * Obtener categorías únicas
     */
    static async getCategories(tenantId: string): Promise<string[]> {
        const { rows } = await pool.query(
            'SELECT DISTINCT category FROM suppliers WHERE tenant_id = $1 AND category IS NOT NULL ORDER BY category',
            [tenantId]
        );
        return (rows as any[]).map(row => row.category);
    }
}

export default SuppliersService;
