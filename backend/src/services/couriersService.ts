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

        await pool.query(
            `INSERT INTO couriers (
        id, tenant_id, name, email, phone, vehicle_type, 
        vehicle_plate, zone, status, commission_rate
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'active', $9)`,
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
        const { rows } = await pool.query(
            'SELECT * FROM couriers WHERE id = $1 AND tenant_id = $2',
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
        let query = 'SELECT * FROM couriers WHERE tenant_id = $1';
        const params: any[] = [tenantId];

        if (filters?.status) {
            query += ' AND status = $1';
            params.push(filters.status);
        }

        if (filters?.zone) {
            query += ' AND zone = $1';
            params.push(filters.zone);
        }

        if (filters?.search) {
            query += ' AND (name LIKE $1 OR email LIKE $2 OR phone LIKE $3)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }

        query += ' ORDER BY name ASC';

        const { rows } = await pool.query(query, params);
        return rows as Courier[];
    }

    /**
     * Obtener couriers disponibles para asignación
     */
    static async getAvailable(tenantId: string, zone?: string): Promise<Courier[]> {
        let query = `SELECT * FROM couriers WHERE tenant_id = $1 AND status = 'active'`;
        const params: any[] = [tenantId];

        if (zone) {
            query += ' AND (zone = $1 OR zone IS NULL)';
            params.push(zone);
        }

        query += ' ORDER BY completed_deliveries ASC, rating DESC';

        const { rows } = await pool.query(query, params);
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
                updates.push(`${field} = $1`);
                values.push(data[field as keyof Courier]);
            }
        }

        if (updates.length === 0) return this.getById(id, tenantId);

        updates.push('updated_at = CURRENT_TIMESTAMP');
        values.push(id, tenantId);

        await pool.query(
            `UPDATE couriers SET ${updates.join(', ')} WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Actualizar estado
     */
    static async updateStatus(id: string, tenantId: string, status: string): Promise<Courier | null> {
        await pool.query(
            'UPDATE couriers SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 AND tenant_id = $3',
            [status, id, tenantId]
        );
        return this.getById(id, tenantId);
    }

    /**
     * Registrar entrega completada
     */
    static async recordDelivery(id: string, tenantId: string, commission: number): Promise<void> {
        await pool.query(
            `UPDATE couriers SET 
        completed_deliveries = completed_deliveries + 1,
        balance = balance + $1,
        status = 'active',
        updated_at = CURRENT_TIMESTAMP
       WHERE id = $2 AND tenant_id = $3`,
            [commission, id, tenantId]
        );
    }

    /**
     * Pagar balance al courier
     */
    static async payBalance(id: string, tenantId: string, amount: number): Promise<void> {
        await pool.query(
            `UPDATE couriers SET balance = balance - $1, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $2 AND tenant_id = $3 AND balance >= $4`,
            [amount, id, tenantId, amount]
        );
    }

    /**
     * Estadísticas de couriers
     */
    static async getStats(tenantId: string): Promise<Record<string, any>> {
        const { rows: statusRows } = await pool.query(
            `SELECT status, COUNT(*) as count FROM couriers 
       WHERE tenant_id = $1 GROUP BY status`,
            [tenantId]
        ) as any;

        const { rows: topRows } = await pool.query(
            `SELECT id, name, completed_deliveries, rating FROM couriers 
       WHERE tenant_id = $1 ORDER BY completed_deliveries DESC LIMIT 5`,
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
        const { rows: packages } = await pool.query(
            `SELECT COUNT(*) as count FROM packages 
       WHERE courier_id = $1 AND tenant_id = $2 AND status NOT IN ('delivered', 'cancelled')`,
            [id, tenantId]
        ) as any;

        if (packages[0]?.count > 0) {
            throw new Error('No se puede eliminar courier con paquetes asignados');
        }

        const { rows: result } = await pool.query(
            'DELETE FROM couriers WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        ) as any;

        return result.affectedRows > 0;
    }
}

export default CouriersService;
