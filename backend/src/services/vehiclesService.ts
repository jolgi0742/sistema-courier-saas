// vehiclesService.ts - Servicio para gestión de vehículos
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface Vehicle {
    id: string;
    tenant_id: string;
    plate: string;
    brand: string | null;
    model: string | null;
    year: number | null;
    type: string | null;
    assigned_to: string | null;
    status: 'active' | 'maintenance' | 'inactive';
    created_at: string;
}

export interface VehicleWithCourier extends Vehicle {
    courier_name: string | null;
}

export class VehiclesService {
    /**
     * Obtener todos los vehículos
     */
    static async getAll(tenantId: string, filters?: {
        status?: string;
    }): Promise<VehicleWithCourier[]> {
        let query = `
            SELECT 
                v.*,
                c.name as courier_name
            FROM vehicles v
            LEFT JOIN couriers c ON v.assigned_to = c.id
            WHERE v.tenant_id = $1
        `;
        const params: any[] = [tenantId];

        if (filters?.status) {
            query += ' AND v.status = $1';
            params.push(filters.status);
        }

        query += ' ORDER BY v.created_at DESC';

        const { rows } = await pool.query(query, params);
        return rows as VehicleWithCourier[];
    }

    /**
     * Obtener vehículo por ID
     */
    static async getById(id: string, tenantId: string): Promise<VehicleWithCourier | null> {
        const { rows } = await pool.query(
            `SELECT 
                v.*,
                c.name as courier_name
            FROM vehicles v
            LEFT JOIN couriers c ON v.assigned_to = c.id
            WHERE v.id = $1 AND v.tenant_id = $2`,
            [id, tenantId]
        );
        const vehicles = rows as VehicleWithCourier[];
        return vehicles.length > 0 ? vehicles[0] : null;
    }

    /**
     * Crear nuevo vehículo
     */
    static async create(data: Omit<Vehicle, 'id' | 'created_at'>, tenantId: string): Promise<Vehicle> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO vehicles (
                id, tenant_id, plate, brand, model, year, type, assigned_to, status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
                id,
                tenantId,
                data.plate,
                data.brand || null,
                data.model || null,
                data.year || null,
                data.type || null,
                data.assigned_to || null,
                data.status || 'active'
            ]
        );

        return this.getById(id, tenantId) as Promise<Vehicle>;
    }

    /**
     * Actualizar vehículo
     */
    static async update(id: string, data: Partial<Vehicle>, tenantId: string): Promise<Vehicle | null> {
        const fields: string[] = [];
        const values: any[] = [];

        if (data.plate !== undefined) {
            fields.push('plate = ?');
            values.push(data.plate);
        }
        if (data.brand !== undefined) {
            fields.push('brand = ?');
            values.push(data.brand);
        }
        if (data.model !== undefined) {
            fields.push('model = ?');
            values.push(data.model);
        }
        if (data.year !== undefined) {
            fields.push('year = ?');
            values.push(data.year);
        }
        if (data.type !== undefined) {
            fields.push('type = ?');
            values.push(data.type);
        }
        if (data.assigned_to !== undefined) {
            fields.push('assigned_to = ?');
            values.push(data.assigned_to);
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
            `UPDATE vehicles SET ${fields.join(', ')} WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar vehículo
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM vehicles WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de vehículos
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        active: number;
        maintenance: number;
        inactive: number;
    }> {
        const { rows } = await pool.query(
            `SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'maintenance' THEN 1 ELSE 0 END) as maintenance,
                SUM(CASE WHEN status = 'inactive' THEN 1 ELSE 0 END) as inactive
            FROM vehicles WHERE tenant_id = $1`,
            [tenantId]
        );

        const stats = (rows as any[])[0];

        return {
            total: stats.total || 0,
            active: stats.active || 0,
            maintenance: stats.maintenance || 0,
            inactive: stats.inactive || 0
        };
    }
}

export default VehiclesService;
