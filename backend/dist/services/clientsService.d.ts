export interface Client {
    id: string;
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    company_name: string | null;
    address: string | null;
    city: string | null;
    country: string;
    tax_id: string | null;
    status: 'active' | 'inactive';
    credit_limit: number;
    credit_balance: number;
    total_packages: number;
    created_at: Date;
    updated_at: Date;
}
export interface CreateClientInput {
    tenant_id: string;
    name: string;
    email: string;
    phone: string;
    company_name?: string;
    address?: string;
    city?: string;
    country?: string;
    tax_id?: string;
    credit_limit?: number;
}
export declare class ClientsService {
    /**
     * Crear nuevo cliente
     */
    static create(input: CreateClientInput): Promise<Client>;
    /**
     * Obtener cliente por ID
     */
    static getById(id: string, tenantId: string): Promise<Client | null>;
    /**
     * Obtener cliente por email
     */
    static getByEmail(email: string, tenantId: string): Promise<Client | null>;
    /**
     * Listar clientes
     */
    static getAll(tenantId: string, filters?: {
        status?: string;
        search?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        clients: Client[];
        total: number;
    }>;
    /**
     * Actualizar cliente
     */
    static update(id: string, tenantId: string, data: Partial<Client>): Promise<Client | null>;
    /**
     * Actualizar balance de crédito
     */
    static updateCreditBalance(id: string, tenantId: string, amount: number): Promise<void>;
    /**
     * Incrementar contador de paquetes
     */
    static incrementPackages(id: string, tenantId: string): Promise<void>;
    /**
     * Obtener paquetes del cliente
     */
    static getPackages(id: string, tenantId: string, limit?: number): Promise<any[]>;
    /**
     * Estadísticas de clientes
     */
    static getStats(tenantId: string): Promise<Record<string, any>>;
    /**
     * Eliminar cliente
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
}
export default ClientsService;
//# sourceMappingURL=clientsService.d.ts.map