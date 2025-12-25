export interface Document {
    id: string;
    tenant_id: string;
    entity_type: 'courier' | 'vehicle';
    entity_id: string;
    document_type: string;
    document_number: string | null;
    file_url: string | null;
    file_name: string | null;
    issue_date: string | null;
    expiration_date: string | null;
    status: 'valid' | 'expiring_soon' | 'expired';
    notes: string | null;
    created_at: string;
    updated_at: string;
}
export interface DocumentWithEntity extends Document {
    entity_name: string | null;
    entity_identifier: string | null;
}
export declare class DocumentsService {
    /**
     * Calcular estado del documento basado en fecha de vencimiento
     */
    private static calculateStatus;
    /**
     * Obtener todos los documentos
     */
    static getAll(tenantId: string, filters?: {
        entityType?: string;
        entityId?: string;
        status?: string;
    }): Promise<DocumentWithEntity[]>;
    /**
     * Obtener documento por ID
     */
    static getById(id: string, tenantId: string): Promise<DocumentWithEntity | null>;
    /**
     * Obtener documentos por entidad
     */
    static getByEntity(entityType: string, entityId: string, tenantId: string): Promise<Document[]>;
    /**
     * Obtener documentos próximos a vencer
     */
    static getExpiring(tenantId: string, days?: number): Promise<DocumentWithEntity[]>;
    /**
     * Crear nuevo documento
     */
    static create(data: Omit<Document, 'id' | 'created_at' | 'updated_at' | 'status'>, tenantId: string): Promise<Document>;
    /**
     * Actualizar documento
     */
    static update(id: string, data: Partial<Document>, tenantId: string): Promise<Document | null>;
    /**
     * Eliminar documento
     */
    static delete(id: string, tenantId: string): Promise<boolean>;
    /**
     * Actualizar estados de todos los documentos
     */
    static updateStatuses(tenantId: string): Promise<void>;
    /**
     * Obtener estadísticas de documentos
     */
    static getStats(tenantId: string): Promise<{
        total: number;
        valid: number;
        expiringSoon: number;
        expired: number;
    }>;
}
export default DocumentsService;
//# sourceMappingURL=documentsService.d.ts.map