export interface Courier {
    id: string;
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    vehicle_type: string;
    vehicle_plate?: string;
    zone: string | null;
    status: 'active' | 'inactive' | 'on_delivery';
    commission_rate: number;
    balance: number;
    completed_deliveries: number;
    rating: number;
    created_at: Date;
    updated_at: Date;
}
export interface CreateCourierInput {
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    vehicle_type: string;
    vehicle_plate?: string;
    zone?: string;
    commission_rate?: number;
}
export declare class CouriersService {
    /**
     * Crear nuevo courier
     */
    static create(input: CreateCourierInput): Promise<Courier>;
    /**
     * Obtener courier por ID
     */
    static getById(id: string, tenantId: string): Promise<Courier | null>;
    /**
     * Listar couriers
     */
    static getAll(tenantId: string, filters?: {
        status?: string;
        zone?: string;
        search?: string;
    }): Promise<Courier[]>;
    /**
     * Obtener couriers disponibles para asignación
     */
    static getAvailable(tenantId: string, zone?: string): Promise<Courier[]>;
    /**
     * Actualizar courier
     */
    static update(id: string, tenantId: string, data: Partial<Courier>): Promise<Courier | null>;
    /**
     * Actualizar estado
     */
    static updateStatus(id: string, tenantId: string, status: string): Promise<Courier | null>;
    /**
     * Registrar entrega completada
     */
    static recordDelivery(id: string, tenantId: string, commission: number): Promise<void>;
    /**
     * Pagar balance al courier
     */
    static payBalance(id: string, tenantId: string, amount: number): Promise<void>;
    /**
     * Estadísticas de couriers
     */
    static getStats(tenantId: string): Promise<Record<string, any>>;
    /**
     * Eliminar courier
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
}
export default CouriersService;
//# sourceMappingURL=couriersService.d.ts.map