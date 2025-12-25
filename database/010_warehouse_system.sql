-- 010_warehouse_system.sql - Sistema de gestión de almacén
-- Crear tabla de ubicaciones de almacén

CREATE TABLE IF NOT EXISTS warehouse_locations (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    code VARCHAR(20) NOT NULL,
    name VARCHAR(100),
    zone VARCHAR(50),
    capacity INT,
    current_packages INT DEFAULT 0,
    status ENUM('active', 'full', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_tenant_locations (tenant_id),
    INDEX idx_code (code),
    INDEX idx_zone (zone),
    INDEX idx_status (status),
    UNIQUE KEY unique_tenant_code (tenant_id, code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de asignación de paquetes a ubicaciones

CREATE TABLE IF NOT EXISTS package_locations (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    package_id VARCHAR(36) NOT NULL,
    location_id VARCHAR(36) NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    removed_at TIMESTAMP NULL,
    INDEX idx_tenant_package_locations (tenant_id),
    INDEX idx_package (package_id),
    INDEX idx_location (location_id),
    INDEX idx_active (removed_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar ubicaciones de ejemplo para el tenant de prueba
INSERT INTO warehouse_locations (id, tenant_id, code, name, zone, capacity, status)
VALUES 
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'A1-01', 'Estante A1 - Nivel 1', 'Zona A', 50, 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'A1-02', 'Estante A1 - Nivel 2', 'Zona A', 50, 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'B1-01', 'Estante B1 - Nivel 1', 'Zona B', 50, 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'B1-02', 'Estante B1 - Nivel 2', 'Zona B', 50, 'active');
