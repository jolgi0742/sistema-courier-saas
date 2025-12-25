"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
// documentsService.ts - Servicio para gestión de documentos
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class DocumentsService {
    /**
     * Calcular estado del documento basado en fecha de vencimiento
     */
    static calculateStatus(expirationDate) {
        if (!expirationDate)
            return 'valid';
        const today = new Date();
        const expDate = new Date(expirationDate);
        const diffTime = expDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 0)
            return 'expired';
        if (diffDays <= 30)
            return 'expiring_soon';
        return 'valid';
    }
    /**
     * Obtener todos los documentos
     */
    static async getAll(tenantId, filters) {
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
            WHERE d.tenant_id = ?
        `;
        const params = [tenantId];
        if (filters?.entityType) {
            query += ' AND d.entity_type = ?';
            params.push(filters.entityType);
        }
        if (filters?.entityId) {
            query += ' AND d.entity_id = ?';
            params.push(filters.entityId);
        }
        if (filters?.status) {
            query += ' AND d.status = ?';
            params.push(filters.status);
        }
        query += ' ORDER BY d.expiration_date ASC, d.created_at DESC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener documento por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
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
            WHERE d.id = ? AND d.tenant_id = ?`, [id, tenantId]);
        const documents = rows;
        return documents.length > 0 ? documents[0] : null;
    }
    /**
     * Obtener documentos por entidad
     */
    static async getByEntity(entityType, entityId, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM documents WHERE entity_type = ? AND entity_id = ? AND tenant_id = ? ORDER BY expiration_date ASC', [entityType, entityId, tenantId]);
        return rows;
    }
    /**
     * Obtener documentos próximos a vencer
     */
    static async getExpiring(tenantId, days = 30) {
        const [rows] = await database_1.default.execute(`SELECT 
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
            WHERE d.tenant_id = ? 
            AND d.expiration_date IS NOT NULL
            AND d.expiration_date <= DATE_ADD(CURDATE(), INTERVAL ? DAY)
            AND d.status != 'expired'
            ORDER BY d.expiration_date ASC`, [tenantId, days]);
        return rows;
    }
    /**
     * Crear nuevo documento
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        const status = this.calculateStatus(data.expiration_date);
        await database_1.default.execute(`INSERT INTO documents (
                id, tenant_id, entity_type, entity_id, document_type, document_number,
                file_url, file_name, issue_date, expiration_date, status, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
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
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar documento
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
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
        await database_1.default.execute(`UPDATE documents SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar documento
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM documents WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Actualizar estados de todos los documentos
     */
    static async updateStatuses(tenantId) {
        await database_1.default.execute(`UPDATE documents 
             SET status = CASE
                 WHEN expiration_date IS NULL THEN 'valid'
                 WHEN expiration_date < CURDATE() THEN 'expired'
                 WHEN expiration_date <= DATE_ADD(CURDATE(), INTERVAL 30 DAY) THEN 'expiring_soon'
                 ELSE 'valid'
             END
             WHERE tenant_id = ?`, [tenantId]);
    }
    /**
     * Obtener estadísticas de documentos
     */
    static async getStats(tenantId) {
        // Actualizar estados primero
        await this.updateStatuses(tenantId);
        const [rows] = await database_1.default.execute(`SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'valid' THEN 1 ELSE 0 END) as valid,
                SUM(CASE WHEN status = 'expiring_soon' THEN 1 ELSE 0 END) as expiringSoon,
                SUM(CASE WHEN status = 'expired' THEN 1 ELSE 0 END) as expired
            FROM documents WHERE tenant_id = ?`, [tenantId]);
        const stats = rows[0];
        return {
            total: stats.total || 0,
            valid: stats.valid || 0,
            expiringSoon: stats.expiringSoon || 0,
            expired: stats.expired || 0
        };
    }
}
exports.DocumentsService = DocumentsService;
exports.default = DocumentsService;
//# sourceMappingURL=documentsService.js.map