export interface PackageArrival {
    id: string;
    tenant_id: string;
    package_id: string;
    arrived_at: string;
    received_by: string | null;
    condition_status: 'good' | 'damaged' | 'incomplete';
    notes: string | null;
}
export interface PackageArrivalWithDetails extends PackageArrival {
    tracking_number: string;
    sender_name: string | null;
    receiver_name: string | null;
    receiver_name_user: string | null;
}
export declare class ArrivalsService {
    /**
     * Obtener todas las llegadas
     */
    static getAll(tenantId: string, filters?: {
        date?: string;
        condition?: string;
    }): Promise<PackageArrivalWithDetails[]>;
    /**
     * Obtener llegada por ID
     */
    static getById(id: string, tenantId: string): Promise<PackageArrivalWithDetails | null>;
    /**
     * Obtener llegadas por paquete
     */
    static getByPackage(packageId: string, tenantId: string): Promise<PackageArrival[]>;
    /**
     * Registrar llegada de paquete
     */
    static registerArrival(data: {
        packageId?: string;
        trackingNumber?: string;
        receivedBy?: string;
        condition: 'good' | 'damaged' | 'incomplete';
        notes?: string;
    }, tenantId: string): Promise<PackageArrival>;
    /**
     * Actualizar llegada
     */
    static update(id: string, data: Partial<PackageArrival>, tenantId: string): Promise<PackageArrival | null>;
    /**
     * Eliminar llegada
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de llegadas
     */
    static getStats(tenantId: string, date?: string): Promise<{
        total: number;
        good: number;
        damaged: number;
        incomplete: number;
    }>;
    /**
     * Obtener llegadas de hoy
     */
    static getTodayArrivals(tenantId: string): Promise<PackageArrivalWithDetails[]>;
}
export default ArrivalsService;
//# sourceMappingURL=arrivalsService.d.ts.map