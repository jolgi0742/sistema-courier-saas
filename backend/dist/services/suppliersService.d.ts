export interface Supplier {
    id: string;
    tenant_id: string;
    name: string;
    contact_name: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    category: string | null;
    notes: string | null;
    status: 'active' | 'inactive';
    created_at: string;
    updated_at: string;
}
export declare class SuppliersService {
    /**
     * Obtener todos los proveedores
     */
    static getAll(tenantId: string, filters?: {
        status?: string;
        category?: string;
        search?: string;
    }): Promise<Supplier[]>;
    /**
     * Obtener proveedor por ID
     */
    static getById(id: string, tenantId: string): Promise<Supplier | null>;
    /**
     * Crear nuevo proveedor
     */
    static create(data: Omit<Supplier, 'id' | 'created_at' | 'updated_at'>, tenantId: string): Promise<Supplier>;
    /**
     * Actualizar proveedor
     */
    static update(id: string, data: Partial<Supplier>, tenantId: string): Promise<Supplier | null>;
    /**
     * Eliminar proveedor
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de proveedores
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        active: number;
        inactive: number;
        byCategory: {
            category: string;
            count: number;
        }[];
    }>;
    /**
     * Obtener categorías únicas
     */
    static getCategories(tenantId: string): Promise<string[]>;
}
export default SuppliersService;
//# sourceMappingURL=suppliersService.d.ts.map