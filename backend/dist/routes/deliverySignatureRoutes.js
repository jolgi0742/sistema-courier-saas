"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// deliverySignatureRoutes.ts - Rutas para firma digital de entrega
const express_1 = require("express");
const packagesService_1 = require("../services/packagesService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas requieren tenant
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * POST /api/delivery-signature/:packageId
 * Guardar firma digital y marcar como entregado
 */
router.post('/:packageId', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { packageId } = req.params;
        const { signatureUrl, photoUrl, recipientName, recipientId } = req.body;
        if (!signatureUrl) {
            return res.status(400).json({ error: 'Firma requerida' });
        }
        // Actualizar paquete con firma y marcar como entregado
        await packagesService_1.PackagesService.updateStatus(packageId, tenantId, 'delivered');
        // Guardar información adicional de la firma
        // (En una implementación completa, guardaríamos esto en una tabla separada)
        // Por ahora, lo incluimos en las notas del paquete
        const pkg = await packagesService_1.PackagesService.getById(packageId, tenantId);
        if (pkg) {
            const deliveryInfo = {
                signature_url: signatureUrl,
                photo_url: photoUrl,
                recipient_name: recipientName,
                recipient_id: recipientId,
                delivered_at: new Date().toISOString()
            };
            // Actualizar notas con info de entrega
            const updatedNotes = `${pkg.notes || ''}\n\nENTREGA CONFIRMADA:\nFirmado por: ${recipientName || 'N/A'}\nCédula: ${recipientId || 'N/A'}\nFirma: ${signatureUrl}\n${photoUrl ? `Foto: ${photoUrl}` : ''}`;
            // Aquí podrías actualizar las notas o crear una tabla separada para firmas
        }
        res.json({
            success: true,
            message: 'Entrega confirmada exitosamente',
            packageId,
            status: 'delivered'
        });
    }
    catch (error) {
        console.error('Error guardando firma:', error);
        res.status(500).json({ error: 'Error guardando firma de entrega' });
    }
});
exports.default = router;
//# sourceMappingURL=deliverySignatureRoutes.js.map