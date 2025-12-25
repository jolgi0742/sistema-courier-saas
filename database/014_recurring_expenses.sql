-- 014_recurring_expenses.sql - Sistema de gastos recurrentes
-- Crear tabla de gastos recurrentes

CREATE TABLE IF NOT EXISTS recurring_expenses (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    amount DECIMAL(10,2) NOT NULL,
    frequency ENUM('daily', 'weekly', 'monthly', 'yearly') NOT NULL,
    next_due_date DATE,
    status ENUM('active', 'paused', 'cancelled') DEFAULT 'active',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_tenant_expenses (tenant_id),
    INDEX idx_next_due_date (next_due_date),
    INDEX idx_status (status),
    INDEX idx_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar gastos recurrentes de ejemplo para el tenant de prueba
INSERT INTO recurring_expenses (id, tenant_id, name, category, amount, frequency, next_due_date, status)
VALUES 
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Alquiler de Oficina', 'Instalaciones', 500000.00, 'monthly', DATE_ADD(CURDATE(), INTERVAL 5 DAY), 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Seguro de Vehículos', 'Seguros', 150000.00, 'monthly', DATE_ADD(CURDATE(), INTERVAL 15 DAY), 'active'),
    (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Internet y Teléfono', 'Servicios', 35000.00, 'monthly', DATE_ADD(CURDATE(), INTERVAL 20 DAY), 'active');
