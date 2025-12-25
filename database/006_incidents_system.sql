-- 006_incidents_system.sql - Sistema de incidencias
-- Crear tabla de incidencias

CREATE TABLE IF NOT EXISTS incidents (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    package_id VARCHAR(36) NOT NULL,
    type ENUM('delay', 'damage', 'loss', 'client_absent', 'address_error', 'other') NOT NULL,
    status ENUM('open', 'investigating', 'resolved', 'closed') DEFAULT 'open',
    priority ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
    description TEXT NOT NULL,
    resolution TEXT,
    assigned_to VARCHAR(36),
    reported_by VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    INDEX idx_tenant_incidents (tenant_id),
    INDEX idx_package (package_id),
    INDEX idx_status (status),
    INDEX idx_priority (priority)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar incidencias de ejemplo para el tenant de prueba
INSERT INTO incidents (id, tenant_id, package_id, type, status, priority, description, reported_by)
SELECT 
    UUID(),
    'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307',
    p.id,
    'delay',
    'open',
    'medium',
    'Paquete retrasado por condiciones climáticas',
    NULL
FROM packages p
WHERE p.tenant_id = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307'
LIMIT 1;
