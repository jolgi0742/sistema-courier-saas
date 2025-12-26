-- ============================================
-- Script de Datos Demo - Sistema Courier SaaS
-- ============================================
-- Propósito: Crear tenant demo con usuarios y datos de ejemplo
-- Uso: Para demostraciones a clientes potenciales
-- ============================================

-- Limpiar datos demo existentes (si existen)
DELETE FROM packages WHERE tenant_id = 'demo-tenant-001';
DELETE FROM clients WHERE tenant_id = 'demo-tenant-001';
DELETE FROM couriers WHERE tenant_id = 'demo-tenant-001';
DELETE FROM users WHERE tenant_id = 'demo-tenant-001';
DELETE FROM tenants WHERE id = 'demo-tenant-001';

-- ============================================
-- 1. CREAR TENANT DEMO
-- ============================================

INSERT INTO tenants (
    id,
    company_name,
    subdomain,
    contact_email,
    contact_phone,
    plan,
    status,
    created_at
) VALUES (
    'demo-tenant-001',
    'Courier Express Demo',
    'demo',
    'admin@courierexpress.com',
    '+506-8888-8888',
    'enterprise',
    'active',
    NOW()
);

-- ============================================
-- 2. CREAR USUARIOS DEMO POR ROL
-- ============================================

-- Usuario ADMIN
INSERT INTO users (
    id,
    tenant_id,
    email,
    password_hash,
    full_name,
    role,
    status,
    created_at
) VALUES (
    'user-admin-demo',
    'demo-tenant-001',
    'admin@demo.com',
    '$2b$10$YourHashedPasswordHere', -- Password: Demo123!
    'Carlos Administrador',
    'admin',
    'active',
    NOW()
);

-- Usuario AGENT
INSERT INTO users (
    id,
    tenant_id,
    email,
    password_hash,
    full_name,
    role,
    status,
    created_at
) VALUES (
    'user-agent-demo',
    'demo-tenant-001',
    'agent@demo.com',
    '$2b$10$YourHashedPasswordHere', -- Password: Demo123!
    'María Agente',
    'agent',
    'active',
    NOW()
);

-- Usuario CLIENT
INSERT INTO users (
    id,
    tenant_id,
    email,
    password_hash,
    full_name,
    role,
    status,
    created_at
) VALUES (
    'user-client-demo',
    'demo-tenant-001',
    'client@demo.com',
    '$2b$10$YourHashedPasswordHere', -- Password: Demo123!
    'Juan Cliente',
    'client',
    'active',
    NOW()
);

-- Usuario COURIER
INSERT INTO users (
    id,
    tenant_id,
    email,
    password_hash,
    full_name,
    role,
    status,
    created_at
) VALUES (
    'user-courier-demo',
    'demo-tenant-001',
    'courier@demo.com',
    '$2b$10$YourHashedPasswordHere', -- Password: Demo123!
    'Pedro Courier',
    'courier',
    'active',
    NOW()
);

-- ============================================
-- 3. CREAR CLIENTES DE EJEMPLO
-- ============================================

INSERT INTO clients (
    id,
    tenant_id,
    user_id,
    full_name,
    email,
    phone,
    address,
    city,
    country,
    mailbox_number,
    status,
    created_at
) VALUES 
(
    'client-001',
    'demo-tenant-001',
    'user-client-demo',
    'Juan Cliente',
    'client@demo.com',
    '+506-8888-1111',
    'Calle Principal 123',
    'San José',
    'Costa Rica',
    'CR-001',
    'active',
    NOW()
),
(
    'client-002',
    'demo-tenant-001',
    NULL,
    'Ana Empresaria',
    'ana@empresa.com',
    '+506-8888-2222',
    'Avenida Central 456',
    'Heredia',
    'Costa Rica',
    'CR-002',
    'active',
    NOW()
),
(
    'client-003',
    'demo-tenant-001',
    NULL,
    'Roberto Comerciante',
    'roberto@comercio.com',
    '+506-8888-3333',
    'Boulevard Norte 789',
    'Alajuela',
    'Costa Rica',
    'CR-003',
    'active',
    NOW()
);

-- ============================================
-- 4. CREAR COURIERS DE EJEMPLO
-- ============================================

INSERT INTO couriers (
    id,
    tenant_id,
    user_id,
    full_name,
    email,
    phone,
    vehicle_type,
    vehicle_plate,
    license_number,
    status,
    created_at
) VALUES 
(
    'courier-001',
    'demo-tenant-001',
    'user-courier-demo',
    'Pedro Courier',
    'courier@demo.com',
    '+506-8888-4444',
    'motorcycle',
    'ABC-123',
    'LIC-001',
    'available',
    NOW()
),
(
    'courier-002',
    'demo-tenant-001',
    NULL,
    'Luis Repartidor',
    'luis@courier.com',
    '+506-8888-5555',
    'van',
    'DEF-456',
    'LIC-002',
    'available',
    NOW()
),
(
    'courier-003',
    'demo-tenant-001',
    NULL,
    'Sofia Delivery',
    'sofia@courier.com',
    '+506-8888-6666',
    'car',
    'GHI-789',
    'LIC-003',
    'busy',
    NOW()
);

-- ============================================
-- 5. CREAR PAQUETES DE EJEMPLO
-- ============================================

