const mysql = require('mysql2/promise');
const crypto = require('crypto');

async function seedDatabase() {
    console.log('\n🌱 Poblando Base de Datos con Datos de Prueba\n');
    console.log('════════════════════════════════════════════════\n');

    const conn = await mysql.createConnection({
        host: 'shortline.proxy.rlwy.net',
        port: 54504,
        user: 'root',
        password: 'PEMvNPIsvMTQjEGLZiEmmHnADAPfbwTI',
        database: 'railway'
    });

    const tenantId = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307';

    try {
        // 1. CLIENTES
        console.log('📋 Creando clientes...');
        const clients = [
            { name: 'Juan Pérez', email: 'juan.perez@email.com', phone: '8888-1234', company: 'Distribuidora El Sol', address: 'San José, Escazú' },
            { name: 'María García', email: 'maria.garcia@email.com', phone: '8888-5678', company: 'Farmacia Central', address: 'Heredia, Centro' },
            { name: 'Carlos López', email: 'carlos.lopez@email.com', phone: '8888-9012', company: 'Supermercado La Esquina', address: 'Alajuela, Centro' },
            { name: 'Ana Rodríguez', email: 'ana.rodriguez@email.com', phone: '8888-3456', company: null, address: 'Cartago, Oriental' },
            { name: 'Luis Martínez', email: 'luis.martinez@email.com', phone: '8888-7890', company: 'Librería Moderna', address: 'San José, Sabana' }
        ];

        const clientIds = [];
        for (const client of clients) {
            const id = crypto.randomUUID();
            clientIds.push(id);
            await conn.execute(
                `INSERT INTO clients (id, tenant_id, name, email, phone, company_name, address, status, total_packages, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, 'active', 0, NOW(), NOW())`,
                [id, tenantId, client.name, client.email, client.phone, client.company, client.address]
            );
        }
        console.log(`✅ ${clients.length} clientes creados\n`);

        // 2. COURIERS
        console.log('🚴 Creando couriers...');
        const couriers = [
            { name: 'Roberto Sánchez', email: 'roberto.courier@email.com', phone: '8777-1111', vehicle: 'motorcycle', plate: 'ABC-123', zone: 'San José Centro' },
            { name: 'Patricia Mora', email: 'patricia.courier@email.com', phone: '8777-2222', vehicle: 'car', plate: 'DEF-456', zone: 'Escazú' },
            { name: 'Diego Vargas', email: 'diego.courier@email.com', phone: '8777-3333', vehicle: 'motorcycle', plate: 'GHI-789', zone: 'Heredia' },
            { name: 'Carmen Jiménez', email: 'carmen.courier@email.com', phone: '8777-4444', vehicle: 'bicycle', plate: null, zone: 'Alajuela Centro' },
            { name: 'Fernando Castro', email: 'fernando.courier@email.com', phone: '8777-5555', vehicle: 'van', plate: 'JKL-012', zone: 'Cartago' }
        ];

        const courierIds = [];
        for (const courier of couriers) {
            const id = crypto.randomUUID();
            courierIds.push(id);
            await conn.execute(
                `INSERT INTO couriers (id, tenant_id, name, email, phone, vehicle_type, vehicle_plate, zone, status, commission_rate, balance, completed_deliveries, rating, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', 10.00, 0.00, 0, 5.00, NOW(), NOW())`,
                [id, tenantId, courier.name, courier.email, courier.phone, courier.vehicle, courier.plate, courier.zone]
            );
        }
        console.log(`✅ ${couriers.length} couriers creados\n`);

        // 3. PAQUETES
        console.log('📦 Creando paquetes...');
        const statuses = ['delivered', 'in_transit', 'out_for_delivery', 'assigned', 'processing', 'pending'];
        const packages = [];

        for (let i = 0; i < 25; i++) {
            const clientId = clientIds[Math.floor(Math.random() * clientIds.length)];
            const courierId = i < 20 ? courierIds[Math.floor(Math.random() * courierIds.length)] : null;
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            const trackingNumber = `PKG-${String(i + 1).padStart(3, '0')}`;

            const pkg = {
                id: crypto.randomUUID(),
                tracking_number: trackingNumber,
                client_id: clientId,
                courier_id: courierId,
                sender_name: clients[Math.floor(Math.random() * clients.length)].name,
                sender_phone: '8888-0000',
                recipient_name: `Cliente ${i + 1}`,
                recipient_phone: `8999-${String(i).padStart(4, '0')}`,
                recipient_address: `Dirección de entrega ${i + 1}, San José`,
                weight: (Math.random() * 10 + 0.5).toFixed(2),
                declared_value: (Math.random() * 50000 + 5000).toFixed(2),
                status: status
            };

            await conn.execute(
                `INSERT INTO packages (id, tenant_id, tracking_number, client_id, courier_id, sender_name, sender_phone, recipient_name, recipient_phone, recipient_address, weight, declared_value, status, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW() - INTERVAL ${i} DAY, NOW())`,
                [pkg.id, tenantId, pkg.tracking_number, pkg.client_id, pkg.courier_id, pkg.sender_name, pkg.sender_phone, pkg.recipient_name, pkg.recipient_phone, pkg.recipient_address, pkg.weight, pkg.declared_value, pkg.status]
            );

            packages.push(pkg);

            // Crear historial para cada paquete
            await conn.execute(
                `INSERT INTO package_history (id, tenant_id, package_id, status, notes, created_at)
         VALUES (?, ?, ?, 'pending', 'Paquete creado', NOW() - INTERVAL ${i} DAY)`,
                [crypto.randomUUID(), tenantId, pkg.id]
            );

            if (status !== 'pending') {
                await conn.execute(
                    `INSERT INTO package_history (id, tenant_id, package_id, status, notes, created_at)
           VALUES (?, ?, ?, 'processing', 'En procesamiento', NOW() - INTERVAL ${i} DAY + INTERVAL 1 HOUR)`,
                    [crypto.randomUUID(), tenantId, pkg.id]
                );
            }

            if (status === 'delivered') {
                await conn.execute(
                    `INSERT INTO package_history (id, tenant_id, package_id, status, notes, location, created_at)
           VALUES (?, ?, ?, 'delivered', 'Entregado exitosamente', 'San José', NOW() - INTERVAL ${i} DAY + INTERVAL 5 HOUR)`,
                    [crypto.randomUUID(), tenantId, pkg.id]
                );

                await conn.execute(
                    `UPDATE packages SET delivered_at = NOW() - INTERVAL ${i} DAY + INTERVAL 5 HOUR WHERE id = ?`,
                    [pkg.id]
                );
            }
        }
        console.log(`✅ ${packages.length} paquetes creados\n`);

        // 4. ACTUALIZAR MÉTRICAS
        console.log('📊 Actualizando métricas...');

        // Actualizar total de paquetes por cliente
        await conn.execute(`
      UPDATE clients c
      SET total_packages = (
        SELECT COUNT(*) FROM packages p WHERE p.client_id = c.id
      )
      WHERE tenant_id = ?
    `, [tenantId]);

        // Actualizar entregas completadas por courier
        await conn.execute(`
      UPDATE couriers co
      SET completed_deliveries = (
        SELECT COUNT(*) FROM packages p 
        WHERE p.courier_id = co.id AND p.status = 'delivered'
      )
      WHERE tenant_id = ?
    `, [tenantId]);

        console.log('✅ Métricas actualizadas\n');

        // 5. RESUMEN
        console.log('════════════════════════════════════════════════');
        console.log('✅ Base de datos poblada exitosamente!\n');
        console.log('📊 Resumen:');
        console.log(`   - ${clients.length} Clientes`);
        console.log(`   - ${couriers.length} Couriers`);
        console.log(`   - ${packages.length} Paquetes`);
        console.log(`   - ${packages.filter(p => p.status === 'delivered').length} Entregados`);
        console.log(`   - ${packages.filter(p => p.status === 'in_transit').length} En tránsito`);
        console.log(`   - ${packages.filter(p => p.status === 'pending').length} Pendientes`);
        console.log('\n🎉 Ahora puedes explorar el dashboard con datos reales!');
        console.log('🌐 https://frontend-jeczito-5818s-projects.vercel.app\n');

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await conn.end();
    }
}

seedDatabase();
