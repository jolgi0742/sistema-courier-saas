const admin = require('firebase-admin');
const mysql = require('mysql2/promise');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Inicializar Firebase Admin
const serviceAccount = require('./firebase-service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

async function createUser() {
    console.log('\n🔐 Crear Usuario Administrador\n');
    console.log('════════════════════════════════════════\n');

    // Solicitar datos
    const name = await question('Nombre completo: ');
    const email = await question('Email: ');
    const password = await question('Contraseña (mín. 6 caracteres): ');
    const role = await question('Rol (admin/operator/agent) [admin]: ') || 'admin';

    console.log('\n⏳ Creando usuario en Firebase...\n');

    try {
        // 1. Crear usuario en Firebase Auth
        const firebaseUser = await admin.auth().createUser({
            email: email,
            password: password,
            displayName: name,
            emailVerified: true
        });

        console.log('✅ Usuario creado en Firebase');
        console.log('Firebase UID:', firebaseUser.uid);

        // 2. Conectar a MySQL
        const conn = await mysql.createConnection({
            host: 'shortline.proxy.rlwy.net',
            port: 54504,
            user: 'root',
            password: 'PEMvNPIsvMTQjEGLZiEmmHnADAPfbwTI',
            database: 'railway'
        });

        // 3. Crear usuario en MySQL
        const userId = crypto.randomUUID();
        const tenantId = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307';

        await conn.execute(
            `INSERT INTO users (id, tenant_id, firebase_uid, email, name, role, status, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, 'active', NOW(), NOW())`,
            [userId, tenantId, firebaseUser.uid, email, name, role]
        );

        await conn.end();

        console.log('✅ Usuario sincronizado con MySQL\n');
        console.log('═══════════════════════════════════════');
        console.log('ID:', userId);
        console.log('Firebase UID:', firebaseUser.uid);
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Rol:', role);
        console.log('═══════════════════════════════════════\n');
        console.log('🎉 Ahora puedes iniciar sesión en:');
        console.log('https://frontend-jeczito-5818s-projects.vercel.app\n');
        console.log('Credenciales:');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('');

    } catch (error) {
        if (error.code === 'auth/email-already-exists') {
            console.error('❌ Error: El email ya está registrado en Firebase');
        } else if (error.code === 'auth/invalid-password') {
            console.error('❌ Error: La contraseña debe tener al menos 6 caracteres');
        } else if (error.code === 'ER_DUP_ENTRY') {
            console.error('❌ Error: El email ya está registrado en MySQL');
        } else {
            console.error('❌ Error:', error.message);
            console.error('Code:', error.code);
        }
    } finally {
        rl.close();
        process.exit(0);
    }
}

createUser();
