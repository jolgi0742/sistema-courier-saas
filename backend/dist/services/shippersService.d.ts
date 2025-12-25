export interface FrequentShipper {
    id: string;
    tenant_id: string;
    name: string;
    phone: string | null;
    email: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    total_shipments: number;
    created_at: string;
    updated_at: string;
}
export declare class ShippersService {
    /**
     * Obtener todos los remitentes frecuentes
     */
    static getAll(tenantId: string, search?: string): Promise<FrequentShipper[]>;
    /**
     * Obtener remitente por ID
     */
    static getById(id: string, tenantId: string): Promise<FrequentShipper | null>;
    /**
     * Buscar remitente por nombre, teléfono o email
     */
    static search(query: string, tenantId: string): Promise<FrequentShipper[]>;
    /**
     * Crear nuevo remitente frecuente
     */
    static create(data: Omit<FrequentShipper, 'id' | 'created_at' | 'updated_at' | 'total_shipments'>, tenantId: string): Promise<FrequentShipper>;
    /**
     * Actualizar remitente frecuente
     */
    static update(id: string, data: Partial<FrequentShipper>, tenantId: string): Promise<FrequentShipper | null>;
    /**
     * Eliminar remitente frecuente
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Incrementar contador de envíos
     */
    static incrementShipments(id: string, tenantId: string): Promise<void>;
    /**
     * Obtener estadísticas de remitentes
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        totalShipments: number;
        topShippers: FrequentShipper[];
    }>;
}
export default ShippersService;
//# sourceMappingURL=shippersService.d.ts.map