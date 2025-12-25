-- 009_documents_management.sql - Sistema de gestión de documentos
-- Crear tabla de documentos

CREATE TABLE IF NOT EXISTS documents (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    entity_type ENUM('courier', 'vehicle') NOT NULL,
    entity_id VARCHAR(36) NOT NULL,
    document_type VARCHAR(50) NOT NULL,
    document_number VARCHAR(100),
    file_url VARCHAR(500),
    file_name VARCHAR(255),
    issue_date DATE,
    expiration_date DATE,
    status ENUM('valid', 'expiring_soon', 'expired') DEFAULT 'valid',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_tenant_documents (tenant_id),
    INDEX idx_entity (entity_type, entity_id),
    INDEX idx_expiration (expiration_date),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar documentos de ejemplo para el tenant de prueba
INSERT INTO documents (id, tenant_id, entity_type, entity_id, document_type, document_number, issue_date, expiration_date, status)
SELECT 
    UUID(),
    'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307',
    'courier',
    c.id,
    'Licencia de Conducir',
    'LIC-12345',
    CURDATE(),
    DATE_ADD(CURDATE(), INTERVAL 365 DAY),
    'valid'
FROM couriers c
WHERE c.tenant_id = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307'
LIMIT 1;

INSERT INTO documents (id, tenant_id, entity_type, entity_id, document_type, document_number, issue_date, expiration_date, status)
SELECT 
    UUID(),
    'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307',
    'vehicle',
    v.id,
    'SOAT',
    'SOAT-67890',
    CURDATE(),
    DATE_ADD(CURDATE(), INTERVAL 180 DAY),
    'valid'
FROM vehicles v
WHERE v.tenant_id = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307'
LIMIT 1;
