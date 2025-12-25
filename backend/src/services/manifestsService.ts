// manifestsService.ts - Servicio para gestión de manifiestos de carga
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface CargoManifest {
    id: string;
    tenant_id: string;
    manifest_number: string;
    courier_id: string | null;
    route: string | null;
    date: string | null;
    total_packages: number;
    status: 'draft' | 'active' | 'completed';
    created_at: string;
    completed_at: string | null;
}

export interface ManifestWithDetails extends CargoManifest {
    courier_name: string | null;
    packages: ManifestPackage[];
}

export interface ManifestPackage {
    id: string;
    manifest_id: string;
    package_id: string;
    sequence_number: number | null;
    tracking_number?: string;
    receiver_name?: string;
    receiver_address?: string;
}

export class ManifestsService {
    /**
     * Generar número de manifiesto único
     */
    private static async generateManifestNumber(tenantId: string): Promise<string> {
        const [rows] = await pool.execute(
            'SELECT COUNT(*) as count FROM cargo_manifests WHERE tenant_id = ?',
            [tenantId]
        );
        const count = (rows as any[])[0].count + 1;
        return `MAN-${String(count).padStart(5, '0')}`;
    }

    /**
     * Obtener todos los manifiestos
     */
    static async getAll(tenantId: string, filters?: {
        status?: string;
        courierId?: string;
        date?: string;
    }): Promise<ManifestWithDetails[]> {
        let query = `
            SELECT 
                cm.*,
                c.name as courier_name
            FROM cargo_manifests cm
            LEFT JOIN couriers c ON cm.courier_id = c.id
            WHERE cm.tenant_id = ?
        `;
        const params: any[] = [tenantId];

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

        const [rows] = await pool.execute(query, params);
        const manifests = rows as ManifestWithDetails[];

        // Obtener paquetes para cada manifiesto
        for (const manifest of manifests) {
            manifest.packages = await this.getManifestPackages(manifest.id);
        }

        return manifests;
    }

    /**
     * Obtener manifiesto por ID
     */
    static async getById(id: string, tenantId: string): Promise<ManifestWithDetails | null> {
        const [rows] = await pool.execute(
            `SELECT 
                cm.*,
                c.name as courier_name
            FROM cargo_manifests cm
            LEFT JOIN couriers c ON cm.courier_id = c.id
            WHERE cm.id = ? AND cm.tenant_id = ?`,
            [id, tenantId]
        );
        const manifests = rows as ManifestWithDetails[];

        if (manifests.length === 0) return null;

        const manifest = manifests[0];
        manifest.packages = await this.getManifestPackages(id);

        return manifest;
    }

    /**
     * Obtener paquetes de un manifiesto
     */
    static async getManifestPackages(manifestId: string): Promise<ManifestPackage[]> {
        const [rows] = await pool.execute(
            `SELECT 
                mp.*,
                p.tracking_number,
                p.receiver_name,
                p.receiver_address
            FROM manifest_packages mp
            LEFT JOIN packages p ON mp.package_id = p.id
            WHERE mp.manifest_id = ?
            ORDER BY mp.sequence_number ASC`,
            [manifestId]
        );
        return rows as ManifestPackage[];
    }

    /**
     * Crear nuevo manifiesto
     */
    static async create(data: {
        courierId?: string;
        route?: string;
        date?: string;
        packageIds?: string[];
    }, tenantId: string): Promise<CargoManifest> {
        const id = uuidv4();
        const manifestNumber = await this.generateManifestNumber(tenantId);

        await pool.execute(
            `INSERT INTO cargo_manifests (
                id, tenant_id, manifest_number, courier_id, route, date, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                id,
                tenantId,
                manifestNumber,
                data.courierId || null,
                data.route || null,
                data.date || new Date().toISOString().split('T')[0],
                'draft'
            ]
        );

        // Agregar paquetes si se proporcionan
        if (data.packageIds && data.packageIds.length > 0) {
            await this.addPackages(id, data.packageIds, tenantId);
        }

        return this.getById(id, tenantId) as Promise<CargoManifest>;
    }

    /**
     * Actualizar manifiesto
     */
    static async update(id: string, data: Partial<CargoManifest>, tenantId: string): Promise<CargoManifest | null> {
        const fields: string[] = [];
        const values: any[] = [];

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

        await pool.execute(
            `UPDATE cargo_manifests SET ${fields.join(', ')} WHERE id = ? AND tenant_id = ?`,
            values
        );

        return this.getById(id, tenantId);
    }

    /**
     * Agregar paquetes al manifiesto
     */
    static async addPackages(manifestId: string, packageIds: string[], tenantId: string): Promise<void> {
        // Verificar que el manifiesto existe
        const manifest = await this.getById(manifestId, tenantId);
        if (!manifest) {
            throw new Error('Manifiesto no encontrado');
        }

        // Obtener el último número de secuencia
        const [rows] = await pool.execute(
            'SELECT MAX(sequence_number) as max_seq FROM manifest_packages WHERE manifest_id = ?',
            [manifestId]
        );
        let sequenceNumber = ((rows as any[])[0].max_seq || 0) + 1;

        // Agregar cada paquete
        for (const packageId of packageIds) {
            const id = uuidv4();
            await pool.execute(
                `INSERT INTO manifest_packages (id, manifest_id, package_id, sequence_number)
                 VALUES (?, ?, ?, ?)`,
                [id, manifestId, packageId, sequenceNumber++]
            );
        }

        // Actualizar contador de paquetes
        await this.updatePackageCount(manifestId);
    }

    /**
     * Remover paquete del manifiesto
     */
    static async removePackage(manifestId: string, packageId: string, tenantId: string): Promise<boolean> {
        // Verificar que el manifiesto existe
        const manifest = await this.getById(manifestId, tenantId);
        if (!manifest) {
            return false;
        }

        const [result] = await pool.execute(
            'DELETE FROM manifest_packages WHERE manifest_id = ? AND package_id = ?',
            [manifestId, packageId]
        );

        if ((result as any).affectedRows > 0) {
            await this.updatePackageCount(manifestId);
            return true;
        }

        return false;
    }

    /**
     * Actualizar contador de paquetes
     */
    private static async updatePackageCount(manifestId: string): Promise<void> {
        await pool.execute(
            `UPDATE cargo_manifests 
             SET total_packages = (
                 SELECT COUNT(*) FROM manifest_packages WHERE manifest_id = ?
             )
             WHERE id = ?`,
            [manifestId, manifestId]
        );
    }

    /**
     * Eliminar manifiesto
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const [result] = await pool.execute(
            'DELETE FROM cargo_manifests WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de manifiestos
     */
    static async getStats(tenantId: string): Promise<{
        total: number;
        draft: number;
        active: number;
        completed: number;
    }> {
        const [rows] = await pool.execute(
            `SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as draft,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
                SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed
            FROM cargo_manifests WHERE tenant_id = ?`,
            [tenantId]
        );

        const stats = (rows as any[])[0];

        return {
            total: stats.total || 0,
            draft: stats.draft || 0,
            active: stats.active || 0,
            completed: stats.completed || 0
        };
    }
}

export default ManifestsService;
