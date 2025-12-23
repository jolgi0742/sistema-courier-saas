-- 002_business_tables.sql - Tablas de negocio multi-tenant
-- Sistema Courier SaaS - Módulos de Paquetes, Couriers, Clientes

-- ===========================================
-- TABLA: packages
-- Paquetes con aislamiento por tenant
-- ===========================================
CREATE TABLE IF NOT EXISTS packages (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    tracking_number VARCHAR(20) NOT NULL UNIQUE,
    client_id VARCHAR(36) NOT NULL,
    courier_id VARCHAR(36) NULL,
    
    -- Remitente
    sender_name VARCHAR(100) NOT NULL,
    sender_phone VARCHAR(20) NOT NULL,
    
    -- Destinatario
    recipient_name VARCHAR(100) NOT NULL,
    recipient_phone VARCHAR(20) NOT NULL,
    recipient_address TEXT NOT NULL,
    
    -- Detalles del paquete
    weight DECIMAL(10,2) DEFAULT 0,
    dimensions VARCHAR(50) NULL,
    declared_value DECIMAL(10,2) DEFAULT 0,
    
    -- Estado
    status ENUM('pending', 'processing', 'assigned', 'in_transit', 'out_for_delivery', 'delivered', 'cancelled') DEFAULT 'pending',
    notes TEXT NULL,
    
    -- Timestamps
    delivered_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Índices
    INDEX idx_packages_tenant (tenant_id),
    INDEX idx_packages_tracking (tracking_number),
    INDEX idx_packages_client (client_id),
    INDEX idx_packages_courier (courier_id),
    INDEX idx_packages_status (status),
    INDEX idx_packages_tenant_status (tenant_id, status),
    
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- ===========================================
-- TABLA: couriers
-- Mensajeros con aislamiento por tenant
-- ===========================================
CREATE TABLE IF NOT EXISTS couriers (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    
    -- Información personal
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    
    -- Vehículo
    vehicle_type ENUM('motorcycle', 'bicycle', 'car', 'van', 'truck', 'walk') NOT NULL,
    vehicle_plate VARCHAR(20) NULL,
    
    -- Zona y estado
    zone VARCHAR(100) NULL,
    status ENUM('active', 'inactive', 'on_delivery') DEFAULT 'active',
    
    -- Comisiones y balance
    commission_rate DECIMAL(5,2) DEFAULT 10.00,
    balance DECIMAL(10,2) DEFAULT 0.00,
    
    -- Métricas
    completed_deliveries INT DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 5.00,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Índices
    INDEX idx_couriers_tenant (tenant_id),
    INDEX idx_couriers_status (status),
    INDEX idx_couriers_zone (zone),
    UNIQUE KEY uk_couriers_email_tenant (tenant_id, email),
    
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- ===========================================
-- TABLA: clients
-- Clientes con aislamiento por tenant
-- ===========================================
CREATE TABLE IF NOT EXISTS clients (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    
    -- Información personal
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    
    -- Empresa (opcional)
    company_name VARCHAR(150) NULL,
    tax_id VARCHAR(50) NULL,
    
    -- Dirección
    address TEXT NULL,
    city VARCHAR(100) NULL,
    country VARCHAR(50) DEFAULT 'CR',
    
    -- Estado
    status ENUM('active', 'inactive') DEFAULT 'active',
    
    -- Crédito
    credit_limit DECIMAL(10,2) DEFAULT 0.00,
    credit_balance DECIMAL(10,2) DEFAULT 0.00,
    
    -- Métricas
    total_packages INT DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Índices
    INDEX idx_clients_tenant (tenant_id),
    INDEX idx_clients_status (status),
    INDEX idx_clients_company (company_name),
    UNIQUE KEY uk_clients_email_tenant (tenant_id, email),
    
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- ===========================================
-- TABLA: package_history
-- Historial de estados de paquetes
-- ===========================================
CREATE TABLE IF NOT EXISTS package_history (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    package_id VARCHAR(36) NOT NULL,
    
    status VARCHAR(50) NOT NULL,
    notes TEXT NULL,
    location VARCHAR(255) NULL,
    
    created_by VARCHAR(36) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_history_package (package_id),
    INDEX idx_history_tenant (tenant_id),
    
    FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE CASCADE,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- ===========================================
-- TABLA: courier_payments
-- Historial de pagos a couriers
-- ===========================================
CREATE TABLE IF NOT EXISTS courier_payments (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    courier_id VARCHAR(36) NOT NULL,
    
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) NULL,
    reference VARCHAR(100) NULL,
    notes TEXT NULL,
    
    created_by VARCHAR(36) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_payments_courier (courier_id),
    INDEX idx_payments_tenant (tenant_id),
    
    FOREIGN KEY (courier_id) REFERENCES couriers(id) ON DELETE CASCADE,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- ===========================================
-- TABLA: users
-- Usuarios del sistema por tenant
-- ===========================================
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    
    firebase_uid VARCHAR(128) UNIQUE NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NULL,
    
    role ENUM('admin', 'operator', 'agent', 'courier', 'client') NOT NULL DEFAULT 'operator',
    status ENUM('active', 'inactive', 'pending') DEFAULT 'pending',
    
    -- Referencias opcionales según rol
    courier_id VARCHAR(36) NULL,
    client_id VARCHAR(36) NULL,
    
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_users_tenant (tenant_id),
    INDEX idx_users_firebase (firebase_uid),
    INDEX idx_users_role (role),
    UNIQUE KEY uk_users_email_tenant (tenant_id, email),
    
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);
