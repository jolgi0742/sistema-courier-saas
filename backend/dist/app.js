"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts - Aplicación principal del backend SaaS
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar variables de entorno
dotenv_1.default.config();
// Importar rutas
const tenantRoutes_1 = __importDefault(require("./routes/tenantRoutes"));
const billingRoutes_1 = __importDefault(require("./routes/billingRoutes"));
const superAdminRoutes_1 = __importDefault(require("./routes/superAdminRoutes"));
const domainRoutes_1 = __importDefault(require("./routes/domainRoutes"));
const packagesRoutes_1 = __importDefault(require("./routes/packagesRoutes"));
const couriersRoutes_1 = __importDefault(require("./routes/couriersRoutes"));
const clientsRoutes_1 = __importDefault(require("./routes/clientsRoutes"));
const sinpeRoutes_1 = __importDefault(require("./routes/sinpeRoutes"));
const paypalRoutes_1 = __importDefault(require("./routes/paypalRoutes"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const labelRoutes_1 = __importDefault(require("./routes/labelRoutes"));
const deliverySignatureRoutes_1 = __importDefault(require("./routes/deliverySignatureRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middleware de logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} | ${req.method} ${req.path}`);
    next();
});
// CORS - permitir subdominios
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Permitir requests sin origin (Postman, curl, etc)
        if (!origin)
            return callback(null, true);
        // Permitir localhost en desarrollo
        if (origin.includes('localhost'))
            return callback(null, true);
        // Permitir subdominios de sistemacourier.com
        if (origin.includes('sistemacourier.com'))
            return callback(null, true);
        // Permitir dominios personalizados (TODO: verificar contra BD)
        callback(null, true);
    },
    credentials: true
}));
// Webhook de Stripe necesita raw body
app.use('/api/billing/webhook', express_1.default.raw({ type: 'application/json' }));
// Webhook de PayPal necesita raw body
app.use('/api/paypal/webhook', express_1.default.raw({ type: 'application/json' }));
// JSON parser para el resto
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'Sistema Courier SaaS API',
        timestamp: new Date().toISOString()
    });
});
// Rutas de la API - Plataforma
app.use('/api/tenants', tenantRoutes_1.default);
app.use('/api/billing', billingRoutes_1.default);
app.use('/api/super-admin', superAdminRoutes_1.default);
app.use('/api/domains', domainRoutes_1.default);
// Rutas de la API - Negocio (multi-tenant)
app.use('/api/dashboard', dashboardRoutes_1.default);
app.use('/api/packages', packagesRoutes_1.default);
app.use('/api/couriers', couriersRoutes_1.default);
app.use('/api/clients', clientsRoutes_1.default);
app.use('/api/labels', labelRoutes_1.default);
app.use('/api/delivery-signature', deliverySignatureRoutes_1.default);
app.use('/api/sinpe', sinpeRoutes_1.default);
app.use('/api/paypal', paypalRoutes_1.default);
// Ruta 404
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        path: req.originalUrl
    });
});
// Manejador de errores global
app.use((err, req, res, next) => {
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
exports.default = app;
//# sourceMappingURL=app.js.map