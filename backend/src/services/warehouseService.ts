// warehouseService.ts - Servicio para gestión de almacén
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface WarehouseLocation {
    id: string;
    tenant_id: string;
    code: string;
    name: string | null;
    zone: string | null;
    capacity: number | null;
    current_packages: number;
    status: 'active' | 'full' | 'inactive';
    created_at: string;
}

export interface PackageLocation {
    id: string;
    tenant_id: string;
    package_id: string;
    location_id: string;
    assigned_at: string;
    removed_at: string | null;
}

export interface PackageLocationWithDetails extends PackageLocation {
    location_code: string;
    location_name: string | null;
    tracking_number: string;
}

export class WarehouseService {
    /**
     * Obtener todas las ubicaciones
     */
    static async getAllLocations(tenantId: string, filters?: {
        zone?: string;
        status?: string;
    }): Promise<WarehouseLocation[]> {
        let query = 'SELECT * FROM warehouse_locations WHERE tenant_id = ?';
        const params: any[] = [tenantId];

        if (filters?.zone) {
            query += ' AND zone = ?';
            params.push(filters.zone);
        }

        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }

        query += ' ORDER BY code ASC';

        const { rows } = await pool.query(query, params);
        return rows as WarehouseLocation[];
    }

    /**
     * Obtener ubicación por ID
     */
    static async getLocationById(id: string, tenantId: string): Promise<WarehouseLocation | null> {
        const { rows } = await pool.query(
            'SELECT * FROM warehouse_locations WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        const locations = rows as WarehouseLocation[];
        return locations.length > 0 ? locations[0] : null;
    }

    /**
     * Buscar ubicación por código
     */
    static async getLocationByCode(code: string, tenantId: string): Promise<WarehouseLocation | null> {
        const { rows } = await pool.query(
            'SELECT * FROM warehouse_locations WHERE code = ? AND tenant_id = ?',
            [code, tenantId]
        );
        const locations = rows as WarehouseLocation[];
        return locations.length > 0 ? locations[0] : null;
    }

    /**
     * Crear nueva ubicación
     */
    static async createLocation(data: Omit<WarehouseLocation, 'id' | 'created_at' | 'current_packages'>, tenantId: string): Promise<WarehouseLocation> {
        const id = uuidv4();

        await pool.query(
            `INSERT INTO warehouse_locations (
                id, tenant_id, code, name, zone, capacity, status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
                id,
                tenantId,
                data.code,
                data.name || null,
                data.zone || null,
                data.capacity || null,
                data.status || 'active'
            ]
        );

        return this.getLocationById(id, tenantId) as Promise<WarehouseLocation>;
    }

    /**
     * Actualizar ubicación
     */
    static async updateLocation(id: string, data: Partial<WarehouseLocation>, tenantId: string): Promise<WarehouseLocation | null> {
        const fields: string[] = [];
        const values: any[] = [];

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

        await pool.query(
            `UPDATE warehouse_locations SET ${fields.join(', ')} WHERE id = $1 AND tenant_id = $2`,
            values
        );

        return this.getLocationById(id, tenantId);
    }

    /**
     * Eliminar ubicación
     */
    static async deleteLocation(id: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'DELETE FROM warehouse_locations WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Asignar paquete a ubicación
     */
    static async assignPackage(packageId: string, locationId: string, tenantId: string): Promise<PackageLocation> {
        const id = uuidv4();

        // Verificar si el paquete ya tiene una ubicación activa
        const { rows: existing } = await pool.query(
            'SELECT id FROM package_locations WHERE package_id = ? AND tenant_id = ? AND removed_at IS NULL',
            [packageId, tenantId]
        );

        if ((existing as any[]).length > 0) {
            // Remover ubicación anterior
            await pool.query(
                'UPDATE package_locations SET removed_at = CURRENT_TIMESTAMP WHERE package_id = ? AND tenant_id = ? AND removed_at IS NULL',
                [packageId, tenantId]
            );
        }

        // Crear nueva asignación
        await pool.query(
            `INSERT INTO package_locations (
                id, tenant_id, package_id, location_id
            ) VALUES ($1, $2, $3, $4)`,
            [id, tenantId, packageId, locationId]
        );

        // Actualizar contador de paquetes en la ubicación
        await this.updateLocationPackageCount(locationId, tenantId);

        const { rows } = await pool.query(
            'SELECT * FROM package_locations WHERE id = ?',
            [id]
        );
        return (rows as PackageLocation[])[0];
    }

    /**
     * Remover paquete de ubicación
     */
    static async removePackage(packageId: string, tenantId: string): Promise<boolean> {
        const { rows: result } = await pool.query(
            'UPDATE package_locations SET removed_at = CURRENT_TIMESTAMP WHERE package_id = ? AND tenant_id = ? AND removed_at IS NULL',
            [packageId, tenantId]
        );

        if ((result as any).affectedRows > 0) {
            // Actualizar contador de paquetes
            const { rows: locationRows } = await pool.query(
                'SELECT location_id FROM package_locations WHERE package_id = ? AND tenant_id = ? ORDER BY assigned_at DESC LIMIT 1',
                [packageId, tenantId]
            );
            if ((locationRows as any[]).length > 0) {
                await this.updateLocationPackageCount((locationRows as any[])[0].location_id, tenantId);
            }
            return true;
        }
        return false;
    }

    /**
     * Obtener paquetes en una ubicación
     */
    static async getPackagesInLocation(locationId: string, tenantId: string): Promise<PackageLocationWithDetails[]> {
        const { rows } = await pool.query(
            `SELECT 
                pl.*,
                wl.code as location_code,
                wl.name as location_name,
                p.tracking_number
            FROM package_locations pl
            LEFT JOIN warehouse_locations wl ON pl.location_id = wl.id
            LEFT JOIN packages p ON pl.package_id = p.id
            WHERE pl.location_id = $1 AND pl.tenant_id = $2 AND pl.removed_at IS NULL
            ORDER BY pl.assigned_at DESC`,
            [locationId, tenantId]
        );
        return rows as PackageLocationWithDetails[];
    }

    /**
     * Buscar paquete por tracking number
     */
    static async findPackageLocation(trackingNumber: string, tenantId: string): Promise<PackageLocationWithDetails | null> {
        const { rows } = await pool.query(
            `SELECT 
                pl.*,
                wl.code as location_code,
                wl.name as location_name,
                p.tracking_number
            FROM package_locations pl
            LEFT JOIN warehouse_locations wl ON pl.location_id = wl.id
            LEFT JOIN packages p ON pl.package_id = p.id
            WHERE p.tracking_number = $1 AND pl.tenant_id = $2 AND pl.removed_at IS NULL
            LIMIT 1`,
            [trackingNumber, tenantId]
        );
        const locations = rows as PackageLocationWithDetails[];
        return locations.length > 0 ? locations[0] : null;
    }

    /**
     * Actualizar contador de paquetes en ubicación
     */
    private static async updateLocationPackageCount(locationId: string, tenantId: string): Promise<void> {
        await pool.query(
            `UPDATE warehouse_locations 
             SET current_packages = (
                 SELECT COUNT(*) 
                 FROM package_locations 
                 WHERE location_id = $1 AND removed_at IS NULL
             )
             WHERE id = $2 AND tenant_id = $3`,
            [locationId, locationId, tenantId]
        );

        // Actualizar estado si está lleno
        await pool.query(
            `UPDATE warehouse_locations 
             SET status = CASE 
                 WHEN current_packages >= capacity THEN 'full'
                 WHEN status = 'full' AND current_packages < capacity THEN 'active'
                 ELSE status
             END
             WHERE id = $1 AND tenant_id = $2`,
            [locationId, tenantId]
        );
    }

    /**
     * Obtener estadísticas de almacén
     */
    static async getStats(tenantId: string): Promise<{
        totalLocations: number;
        activeLocations: number;
        fullLocations: number;
        totalPackages: number;
        totalCapacity: number;
        utilizationRate: number;
    }> {
        const { rows } = await pool.query(
            `SELECT 
                COUNT(*) as totalLocations,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as activeLocations,
                SUM(CASE WHEN status = 'full' THEN 1 ELSE 0 END) as fullLocations,
                SUM(current_packages) as totalPackages,
                SUM(capacity) as totalCapacity
            FROM warehouse_locations WHERE tenant_id = $1`,
            [tenantId]
        );

        const stats = (rows as any[])[0];
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
    static async getZones(tenantId: string): Promise<string[]> {
        const { rows } = await pool.query(
            'SELECT DISTINCT zone FROM warehouse_locations WHERE tenant_id = ? AND zone IS NOT NULL ORDER BY zone',
            [tenantId]
        );
        return (rows as any[]).map(row => row.zone);
    }
}

export default WarehouseService;
