export interface FuelRecord {
    id: string;
    tenant_id: string;
    courier_id: string | null;
    vehicle_id: string | null;
    liters: number;
    cost: number;
    price_per_liter: number | null;
    odometer_reading: number | null;
    previous_odometer: number | null;
    distance_traveled: number | null;
    efficiency: number | null;
    station: string | null;
    receipt_url: string | null;
    notes: string | null;
    created_at: string;
}
export interface FuelRecordWithCourier extends FuelRecord {
    courier_name: string | null;
}
export declare class FuelService {
    /**
     * Obtener todos los registros de combustible
     */
    static getAll(tenantId: string, filters?: {
        courierId?: string;
        startDate?: string;
        endDate?: string;
    }): Promise<FuelRecordWithCourier[]>;
    /**
     * Obtener registro por ID
     */
    static getById(id: string, tenantId: string): Promise<FuelRecordWithCourier | null>;
    /**
     * Obtener registros por courier
     */
    static getByCourier(courierId: string, tenantId: string): Promise<FuelRecord[]>;
    /**
     * Calcular eficiencia basado en odómetro anterior
     */
    private static calculateEfficiency;
    /**
     * Crear nuevo registro
     */
    static create(data: Omit<FuelRecord, 'id' | 'created_at' | 'previous_odometer' | 'distance_traveled' | 'efficiency'>, tenantId: string): Promise<FuelRecord>;
    /**
     * Eliminar registro
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de combustible
     */
    static getStats(tenantId: string, period?: {
        startDate?: string;
        endDate?: string;
    }): Promise<{
        totalCost: number;
        totalLiters: number;
        averageEfficiency: number;
        recordCount: number;
    }>;
}
export default FuelService;
//# sourceMappingURL=fuelService.d.ts.map