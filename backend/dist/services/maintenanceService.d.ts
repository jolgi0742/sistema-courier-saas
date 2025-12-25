export interface Maintenance {
    id: string;
    tenant_id: string;
    vehicle_id: string;
    type: 'preventive' | 'corrective' | 'inspection';
    description: string;
    cost: number | null;
    provider: string | null;
    odometer_reading: number | null;
    next_service_date: string | null;
    next_service_odometer: number | null;
    status: 'scheduled' | 'in_progress' | 'completed';
    completed_at: string | null;
    created_at: string;
}
export interface MaintenanceWithVehicle extends Maintenance {
    vehicle_plate: string;
    vehicle_brand: string | null;
    vehicle_model: string | null;
}
export declare class MaintenanceService {
    /**
     * Obtener todos los mantenimientos
     */
    static getAll(tenantId: string, filters?: {
        vehicleId?: string;
        status?: string;
        type?: string;
    }): Promise<MaintenanceWithVehicle[]>;
    /**
     * Obtener mantenimiento por ID
     */
    static getById(id: string, tenantId: string): Promise<MaintenanceWithVehicle | null>;
    /**
     * Obtener mantenimientos por vehículo
     */
    static getByVehicle(vehicleId: string, tenantId: string): Promise<Maintenance[]>;
    /**
     * Obtener mantenimientos próximos a vencer
     */
    static getUpcoming(tenantId: string, days?: number): Promise<MaintenanceWithVehicle[]>;
    /**
     * Crear nuevo mantenimiento
     */
    static create(data: Omit<Maintenance, 'id' | 'created_at' | 'completed_at'>, tenantId: string): Promise<Maintenance>;
    /**
     * Actualizar mantenimiento
     */
    static update(id: string, data: Partial<Maintenance>, tenantId: string): Promise<Maintenance | null>;
    /**
     * Completar mantenimiento
     */
    static complete(id: string, tenantId: string): Promise<Maintenance | null>;
    /**
     * Eliminar mantenimiento
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de mantenimiento
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        scheduled: number;
        inProgress: number;
        completed: number;
        upcoming: number;
    }>;
}
export default MaintenanceService;
//# sourceMappingURL=maintenanceService.d.ts.map