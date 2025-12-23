-- =====================================================
-- Sistema Courier SaaS - Database Schema
-- Multi-tenant architecture with White Label support
-- =====================================================

-- Tabla principal de tenants (empresas de courier)
CREATE TABLE tenants (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subdomain VARCHAR(100) UNIQUE NOT NULL,
  status ENUM('trial', 'active', 'suspended', 'cancelled') DEFAULT 'trial',
  plan_id VARCHAR(50) DEFAULT 'trial',
  trial_ends_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Configuración de branding por tenant
CREATE TABLE tenant_branding (
  tenant_id VARCHAR(36) PRIMARY KEY,
  logo_url VARCHAR(500),
  logo_white_url VARCHAR(500),
  favicon_url VARCHAR(500),
  primary_color VARCHAR(7) DEFAULT '#3B82F6',
  secondary_color VARCHAR(7) DEFAULT '#1E40AF',
  accent_color VARCHAR(7) DEFAULT '#10B981',
  company_name VARCHAR(255),
  tagline VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(50),
  address TEXT,
  website_url VARCHAR(255),
  email_from_name VARCHAR(100),
  email_footer_text TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Dominios personalizados (White Label - Enterprise)
CREATE TABLE tenant_domains (
  id VARCHAR(36) PRIMARY KEY,
  tenant_id VARCHAR(36) NOT NULL,
  domain_type ENUM('subdomain', 'custom') NOT NULL,
  domain VARCHAR(255) UNIQUE NOT NULL,
  is_primary BOOLEAN DEFAULT FALSE,
  ssl_status ENUM('pending', 'provisioning', 'active', 'failed') DEFAULT 'pending',
  ssl_expires_at TIMESTAMP,
  verified_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Configuración de planes
CREATE TABLE plans (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price_monthly DECIMAL(10,2),
  price_annual DECIMAL(10,2),
  stripe_price_id_monthly VARCHAR(100),
  stripe_price_id_annual VARCHAR(100),
  limits JSON,
  features JSON,
  is_active BOOLEAN DEFAULT TRUE
);

-- Insertar planes por defecto
INSERT INTO plans (id, name, description, price_monthly, price_annual, limits, features) VALUES
('trial', 'Prueba Gratis', '14 días de prueba', 0, 0, 
  '{"users": 3, "packages_per_month": 50, "agents": 1, "couriers": 5, "storage_gb": 1}',
  '["basic_tracking", "basic_reports"]'),
('starter', 'Starter', 'Para pequeños couriers', 49.00, 470.00,
  '{"users": 10, "packages_per_month": 500, "agents": 3, "couriers": 20, "storage_gb": 10}',
  '["tracking", "reports", "exports", "notifications"]'),
('professional', 'Professional', 'Para couriers en crecimiento', 149.00, 1430.00,
  '{"users": 50, "packages_per_month": 5000, "agents": 10, "couriers": 100, "storage_gb": 50}',
  '["all_starter", "api_access", "custom_branding", "priority_support"]'),
('enterprise', 'Enterprise', 'White Label completo', 299.00, NULL,
  '{"users": -1, "packages_per_month": -1, "agents": -1, "couriers": -1, "storage_gb": -1}',
  '["all_professional", "white_label", "custom_domain", "custom_emails", "dedicated_support", "sla"]');

-- Suscripciones
CREATE TABLE subscriptions (
  id VARCHAR(36) PRIMARY KEY,
  tenant_id VARCHAR(36) NOT NULL,
  plan_id VARCHAR(50) NOT NULL,
  stripe_subscription_id VARCHAR(100),
  stripe_customer_id VARCHAR(100),
  status ENUM('trialing', 'active', 'past_due', 'canceled', 'unpaid') DEFAULT 'trialing',
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
  FOREIGN KEY (plan_id) REFERENCES plans(id)
);

-- Tracking de uso
CREATE TABLE usage_tracking (
  id VARCHAR(36) PRIMARY KEY,
  tenant_id VARCHAR(36) NOT NULL,
  resource VARCHAR(50) NOT NULL,
  count INT DEFAULT 0,
  period VARCHAR(7) NOT NULL, -- YYYY-MM
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_usage (tenant_id, resource, period),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Índices para performance
CREATE INDEX idx_tenants_subdomain ON tenants(subdomain);
CREATE INDEX idx_tenants_status ON tenants(status);
CREATE INDEX idx_tenant_domains_domain ON tenant_domains(domain);
CREATE INDEX idx_subscriptions_tenant ON subscriptions(tenant_id);
CREATE INDEX idx_usage_tenant_period ON usage_tracking(tenant_id, period);
