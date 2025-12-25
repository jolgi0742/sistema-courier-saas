USE sistema_courier_saas;

-- Insertar tenant demo
INSERT INTO tenants (id, name, subdomain, status, plan_id, trial_ends_at, has_custom_domain, custom_domain)
VALUES ('d5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', 'Mi Empresa', 'demo', 'active', 'pro', DATE_ADD(NOW(), INTERVAL 30 DAY), false, null)
ON DUPLICATE KEY UPDATE name = 'Mi Empresa', subdomain = 'demo', status = 'active';

-- Insertar branding
INSERT INTO tenant_branding (id, tenant_id, logo_url, logo_white_url, favicon_url, primary_color, secondary_color, accent_color, company_name, tagline, contact_email, contact_phone, address, website_url)
VALUES (UUID(), 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307', null, null, null, '#2563eb', '#1e40af', '#3b82f6', 'Mi Empresa Courier', 'Entregas rápidas y seguras', 'contacto@miempresa.com', '2222-3333', 'San José, Costa Rica', 'https://miempresa.com')
ON DUPLICATE KEY UPDATE company_name = 'Mi Empresa Courier', primary_color = '#2563eb';

-- Verificar
SELECT 'Tenant creado:' as mensaje;
SELECT id, name, subdomain, status FROM tenants WHERE subdomain = 'demo';

SELECT 'Branding creado:' as mensaje;
SELECT id, company_name, primary_color FROM tenant_branding WHERE tenant_id = 'd5f8d5d4-2680-43bb-8b5f-c00f7aa0d307';
