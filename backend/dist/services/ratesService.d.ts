export interface Rate {
    id: string;
    tenant_id: string;
    name: string;
    description: string | null;
    zone: string | null;
    min_weight: number;
    max_weight: number | null;
    base_price: number;
    price_per_kg: number;
    service_type: 'standard' | 'express' | 'same_day' | 'scheduled';
    active: boolean;
    created_at: string;
    updated_at: string;
}
export declare class RatesService {
    /**
     * Obtener todas las tarifas del tenant
     */
    static getAll(tenantId: string, activeOnly?: boolean): Promise<Rate[]>;
    /**
     * Obtener tarifa por ID
     */
    static getById(id: string, tenantId: string): Promise<Rate | null>;
    /**
     * Crear nueva tarifa
     */
    static create(data: Omit<Rate, 'id' | 'created_at' | 'updated_at'>, tenantId: string): Promise<Rate>;
    /**
     * Actualizar tarifa
     */
    static update(id: string, data: Partial<Rate>, tenantId: string): Promise<Rate | null>;
    /**
     * Eliminar tarifa
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Calcular tarifa para un paquete
     */
    static calculateRate(zone: string, weight: number, serviceType: 'standard' | 'express' | 'same_day' | 'scheduled', tenantId: string): Promise<{
        rate: Rate | null;
        totalPrice: number;
    }>;
    /**
     * Obtener zonas disponibles
     */
    static getZones(tenantId: string): Promise<string[]>;
}
export default RatesService;
//# sourceMappingURL=ratesService.d.ts.map