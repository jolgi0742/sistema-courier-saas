"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseService = void 0;
// warehouseService.ts - Servicio para gestión de almacén
const database_1 = __importDefault(require("../config/database"));
const uuid_1 = require("uuid");
class WarehouseService {
    /**
     * Obtener todas las ubicaciones
     */
    static async getAllLocations(tenantId, filters) {
        let query = 'SELECT * FROM warehouse_locations WHERE tenant_id = ?';
        const params = [tenantId];
        if (filters?.zone) {
            query += ' AND zone = ?';
            params.push(filters.zone);
        }
        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }
        query += ' ORDER BY code ASC';
        const [rows] = await database_1.default.execute(query, params);
        return rows;
    }
    /**
     * Obtener ubicación por ID
     */
    static async getLocationById(id, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM warehouse_locations WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        const locations = rows;
        return locations.length > 0 ? locations[0] : null;
    }
    /**
     * Buscar ubicación por código
     */
    static async getLocationByCode(code, tenantId) {
        const [rows] = await database_1.default.execute('SELECT * FROM warehouse_locations WHERE code = ? AND tenant_id = ?', [code, tenantId]);
        const locations = rows;
        return locations.length > 0 ? locations[0] : null;
    }
    /**
     * Crear nueva ubicación
     */
    static async createLocation(data, tenantId) {
        const id = (0, uuid_1.v4)();
        await database_1.default.execute(`INSERT INTO warehouse_locations (
                id, tenant_id, code, name, zone, capacity, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?)`, [
            id,
            tenantId,
            data.code,
            data.name || null,
            data.zone || null,
            data.capacity || null,
            data.status || 'active'
        ]);
        return this.getLocationById(id, tenantId);
    }
    /**
     * Actualizar ubicación
     */
    static async updateLocation(id, data, tenantId) {
        const fields = [];
        const values = [];
        if (data.code !== undefined) {
            fields.push('code = ?');
            values.push(data.code);
        }
        if (data.name !== undefined) {
            fields.push('name = ?');
            values.push(data.name);
        }
        if (data.zone !== undefined) {
            fields.push('zone = ?');
            values.push(data.zone);
        }
        if (data.capacity !== undefined) {
            fields.push('capacity = ?');
            values.push(data.capacity);
        }
        if (data.status !== undefined) {
            fields.push('status = ?');
            values.push(data.status);
        }
        if (fields.length === 0) {
            return this.getLocationById(id, tenantId);
        }
        values.push(id, tenantId);
        await database_1.default.execute(`UPDATE warehouse_locations SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`, values);
        return this.getLocationById(id, tenantId);
    }
    /**
     * Eliminar ubicación
     */
    static async deleteLocation(id, tenantId) {
        const [result] = await database_1.default.execute('DELETE FROM warehouse_locations WHERE id = ? AND tenant_id = ?', [id, tenantId]);
        return result.affectedRows > 0;
    }
    /**
     * Asignar paquete a ubicación
     */
    static async assignPackage(packageId, locationId, tenantId) {
        const id = (0, uuid_1.v4)();
        // Verificar si el paquete ya tiene una ubicación activa
        const [existing] = await database_1.default.execute('SELECT id FROM package_locations WHERE package_id = ? AND tenant_id = ? AND removed_at IS NULL', [packageId, tenantId]);
        if (existing.length > 0) {
            // Remover ubicación anterior
            await database_1.default.execute('UPDATE package_locations SET removed_at = NOW() WHERE package_id = ? AND tenant_id = ? AND removed_at IS NULL', [packageId, tenantId]);
        }
        // Crear nueva asignación
        await database_1.default.execute(`INSERT INTO package_locations (
                id, tenant_id, package_id, location_id
            ) VALUES (?, ?, ?, ?)`, [id, tenantId, packageId, locationId]);
        // Actualizar contador de paquetes en la ubicación
        await this.updateLocationPackageCount(locationId, tenantId);
        const [rows] = await database_1.default.execute('SELECT * FROM package_locations WHERE id = ?', [id]);
        return rows[0];
    }
    /**
     * Remover paquete de ubicación
     */
    static async removePackage(packageId, tenantId) {
        const [result] = await database_1.default.execute('UPDATE package_locations SET removed_at = NOW() WHERE package_id = ? AND tenant_id = ? AND removed_at IS NULL', [packageId, tenantId]);
        if (result.affectedRows > 0) {
            // Actualizar contador de paquetes
            const [locationRows] = await database_1.default.execute('SELECT location_id FROM package_locations WHERE package_id = ? AND tenant_id = ? ORDER BY assigned_at DESC LIMIT 1', [packageId, tenantId]);
            if (locationRows.length > 0) {
                await this.updateLocationPackageCount(locationRows[0].location_id, tenantId);
            }
            return true;
        }
        return false;
    }
    /**
     * Obtener paquetes en una ubicación
     */
    static async getPackagesInLocation(locationId, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                pl.*,
                wl.code as location_code,
                wl.name as location_name,
                p.tracking_number
            FROM package_locations pl
            LEFT JOIN warehouse_locations wl ON pl.location_id = wl.id
            LEFT JOIN packages p ON pl.package_id = p.id
            WHERE pl.location_id = ? AND pl.tenant_id = ? AND pl.removed_at IS NULL
            ORDER BY pl.assigned_at DESC`, [locationId, tenantId]);
        return rows;
    }
    /**
     * Buscar paquete por tracking number
     */
    static async findPackageLocation(trackingNumber, tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                pl.*,
                wl.code as location_code,
                wl.name as location_name,
                p.tracking_number
            FROM package_locations pl
            LEFT JOIN warehouse_locations wl ON pl.location_id = wl.id
            LEFT JOIN packages p ON pl.package_id = p.id
            WHERE p.tracking_number = ? AND pl.tenant_id = ? AND pl.removed_at IS NULL
            LIMIT 1`, [trackingNumber, tenantId]);
        const locations = rows;
        return locations.length > 0 ? locations[0] : null;
    }
    /**
     * Actualizar contador de paquetes en ubicación
     */
    static async updateLocationPackageCount(locationId, tenantId) {
        await database_1.default.execute(`UPDATE warehouse_locations 
             SET current_packages = (
                 SELECT COUNT(*) 
                 FROM package_locations 
                 WHERE location_id = ? AND removed_at IS NULL
             )
             WHERE id = ? AND tenant_id = ?`, [locationId, locationId, tenantId]);
        // Actualizar estado si está lleno
        await database_1.default.execute(`UPDATE warehouse_locations 
             SET status = CASE 
                 WHEN current_packages >= capacity THEN 'full'
                 WHEN status = 'full' AND current_packages < capacity THEN 'active'
                 ELSE status
             END
             WHERE id = ? AND tenant_id = ?`, [locationId, tenantId]);
    }
    /**
     * Obtener estadísticas de almacén
     */
    static async getStats(tenantId) {
        const [rows] = await database_1.default.execute(`SELECT 
                COUNT(*) as totalLocations,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as activeLocations,
                SUM(CASE WHEN status = 'full' THEN 1 ELSE 0 END) as fullLocations,
                SUM(current_packages) as totalPackages,
                SUM(capacity) as totalCapacity
            FROM warehouse_locations WHERE tenant_id = ?`, [tenantId]);
        const stats = rows[0];
        const utilizationRate = stats.totalCapacity > 0
            ? (stats.totalPackages / stats.totalCapacity) * 100
            : 0;
        return {
            totalLocations: stats.totalLocations || 0,
            activeLocations: stats.activeLocations || 0,
            fullLocations: stats.fullLocations || 0,
            totalPackages: stats.totalPackages || 0,
            totalCapacity: stats.totalCapacity || 0,
            utilizationRate: parseFloat(utilizationRate.toFixed(2))
        };
    }
    /**
     * Obtener zonas únicas
     */
    static async getZones(tenantId) {
        const [rows] = await database_1.default.execute('SELECT DISTINCT zone FROM warehouse_locations WHERE tenant_id = ? AND zone IS NOT NULL ORDER BY zone', [tenantId]);
        return rows.map(row => row.zone);
    }
}
exports.WarehouseService = WarehouseService;
exports.default = WarehouseService;
//# sourceMappingURL=warehouseService.js.map