INSERT INTO packages (
    id,
    tenant_id,
    tracking_number,
    client_id,
    courier_id,
    sender_name,
    sender_address,
    recipient_name,
    recipient_address,
    recipient_phone,
    weight,
    dimensions,
    declared_value,
    status,
    origin,
    destination,
    estimated_delivery,
    created_at
) VALUES 
(
    'pkg-001',
    'demo-tenant-001',
    'TRK-2025-001',
    'client-001',
    'courier-001',
    'Amazon USA',
    '123 Main St, Miami, FL 33101',
    'Juan Cliente',
    'Calle Principal 123, San José',
    '+506-8888-1111',
    2.5,
    '30x20x15',
    150.00,
    'in_transit',
    'Miami, USA',
    'San José, Costa Rica',
    DATE_ADD(NOW(), INTERVAL 3 DAY),
    DATE_SUB(NOW(), INTERVAL 2 DAY)
),
(
    'pkg-002',
    'demo-tenant-001',
    'TRK-2025-002',
    'client-002',
    'courier-002',
    'eBay Seller',
    '456 Market St, Miami, FL 33102',
    'Ana Empresaria',
    'Avenida Central 456, Heredia',
    '+506-8888-2222',
    1.2,
    '25x15x10',
    75.00,
    'delivered',
    'Miami, USA',
    'Heredia, Costa Rica',
    DATE_SUB(NOW(), INTERVAL 1 DAY),
    DATE_SUB(NOW(), INTERVAL 5 DAY)
),
(
    'pkg-003',
    'demo-tenant-001',
    'TRK-2025-003',
    'client-003',
    'courier-003',
    'Walmart',
    '789 Commerce Ave, Miami, FL 33103',
    'Roberto Comerciante',
    'Boulevard Norte 789, Alajuela',
    '+506-8888-3333',
    5.0,
    '40x30x20',
    250.00,
    'pending',
    'Miami, USA',
    'Alajuela, Costa Rica',
    DATE_ADD(NOW(), INTERVAL 5 DAY),
    NOW()
),
(
    'pkg-004',
    'demo-tenant-001',
    'TRK-2025-004',
    'client-001',
    NULL,
    'Best Buy',
    '321 Tech Blvd, Miami, FL 33104',
    'Juan Cliente',
    'Calle Principal 123, San José',
    '+506-8888-1111',
    3.8,
    '35x25x18',
    320.00,
    'warehouse',
    'Miami, USA',
    'San José, Costa Rica',
    DATE_ADD(NOW(), INTERVAL 4 DAY),
    DATE_SUB(NOW(), INTERVAL 1 DAY)
);

-- ============================================
-- 6. CREAR TARIFAS DE EJEMPLO
-- ============================================

INSERT INTO rates (
    id,
    tenant_id,
    name,
    origin,
    destination,
    base_rate,
    per_kg_rate,
    service_type,
    estimated_days,
    status,
    created_at
) VALUES 
(
    'rate-001',
    'demo-tenant-001',
    'Express Miami - San José',
    'Miami, USA',
    'San José, Costa Rica',
    15.00,
    8.00,
    'express',
    3,
    'active',
    NOW()
),
(
    'rate-002',
    'demo-tenant-001',
    'Standard Miami - Costa Rica',
    'Miami, USA',
    'Costa Rica',
    10.00,
    5.00,
    'standard',
    7,
    'active',
    NOW()
),
(
    'rate-003',
    'demo-tenant-001',
    'Economy Miami - Costa Rica',
    'Miami, USA',
    'Costa Rica',
    7.00,
    3.00,
    'economy',
    14,
    'active',
    NOW()
);

-- ============================================
-- 7. CREAR UBICACIONES DE ALMACÉN
-- ============================================

INSERT INTO warehouse_locations (
    id,
    tenant_id,
    code,
    zone,
    aisle,
    shelf,
    capacity,
    status,
    created_at
) VALUES 
(
    'wh-loc-001',
    'demo-tenant-001',
    'A1-01',
    'Zone A',
    'Aisle 1',
    'Shelf 1',
    50,
    'available',
    NOW()
),
(
    'wh-loc-002',
    'demo-tenant-001',
    'A1-02',
    'Zone A',
    'Aisle 1',
    'Shelf 2',
    50,
    'occupied',
    NOW()
),
(
    'wh-loc-003',
    'demo-tenant-001',
    'B2-01',
    'Zone B',
    'Aisle 2',
    'Shelf 1',
    100,
    'available',
    NOW()
);

-- ============================================
-- CREDENCIALES DE ACCESO DEMO
-- ============================================

/*
CREDENCIALES PARA DEMOSTRACIONES:

Tenant: demo
URL: https://demo.tu-dominio.com (o localhost:5173?tenant=demo)

USUARIOS:
---------
1. ADMINISTRADOR
   Email: admin@demo.com
   Password: Demo123!
   Rol: Gestión completa del sistema

2. AGENTE
   Email: agent@demo.com
   Password: Demo123!
   Rol: Gestión operativa y ventas

3. CLIENTE
   Email: client@demo.com
   Password: Demo123!
   Rol: Seguimiento de paquetes

4. COURIER
   Email: courier@demo.com
   Password: Demo123!
   Rol: Entregas y rutas

DATOS DE EJEMPLO:
-----------------
- 3 Clientes registrados
- 3 Couriers activos
- 4 Paquetes en diferentes estados
- 3 Tarifas configuradas
- 3 Ubicaciones de almacén

NOTA: 
- Los passwords están hasheados con bcrypt
- Debes generar los hashes reales antes de usar este script
- Usa: bcrypt.hash('Demo123!', 10) en Node.js
*/

-- ============================================
-- FIN DEL SCRIPT
-- ============================================
