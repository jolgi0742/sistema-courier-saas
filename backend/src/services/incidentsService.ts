// incidentsService.ts - Servicio para gestión de incidencias
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface Incident {
    id: string;
    tenant_id: string;
    package_id: string;
    type: 'delay' | 'damage' | 'loss' | 'client_absent' | 'address_error' | 'other';
    status: 'open' | 'investigating' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    resolution: string | null;
    assigned_to: string | null;
    reported_by: string | null;
    created_at: string;
    updated_at: string;
    resolved_at: string | null;
}

export interface IncidentWithPackage extends Incident {
    tracking_number: string;
    client_name: string;
}

export class IncidentsService {
    /**
     * Obtener todas las incidencias del tenant
     */
    static async getAll(tenantId: string, filters?: {
        status?: string;
        priority?: string;
        type?: string;
    }): Promise<IncidentWithPackage[]> {
        let query = `
            SELECT 
                i.*,
                p.tracking_number,
                c.name as client_name
            FROM incidents i
            LEFT JOIN packages p ON i.package_id = p.id
            LEFT JOIN clients c ON p.client_id = c.id
            WHERE i.tenant_id = $1
        `;
        const params: any[] = [tenantId];

        if (filters?.status) {
            query += ' AND i.status = $1';
            params.push(filters.status);
        }

        if (filters?.priority) {
            query += ' AND i.priority = $1';
            params.push(filters.priority);
        }

        if (filters?.type) {
            query += ' AND i.type = $1';
            params.push(filters.type);
        }

        query += ' ORDER BY i.created_at DESC';

        const { rows } = await pool.query(query, params);
        return rows as IncidentWithPackage[];
    }

    /**
     * Obtener incidencia por ID
     */
    static async getById(id: string, tenantId: string): Promise<IncidentWithPackage | null> {
        const { rows } = await pool.query(
            `SELECT 
                i.*,
                p.tracking_number,
                c.name as client_name
            FROM incidents i
            LEFT JOIN packages p ON i.package_id = p.id
            LEFT JOIN clients c ON p.client_id = c.id
            WHERE i.id = $1 AND i.tenant_id = $2`,
            [id, tenantId]
        );
        const incidents = rows as IncidentWithPackage[];
        return incidents.length > 0 ? incidents[0] : null;
    }

    /**
     * Obtener incidencias por paquete
     */
    static async getByPackage(packageId: string, tenantId: string): Promise<Incident[]> {
        const { rows } = await pool.query(
            'SELECT * FROM incidents WHERE package_id = $1 AND tenant_id = $2 ORDER BY created_at DESC',
            [packageId, tenantId]
        );
        return rows as Incident[];
    }

    /**
     * Crear nueva incidencia
     */
    static async create(data: Omit<Incident, 'id' | 'created_at' | 'updated_at' | 'resolved_at'>, tenantId: string): Promise<Incident> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO incidents (
                id, tenant_id, package_id, type, status, priority,
                description, resolution, assigned_to, reported_by
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [
                id,
                tenantId,
                data.package_id,
                data.type,
                data.status || 'open',
                data.priority || 'medium',
                data.description,
                data.resolution || null,
                data.assigned_to || null,
                data.reported_by || null
            ]
        );

        return this.getById(id, tenantId) as Promise<Incident>;
    }

    /**
     * Actualizar incidencia
     */
    static async update(id: string, data: Partial<Incident>, tenantId: string): Promise<Incident | null> {
        const fields: string[] = [];
        const values: any[] = [];

        if (data.type !== undefined) {
            fields.push('type = ?');
            values.push(data.type);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
        }
        if (data.priority !== undefined) {
            fields.push('priority = ?');
            values.push(data.priority);
        }
        if (data.description !== undefined) {
            fields.push('description = ?');
            values.push(data.description);
        }
        if (data.resolution !== undefined) {
            fields.push('resolution = ?');
            values.push(data.resolution);
        }
        if (data.assigned_to !== undefined) {
            fields.push('assigned_to = ?');
            values.push(data.assigned_to);
        }

        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }

        values.push(id, tenantId);

        await pool.query(
            `UPDATE incidents SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Resolver incidencia
     */
    static async resolve(id: string, resolution: string, tenantId: string): Promise<Incident | null> {
        await pool.query(
            `UPDATE incidents 
             SET status = 'resolved', 
                 resolution = $1, 
                 resolved_at = CURRENT_TIMESTAMP,
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $2 AND tenant_id = $3`,
            [resolution, id, tenantId]
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar incidencia
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM incidents WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de incidencias
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        open: number;
        investigating: number;
        resolved: number;
        byType: Record<string, number>;
        byPriority: Record<string, number>;
    }> {
        const { rows } = await pool.query(
            `SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'open' THEN 1 ELSE 0 END) as open,
                SUM(CASE WHEN status = 'investigating' THEN 1 ELSE 0 END) as investigating,
                SUM(CASE WHEN status = 'resolved' THEN 1 ELSE 0 END) as resolved
            FROM incidents WHERE tenant_id = $1`,
            [tenantId]
        );

        const stats = (rows as any[])[0];

        // Por tipo
        const { rows: typeRows } = await pool.query(
            'SELECT type, COUNT(*) as count FROM incidents WHERE tenant_id = $1 GROUP BY type',
            [tenantId]
        );

        const byType: Record<string, number> = {};
        (typeRows as any[]).forEach(row => {
            byType[row.type] = row.count;
        });

        // Por prioridad
        const { rows: priorityRows } = await pool.query(
            'SELECT priority, COUNT(*) as count FROM incidents WHERE tenant_id = $1 GROUP BY priority',
            [tenantId]
        );

        const byPriority: Record<string, number> = {};
        (priorityRows as any[]).forEach(row => {
            byPriority[row.priority] = row.count;
        });

        return {
            total: stats.total || 0,
            open: stats.open || 0,
            investigating: stats.investigating || 0,
            resolved: stats.resolved || 0,
            byType,
            byPriority
        };
    }
}

export default IncidentsService;
