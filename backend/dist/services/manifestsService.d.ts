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
export declare class ManifestsService {
    /**
     * Generar número de manifiesto único
     */
    private static generateManifestNumber;
    /**
     * Obtener todos los manifiestos
     */
    static getAll(tenantId: string, filters?: {
        status?: string;
        courierId?: string;
        date?: string;
    }): Promise<ManifestWithDetails[]>;
    /**
     * Obtener manifiesto por ID
     */
    static getById(id: string, tenantId: string): Promise<ManifestWithDetails | null>;
    /**
     * Obtener paquetes de un manifiesto
     */
    static getManifestPackages(manifestId: string): Promise<ManifestPackage[]>;
    /**
     * Crear nuevo manifiesto
     */
    static create(data: {
        courierId?: string;
        route?: string;
        date?: string;
        packageIds?: string[];
    }, tenantId: string): Promise<CargoManifest>;
    /**
     * Actualizar manifiesto
     */
    static update(id: string, data: Partial<CargoManifest>, tenantId: string): Promise<CargoManifest | null>;
    /**
     * Agregar paquetes al manifiesto
     */
    static addPackages(manifestId: string, packageIds: string[], tenantId: string): Promise<void>;
    /**
     * Remover paquete del manifiesto
     */
    static removePackage(manifestId: string, packageId: string, tenantId: string): Promise<boolean>;
    /**
     * Actualizar contador de paquetes
     */
    private static updatePackageCount;
    /**
     * Eliminar manifiesto
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de manifiestos
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        draft: number;
        active: number;
        completed: number;
    }>;
}
export default ManifestsService;
//# sourceMappingURL=manifestsService.d.ts.map