-- 008_vehicles_maintenance.sql - Sistema de vehículos y mantenimiento
-- Crear tabla de vehículos

CREATE TABLE IF NOT EXISTS vehicles (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    plate VARCHAR(20) NOT NULL,
    brand VARCHAR(50),
    model VARCHAR(50),
    year INT,
    type VARCHAR(50),
    assigned_to VARCHAR(36),
    status ENUM('active', 'maintenance', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_tenant_vehicles (tenant_id),
    INDEX idx_assigned (assigned_to),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de mantenimiento de vehículos

CREATE TABLE IF NOT EXISTS vehicle_maintenance (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    vehicle_id VARCHAR(36) NOT NULL,
    type ENUM('preventive', 'corrective', 'inspection') NOT NULL,
    description TEXT NOT NULL,
    cost DECIMAL(10,2),
    provider VARCHAR(100),
    odometer_reading INT,
    next_service_date DATE,
    next_service_odometer INT,
    status ENUM('scheduled', 'in_progress', 'completed') DEFAULT 'scheduled',
    completed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_tenant_maintenance (tenant_id),
    INDEX idx_vehicle (vehicle_id),
    INDEX idx_next_service (next_service_date),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar vehículos de ejemplo para el tenant de prueba
INSERT INTO vehicles (id, tenant_id, plate, brand, model, year, type, status)
VALUES 
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'ABC-123', 'Toyota', 'Hilux', 2020, 'Camioneta', 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'XYZ-789', 'Honda', 'CRV', 2021, 'SUV', 'active');

-- Insertar mantenimientos de ejemplo
INSERT INTO vehicle_maintenance (id, tenant_id, vehicle_id, type, description, cost, status, next_service_date)
SELECT 
    UUID(),
    'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307',
    v.id,
    'preventive',
    'Cambio de aceite y filtros',
    35000.00,
    'scheduled',
    DATE_ADD(CURDATE(), INTERVAL 30 DAY)
FROM vehicles v
WHERE v.tenant_id = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307'
LIMIT 1;
