// documentsService.ts - Servicio para gestión de documentos
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface Document {
    id: string;
    tenant_id: string;
    entity_type: 'courier' | 'vehicle';
    entity_id: string;
    document_type: string;
    document_number: string | null;
    file_url: string | null;
    file_name: string | null;
    issue_date: string | null;
    expiration_date: string | null;
    status: 'valid' | 'expiring_soon' | 'expired';
    notes: string | null;
    created_at: string;
    updated_at: string;
}

export interface DocumentWithEntity extends Document {
    entity_name: string | null;
    entity_identifier: string | null; // plate for vehicle, name for courier
}

export class DocumentsService {
    /**
     * Calcular estado del documento basado en fecha de vencimiento
     */
    private static calculateStatus(expirationDate: string | null): 'valid' | 'expiring_soon' | 'expired' {
        if (!expirationDate) return 'valid';

        const today = new Date();
        const expDate = new Date(expirationDate);
        const diffTime = expDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return 'expired';
        if (diffDays <= 30) return 'expiring_soon';
        return 'valid';
    }

    /**
     * Obtener todos los documentos
     */
    static async getAll(tenantId: string, filters?: {
        entityType?: string;
        entityId?: string;
        status?: string;
    }): Promise<DocumentWithEntity[]> {
        let query = `
            SELECT 
                d.*,
                CASE 
                    WHEN d.entity_type = 'courier' THEN c.name
                    WHEN d.entity_type = 'vehicle' THEN v.plate
                END as entity_name,
                CASE 
                    WHEN d.entity_type = 'courier' THEN c.name
                    WHEN d.entity_type = 'vehicle' THEN v.plate
                END as entity_identifier
            FROM documents d
            LEFT JOIN couriers c ON d.entity_type = 'courier' AND d.entity_id = c.id
            LEFT JOIN vehicles v ON d.entity_type = 'vehicle' AND d.entity_id = v.id
            WHERE d.tenant_id = $1
        `;
        const params: any[] = [tenantId];

        if (filters?.entityType) {
            query += ' AND d.entity_type = $1';
            params.push(filters.entityType);
        }

        if (filters?.entityId) {
            query += ' AND d.entity_id = $1';
            params.push(filters.entityId);
        }

        if (filters?.status) {
            query += ' AND d.status = $1';
            params.push(filters.status);
        }

        query += ' ORDER BY d.expiration_date ASC, d.created_at DESC';

        const { rows } = await pool.query(query, params);
        return rows as DocumentWithEntity[];
    }

    /**
     * Obtener documento por ID
     */
    static async getById(id: string, tenantId: string): Promise<DocumentWithEntity | null> {
        const { rows } = await pool.query(
            `SELECT 
                d.*,
                CASE 
                    WHEN d.entity_type = 'courier' THEN c.name
                    WHEN d.entity_type = 'vehicle' THEN v.plate
                END as entity_name,
                CASE 
                    WHEN d.entity_type = 'courier' THEN c.name
                    WHEN d.entity_type = 'vehicle' THEN v.plate
                END as entity_identifier
            FROM documents d
            LEFT JOIN couriers c ON d.entity_type = 'courier' AND d.entity_id = c.id
            LEFT JOIN vehicles v ON d.entity_type = 'vehicle' AND d.entity_id = v.id
            WHERE d.id = $1 AND d.tenant_id = $2`,
            [id, tenantId]
        );
        const documents = rows as DocumentWithEntity[];
        return documents.length > 0 ? documents[0] : null;
    }

    /**
     * Obtener documentos por entidad
     */
    static async getByEntity(entityType: string, entityId: string, tenantId: string): Promise<Document[]> {
        const { rows } = await pool.query(
            'SELECT * FROM documents WHERE entity_type = $1 AND entity_id = $2 AND tenant_id = $3 ORDER BY expiration_date ASC',
            [entityType, entityId, tenantId]
        );
        return rows as Document[];
    }

