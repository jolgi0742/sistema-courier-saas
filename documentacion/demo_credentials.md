# 🎯 Credenciales Demo - Sistema Courier SaaS

**Versión:** 1.0.0  
**Propósito:** Demostraciones a clientes potenciales  
**Última Actualización:** Diciembre 2025

---

## 🌐 Información de Acceso

### URL del Sistema
```
Producción: https://demo.tu-dominio.com
Desarrollo: http://localhost:5173?tenant=demo
```

### Tenant Demo
```
Tenant ID: demo
Nombre: Courier Express Demo
Plan: Enterprise (todas las funcionalidades)
```

---

## 👥 CREDENCIALES POR ROL

### 1. 👑 ADMINISTRADOR

```
Email: admin@demo.com
Password: Demo123!
Rol: Administrador
```

**Acceso a:**
- ✅ Dashboard completo con métricas
- ✅ Gestión de paquetes (CRUD completo)
- ✅ Gestión de clientes
- ✅ Gestión de couriers
- ✅ Configuración de tarifas
- ✅ Gestión de almacén
- ✅ Reportes y analytics
- ✅ Configuración del sistema
- ✅ Gestión de usuarios
- ✅ Incidencias
- ✅ Facturación

**Casos de Uso para Demo:**
- Mostrar dashboard con métricas en tiempo real
- Crear nuevo paquete y generar etiqueta
- Asignar courier a paquete
- Generar reporte financiero
- Configurar nueva tarifa

---

### 2. 🔧 AGENTE

```
Email: agent@demo.com
Password: Demo123!
Rol: Agente
```

**Acceso a:**
- ✅ Dashboard de agente
- ✅ Mis clientes
- ✅ Cotizaciones
- ✅ Prealertas
- ✅ Paquetes de mis clientes
- ✅ Mis comisiones
- ✅ CRM básico
- ✅ Reportes de ventas

**Casos de Uso para Demo:**
- Registrar nuevo cliente
- Generar cotización para cliente
- Registrar prealerta
- Ver comisiones del mes
- Dar seguimiento a cliente

---

### 3. 👤 CLIENTE

```
Email: client@demo.com
Password: Demo123!
Rol: Cliente
```

**Información del Cliente:**
- Nombre: Juan Cliente
- Casillero: #CR-001
- Dirección Miami: 1234 NW 72nd Ave, Miami, FL 33126
- Teléfono: +506-8888-1111

**Acceso a:**
- ✅ Dashboard personal
- ✅ Mis paquetes
- ✅ Tracking de envíos
- ✅ Prealertas
- ✅ Cotizador
- ✅ Facturación
- ✅ Mi perfil

**Casos de Uso para Demo:**
- Ver paquetes en tránsito
- Rastrear paquete por tracking
- Registrar prealerta de compra
- Solicitar cotización
- Ver facturas y pagos

---

### 4. 🚚 COURIER

```
Email: courier@demo.com
Password: Demo123!
Rol: Courier
```

**Información del Courier:**
- Nombre: Pedro Courier
- Vehículo: Motocicleta
- Placa: ABC-123
- Licencia: LIC-001

**Acceso a:**
- ✅ Dashboard de courier
- ✅ Mis entregas
- ✅ Ruta del día
- ✅ Captura de firmas
- ✅ Reportar incidencias
- ✅ Mis ganancias
- ✅ Gestión de vehículo

**Casos de Uso para Demo:**
- Ver entregas asignadas
- Iniciar ruta del día
- Simular entrega con firma
- Reportar incidencia
- Ver ganancias del mes

---

## 📊 DATOS DE EJEMPLO

### Clientes Registrados (3)

1. **Juan Cliente**
   - Email: client@demo.com
   - Casillero: #CR-001
   - Paquetes activos: 2

2. **Ana Empresaria**
   - Email: ana@empresa.com
   - Casillero: #CR-002
   - Paquetes activos: 1

3. **Roberto Comerciante**
   - Email: roberto@comercio.com
   - Casillero: #CR-003
   - Paquetes activos: 1

### Couriers Activos (3)

1. **Pedro Courier** (Demo User)
   - Vehículo: Motocicleta
   - Estado: Disponible
   - Entregas hoy: 3

2. **Luis Repartidor**
   - Vehículo: Van
   - Estado: Disponible
   - Entregas hoy: 5

3. **Sofia Delivery**
   - Vehículo: Auto
   - Estado: Ocupado
   - Entregas hoy: 4

### Paquetes de Ejemplo (4)

1. **TRK-2025-001**
   - Cliente: Juan Cliente
   - Estado: En Tránsito
   - Origen: Miami, USA
   - Destino: San José, CR
   - Peso: 2.5 kg
   - Valor: $150.00

2. **TRK-2025-002**
   - Cliente: Ana Empresaria
   - Estado: Entregado
   - Courier: Luis Repartidor

3. **TRK-2025-003**
   - Cliente: Roberto Comerciante
   - Estado: Pendiente
   - Peso: 5.0 kg

