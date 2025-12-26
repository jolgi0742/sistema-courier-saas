// Script para generar passwords hasheados para datos demo
// Ejecutar con: node generate-demo-passwords.js

const bcrypt = require('../backend/node_modules/bcrypt');


async function generatePasswords() {
    const password = 'Demo123!';
    const saltRounds = 10;

    console.log('🔐 Generando passwords hasheados para datos demo...\n');
    console.log(`Password original: ${password}\n`);

    try {
        // Generar 4 hashes (uno por cada rol)
        const hashes = await Promise.all([
            bcrypt.hash(password, saltRounds), // Admin
            bcrypt.hash(password, saltRounds), // Agent
            bcrypt.hash(password, saltRounds), // Client
            bcrypt.hash(password, saltRounds)  // Courier
        ]);

        console.log('✅ Hashes generados:\n');
        console.log('-- Usuario ADMIN');
        console.log(`Password hash: '${hashes[0]}'\n`);

        console.log('-- Usuario AGENT');
        console.log(`Password hash: '${hashes[1]}'\n`);

        console.log('-- Usuario CLIENT');
        console.log(`Password hash: '${hashes[2]}'\n`);

        console.log('-- Usuario COURIER');
        console.log(`Password hash: '${hashes[3]}'\n`);

        console.log('\n📋 Copia estos hashes y reemplázalos en database/demo_data.sql');
        console.log('Busca: $2b$10$YourHashedPasswordHere');
        console.log('Reemplaza con los hashes generados arriba\n');

    } catch (error) {
        console.error('❌ Error generando hashes:', error);
    }
}

generatePasswords();
