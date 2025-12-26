// shippersService.ts - Servicio para gestión de remitentes frecuentes
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface FrequentShipper {
    id: string;
    tenant_id: string;
    name: string;
    phone: string | null;
    email: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    total_shipments: number;
    created_at: string;
    updated_at: string;
}

export class ShippersService {
    /**
     * Obtener todos los remitentes frecuentes
     */
    static async getAll(tenantId: string, search?: string): Promise<FrequentShipper[]> {
        let query = 'SELECT * FROM frequent_shippers WHERE tenant_id = $1';
        const params: any[] = [tenantId];

        if (search) {
            query += ' AND (name LIKE $1 OR phone LIKE $2 OR email LIKE $3)';
            const searchTerm = `%${search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }

        query += ' ORDER BY total_shipments DESC, name ASC';

        const { rows } = await pool.query(query, params);
        return rows as FrequentShipper[];
    }

    /**
     * Obtener remitente por ID
     */
    static async getById(id: string, tenantId: string): Promise<FrequentShipper | null> {
        const { rows } = await pool.query(
            'SELECT * FROM frequent_shippers WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        const shippers = rows as FrequentShipper[];
        return shippers.length > 0 $3 shippers[0] : null;
    }

    /**
     * Buscar remitente por nombre, teléfono o email
     */
    static async search(query: string, tenantId: string): Promise<FrequentShipper[]> {
        const searchTerm = `%${query}%`;
        const { rows } = await pool.query(
            `SELECT * FROM frequent_shippers 
             WHERE tenant_id = $1 
             AND (name LIKE $2 OR phone LIKE $3 OR email LIKE $4)
             ORDER BY total_shipments DESC
             LIMIT 10`,
            [tenantId, searchTerm, searchTerm, searchTerm]
        );
        return rows as FrequentShipper[];
    }

    /**
     * Crear nuevo remitente frecuente
     */
    static async create(data: Omit<FrequentShipper, 'id' | 'created_at' | 'updated_at' | 'total_shipments'>, tenantId: string): Promise<FrequentShipper> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO frequent_shippers (
                id, tenant_id, name, phone, email, address, city, state, postal_code
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
                id,
                tenantId,
                data.name,
                data.phone || null,
                data.email || null,
                data.address || null,
                data.city || null,
                data.state || null,
                data.postal_code || null
            ]
        );

        return this.getById(id, tenantId) as Promise<FrequentShipper>;
    }

    /**
     * Actualizar remitente frecuente
     */
    static async update(id: string, data: Partial<FrequentShipper>, tenantId: string): Promise<FrequentShipper | null> {
        const fields: string[] = [];
        const values: any[] = [];

        if (data.name !== undefined) {
            fields.push('name = ?');
            values.push(data.name);
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

        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }

        values.push(id, tenantId);

        await pool.query(
            `UPDATE frequent_shippers SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar remitente frecuente
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM frequent_shippers WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Incrementar contador de envíos
     */
    static async incrementShipments(id: string, tenantId: string): Promise<void> {
        await pool.query(
            'UPDATE frequent_shippers SET total_shipments = total_shipments + 1 WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
    }

    /**
     * Obtener estadísticas de remitentes
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        totalShipments: number;
        topShippers: FrequentShipper[];
    }> {
        const { rows: countRows } = await pool.query(
            'SELECT COUNT(*) as total, SUM(total_shipments) as totalShipments FROM frequent_shippers WHERE tenant_id = $1',
            [tenantId]
        );
        const stats = (countRows as any[])[0];

        const { rows: topRows } = await pool.query(
            'SELECT * FROM frequent_shippers WHERE tenant_id = $1 ORDER BY total_shipments DESC LIMIT 5',
            [tenantId]
        );

        return {
            total: stats.total || 0,
            totalShipments: stats.totalShipments || 0,
            topShippers: topRows as FrequentShipper[]
        };
    }
}

export default ShippersService;
