"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestsService = void 0;
// manifestsService.ts - Servicio para gestión de manifiestos de carga
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class ManifestsService {
    /**
     * Generar número de manifiesto único
     */
    static async generateManifestNumber(tenantId) {
        const [rows] = await database_1.default.execute('SELECT COUNT(*) as count FROM cargo_manifests WHERE tenant_id = ?', [tenantId]);
        const count = rows[0].count + 1;
        return `MAN-${String(count).padStart(5, '0')}`;
    }
    /**
     * Obtener todos los manifiestos
     */
    static async getAll(tenantId, filters) {
        let query = `
            SELECT 
                cm.*,
                c.name as courier_name
            FROM cargo_manifests cm
            LEFT JOIN couriers c ON cm.courier_id = c.id
            WHERE cm.tenant_id = ?
        `;
        const params = [tenantId];
        if (filters?.status) {
            query += ' AND cm.status = ?';
            params.push(filters.status);
        }
        if (filters?.courierId) {
            query += ' AND cm.courier_id = ?';
            params.push(filters.courierId);
        }
        if (filters?.date) {
            query += ' AND cm.date = ?';
            params.push(filters.date);
        }
        query += ' ORDER BY cm.created_at DESC';
        const [rows] = await database_1.default.execute(query, params);
        const manifests = rows;
        // Obtener paquetes para cada manifiesto
        for (const manifest of manifests) {
            manifest.packages = await this.getManifestPackages(manifest.id);
        }
        return manifests;
    }
    /**
     * Obtener manifiesto por ID
     */
    static async getById(id, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                cm.*,
                c.name as courier_name
            FROM cargo_manifests cm
            LEFT JOIN couriers c ON cm.courier_id = c.id
            WHERE cm.id = ? AND cm.tenant_id = ?`, [id, tenantId]);
        const manifests = rows;
        if (manifests.length === 0)
            return null;
        const manifest = manifests[0];
        manifest.packages = await this.getManifestPackages(id);
        return manifest;
    }
    /**
     * Obtener paquetes de un manifiesto
     */
    static async getManifestPackages(manifestId) {
        const [rows] = await database_1.default.execute(`SELECT 
                mp.*,
                p.tracking_number,
                p.receiver_name,
                p.receiver_address
            FROM manifest_packages mp
            LEFT JOIN packages p ON mp.package_id = p.id
            WHERE mp.manifest_id = ?
            ORDER BY mp.sequence_number ASC`, [manifestId]);
        return rows;
    }
    /**
     * Crear nuevo manifiesto
     */
    static async create(data, tenantId) {
        const id = (0, uuid_1.v4)();
        const manifestNumber = await this.generateManifestNumber(tenantId);
        await database_1.default.execute(`INSERT INTO cargo_manifests (
                id, tenant_id, manifest_number, courier_id, route, date, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            manifestNumber,
            data.courierId || null,
            data.route || null,
            data.date || new Date().toISOString().split('T')[0],
            'draft'
        ]);
        // Agregar paquetes si se proporcionan
        if (data.packageIds && data.packageIds.length > 0) {
            await this.addPackages(id, data.packageIds, tenantId);
        }
        return this.getById(id, tenantId);
    }
    /**
     * Actualizar manifiesto
     */
    static async update(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.courier_id !== undefined) {
            fields.push('courier_id = ?');
            values.push(data.courier_id);
        }
        if (data.route !== undefined) {
            fields.push('route = ?');
            values.push(data.route);
        }
        if (data.date !== undefined) {
            fields.push('date = ?');
            values.push(data.date);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
            if (data.status === 'completed') {
                fields.push('completed_at = NOW()');
            }
        }
        if (fields.length === 0) {
            return this.getById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE cargo_manifests SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getById(id, tenantId);
    }
    /**
     * Agregar paquetes al manifiesto
     */
    static async addPackages(manifestId, packageIds, tenantId) {
        // Verificar que el manifiesto existe
        const manifest = await this.getById(manifestId, tenantId);
        if (!manifest) {
            throw new Error('Manifiesto no encontrado');
        }
        // Obtener el último número de secuencia
        const [rows] = await database_1.default.execute('SELECT MAX(sequence_number) as max_seq FROM manifest_packages WHERE manifest_id = ?', [manifestId]);
        let sequenceNumber = (rows[0].max_seq || 0) + 1;
        // Agregar cada paquete
        for (const packageId of packageIds) {
            const id = (0, uuid_1.v4)();
            await database_1.default.execute(`INSERT INTO manifest_packages (id, manifest_id, package_id, sequence_number)
                 VALUES (?, ?, ?, ?)`, [id, manifestId, packageId, sequenceNumber++]);
        }
        // Actualizar contador de paquetes
        await this.updatePackageCount(manifestId);
    }
    /**
     * Remover paquete del manifiesto
     */
    static async removePackage(manifestId, packageId, tenantId) {
        // Verificar que el manifiesto existe
        const manifest = await this.getById(manifestId, tenantId);
        if (!manifest) {
            return false;
        }
        const [result] = await database_1.default.execute('DELETE FROM manifest_packages WHERE manifest_id = ? AND package_id = ?', [manifestId, packageId]);
        if (result.affectedRows > 0) {
            await this.updatePackageCount(manifestId);
            return true;
        }
        return false;
    }
    /**
     * Actualizar contador de paquetes
     */
    static async updatePackageCount(manifestId) {
        await database_1.default.execute(`UPDATE cargo_manifests 
             SET total_packages = (
                 SELECT COUNT(*) FROM manifest_packages WHERE manifest_id = ?
             )
             WHERE id = ?`, [manifestId, manifestId]);
    }
    /**
     * Eliminar manifiesto
     */
    static async delete(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM cargo_manifests WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Obtener estadísticas de manifiestos
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as draft,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed
            FROM cargo_manifests WHERE tenant_id = ?`, [tenantId]);
        const stats = rows[0];
        return {
            total: stats.total || 0,
            draft: stats.draft || 0,
            active: stats.active || 0,
            completed: stats.completed || 0
        };
    }
}
exports.ManifestsService = ManifestsService;
exports.default = ManifestsService;
//# sourceMappingURL=manifestsService.js.map