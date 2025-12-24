// migrate.js - Script para ejecutar migraciones SQL
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const DB_CONFIG = {
    host: 'shortline.proxy.rlwy.net',
    port: 54504,
    user: 'root',
    password: 'PEMvNPIsvMTQjEGLZiEmmHnADAPfbwTI',
    database: 'railway',
    multipleStatements: true
};

const MIGRATIONS = [
    '001_initial_schema.sql',
    '002_business_tables.sql',
    '003_sinpe_payments.sql',
    '004_paypal_payments.sql'
];

async function runMigrations() {
    let connection;

    try {
        console.log('Conectando a Railway MySQL...');
        connection = await mysql.createConnection(DB_CONFIG);
        console.log('✓ Conexión exitosa\n');

        for (const file of MIGRATIONS) {
            const filePath = path.join(__dirname, file);

            if (!fs.existsSync(filePath)) {
                console.log(`⚠ Archivo no encontrado: ${file}`);
                continue;
            }

            console.log(`Ejecutando: ${file}...`);
            const sql = fs.readFileSync(filePath, 'utf8');

            await connection.query(sql);
            console.log(`✓ ${file} ejecutado exitosamente\n`);
        }

        console.log('========================================');
        console.log('✅ TODAS LAS MIGRACIONES COMPLETADAS');
        console.log('========================================');

        // Mostrar tablas creadas
        const [tables] = await connection.query('SHOW TABLES');
        console.log('\nTablas en la base de datos:');
        tables.forEach(t => {
            const tableName = Object.values(t)[0];
            console.log(`  - ${tableName}`);
        });

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

runMigrations();
