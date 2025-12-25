export interface Vehicle {
    id: string;
    tenant_id: string;
    plate: string;
    brand: string | null;
    model: string | null;
    year: number | null;
    type: string | null;
    assigned_to: string | null;
    status: 'active' | 'maintenance' | 'inactive';
    created_at: string;
}
export interface VehicleWithCourier extends Vehicle {
    courier_name: string | null;
}
export declare class VehiclesService {
    /**
     * Obtener todos los vehículos
     */
    static getAll(tenantId: string, filters?: {
        status?: string;
    }): Promise<VehicleWithCourier[]>;
    /**
     * Obtener vehículo por ID
     */
    static getById(id: string, tenantId: string): Promise<VehicleWithCourier | null>;
    /**
     * Crear nuevo vehículo
     */
    static create(data: Omit<Vehicle, 'id' | 'created_at'>, tenantId: string): Promise<Vehicle>;
    /**
     * Actualizar vehículo
     */
    static update(id: string, data: Partial<Vehicle>, tenantId: string): Promise<Vehicle | null>;
    /**
     * Eliminar vehículo
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de vehículos
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        active: number;
        maintenance: number;
        inactive: number;
    }>;
}
export default VehiclesService;
//# sourceMappingURL=vehiclesService.d.ts.map