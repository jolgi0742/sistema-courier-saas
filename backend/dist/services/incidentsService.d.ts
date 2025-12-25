export interface Incident {
    id: string;
    tenant_id: string;
    package_id: string;
    type: 'delay' | 'damage' | 'loss' | 'client_absent' | 'address_error' | 'other';
    status: 'open' | 'investigating' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    resolution: string | null;
    assigned_to: string | null;
    reported_by: string | null;
    created_at: string;
    updated_at: string;
    resolved_at: string | null;
}
export interface IncidentWithPackage extends Incident {
    tracking_number: string;
    client_name: string;
}
export declare class IncidentsService {
    /**
     * Obtener todas las incidencias del tenant
     */
    static getAll(tenantId: string, filters?: {
        status?: string;
        priority?: string;
        type?: string;
    }): Promise<IncidentWithPackage[]>;
    /**
     * Obtener incidencia por ID
     */
    static getById(id: string, tenantId: string): Promise<IncidentWithPackage | null>;
    /**
     * Obtener incidencias por paquete
     */
    static getByPackage(packageId: string, tenantId: string): Promise<Incident[]>;
    /**
     * Crear nueva incidencia
     */
    static create(data: Omit<Incident, 'id' | 'created_at' | 'updated_at' | 'resolved_at'>, tenantId: string): Promise<Incident>;
    /**
     * Actualizar incidencia
     */
    static update(id: string, data: Partial<Incident>, tenantId: string): Promise<Incident | null>;
    /**
     * Resolver incidencia
     */
    static resolve(id: string, resolution: string, tenantId: string): Promise<Incident | null>;
    /**
     * Eliminar incidencia
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Obtener estadísticas de incidencias
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        open: number;
        investigating: number;
        resolved: number;
        byType: Record<string, number>;
        byPriority: Record<string, number>;
    }>;
}
export default IncidentsService;
//# sourceMappingURL=incidentsService.d.ts.map