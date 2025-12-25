// labelRoutes.ts - Rutas para generar etiquetas y documentos
import { Router, Request, Response } from 'express';
import { LabelService } from '../services/labelService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

// Todas las rutas requieren tenant
router.use(tenantMiddleware);

/**
 * GET /api/labels/package/:id
 * Generar etiqueta de paquete en PDF
 */
router.get('/package/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const pdfBuffer = await LabelService.generatePackageLabel(id, tenantId);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=etiqueta-${id}.pdf`);
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generando etiqueta:', error);
        res.status(500).json({ error: 'Error generando etiqueta' });
    }
});

/**
 * GET /api/labels/delivery-note/:id
 * Generar nota de entrega en PDF
 */
router.get('/delivery-note/:id', async (req: Request, res: Response) => {
    try {
        const tenantId = req.tenant!.id;
        const { id } = req.params;

        const pdfBuffer = await LabelService.generateDeliveryNote(id, tenantId);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=nota-entrega-${id}.pdf`);
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generando nota de entrega:', error);
        res.status(500).json({ error: 'Error generando nota de entrega' });
    }
});

export default router;
