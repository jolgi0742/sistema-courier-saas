// database.ts - Configuración de conexión PostgreSQL con pool
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Pool de conexiones para mejor rendimiento
const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'sistema_courier_saas',
    max: 10, // máximo de conexiones en el pool
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

// Verificar conexión al iniciar
pool.connect()
    .then(client => {
        console.log('✅ Conexión a PostgreSQL establecida');
        client.release();
    })
    .catch(err => {
        console.error('❌ Error conectando a PostgreSQL:', err.message);
    });

// Helper para ejecutar queries (compatible con sintaxis MySQL)
export const query = async (text: string, params?: any[]) => {
    const result = await pool.query(text, params);
    return result.rows;
};

export default pool;
