-- 013_frequent_shippers.sql - Sistema de remitentes frecuentes
-- Crear tabla de remitentes frecuentes

CREATE TABLE IF NOT EXISTS frequent_shippers (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    postal_code VARCHAR(20),
    total_shipments INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_tenant_shippers (tenant_id),
    INDEX idx_name (name),
    INDEX idx_phone (phone),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar remitentes frecuentes de ejemplo para el tenant de prueba
INSERT INTO frequent_shippers (id, tenant_id, name, phone, email, address, city, state, postal_code, total_shipments)
VALUES 
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Empresa ABC S.A.', '2222-3333', 'contacto@abc.com', 'Av. Central 123', 'San José', 'San José', '10101', 15),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Comercial XYZ', '2233-4455', 'ventas@xyz.com', 'Calle 5, Av. 10', 'Alajuela', 'Alajuela', '20101', 8);
