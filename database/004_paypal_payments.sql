-- 004_paypal_payments.sql - Tabla para pagos con PayPal
-- Sistema Courier SaaS

-- Tabla para registrar pagos de PayPal
CREATE TABLE IF NOT EXISTS paypal_payments (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    paypal_order_id VARCHAR(100) NOT NULL,
    paypal_subscription_id VARCHAR(100) NULL,
    plan_id VARCHAR(50) NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payer_email VARCHAR(255) NULL,
    payer_id VARCHAR(100) NULL,
    payment_source VARCHAR(50) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Nota: Foreign keys removidas por incompatibilidad de charset
    -- La integridad referencial se maneja a nivel de aplicación
    
    INDEX idx_tenant_id (tenant_id),
    INDEX idx_paypal_order_id (paypal_order_id),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at),
    INDEX idx_plan_id (plan_id)
);
