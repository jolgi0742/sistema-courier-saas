// app.ts - Aplicación principal del backend SaaS
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Importar rutas
import tenantRoutes from './routes/tenantRoutes';
import billingRoutes from './routes/billingRoutes';
import superAdminRoutes from './routes/superAdminRoutes';
import domainRoutes from './routes/domainRoutes';
import packagesRoutes from './routes/packagesRoutes';
import couriersRoutes from './routes/couriersRoutes';
import clientsRoutes from './routes/clientsRoutes';
import sinpeRoutes from './routes/sinpeRoutes';
import paypalRoutes from './routes/paypalRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import labelRoutes from './routes/labelRoutes';
import deliverySignatureRoutes from './routes/deliverySignatureRoutes';
import ratesRoutes from './routes/ratesRoutes';
import incidentsRoutes from './routes/incidentsRoutes';
import fuelRoutes from './routes/fuelRoutes';
import vehiclesRoutes from './routes/vehiclesRoutes';
import maintenanceRoutes from './routes/maintenanceRoutes';
import documentsRoutes from './routes/documentsRoutes';
import warehouseRoutes from './routes/warehouseRoutes';
import arrivalsRoutes from './routes/arrivalsRoutes';
import manifestsRoutes from './routes/manifestsRoutes';
import shippersRoutes from './routes/shippersRoutes';
import expensesRoutes from './routes/expensesRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toISOString()} | ${req.method} ${req.path}`);
    next();
});

// CORS - permitir subdominios
app.use(cors({
    origin: (origin, callback) => {
        // Permitir requests sin origin (Postman, curl, etc)
        if (!origin) return callback(null, true);

        // Permitir localhost en desarrollo
        if (origin.includes('localhost')) return callback(null, true);

        // Permitir subdominios de sistemacourier.com
        if (origin.includes('sistemacourier.com')) return callback(null, true);

        // Permitir dominios personalizados (TODO: verificar contra BD)
        callback(null, true);
    },
    credentials: true
}));

// Webhook de Stripe necesita raw body
app.use('/api/billing/webhook', express.raw({ type: 'application/json' }));

// Webhook de PayPal necesita raw body
app.use('/api/paypal/webhook', express.raw({ type: 'application/json' }));

// JSON parser para el resto
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        service: 'Sistema Courier SaaS API',
        timestamp: new Date().toISOString()
    });
});

// Rutas de la API - Plataforma
app.use('/api/tenants', tenantRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/super-admin', superAdminRoutes);
app.use('/api/domains', domainRoutes);

// Rutas de la API - Negocio (multi-tenant)
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/packages', packagesRoutes);
app.use('/api/couriers', couriersRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/labels', labelRoutes);
app.use('/api/delivery-signature', deliverySignatureRoutes);
app.use('/api/rates', ratesRoutes);
app.use('/api/incidents', incidentsRoutes);
app.use('/api/fuel', fuelRoutes);
app.use('/api/vehicles', vehiclesRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/warehouse', warehouseRoutes);
app.use('/api/arrivals', arrivalsRoutes);
app.use('/api/manifests', manifestsRoutes);
app.use('/api/shippers', shippersRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/sinpe', sinpeRoutes);
app.use('/api/paypal', paypalRoutes);

// Ruta 404
app.use('*', (req: Request, res: Response) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        path: req.originalUrl
    });
});

// Manejador de errores global
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error no manejado:', err);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║     Sistema Courier SaaS - Backend API     ║
╠════════════════════════════════════════════╣
║  🚀 Servidor corriendo en puerto ${PORT}        ║
║  📍 http://localhost:${PORT}                   ║
║  🔧 Entorno: ${process.env.NODE_ENV || 'development'}              ║
╚════════════════════════════════════════════╝
  `);
});

export default app;
