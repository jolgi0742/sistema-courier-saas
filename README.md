# Sistema Courier SaaS

## Descripción
Plataforma SaaS multi-tenant para empresas de courier con soporte White Label.

## Estructura
```
saas/
├── frontend/          # React + Vite + TypeScript
├── backend/           # Node.js + Express + TypeScript
└── database/          # Migraciones SQL
```

## Planes
- **Starter** ($49/mes) - 10 usuarios, 500 paquetes
- **Pro** ($149/mes) - 50 usuarios, 5000 paquetes, branding
- **Enterprise** ($299+/mes) - Ilimitado + White Label + Dominio propio

## Setup
```bash
cd saas/frontend && npm install
cd saas/backend && npm install
```

## Desarrollo
```bash
# Frontend
cd saas/frontend && npm run dev

# Backend
cd saas/backend && npm run dev
```

## Tecnologías
- Frontend: React, Vite, TypeScript, TailwindCSS
- Backend: Node.js, Express, TypeScript
- Database: MySQL
- Auth: Firebase
- Billing: Stripe
- Email: SendGrid
