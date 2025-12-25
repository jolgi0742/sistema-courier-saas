"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentsService = void 0;
// incidentsService.ts - Servicio para gestión de incidencias
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class IncidentsService {
    /**
     * Obtener todas las incidencias del tenant
     */
    static async getAll(tenantId, filters) {
        let query = `
            SELECT 
                i.*,
                p.tracking_number,
                c.name as client_name
            FROM incidents i
            LEFT JOIN packages p ON i.package_id = p.id
            LEFT JOIN clients c ON p.client_id = c.id
            WHERE i.tenant_id = ?
        `;
        const params = [tenantId];
        if (filters?.status) {
            query += ' AND i.status = ?';
            params.push(filters.status);
        }
        if (filters?.priority) {
            query += ' AND i.priority = ?';
            params.push(filters.priority);
        }
        if (filters?.type) {
            query += ' AND i.type = ?';
            params.push(filters.type);
        }
        query += ' ORDER BY i.created_at DESC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener incidencia por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                i.*,
                p.tracking_number,
                c.name as client_name
            FROM incidents i
            LEFT JOIN packages p ON i.package_id = p.id
            LEFT JOIN clients c ON p.client_id = c.id
            WHERE i.id = ? AND i.tenant_id = ?`, [id, tenantId]);
        const incidents = rows;
        return incidents.length > 0 ? incidents[0] : null;
    }
    /**
     * Obtener incidencias por paquete
     */
    static async getByPackage(packageId, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM incidents WHERE package_id = ? AND tenant_id = ? ORDER BY created_at DESC', [packageId, tenantId]);
        return rows;
    }
    /**
     * Crear nueva incidencia
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO incidents (
                id, tenant_id, package_id, type, status, priority,
                description, resolution, assigned_to, reported_by
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
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
        ]);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar incidencia
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
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
        await database_1.default.execute(`UPDATE incidents SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Resolver incidencia
     */
    static async resolve(id, resolution, tenantId) {
        await database_1.default.execute(`UPDATE incidents 
             SET status = 'resolved', 
                 resolution = ?, 
                 resolved_at = NOW(),
                 updated_at = NOW()
             WHERE id = ? AND tenant_id = ?`, [resolution, id, tenantId]);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar incidencia
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM incidents WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de incidencias
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'open' THEN 1 ELSE 0 END) as open,
                SUM(CASE WHEN status = 'investigating' THEN 1 ELSE 0 END) as investigating,
                SUM(CASE WHEN status = 'resolved' THEN 1 ELSE 0 END) as resolved
            FROM incidents WHERE tenant_id = ?`, [tenantId]);
        const stats = rows[0];
        // Por tipo
        const [typeRows] = await database_1.default.execute('SELECT type, COUNT(*) as count FROM incidents WHERE tenant_id = ? GROUP BY type', [tenantId]);
        const byType = {};
        typeRows.forEach(row => {
            byType[row.type] = row.count;
        });
        // Por prioridad
        const [priorityRows] = await database_1.default.execute('SELECT priority, COUNT(*) as count FROM incidents WHERE tenant_id = ? GROUP BY priority', [tenantId]);
        const byPriority = {};
        priorityRows.forEach(row => {
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
exports.IncidentsService = IncidentsService;
exports.default = IncidentsService;
//# sourceMappingURL=incidentsService.js.map