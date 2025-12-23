-- 004_paypal_payments.sql - Tabla para pagos con PayPal
-- Sistema Courier SaaS

-- Tabla para registrar pagos de PayPal
CREATE TABLE IF NOT EXISTS paypal_payments (
    id VARCHAR(36) PRIMARY KEY,
    tenant_id VARCHAR(36) NOT NULL,
    paypal_order_id VARCHAR(100) NOT NULL,
    paypal_subscription_id VARCHAR(100) NULL,
    plan_id VARCHAR(36) NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payer_email VARCHAR(255) NULL,
    payer_id VARCHAR(100) NULL,
    payment_source VARCHAR(50) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    FOREIGN KEY (plan_id) REFERENCES plans(id) ON DELETE SET NULL,
    
    INDEX idx_tenant_id (tenant_id),
    INDEX idx_paypal_order_id (paypal_order_id),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Índice para búsquedas por subscription_id (si se implementan suscripciones)
CREATE INDEX idx_paypal_subscription ON paypal_payments(paypal_subscription_id);