    /**
     * Obtener documentos próximos a vencer
     */
    static async getExpiring(tenantId: string, days: number = 30): Promise<DocumentWithEntity[]> {
        const { rows } = await pool.query(
            `SELECT 
                d.*,
                CASE 
                    WHEN d.entity_type = 'courier' THEN c.name
                    WHEN d.entity_type = 'vehicle' THEN v.plate
                END as entity_name,
                CASE 
                    WHEN d.entity_type = 'courier' THEN c.name
                    WHEN d.entity_type = 'vehicle' THEN v.plate
                END as entity_identifier
            FROM documents d
            LEFT JOIN couriers c ON d.entity_type = 'courier' AND d.entity_id = c.id
            LEFT JOIN vehicles v ON d.entity_type = 'vehicle' AND d.entity_id = v.id
            WHERE d.tenant_id = $1 
            AND d.expiration_date IS NOT NULL
            AND d.expiration_date <= DATE_ADD(CURDATE(), INTERVAL $2 DAY)
            AND d.status != 'expired'
            ORDER BY d.expiration_date ASC`,
            [tenantId, days]
        );
        return rows as DocumentWithEntity[];
    }

    /**
     * Crear nuevo documento
     */
    static async create(data: Omit<Document, 'id' | 'created_at' | 'updated_at' | 'status'>, tenantId: string): Promise<Document> {
        const id = uuidv4();
        const status = this.calculateStatus(data.expiration_date);

        await pool.query(
            `INSERT INTO documents (
                id, tenant_id, entity_type, entity_id, document_type, document_number,
                file_url, file_name, issue_date, expiration_date, status, notes
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
            [
                id,
                tenantId,
                data.entity_type,
                data.entity_id,
                data.document_type,
                data.document_number || null,
                data.file_url || null,
                data.file_name || null,
                data.issue_date || null,
                data.expiration_date || null,
                status,
                data.notes || null
            ]
        );

        return this.getById(id, tenantId) as Promise<Document>;
    }

    /**
     * Actualizar documento
     */
    static async update(id: string, data: Partial<Document>, tenantId: string): Promise<Document | null> {
        const fields: string[] = [];
        const values: any[] = [];

        if (data.document_type !== undefined) {
            fields.push('document_type = ?');
            values.push(data.document_type);
        }
        if (data.document_number !== undefined) {
            fields.push('document_number = ?');
            values.push(data.document_number);
        }
        if (data.file_url !== undefined) {
            fields.push('file_url = ?');
            values.push(data.file_url);
        }
        if (data.file_name !== undefined) {
            fields.push('file_name = ?');
            values.push(data.file_name);
        }
        if (data.issue_date !== undefined) {
            fields.push('issue_date = ?');
            values.push(data.issue_date);
        }
        if (data.expiration_date !== undefined) {
            fields.push('expiration_date = ?');
            values.push(data.expiration_date);
            // Recalcular estado si cambia la fecha de vencimiento
            const newStatus = this.calculateStatus(data.expiration_date);
            fields.push('status = ?');
            values.push(newStatus);
        }
        if (data.notes !== undefined) {
            fields.push('notes = ?');
            values.push(data.notes);
        }

        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }

        values.push(id, tenantId);

        await pool.query(
            `UPDATE documents SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Eliminar documento
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM documents WHERE id = $1 AND tenant_id = $2',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Actualizar estados de todos los documentos
     */
    static async updateStatuses(tenantId: string): Promise<void> {
        await pool.query(
            `UPDATE documents 
             SET status = CASE
                 WHEN expiration_date IS NULL THEN 'valid'
                 WHEN expiration_date < CURDATE() THEN 'expired'
                 WHEN expiration_date <= DATE_ADD(CURDATE(), INTERVAL 30 DAY) THEN 'expiring_soon'
                 ELSE 'valid'
             END
             WHERE tenant_id = $1`,
            [tenantId]
        );
    }

    /**
     * Obtener estadísticas de documentos
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        valid: number;
        expiringSoon: number;
        expired: number;
    }> {
        // Actualizar estados primero
        await this.updateStatuses(tenantId);

        const { rows } = await pool.query(
            `SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'valid' THEN 1 ELSE 0 END) as valid,
                SUM(CASE WHEN status = 'expiring_soon' THEN 1 ELSE 0 END) as expiringSoon,
                SUM(CASE WHEN status = 'expired' THEN 1 ELSE 0 END) as expired
            FROM documents WHERE tenant_id = $1`,
            [tenantId]
        );

        const stats = (rows as any[])[0];

        return {
            total: stats.total || 0,
            valid: stats.valid || 0,
            expiringSoon: stats.expiringSoon || 0,
            expired: stats.expired || 0
        };
    }
}

export default DocumentsService;
