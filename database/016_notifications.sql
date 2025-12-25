-- 016_notifications.sql - Sistema de notificaciones
CREATE TABLE IF NOT EXISTS notifications (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type ENUM('info', 'success', 'warning', 'error') DEFAULT 'info',
    category ENUM('package', 'delivery', 'payment', 'system', 'alert') DEFAULT 'system',
    is_read BOOLEAN DEFAULT FALSE,
    link VARCHAR(500),
    metadata JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    
    INDEX idx_tenant_user (tenant_id, user_id),
    INDEX idx_is_read (is_read),
    INDEX idx_created_at (created_at),
    
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de ejemplo
INSERT INTO notifications (id, tenant_id, user_id, title, message, type, category, link) VALUES
(UUID(), (SELECT id FROM tenants WHERE subdomain = 'demo'), 'admin-user', 
 'Nuevo paquete creado', 'Se ha creado el paquete #PKG001', 'success', 'package', '/packages/1'),
(UUID(), (SELECT id FROM tenants WHERE subdomain = 'demo'), 'admin-user',
 'Paquete entregado', 'El paquete #PKG002 ha sido entregado', 'success', 'delivery', '/packages/2');
