const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function createUser() {
    console.log('\n🔐 Crear Usuario Administrador\n');
    console.log('════════════════════════════════════════\n');

    // Solicitar datos
    const name = await question('Nombre completo: ');
    const email = await question('Email: ');
    const password = await question('Contraseña: ');
    const role = await question('Rol (admin/agent/courier) [admin]: ') || 'admin';

    console.log('\n⏳ Creando usuario...\n');

    const conn = await mysql.createConnection({
        host: 'shortline.proxy.rlwy.net',
        port: 54504,
        user: 'root',
        password: 'PEMvNPIsvMTQjEGLZiEmmHnADAPfbwTI',
        database: 'railway'
    });

    try {
        const userId = crypto.randomUUID();
        const tenantId = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307'; // ID del tenant creado

        // Hash de la contraseña
        const passwordHash = await bcrypt.hash(password, 10);

        // Crear usuario
        await conn.execute(
            `INSERT INTO users (id, tenant_id, email, password_hash, role, name, is_active, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, TRUE, NOW(), NOW())`,
            [userId, tenantId, email, passwordHash, role, name]
        );

        console.log('✅ Usuario creado exitosamente!\n');
        console.log('═══════════════════════════════════════');
        console.log('ID:', userId);
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Rol:', role);
        console.log('═══════════════════════════════════════\n');
        console.log('🎉 Ahora puedes iniciar sesión en:');
        console.log('https://frontend-jeczito-5818s-projects.vercel.app\n');

    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            console.error('❌ Error: El email ya está registrado');
        } else {
            console.error('❌ Error:', error.message);
        }
    } finally {
        await conn.end();
        rl.close();
    }
}

createUser();
