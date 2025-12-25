-- 012_cargo_manifests.sql - Sistema de manifiestos de carga
-- Crear tabla de manifiestos

CREATE TABLE IF NOT EXISTS cargo_manifests (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    manifest_number VARCHAR(50) NOT NULL,
    courier_id VARCHAR(36),
    route VARCHAR(100),
    date DATE,
    total_packages INT DEFAULT 0,
    status ENUM('draft', 'active', 'completed') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    INDEX idx_tenant_manifests (tenant_id),
    INDEX idx_courier (courier_id),
    INDEX idx_date (date),
    INDEX idx_status (status),
    UNIQUE KEY unique_tenant_manifest (tenant_id, manifest_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Crear tabla de paquetes en manifiestos

CREATE TABLE IF NOT EXISTS manifest_packages (
    id VARCHAR(36) PRIMARY KEY,
    manifest_id VARCHAR(36) NOT NULL,
    package_id VARCHAR(36) NOT NULL,
    sequence_number INT,
    INDEX idx_manifest (manifest_id),
    INDEX idx_package (package_id),
    FOREIGN KEY (manifest_id) REFERENCES cargo_manifests(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar manifiestos de ejemplo para el tenant de prueba
INSERT INTO cargo_manifests (id, tenant_id, manifest_number, route, date, status)
VALUES 
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'MAN-001', 'Ruta Centro', CURDATE(), 'draft'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'MAN-002', 'Ruta Norte', CURDATE(), 'draft');