4. **TRK-2025-004**
   - Cliente: Juan Cliente
   - Estado: En Almacén
   - Ubicación: A1-02

### Tarifas Configuradas (3)

1. **Express Miami - San José**
   - Base: $15.00
   - Por kg: $8.00
   - Días: 3-5

2. **Standard Miami - Costa Rica**
   - Base: $10.00
   - Por kg: $5.00
   - Días: 7-10

3. **Economy Miami - Costa Rica**
   - Base: $7.00
   - Por kg: $3.00
   - Días: 14-21

---

## 🎬 GUIÓN DE DEMOSTRACIÓN

### Demo Rápida (15 minutos)

#### 1. Vista General (3 min)
- Login como Admin
- Mostrar dashboard con métricas
- Explicar arquitectura multi-tenant

#### 2. Operaciones Core (5 min)
- Crear nuevo paquete
- Generar etiqueta con QR
- Asignar a courier
- Mostrar tracking en tiempo real

#### 3. Gestión de Clientes (3 min)
- Registrar nuevo cliente
- Generar cotización
- Mostrar casillero de Miami

#### 4. Reportes (2 min)
- Generar reporte financiero
- Exportar a Excel
- Mostrar analytics

#### 5. Multi-tenant SaaS (2 min)
- Mostrar configuración de tenant
- White Label capabilities
- Planes de suscripción

### Demo Completa (45 minutos)

#### Parte 1: Admin (15 min)
- Dashboard completo
- Gestión de paquetes
- Gestión de almacén
- Tarifas y configuración
- Reportes avanzados

#### Parte 2: Operaciones (15 min)
- Flujo completo de un envío
- Prealertas
- Warehouse management
- Asignación de couriers
- Tracking en tiempo real

#### Parte 3: Roles Especializados (10 min)
- Portal de Agente (ventas)
- Portal de Cliente (self-service)
- Portal de Courier (entregas)

#### Parte 4: SaaS Features (5 min)
- Multi-tenant
- White Label
- Billing con Stripe
- Integraciones (SINPE, PayPal)

---

## 💡 PUNTOS CLAVE PARA DESTACAR

### Ventajas Competitivas

1. **Tecnología Moderna**
   - React 18 + TypeScript
   - UI/UX premium
   - Performance superior

2. **Multi-tenant Nativo**
   - Arquitectura SaaS desde el diseño
   - Aislamiento completo de datos
   - Escalabilidad ilimitada

3. **White Label Completo**
   - Dominios personalizados
   - Branding personalizado
   - Email templates customizados

4. **Funcionalidades Completas**
   - 25 módulos operativos
   - 150+ endpoints API
   - Todas las funcionalidades de courier profesional

5. **Integraciones de Pago**
   - Stripe (tarjetas)
   - SINPE Móvil (Costa Rica)
   - PayPal (internacional)

6. **Tracking en Tiempo Real**
   - WebSocket implementation
   - Notificaciones push
   - GPS tracking

---

## 📋 CHECKLIST PRE-DEMO

### Antes de la Demostración

- [ ] Verificar que el sistema esté online
- [ ] Probar login con todas las credenciales
- [ ] Verificar que los datos demo estén cargados
- [ ] Preparar tracking numbers de ejemplo
- [ ] Tener navegador con pestañas abiertas por rol
- [ ] Preparar presentación de slides (opcional)

### Durante la Demostración

- [ ] Comenzar con vista general
- [ ] Mostrar funcionalidades según interés del cliente
- [ ] Permitir que el cliente interactúe
- [ ] Responder preguntas en tiempo real
- [ ] Tomar notas de requerimientos específicos

### Después de la Demostración

- [ ] Enviar credenciales demo al cliente
- [ ] Compartir manuales de usuario
- [ ] Programar seguimiento
- [ ] Preparar propuesta comercial

---

## 🔄 RESETEAR DATOS DEMO

Si necesitas resetear los datos demo:

```sql
-- Ejecutar script de limpieza
DELETE FROM packages WHERE tenant_id = 'demo-tenant-001';
DELETE FROM clients WHERE tenant_id = 'demo-tenant-001';
DELETE FROM couriers WHERE tenant_id = 'demo-tenant-001';

-- Volver a ejecutar
source database/demo_data.sql
```

---

## 📞 SOPORTE DURANTE DEMOS

**Contacto de Emergencia:**
- WhatsApp: +506-8888-8888
- Email: soporte@sistemacourier.com

---

## 📄 DOCUMENTACIÓN ADICIONAL

### Manuales de Usuario
- [Manual de Administrador](manual_admin.md)
- [Manual de Agente](manual_agent.md)
- [Manual de Cliente](manual_client.md)
- [Manual de Courier](manual_courier.md)

### Documentación Técnica
- [Guía de Deployment en Render](render_deployment_guide.md)
- [Reporte de Migración](migration_report.md)
- [Verificación de Estructura](structure_verification.md)

---

**¡Éxito en tus demostraciones! 🚀**
