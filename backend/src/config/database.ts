// database.ts - Configuración de conexión MySQL con pool
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Pool de conexiones para mejor rendimiento
const pool = mysql.createPool({
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

export default pool;
