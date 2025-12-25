-- 007_fuel_control.sql - Sistema de control de combustible
-- Crear tabla de registros de combustible

CREATE TABLE IF NOT EXISTS fuel_records (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    courier_id VARCHAR(36),
    vehicle_id VARCHAR(36),
    liters DECIMAL(10,2) NOT NULL,
    cost DECIMAL(10,2) NOT NULL,
    price_per_liter DECIMAL(10,2),
    odometer_reading INT,
    previous_odometer INT,
    distance_traveled INT,
    efficiency DECIMAL(10,2), -- km/litro
    station VARCHAR(100),
    receipt_url VARCHAR(500),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_tenant_fuel (tenant_id),
    INDEX idx_courier (courier_id),
    INDEX idx_vehicle (vehicle_id),
    INDEX idx_date (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar registros de ejemplo para el tenant de prueba
INSERT INTO fuel_records (id, tenant_id, courier_id, liters, cost, price_per_liter, odometer_reading, station)
SELECT 
    UUID(),
    'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307',
    c.id,
    25.50,
    15300.00,
    600.00,
    45000,
    'Estación Central'
FROM couriers c
WHERE c.tenant_id = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307'
LIMIT 2;
