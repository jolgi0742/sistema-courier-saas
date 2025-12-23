// LandingPage.tsx - Landing page pública del SaaS
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Package,
    Truck,
    Users,
    Globe,
    Shield,
    Zap,
    Check,
    ArrowRight,
    Star
} from 'lucide-react';

const LandingPage: React.FC = () => {
    const plans = [
        {
            name: 'Starter',
            price: 49,
            description: 'Para pequeños couriers',
            features: [
                '10 usuarios',
                '500 paquetes/mes',
                '3 agentes',
                '20 couriers',
                'Subdominio personalizado',
                'Soporte por email'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: 149,
            description: 'Para couriers en crecimiento',
            features: [
                '50 usuarios',
                '5,000 paquetes/mes',
                '10 agentes',
                '100 couriers',
                'Branding personalizado',
                'API Access',
                'Soporte prioritario'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 299,
            priceLabel: 'Desde',
            description: 'White Label completo',
            features: [
                'Usuarios ilimitados',
                'Paquetes ilimitados',
                'Agentes ilimitados',
                'Dominio propio',
                '100% White Label',
                'Emails personalizados',
                'Soporte dedicado + SLA'
            ],
            popular: false
        }
    ];

    const features = [
        {
            icon: Package,
            title: 'Gestión de Paquetes',
            description: 'Tracking en tiempo real, estados automáticos, notificaciones a clientes.'
        },
        {
            icon: Truck,
            title: 'Red de Couriers',
            description: 'Asigna entregas, monitorea rutas, gestiona comisiones y pagos.'
        },
        {
            icon: Users,
            title: 'Portal de Clientes',
            description: 'Tus clientes rastrean paquetes, reciben alertas y consultan facturas.'
        },
        {
            icon: Globe,
            title: 'Multi-País',
            description: 'Soporta operaciones internacionales, consolidación y reempaque.'
        },
        {
            icon: Shield,
            title: 'Seguridad Enterprise',
            description: 'Datos encriptados, backups automáticos, cumplimiento normativo.'
        },
        {
            icon: Zap,
            title: 'API Completa',
            description: 'Integra con tu e-commerce, ERP o cualquier sistema externo.'
        }
    ];

    return (
        <div className="landing-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-brand">
                    <Package size={32} />
                    <span>Sistema Courier</span>
                </div>
                <div className="nav-links">
                    <a href="#features">Características</a>
                    <a href="#pricing">Precios</a>
                    <Link to="/login" className="btn-login">Iniciar Sesión</Link>
                    <Link to="/register" className="btn-cta">Prueba Gratis</Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero">
                <div className="hero-content">
                    <h1>La plataforma completa para tu empresa de courier</h1>
                    <p>
                        Gestiona paquetes, couriers, clientes y operaciones internacionales
                        desde una sola plataforma. Lista para usar en minutos.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/register" className="btn-primary">
                            Empezar Gratis <ArrowRight size={20} />
                        </Link>
                        <a href="#demo" className="btn-secondary">Ver Demo</a>
                    </div>
                    <div className="hero-trust">
                        <span>Confiado por +100 empresas de courier</span>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="dashboard-preview">
                        <div className="preview-header">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="preview-content">
                            <div className="mock-stat"></div>
                            <div className="mock-stat"></div>
                            <div className="mock-stat"></div>
                            <div className="mock-chart"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="features">
                <h2>Todo lo que necesitas para operar</h2>
                <p className="section-subtitle">
                    Una plataforma completa diseñada específicamente para empresas de courier
                </p>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                <feature.icon size={28} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="pricing">
                <h2>Planes simples y transparentes</h2>
                <p className="section-subtitle">
                    14 días de prueba gratis. Sin tarjeta de crédito.
                </p>
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <span className="popular-badge">Más Popular</span>}
                            <h3>{plan.name}</h3>
                            <p className="plan-description">{plan.description}</p>
                            <div className="plan-price">
                                {plan.priceLabel && <span className="price-label">{plan.priceLabel}</span>}
                                <span className="price">${plan.price}</span>
                                <span className="period">/mes</span>
                            </div>
                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}><Check size={16} /> {feature}</li>
                                ))}
                            </ul>
                            <Link
                                to="/register"
                                className={`btn-plan ${plan.popular ? 'btn-plan-primary' : ''}`}
                            >
                                Empezar Gratis
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>¿Listo para modernizar tu operación?</h2>
                <p>Únete a cientos de empresas que ya confían en Sistema Courier</p>
                <Link to="/register" className="btn-cta-large">
                    Crear Cuenta Gratis <ArrowRight size={24} />
                </Link>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Package size={28} />
                        <span>Sistema Courier</span>
                        <p>La plataforma SaaS para empresas de courier modernas.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Producto</h4>
                        <a href="#features">Características</a>
                        <a href="#pricing">Precios</a>
                        <a href="/docs">Documentación</a>
                    </div>
                    <div className="footer-links">
                        <h4>Empresa</h4>
                        <a href="/about">Nosotros</a>
                        <a href="/contact">Contacto</a>
                        <a href="/blog">Blog</a>
                    </div>
                    <div className="footer-links">
                        <h4>Legal</h4>
                        <a href="/privacy">Privacidad</a>
                        <a href="/terms">Términos</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Sistema Courier. Todos los derechos reservados.</p>
                </div>
            </footer>

            <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .landing-page {
          font-family: 'Inter', system-ui, sans-serif;
          color: #1f2937;
          overflow-x: hidden;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          z-index: 100;
          border-bottom: 1px solid #e5e7eb;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          color: #3b82f6;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: #3b82f6; }

        .btn-login {
          padding: 10px 20px;
          border-radius: 8px;
        }

        .btn-cta {
          background: #3b82f6;
          color: white !important;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
        }

        .hero {
          display: flex;
          align-items: center;
          gap: 60px;
          padding: 160px 60px 100px;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
        }

        .hero-content {
          flex: 1;
        }

        .hero-content h1 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          font-size: 20px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #3b82f6;
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          border: 2px solid #e5e7eb;
          transition: border-color 0.2s;
        }

        .btn-secondary:hover { border-color: #3b82f6; }

        .hero-trust {
          color: #6b7280;
          font-size: 14px;
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-top: 8px;
          color: #f59e0b;
        }

        .hero-image {
          flex: 1;
        }

        .dashboard-preview {
          background: white;
          border-radius: 16px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        .preview-header {
          padding: 12px 16px;
          background: #f3f4f6;
          border-bottom: 1px solid #e5e7eb;
        }

        .dots {
          display: flex;
          gap: 8px;
        }

        .dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1d5db;
        }

        .dots span:first-child { background: #ef4444; }
        .dots span:nth-child(2) { background: #f59e0b; }
        .dots span:nth-child(3) { background: #10b981; }

        .preview-content {
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .mock-stat {
          height: 80px;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          border-radius: 12px;
        }

        .mock-chart {
          grid-column: span 3;
          height: 200px;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-radius: 12px;
        }

        .features {
          padding: 100px 60px;
          text-align: center;
        }

        h2 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          text-align: left;
          padding: 32px;
          border-radius: 16px;
          background: #f9fafb;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .pricing {
          padding: 100px 60px;
          background: #f8fafc;
          text-align: center;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pricing-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          text-align: left;
          border: 2px solid #e5e7eb;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pricing-card.popular {
          border-color: #3b82f6;
          transform: scale(1.05);
        }

        .pricing-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #3b82f6;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .pricing-card h3 {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .plan-description {
          color: #6b7280;
          margin-bottom: 24px;
        }

        .plan-price {
          margin-bottom: 24px;
        }

        .price-label {
          font-size: 14px;
          color: #6b7280;
          display: block;
        }

        .price {
          font-size: 48px;
          font-weight: 700;
        }

        .period {
          color: #6b7280;
        }

        .plan-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .plan-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #f3f4f6;
          color: #374151;
        }

        .plan-features li svg {
          color: #10b981;
        }

        .btn-plan {
          display: block;
          text-align: center;
          padding: 14px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          color: #374151;
          background: #f3f4f6;
          transition: background 0.2s;
        }

        .btn-plan:hover { background: #e5e7eb; }

        .btn-plan-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-plan-primary:hover { background: #2563eb; }

        .cta {
          padding: 100px 60px;
          text-align: center;
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          color: white;
        }

        .cta h2 {
          color: white;
          margin-bottom: 16px;
        }

        .cta p {
          opacity: 0.9;
          margin-bottom: 40px;
          font-size: 18px;
        }

        .btn-cta-large {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #1e40af;
          padding: 18px 40px;
          border-radius: 14px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .btn-cta-large:hover { transform: scale(1.05); }

        .footer {
          background: #0f172a;
          color: #94a3b8;
          padding: 60px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto 40px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: white;
        }

        .footer-brand span {
          font-size: 20px;
          font-weight: 700;
        }

        .footer-brand p {
          color: #64748b;
          max-width: 280px;
        }

        .footer-links h4 {
          color: white;
          margin-bottom: 16px;
        }

        .footer-links a {
          display: block;
          color: #64748b;
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: white; }

        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid #1e293b;
        }

        @media (max-width: 1024px) {
          .hero { flex-direction: column; padding: 140px 40px 60px; }
          .hero-content h1 { font-size: 40px; }
          .features-grid, .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card.popular { transform: none; }
          .footer-content { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .navbar { padding: 16px 24px; }
          .nav-links { display: none; }
          .hero { padding: 120px 24px 40px; }
          .hero-content h1 { font-size: 32px; }
          .hero-buttons { flex-direction: column; }
          .features, .pricing, .cta { padding: 60px 24px; }
          h2 { font-size: 28px; }
        }
      `}</style>
        </div>
    );
};

export default LandingPage;
