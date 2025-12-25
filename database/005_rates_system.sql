-- 005_rates_system.sql - Sistema de tarifas
-- Crear tabla de tarifas

CREATE TABLE IF NOT EXISTS rates (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    zone VARCHAR(100),
    min_weight DECIMAL(10,2) DEFAULT 0,
    max_weight DECIMAL(10,2),
    base_price DECIMAL(10,2) NOT NULL,
    price_per_kg DECIMAL(10,2) DEFAULT 0,
    service_type ENUM('standard', 'express', 'same_day', 'scheduled') DEFAULT 'standard',
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_tenant_rates (tenant_id),
    INDEX idx_zone (zone),
    INDEX idx_active (active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar tarifas de ejemplo para el tenant de prueba
INSERT INTO rates (id, tenant_id, name, description, zone, min_weight, max_weight, base_price, price_per_kg, service_type, active)
VALUES
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'San José - Estándar', 'Tarifa estándar para San José', 'San José', 0, 5, 2500, 500, 'standard', true),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'San José - Express', 'Entrega express en San José', 'San José', 0, 5, 4000, 800, 'express', true),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Heredia - Estándar', 'Tarifa estándar para Heredia', 'Heredia', 0, 5, 3000, 600, 'standard', true),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Cartago - Estándar', 'Tarifa estándar para Cartago', 'Cartago', 0, 5, 3500, 700, 'standard', true),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Alajuela - Estándar', 'Tarifa estándar para Alajuela', 'Alajuela', 0, 5, 3200, 650, 'standard', true);
