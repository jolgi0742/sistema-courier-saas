export interface Package {
    id: string;
    tenant_id: string;
    tracking_number: string;
    client_id: string;
    sender_name: string;
    sender_phone: string;
    recipient_name: string;
    recipient_phone: string;
    recipient_address: string;
    weight: number;
    dimensions: string | null;
    declared_value: number;
    status: string;
    courier_id: string | null;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
}
export interface CreatePackageInput {
    tenant_id: string;
    client_id: string;
    sender_name: string;
    sender_phone: string;
    recipient_name: string;
    recipient_phone: string;
    recipient_address: string;
    weight: number;
    dimensions?: string;
    declared_value?: number;
    notes?: string;
}
export interface PackageFilters {
    tenant_id: string;
    status?: string;
    client_id?: string;
    courier_id?: string;
    search?: string;
    date_from?: string;
    date_to?: string;
    limit?: number;
    offset?: number;
}
export declare class PackagesService {
    /**
     * Generar número de tracking único
     */
    private static generateTrackingNumber;
    /**
     * Crear nuevo paquete
     */
    static create(input: CreatePackageInput): Promise<Package>;
    /**
     * Obtener paquete por ID (con validación de tenant)
     */
    static getById(id: string, tenantId: string): Promise<Package | null>;
    /**
     * Obtener paquete por tracking number
     */
    static getByTracking(tracking: string, tenantId: string): Promise<Package | null>;
    /**
     * Listar paquetes con filtros
     */
    static getAll(filters: PackageFilters): Promise<{
        packages: Package[];
        total: number;
    }>;
    /**
     * Actualizar estado del paquete
     */
    static updateStatus(id: string, tenantId: string, status: string): Promise<Package | null>;
    /**
     * Asignar courier a paquete
     */
    static assignCourier(id: string, tenantId: string, courierId: string): Promise<Package | null>;
    /**
     * Actualizar paquete
     */
    static update(id: string, tenantId: string, data: Partial<Package>): Promise<Package | null>;
    /**
     * Eliminar paquete
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Estadísticas de paquetes
     */
    static getStats(tenantId: string): Promise<Record<string, number>>;
}
export default PackagesService;
//# sourceMappingURL=packagesService.d.ts.map