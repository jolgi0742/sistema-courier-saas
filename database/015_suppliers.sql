-- 015_suppliers.sql - Sistema de proveedores
-- Crear tabla de proveedores

CREATE TABLE IF NOT EXISTS suppliers (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,
    contact_name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    postal_code VARCHAR(20),
    category VARCHAR(50),
    notes TEXT,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_tenant_suppliers (tenant_id),
    INDEX idx_name (name),
    INDEX idx_category (category),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar proveedores de ejemplo para el tenant de prueba
INSERT INTO suppliers (id, tenant_id, name, contact_name, phone, email, address, city, category, status)
VALUES 
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Combustibles del Norte S.A.', 'Juan Pérez', '2222-3333', 'ventas@combustibles.com', 'Av. Central 100', 'San José', 'Combustible', 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Repuestos y Servicios CR', 'María González', '2233-4455', 'info@repuestos.com', 'Calle 5, Av. 10', 'Alajuela', 'Repuestos', 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Papelería Moderna', 'Carlos Rodríguez', '2244-5566', 'contacto@papeleria.com', 'Av. 2, Calle 8', 'Heredia', 'Papelería', 'active');
