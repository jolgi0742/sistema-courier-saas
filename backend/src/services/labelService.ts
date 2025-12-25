// labelService.ts - Servicio para generar etiquetas de paquetes
import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';
import { PackagesService } from './packagesService';

export class LabelService {
    /**
     * Generar etiqueta de paquete en PDF
     */
    static async generatePackageLabel(packageId: string, tenantId: string): Promise<Buffer> {
        // Obtener información del paquete
        const pkg = await PackagesService.getById(packageId, tenantId);

        if (!pkg) {
            throw new Error('Paquete no encontrado');
        }

        return new Promise(async (resolve, reject) => {
            try {
                // Crear documento PDF (tamaño de etiqueta: 10cm x 15cm)
                const doc = new PDFDocument({
                    size: [283.46, 425.20], // 10cm x 15cm en puntos
                    margins: { top: 20, bottom: 20, left: 20, right: 20 }
                });

                const buffers: Buffer[] = [];
                doc.on('data', buffers.push.bind(buffers));
                doc.on('end', () => {
                    const pdfBuffer = Buffer.concat(buffers);
                    resolve(pdfBuffer);
                });

                // Generar QR code
                const qrCodeDataUrl = await QRCode.toDataURL(pkg.tracking_number, {
                    width: 150,
                    margin: 1
                });

                // Header con logo (si existe)
                doc.fontSize(16)
                    .font('Helvetica-Bold')
                    .text('COURIER EXPRESS', { align: 'center' });

                doc.moveDown(0.5);

                // Tracking number grande
                doc.fontSize(24)
                    .font('Helvetica-Bold')
                    .text(pkg.tracking_number, { align: 'center' });

                doc.moveDown(0.5);

                // QR Code
                doc.image(qrCodeDataUrl, {
                    fit: [120, 120],
                    align: 'center'
                });

                doc.moveDown(1);

                // Información del remitente
                doc.fontSize(10)
                    .font('Helvetica-Bold')
                    .text('REMITENTE:', { continued: false });

                doc.fontSize(9)
                    .font('Helvetica')
                    .text(pkg.sender_name || 'N/A')
                    .text(pkg.sender_phone || 'N/A');

                doc.moveDown(0.5);

                // Información del destinatario
                doc.fontSize(10)
                    .font('Helvetica-Bold')
                    .text('DESTINATARIO:', { continued: false });

                doc.fontSize(9)
                    .font('Helvetica')
                    .text(pkg.recipient_name)
                    .text(pkg.recipient_phone)
                    .text(pkg.recipient_address, { width: 240 });

                doc.moveDown(0.5);

                // Detalles del paquete
                doc.fontSize(8)
                    .font('Helvetica')
                    .text(`Peso: ${pkg.weight} kg | Valor: ₡${pkg.declared_value.toLocaleString()}`, {
                        align: 'center'
                    });

                // Fecha
                doc.fontSize(7)
                    .text(`Fecha: ${new Date(pkg.created_at).toLocaleDateString('es-CR')}`, {
                        align: 'center'
                    });

                // Finalizar PDF
                doc.end();

            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Generar nota de entrega en PDF
     */
    static async generateDeliveryNote(packageId: string, tenantId: string): Promise<Buffer> {
        const pkg = await PackagesService.getById(packageId, tenantId);

        if (!pkg) {
            throw new Error('Paquete no encontrado');
        }

        return new Promise((resolve, reject) => {
            try {
                // Crear documento PDF (tamaño carta)
                const doc = new PDFDocument({
                    size: 'LETTER',
                    margins: { top: 50, bottom: 50, left: 50, right: 50 }
                });

                const buffers: Buffer[] = [];
                doc.on('data', buffers.push.bind(buffers));
                doc.on('end', () => {
                    const pdfBuffer = Buffer.concat(buffers);
                    resolve(pdfBuffer);
                });

                // Header
                doc.fontSize(20)
                    .font('Helvetica-Bold')
                    .text('NOTA DE ENTREGA', { align: 'center' });

                doc.moveDown(1);

                // Información del paquete
                doc.fontSize(12)
                    .font('Helvetica-Bold')
                    .text(`Tracking: ${pkg.tracking_number}`);

                doc.fontSize(10)
                    .font('Helvetica')
                    .text(`Fecha: ${new Date().toLocaleDateString('es-CR')}`);

                doc.moveDown(1);

                // Remitente
                doc.fontSize(11)
                    .font('Helvetica-Bold')
                    .text('REMITENTE');

                doc.fontSize(10)
                    .font('Helvetica')
                    .text(`Nombre: ${pkg.sender_name || 'N/A'}`)
                    .text(`Teléfono: ${pkg.sender_phone || 'N/A'}`);

                doc.moveDown(0.5);

                // Destinatario
                doc.fontSize(11)
                    .font('Helvetica-Bold')
                    .text('DESTINATARIO');

                doc.fontSize(10)
                    .font('Helvetica')
                    .text(`Nombre: ${pkg.recipient_name}`)
                    .text(`Teléfono: ${pkg.recipient_phone}`)
                    .text(`Dirección: ${pkg.recipient_address}`);

                doc.moveDown(0.5);

                // Detalles
                doc.fontSize(11)
                    .font('Helvetica-Bold')
                    .text('DETALLES DEL PAQUETE');

                doc.fontSize(10)
                    .font('Helvetica')
                    .text(`Peso: ${pkg.weight} kg`)
                    .text(`Dimensiones: ${pkg.dimensions || 'N/A'}`)
                    .text(`Valor Declarado: ₡${pkg.declared_value.toLocaleString()}`);

                if (pkg.notes) {
                    doc.text(`Notas: ${pkg.notes}`);
                }

                doc.moveDown(2);

                // Espacio para firma
                doc.fontSize(10)
                    .font('Helvetica')
                    .text('_________________________________', { align: 'center' })
                    .text('Firma del Destinatario', { align: 'center' });

                doc.moveDown(0.5);
                doc.text('_________________________________', { align: 'center' })
                    .text('Nombre y Cédula', { align: 'center' });

                doc.moveDown(2);

                // Términos
                doc.fontSize(8)
                    .font('Helvetica')
                    .text('Al firmar este documento, confirmo haber recibido el paquete en buen estado.', {
                        align: 'center'
                    });

                doc.end();

            } catch (error) {
                reject(error);
            }
        });
    }
}

export default LabelService;
