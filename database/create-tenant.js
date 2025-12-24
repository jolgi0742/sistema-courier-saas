const mysql = require('mysql2/promise');
const crypto = require('crypto');

async function createTenant() {
    const conn = await mysql.createConnection({
        host: 'shortline.proxy.rlwy.net',
        port: 54504,
        user: 'root',
        password: 'PEMvNPIsvMTQjEGLZiEmmHnADAPfbwTI',
        database: 'railway'
    });

    try {
        const tenantId = crypto.randomUUID();
        const domainId = crypto.randomUUID();

        // Crear tenant
        await conn.execute(
            `INSERT INTO tenants (id, name, subdomain, status, plan_id, trial_ends_at, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, DATE_ADD(NOW(), INTERVAL 14 DAY), NOW(), NOW())`,
            [tenantId, 'Mi Empresa Courier', 'mi-empresa', 'active', 'trial']
        );

        console.log('✅ Tenant creado exitosamente');
        console.log('ID:', tenantId);
        console.log('Nombre: Mi Empresa Courier');
        console.log('Subdomain: mi-empresa');
        console.log('');

        // Agregar dominio custom (Vercel)
        await conn.execute(
            `INSERT INTO tenant_domains (id, tenant_id, domain_type, domain, is_primary, ssl_status, verified_at, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
            [domainId, tenantId, 'custom', 'frontend-jeczito-5818s-projects.vercel.app', true, 'active']
        );

        console.log('✅ Dominio custom agregado');
        console.log('Domain: frontend-jeczito-5818s-projects.vercel.app');
        console.log('');

        // Crear branding por defecto
        await conn.execute(
            `INSERT INTO tenant_branding (tenant_id, company_name, primary_color, secondary_color, accent_color, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
            [tenantId, 'Mi Empresa Courier', '#3B82F6', '#1E40AF', '#10B981']
        );

        console.log('✅ Branding configurado');
        console.log('');
        console.log('🎉 ¡Tenant completamente configurado!');
        console.log('');
        console.log('Ahora puedes acceder a: https://frontend-jeczito-5818s-projects.vercel.app');

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await conn.end();
    }
}

createTenant();
