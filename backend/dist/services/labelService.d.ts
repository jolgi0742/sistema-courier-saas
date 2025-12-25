export declare class LabelService {
    /**
     * Generar etiqueta de paquete en PDF
     */
    static generatePackageLabel(packageId: string, tenantId: string): Promise<Buffer>;
    /**
     * Generar nota de entrega en PDF
     */
    static generateDeliveryNote(packageId: string, tenantId: string): Promise<Buffer>;
}
export default LabelService;
//# sourceMappingURL=labelService.d.ts.map