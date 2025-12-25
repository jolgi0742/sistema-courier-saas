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
        let query = 'SELECT * FROM frequent_shippers WHERE tenant_id = ?';
        const params: any[] = [tenantId];

        if (search) {
            query += ' AND (name LIKE ? OR phone LIKE ? OR email LIKE ?)';
            const searchTerm = `%${search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }

        query += ' ORDER BY total_shipments DESC, name ASC';

        const [rows] = await pool.execute(query, params);
        return rows as FrequentShipper[];
    }

    /**
     * Obtener remitente por ID
     */
    static async getById(id: string, tenantId: string): Promise<FrequentShipper | null> {
        const [rows] = await pool.execute(
            'SELECT * FROM frequent_shippers WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        const shippers = rows as FrequentShipper[];
        return shippers.length > 0 ? shippers[0] : null;
    }

    /**
     * Buscar remitente por nombre, teléfono o email
     */
    static async search(query: string, tenantId: string): Promise<FrequentShipper[]> {
        const searchTerm = `%${query}%`;
        const [rows] = await pool.execute(
            `SELECT * FROM frequent_shippers 
             WHERE tenant_id = ? 
             AND (name LIKE ? OR phone LIKE ? OR email LIKE ?)
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

        await pool.execute(
            `INSERT INTO frequent_shippers (
                id, tenant_id, name, phone, email, address, city, state, postal_code
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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

        await pool.execute(
            `UPDATE frequent_shippers SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ? AND tenant_id = ?`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar remitente frecuente
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const [result] = await pool.execute(
            'DELETE FROM frequent_shippers WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Incrementar contador de envíos
     */
    static async incrementShipments(id: string, tenantId: string): Promise<void> {
        await pool.execute(
            'UPDATE frequent_shippers SET total_shipments = total_shipments + 1 WHERE id = ? AND tenant_id = ?',
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
        const [countRows] = await pool.execute(
            'SELECT COUNT(*) as total, SUM(total_shipments) as totalShipments FROM frequent_shippers WHERE tenant_id = ?',
            [tenantId]
        );
        const stats = (countRows as any[])[0];

        const [topRows] = await pool.execute(
            'SELECT * FROM frequent_shippers WHERE tenant_id = ? ORDER BY total_shipments DESC LIMIT 5',
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
