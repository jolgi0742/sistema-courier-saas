// maintenanceService.ts - Servicio para gestión de mantenimiento de vehículos
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface Maintenance {
    id: string;
    tenant_id: string;
    vehicle_id: string;
    type: 'preventive' | 'corrective' | 'inspection';
    description: string;
    cost: number | null;
    provider: string | null;
    odometer_reading: number | null;
    next_service_date: string | null;
    next_service_odometer: number | null;
    status: 'scheduled' | 'in_progress' | 'completed';
    completed_at: string | null;
    created_at: string;
}

export interface MaintenanceWithVehicle extends Maintenance {
    vehicle_plate: string;
    vehicle_brand: string | null;
    vehicle_model: string | null;
}

export class MaintenanceService {
    /**
     * Obtener todos los mantenimientos
     */
    static async getAll(tenantId: string, filters?: {
        vehicleId?: string;
        status?: string;
        type?: string;
    }): Promise<MaintenanceWithVehicle[]> {
        let query = `
            SELECT 
                m.*,
                v.plate as vehicle_plate,
                v.brand as vehicle_brand,
                v.model as vehicle_model
            FROM vehicle_maintenance m
            LEFT JOIN vehicles v ON m.vehicle_id = v.id
            WHERE m.tenant_id = ?
        `;
        const params: any[] = [tenantId];

        if (filters?.vehicleId) {
            query += ' AND m.vehicle_id = ?';
            params.push(filters.vehicleId);
        }

        if (filters?.status) {
            query += ' AND m.status = ?';
            params.push(filters.status);
        }

        if (filters?.type) {
            query += ' AND m.type = ?';
            params.push(filters.type);
        }

        query += ' ORDER BY m.created_at DESC';

        const { rows } = await pool.query(query, params);
        return rows as MaintenanceWithVehicle[];
    }

    /**
     * Obtener mantenimiento por ID
     */
    static async getById(id: string, tenantId: string): Promise<MaintenanceWithVehicle | null> {
        const { rows } = await pool.query(
            `SELECT 
                m.*,
                v.plate as vehicle_plate,
                v.brand as vehicle_brand,
                v.model as vehicle_model
            FROM vehicle_maintenance m
            LEFT JOIN vehicles v ON m.vehicle_id = v.id
            WHERE m.id = ? AND m.tenant_id = ?`,
            [id, tenantId]
        );
        const records = rows as MaintenanceWithVehicle[];
        return records.length > 0 ? records[0] : null;
    }

    /**
     * Obtener mantenimientos por vehículo
     */
    static async getByVehicle(vehicleId: string, tenantId: string): Promise<Maintenance[]> {
        const { rows } = await pool.query(
            'SELECT * FROM vehicle_maintenance WHERE vehicle_id = ? AND tenant_id = ? ORDER BY created_at DESC',
            [vehicleId, tenantId]
        );
        return rows as Maintenance[];
    }

    /**
     * Obtener mantenimientos próximos a vencer
     */
    static async getUpcoming(tenantId: string, days: number = 30): Promise<MaintenanceWithVehicle[]> {
        const { rows } = await pool.query(
            `SELECT 
                m.*,
                v.plate as vehicle_plate,
                v.brand as vehicle_brand,
                v.model as vehicle_model
            FROM vehicle_maintenance m
            LEFT JOIN vehicles v ON m.vehicle_id = v.id
            WHERE m.tenant_id = ? 
            AND m.status = 'scheduled'
            AND m.next_service_date IS NOT NULL
            AND m.next_service_date <= DATE_ADD(CURDATE(), INTERVAL ? DAY)
            ORDER BY m.next_service_date ASC`,
            [tenantId, days]
        );
        return rows as MaintenanceWithVehicle[];
    }

    /**
     * Crear nuevo mantenimiento
     */
    static async create(data: Omit<Maintenance, 'id' | 'created_at' | 'completed_at'>, tenantId: string): Promise<Maintenance> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO vehicle_maintenance (
                id, tenant_id, vehicle_id, type, description, cost, provider,
                odometer_reading, next_service_date, next_service_odometer, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                id,
                tenantId,
                data.vehicle_id,
                data.type,
                data.description,
                data.cost || null,
                data.provider || null,
                data.odometer_reading || null,
                data.next_service_date || null,
                data.next_service_odometer || null,
                data.status || 'scheduled'
            ]
        );

        return this.getById(id, tenantId) as Promise<Maintenance>;
    }

    /**
     * Actualizar mantenimiento
     */
    static async update(id: string, data: Partial<Maintenance>, tenantId: string): Promise<Maintenance | null> {
        const fields: string[] = [];
        const values: any[] = [];

        if (data.type !== undefined) {
            fields.push('type = ?');
            values.push(data.type);
        }
        if (data.description !== undefined) {
            fields.push('description = ?');
            values.push(data.description);
        }
        if (data.cost !== undefined) {
            fields.push('cost = ?');
            values.push(data.cost);
        }
        if (data.provider !== undefined) {
            fields.push('provider = ?');
            values.push(data.provider);
        }
        if (data.odometer_reading !== undefined) {
            fields.push('odometer_reading = ?');
            values.push(data.odometer_reading);
        }
        if (data.next_service_date !== undefined) {
            fields.push('next_service_date = ?');
            values.push(data.next_service_date);
        }
        if (data.next_service_odometer !== undefined) {
            fields.push('next_service_odometer = ?');
            values.push(data.next_service_odometer);
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
            `UPDATE vehicle_maintenance SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Completar mantenimiento
     */
    static async complete(id: string, tenantId: string): Promise<Maintenance | null> {
        await pool.query(
            `UPDATE vehicle_maintenance 
             SET status = 'completed', completed_at = NOW()
             WHERE id = ? AND tenant_id = ?`,
            [id, tenantId]
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar mantenimiento
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM vehicle_maintenance WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de mantenimiento
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        scheduled: number;
        inProgress: number;
        completed: number;
        upcoming: number;
    }> {
        const { rows } = await pool.query(
            `SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'scheduled' THEN 1 ELSE 0 END) as scheduled,
                SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as inProgress,
                SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
                SUM(CASE WHEN status = 'scheduled' AND next_service_date <= DATE_ADD(CURDATE(), INTERVAL 30 DAY) THEN 1 ELSE 0 END) as upcoming
            FROM vehicle_maintenance WHERE tenant_id = ?`,
            [tenantId]
        );

        const stats = (rows as any[])[0];

        return {
            total: stats.total || 0,
            scheduled: stats.scheduled || 0,
            inProgress: stats.inProgress || 0,
            completed: stats.completed || 0,
            upcoming: stats.upcoming || 0
        };
    }
}

export default MaintenanceService;
