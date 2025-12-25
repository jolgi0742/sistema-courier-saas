// arrivalsService.ts - Servicio para registro de llegadas de paquetes
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';
import PackagesService from './packagesService';

export interface PackageArrival {
    id: string;
    tenant_id: string;
    package_id: string;
    arrived_at: string;
    received_by: string | null;
    condition_status: 'good' | 'damaged' | 'incomplete';
    notes: string | null;
}

export interface PackageArrivalWithDetails extends PackageArrival {
    tracking_number: string;
    sender_name: string | null;
    receiver_name: string | null;
    receiver_name_user: string | null;
}

export class ArrivalsService {
    /**
     * Obtener todas las llegadas
     */
    static async getAll(tenantId: string, filters?: {
        date?: string;
        condition?: string;
    }): Promise<PackageArrivalWithDetails[]> {
        let query = `
            SELECT 
                pa.*,
                p.tracking_number,
                p.sender_name,
                p.receiver_name,
                u.name as receiver_name_user
            FROM package_arrivals pa
            LEFT JOIN packages p ON pa.package_id = p.id
            LEFT JOIN users u ON pa.received_by = u.id
            WHERE pa.tenant_id = ?
        `;
        const params: any[] = [tenantId];

        if (filters?.date) {
            query += ' AND DATE(pa.arrived_at) = ?';
            params.push(filters.date);
        }

        if (filters?.condition) {
            query += ' AND pa.condition_status = ?';
            params.push(filters.condition);
        }

        query += ' ORDER BY pa.arrived_at DESC';

        const [rows] = await pool.execute(query, params);
        return rows as PackageArrivalWithDetails[];
    }

    /**
     * Obtener llegada por ID
     */
    static async getById(id: string, tenantId: string): Promise<PackageArrivalWithDetails | null> {
        const [rows] = await pool.execute(
            `SELECT 
                pa.*,
                p.tracking_number,
                p.sender_name,
                p.receiver_name,
                u.name as receiver_name_user
            FROM package_arrivals pa
            LEFT JOIN packages p ON pa.package_id = p.id
            LEFT JOIN users u ON pa.received_by = u.id
            WHERE pa.id = ? AND pa.tenant_id = ?`,
            [id, tenantId]
        );
        const arrivals = rows as PackageArrivalWithDetails[];
        return arrivals.length > 0 ? arrivals[0] : null;
    }

    /**
     * Obtener llegadas por paquete
     */
    static async getByPackage(packageId: string, tenantId: string): Promise<PackageArrival[]> {
        const [rows] = await pool.execute(
            'SELECT * FROM package_arrivals WHERE package_id = ? AND tenant_id = ? ORDER BY arrived_at DESC',
            [packageId, tenantId]
        );
        return rows as PackageArrival[];
    }

    /**
     * Registrar llegada de paquete
     */
    static async registerArrival(data: {
        packageId?: string;
        trackingNumber?: string;
        receivedBy?: string;
        condition: 'good' | 'damaged' | 'incomplete';
        notes?: string;
    }, tenantId: string): Promise<PackageArrival> {
        let packageId = data.packageId;

        // Si se proporciona tracking number, buscar el paquete
        if (!packageId && data.trackingNumber) {
            const pkg = await PackagesService.getByTracking(data.trackingNumber, tenantId);
            if (!pkg) {
                throw new Error('Paquete no encontrado');
            }
            packageId = pkg.id;
        }

        if (!packageId) {
            throw new Error('Se requiere packageId o trackingNumber');
        }

        const id = uuidv4();

        await pool.execute(
            `INSERT INTO package_arrivals (
                id, tenant_id, package_id, received_by, condition_status, notes
            ) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                id,
                tenantId,
                packageId,
                data.receivedBy || null,
                data.condition,
                data.notes || null
            ]
        );

        // Actualizar estado del paquete a "in_warehouse"
        await PackagesService.updateStatus(packageId, 'in_warehouse', tenantId);

        return this.getById(id, tenantId) as Promise<PackageArrival>;
    }

    /**
     * Actualizar llegada
     */
    static async update(id: string, data: Partial<PackageArrival>, tenantId: string): Promise<PackageArrival | null> {
        const fields: string[] = [];
        const values: any[] = [];

        if (data.condition_status !== undefined) {
            fields.push('condition_status = ?');
            values.push(data.condition_status);
        }
        if (data.notes !== undefined) {
            fields.push('notes = ?');
            values.push(data.notes);
        }

        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }

        values.push(id, tenantId);

        await pool.execute(
            `UPDATE package_arrivals SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar llegada
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const [result] = await pool.execute(
            'DELETE FROM package_arrivals WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de llegadas
     */
    static async getStats(tenantId: string, date?: string): Promise<{
        total: number;
        good: number;
        damaged: number;
        incomplete: number;
    }> {
        let query = `
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN condition_status = 'good' THEN 1 ELSE 0 END) as good,
                SUM(CASE WHEN condition_status = 'damaged' THEN 1 ELSE 0 END) as damaged,
                SUM(CASE WHEN condition_status = 'incomplete' THEN 1 ELSE 0 END) as incomplete
            FROM package_arrivals WHERE tenant_id = ?
        `;
        const params: any[] = [tenantId];

        if (date) {
            query += ' AND DATE(arrived_at) = ?';
            params.push(date);
        }

        const [rows] = await pool.execute(query, params);

        const stats = (rows as any[])[0];

        return {
            total: stats.total || 0,
            good: stats.good || 0,
            damaged: stats.damaged || 0,
            incomplete: stats.incomplete || 0
        };
    }

    /**
     * Obtener llegadas de hoy
     */
    static async getTodayArrivals(tenantId: string): Promise<PackageArrivalWithDetails[]> {
        const today = new Date().toISOString().split('T')[0];
        return this.getAll(tenantId, { date: today });
    }
}

export default ArrivalsService;
