// couriersService.ts - Servicio de couriers multi-tenant
import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

export interface Courier {
    id: string;
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    vehicle_type: string;
    vehicle_plate?: string;
    zone: string | null;
    status: 'active' | 'inactive' | 'on_delivery';
    commission_rate: number;
    balance: number;
    completed_deliveries: number;
    rating: number;
    created_at: Date;
    updated_at: Date;
}

export interface CreateCourierInput {
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    vehicle_type: string;
    vehicle_plate?: string;
    zone?: string;
    commission_rate?: number;
}

export class CouriersService {
    /**
     * Crear nuevo courier
     */
    static async create(input: CreateCourierInput): Promise<Courier> {
        const id = uuidv4();

        await pool.execute(
            `INSERT INTO couriers (
        id, tenant_id, name, email, phone, vehicle_type, 
        vehicle_plate, zone, status, commission_rate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', ?)`,
            [
                id, input.tenant_id, input.name, input.email, input.phone,
                input.vehicle_type, input.vehicle_plate || null,
                input.zone || null, input.commission_rate || 10
            ]
        );

        return (await this.getById(id, input.tenant_id))!;
    }

    /**
     * Obtener courier por ID
     */
    static async getById(id: string, tenantId: string): Promise<Courier | null> {
        const [rows] = await pool.execute(
            'SELECT * FROM couriers WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (rows as Courier[])[0] || null;
    }

    /**
     * Listar couriers
     */
    static async getAll(tenantId: string, filters?: {
        status?: string;
        zone?: string;
        search?: string;
    }): Promise<Courier[]> {
        let query = 'SELECT * FROM couriers WHERE tenant_id = ?';
        const params: any[] = [tenantId];

        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }

        if (filters?.zone) {
            query += ' AND zone = ?';
            params.push(filters.zone);
        }

        if (filters?.search) {
            query += ' AND (name LIKE ? OR email LIKE ? OR phone LIKE ?)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }

        query += ' ORDER BY name ASC';

        const [rows] = await pool.execute(query, params);
        return rows as Courier[];
    }

    /**
     * Obtener couriers disponibles para asignación
     */
    static async getAvailable(tenantId: string, zone?: string): Promise<Courier[]> {
        let query = `SELECT * FROM couriers WHERE tenant_id = ? AND status = 'active'`;
        const params: any[] = [tenantId];

        if (zone) {
            query += ' AND (zone = ? OR zone IS NULL)';
            params.push(zone);
        }

        query += ' ORDER BY completed_deliveries ASC, rating DESC';

        const [rows] = await pool.execute(query, params);
        return rows as Courier[];
    }

    /**
     * Actualizar courier
     */
    static async update(id: string, tenantId: string, data: Partial<Courier>): Promise<Courier | null> {
        const allowedFields = ['name', 'email', 'phone', 'vehicle_type',
            'vehicle_plate', 'zone', 'status', 'commission_rate'];

        const updates: string[] = [];
        const values: any[] = [];

        for (const field of allowedFields) {
            if (data[field as keyof Courier] !== undefined) {
                updates.push(`${field} = ?`);
                values.push(data[field as keyof Courier]);
            }
        }

        if (updates.length === 0) return this.getById(id, tenantId);

        updates.push('updated_at = NOW()');
        values.push(id, tenantId);

        await pool.execute(
            `UPDATE couriers SET ${updates.join(', ')} WHERE id = ? AND tenant_id = ?`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Actualizar estado
     */
    static async updateStatus(id: string, tenantId: string, status: string): Promise<Courier | null> {
        await pool.execute(
            'UPDATE couriers SET status = ?, updated_at = NOW() WHERE id = ? AND tenant_id = ?',
            [status, id, tenantId]
        );
        return this.getById(id, tenantId);
    }

    /**
     * Registrar entrega completada
     */
    static async recordDelivery(id: string, tenantId: string, commission: number): Promise<void> {
        await pool.execute(
            `UPDATE couriers SET 
        completed_deliveries = completed_deliveries + 1,
        balance = balance + ?,
        status = 'active',
        updated_at = NOW()
       WHERE id = ? AND tenant_id = ?`,
            [commission, id, tenantId]
        );
    }

    /**
     * Pagar balance al courier
     */
    static async payBalance(id: string, tenantId: string, amount: number): Promise<void> {
        await pool.execute(
            `UPDATE couriers SET balance = balance - ?, updated_at = NOW() 
       WHERE id = ? AND tenant_id = ? AND balance >= ?`,
            [amount, id, tenantId, amount]
        );
    }

    /**
     * Estadísticas de couriers
     */
    static async getStats(tenantId: string): Promise<Record<string, any>> {
        const [statusRows] = await pool.execute(
            `SELECT status, COUNT(*) as count FROM couriers 
       WHERE tenant_id = ? GROUP BY status`,
            [tenantId]
        ) as any;

        const [topRows] = await pool.execute(
            `SELECT id, name, completed_deliveries, rating FROM couriers 
       WHERE tenant_id = ? ORDER BY completed_deliveries DESC LIMIT 5`,
            [tenantId]
        ) as any;

        const stats: any = {
            total: 0,
            active: 0,
            on_delivery: 0,
            inactive: 0,
            top_couriers: topRows
        };

        for (const row of statusRows) {
            stats[row.status] = row.count;
            stats.total += row.count;
        }

        return stats;
    }

    /**
     * Eliminar courier
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        // Solo eliminar si no tiene paquetes asignados
        const [packages] = await pool.execute(
            `SELECT COUNT(*) as count FROM packages 
       WHERE courier_id = ? AND tenant_id = ? AND status NOT IN ('delivered', 'cancelled')`,
            [id, tenantId]
        ) as any;

        if (packages[0]?.count > 0) {
            throw new Error('No se puede eliminar courier con paquetes asignados');
        }

        const [result] = await pool.execute(
            'DELETE FROM couriers WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        ) as any;

        return result.affectedRows > 0;
    }
}

export default CouriersService;
