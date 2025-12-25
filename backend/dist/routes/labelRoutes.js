"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// labelRoutes.ts - Rutas para generar etiquetas y documentos
const express_1 = require("express");
const labelService_1 = require("../services/labelService");
const tenantMiddleware_1 = require("../middleware/tenantMiddleware");
const router = (0, express_1.Router)();
// Todas las rutas requieren tenant
router.use(tenantMiddleware_1.tenantMiddleware);
/**
 * GET /api/labels/package/:id
 * Generar etiqueta de paquete en PDF
 */
router.get('/package/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const pdfBuffer = await labelService_1.LabelService.generatePackageLabel(id, tenantId);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=etiqueta-${id}.pdf`);
        res.send(pdfBuffer);
    }
    catch (error) {
        console.error('Error generando etiqueta:', error);
        res.status(500).json({ error: 'Error generando etiqueta' });
    }
});
/**
 * GET /api/labels/delivery-note/:id
 * Generar nota de entrega en PDF
 */
router.get('/delivery-note/:id', async (req, res) => {
    try {
        const tenantId = req.tenant.id;
        const { id } = req.params;
        const pdfBuffer = await labelService_1.LabelService.generateDeliveryNote(id, tenantId);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=nota-entrega-${id}.pdf`);
        res.send(pdfBuffer);
    }
    catch (error) {
        console.error('Error generando nota de entrega:', error);
        res.status(500).json({ error: 'Error generando nota de entrega' });
    }
});
exports.default = router;
//# sourceMappingURL=labelRoutes.js.map