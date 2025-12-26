// packagesService.ts - Servicio de paquetes multi-tenant
import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

export interface Package {
    id: string;
    tenant_id: string;
    tracking_number: string;
    client_id: string;
    sender_name: string;
    sender_phone: string;
    recipient_name: string;
    recipient_phone: string;
    recipient_address: string;
    weight: number;
    dimensions: string | null;
    declared_value: number;
    status: string;
    courier_id: string | null;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
}

export interface CreatePackageInput {
    tenant_id: string;
    client_id: string;
    sender_name: string;
    sender_phone: string;
    recipient_name: string;
    recipient_phone: string;
    recipient_address: string;
    weight: number;
    dimensions?: string;
    declared_value?: number;
    notes?: string;
}

export interface PackageFilters {
    tenant_id: string;
    status?: string;
    client_id?: string;
    courier_id?: string;
    search?: string;
    date_from?: string;
    date_to?: string;
    limit?: number;
    offset?: number;
}

export class PackagesService {
    /**
     * Generar número de tracking único
     */
    private static generateTrackingNumber(): string {
        const prefix = 'SC';
        const timestamp = Date.now().toString(36).toUpperCase();
        const random = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `${prefix}${timestamp}${random}`;
    }

    /**
     * Crear nuevo paquete
     */
    static async create(input: CreatePackageInput): Promise<Package> {
        const id = uuidv4();
        const tracking_number = this.generateTrackingNumber();

        await pool.query(
            `INSERT INTO packages (
        id, tenant_id, tracking_number, client_id,
        sender_name, sender_phone, recipient_name, recipient_phone,
        recipient_address, weight, dimensions, declared_value, status, notes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 'pending', $13)`,
            [
                id, input.tenant_id, tracking_number, input.client_id,
                input.sender_name, input.sender_phone, input.recipient_name, input.recipient_phone,
                input.recipient_address, input.weight, input.dimensions || null,
                input.declared_value || 0, input.notes || null
            ]
        );

        return (await this.getById(id, input.tenant_id))!;
    }

    /**
     * Obtener paquete por ID (con validación de tenant)
     */
    static async getById(id: string, tenantId: string): Promise<Package | null> {
        const { rows } = await pool.query(
            'SELECT * FROM packages WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        return (rows as Package[])[0] || null;
    }

    /**
     * Obtener paquete por tracking number
     */
    static async getByTracking(tracking: string, tenantId: string): Promise<Package | null> {
        const { rows } = await pool.query(
            'SELECT * FROM packages WHERE tracking_number = $1 AND tenant_id = $2',
            [tracking, tenantId]
        );
        return (rows as Package[])[0] || null;
    }

    /**
     * Listar paquetes con filtros
     */
    static async getAll(filters: PackageFilters): Promise<{ packages: Package[]; total: number }> {
        let query = 'SELECT * FROM packages WHERE tenant_id = $1';
        let countQuery = 'SELECT COUNT(*) as total FROM packages WHERE tenant_id = $1';
        const params: any[] = [filters.tenant_id];

        if (filters.status) {
            query += ' AND status = $1';
            countQuery += ' AND status = $1';
            params.push(filters.status);
        }

        if (filters.client_id) {
            query += ' AND client_id = $1';
            countQuery += ' AND client_id = $1';
            params.push(filters.client_id);
        }

        if (filters.courier_id) {
            query += ' AND courier_id = $1';
            countQuery += ' AND courier_id = $1';
            params.push(filters.courier_id);
        }

        if (filters.search) {
            query += ' AND (tracking_number LIKE $1 OR recipient_name LIKE $2 OR sender_name LIKE $3)';
            countQuery += ' AND (tracking_number LIKE $1 OR recipient_name LIKE $2 OR sender_name LIKE $3)';
            const searchTerm = `%${filters.search}%`;
            params.push(searchTerm, searchTerm, searchTerm);
        }

        if (filters.date_from) {
            query += ' AND DATE(created_at) >= $1';
            countQuery += ' AND DATE(created_at) >= $2';
            params.push(filters.date_from);
        }

        if (filters.date_to) {
            query += ' AND DATE(created_at) <= $3';
            countQuery += ' AND DATE(created_at) <= $4';
            params.push(filters.date_to);
        }

        // Count total
        const { rows: countRows } = await pool.query(countQuery, params) as any;
        const total = countRows[0].total || 0;

        // Add pagination
        query += ' ORDER BY created_at DESC';
        if (filters.limit) {
            query += ` LIMIT ${filters.limit}`;
            if (filters.offset) {
                query += ` OFFSET ${filters.offset}`;
            }
        }

        const { rows } = await pool.query(query, params);
        return { packages: rows as Package[], total };
    }

    /**
     * Actualizar estado del paquete
     */
    static async updateStatus(id: string, tenantId: string, status: string): Promise<Package | null> {
        await pool.query(
            'UPDATE packages SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 AND tenant_id = $3',
            [status, id, tenantId]
        );
        return this.getById(id, tenantId);
    }

    /**
     * Asignar courier a paquete
     */
    static async assignCourier(id: string, tenantId: string, courierId: string): Promise<Package | null> {
        await pool.query(
            `UPDATE packages SET courier_id = $1, status = 'assigned', updated_at = CURRENT_TIMESTAMP 
       WHERE id = $2 AND tenant_id = $3`,
            [courierId, id, tenantId]
        );
        return this.getById(id, tenantId);
    }

    /**
     * Actualizar paquete
     */
    static async update(id: string, tenantId: string, data: Partial<Package>): Promise<Package | null> {
        const allowedFields = ['recipient_name', 'recipient_phone', 'recipient_address',
            'weight', 'dimensions', 'declared_value', 'notes'];

        const updates: string[] = [];
        const values: any[] = [];

        for (const field of allowedFields) {
            if (data[field as keyof Package] !== undefined) {
                updates.push(`${field} = $1`);
                values.push(data[field as keyof Package]);
            }
        }

        if (updates.length === 0) return this.getById(id, tenantId);

        updates.push('updated_at = CURRENT_TIMESTAMP');
        values.push(id, tenantId);

        await pool.query(
            `UPDATE packages SET ${updates.join(', ')} WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar paquete
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM packages WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        ) as any;
        return result.affectedRows > 0;
    }

    /**
     * Estadísticas de paquetes
     */
    static async getStats(tenantId: string): Promise<Record<string, number>> {
        const { rows } = await pool.query(
            `SELECT status, COUNT(*) as count FROM packages 
       WHERE tenant_id = $1 GROUP BY status`,
            [tenantId]
        ) as any;

        const stats: Record<string, number> = {
            total: 0,
            pending: 0,
            in_transit: 0,
            delivered: 0,
            cancelled: 0
        };

        for (const row of rows) {
            stats[row.status] = row.count;
            stats.total += row.count;
        }

        return stats;
    }
}

export default PackagesService;
