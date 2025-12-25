-- 011_package_arrivals.sql - Sistema de registro de llegadas
-- Crear tabla de llegadas de paquetes

CREATE TABLE IF NOT EXISTS package_arrivals (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    package_id VARCHAR(36) NOT NULL,
    arrived_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    received_by VARCHAR(36),
    condition_status ENUM('good', 'damaged', 'incomplete') DEFAULT 'good',
    notes TEXT,
    INDEX idx_tenant_arrivals (tenant_id),
    INDEX idx_package (package_id),
    INDEX idx_arrived_at (arrived_at),
    INDEX idx_received_by (received_by)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar llegadas de ejemplo para el tenant de prueba
INSERT INTO package_arrivals (id, tenant_id, package_id, condition_status, notes)
SELECT 
    UUID(),
    'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307',
    p.id,
    'good',
    'Paquete recibido en buenas condiciones'
FROM packages p
WHERE p.tenant_id = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307'
AND p.status = 'pending'
LIMIT 2;
