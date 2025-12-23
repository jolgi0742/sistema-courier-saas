-- 003_sinpe_payments.sql
-- Tabla para pagos SINPE Móvil (Costa Rica)

-- Tabla para almacenar pagos SINPE
CREATE TABLE IF NOT EXISTS sinpe_payments (
    id VARCHAR(50) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'CRC',
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20),
    reference_number VARCHAR(100) NOT NULL,
    receipt_url TEXT,
    status ENUM('pending', 'verified', 'rejected') DEFAULT 'pending',
    description TEXT,
    notes TEXT,
    verified_at DATETIME,
    verified_by VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_tenant (tenant_id),
    INDEX idx_status (status),
    INDEX idx_created (created_at),
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Agregar columnas de configuración SINPE a tenant_settings
-- Si la tabla no existe, crearla
CREATE TABLE IF NOT EXISTS tenant_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL UNIQUE,
    sinpe_phone VARCHAR(20),
    sinpe_bank VARCHAR(100),
    sinpe_holder_name VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);
