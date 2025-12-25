"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrivalsService = void 0;
// arrivalsService.ts - Servicio para registro de llegadas de paquetes
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class ArrivalsService {
    /**
     * Obtener todas las llegadas
     */
    static async getAll(tenantId, filters) {
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
        const params = [tenantId];
        if (filters?.date) {
            query += ' AND DATE(pa.arrived_at) = ?';
            params.push(filters.date);
        }
        if (filters?.condition) {
            query += ' AND pa.condition_status = ?';
            params.push(filters.condition);
        }
        query += ' ORDER BY pa.arrived_at DESC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener llegada por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                pa.*,
                p.tracking_number,
                p.sender_name,
                p.receiver_name,
                u.name as receiver_name_user
            FROM package_arrivals pa
            LEFT JOIN packages p ON pa.package_id = p.id
            LEFT JOIN users u ON pa.received_by = u.id
            WHERE pa.id = ? AND pa.tenant_id = ?`, [id, tenantId]);
        const arrivals = rows;
        return arrivals.length > 0 ? arrivals[0] : null;
    }
    /**
     * Obtener llegadas por paquete
     */
    static async getByPackage(packageId, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM package_arrivals WHERE package_id = ? AND tenant_id = ? ORDER BY arrived_at DESC', [packageId, tenantId]);
        return rows;
    }
    /**
     * Registrar llegada de paquete
     */
    static async registerArrival(data, tenantId) {
        let packageId = data.packageId;
        // Si se proporciona tracking number, buscar el paquete
        if (!packageId && data.trackingNumber) {
            const pkg = await PackageService.getByTracking(data.trackingNumber, tenantId);
            if (!pkg) {
                throw new Error('Paquete no encontrado');
            }
            packageId = pkg.id;
        }
        if (!packageId) {
            throw new Error('Se requiere packageId o trackingNumber');
        }
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO package_arrivals (
                id, tenant_id, package_id, received_by, condition_status, notes
            ) VALUES (?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            packageId,
            data.receivedBy || null,
            data.condition,
            data.notes || null
        ]);
        // Actualizar estado del paquete a "in_warehouse"
        await PackageService.updateStatus(packageId, 'in_warehouse', tenantId);
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar llegada
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
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
        await database_1.default.execute(`UPDATE package_arrivals SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Eliminar llegada
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM package_arrivals WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de llegadas
     */
    static async getStats(tenantId, date) {
        let query = `
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN condition_status = 'good' THEN 1 ELSE 0 END) as good,
                SUM(CASE WHEN condition_status = 'damaged' THEN 1 ELSE 0 END) as damaged,
                SUM(CASE WHEN condition_status = 'incomplete' THEN 1 ELSE 0 END) as incomplete
            FROM package_arrivals WHERE tenant_id = ?
        `;
        const params = [tenantId];
        if (date) {
            query += ' AND DATE(arrived_at) = ?';
            params.push(date);
        }
        const [rows] = await database_1.default.execute(query, params);
        const stats = rows[0];
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
    static async getTodayArrivals(tenantId) {
        const today = new Date().toISOString().split('T')[0];
        return this.getAll(tenantId, { date: today });
    }
}
exports.ArrivalsService = ArrivalsService;
exports.default = ArrivalsService;
//# sourceMappingURL=arrivalsService.js.map