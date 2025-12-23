"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// database.ts - Configuración de conexión MySQL con pool
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Pool de conexiones para mejor rendimiento
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'sistema_courier_saas',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});
// Verificar conexión al iniciar
pool.getConnection()
    .then(connection => {
    console.log('✅ Conexión a MySQL establecida');
    connection.release();
})
    .catch(err => {
    console.error('❌ Error conectando a MySQL:', err.message);
});
exports.default = pool;
//# sourceMappingURL=database.js.map