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
export declare class WarehouseService {
    /**
     * Obtener todas las ubicaciones
     */
    static getAllLocations(tenantId: string, filters?: {
        zone?: string;
        status?: string;
    }): Promise<WarehouseLocation[]>;
    /**
     * Obtener ubicación por ID
     */
    static getLocationById(id: string, tenantId: string): Promise<WarehouseLocation | null>;
    /**
     * Buscar ubicación por código
     */
    static getLocationByCode(code: string, tenantId: string): Promise<WarehouseLocation | null>;
    /**
     * Crear nueva ubicación
     */
    static createLocation(data: Omit<WarehouseLocation, 'id' | 'created_at' | 'current_packages'>, tenantId: string): Promise<WarehouseLocation>;
    /**
     * Actualizar ubicación
     */
    static updateLocation(id: string, data: Partial<WarehouseLocation>, tenantId: string): Promise<WarehouseLocation | null>;
    /**
     * Eliminar ubicación
     */
    static deleteLocation(id: string, tenantId: string): Promise<boolean>;
    /**
     * Asignar paquete a ubicación
     */
    static assignPackage(packageId: string, locationId: string, tenantId: string): Promise<PackageLocation>;
    /**
     * Remover paquete de ubicación
     */
    static removePackage(packageId: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener paquetes en una ubicación
     */
    static getPackagesInLocation(locationId: string, tenantId: string): Promise<PackageLocationWithDetails[]>;
    /**
     * Buscar paquete por tracking number
     */
    static findPackageLocation(trackingNumber: string, tenantId: string): Promise<PackageLocationWithDetails | null>;
    /**
     * Actualizar contador de paquetes en ubicación
     */
    private static updateLocationPackageCount;
    /**
     * Obtener estadísticas de almacén
     */
    static getStats(tenantId: string): Promise<{
        totalLocations: number;
        activeLocations: number;
        fullLocations: number;
        totalPackages: number;
        totalCapacity: number;
        utilizationRate: number;
    }>;
    /**
     * Obtener zonas únicas
     */
    static getZones(tenantId: string): Promise<string[]>;
}
export default WarehouseService;
//# sourceMappingURL=warehouseService.d.ts.map