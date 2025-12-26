# 📘 Manual de Usuario - Administrador

**Sistema Courier SaaS**  
**Versión:** 1.0.0  
**Rol:** Administrador

---

## 🎯 Descripción del Rol

Como **Administrador**, tienes acceso completo al sistema y eres responsable de:

- Gestionar todos los aspectos operativos de la empresa
- Configurar tarifas, servicios y políticas
- Supervisar el rendimiento de couriers y agentes
- Generar reportes y analytics
- Administrar usuarios y permisos
- Configurar integraciones y pagos

---

## 🔐 Acceso al Sistema

### Credenciales Demo
```
Email: admin@demo.com
Password: Demo123!
Tenant: demo
```

### URL de Acceso
```
https://demo.tu-dominio.com
```

---

## 📊 Dashboard Principal

### Vista General

Al iniciar sesión, verás el **Dashboard Administrativo** con:

#### Métricas Clave
- **Total de Paquetes:** Paquetes activos en el sistema
- **Paquetes en Tránsito:** Envíos en camino
- **Entregas Hoy:** Paquetes programados para hoy
- **Ingresos del Mes:** Facturación mensual

#### Gráficos
- **Paquetes por Estado:** Distribución de estados
- **Ingresos Mensuales:** Tendencia de facturación
- **Performance de Couriers:** Ranking de entregas

#### Acciones Rápidas
- Crear nuevo paquete
- Registrar cliente
- Asignar courier
- Generar reporte

---

## 📦 Gestión de Paquetes

### Ver Todos los Paquetes

**Navegación:** Sidebar → Paquetes

#### Funcionalidades:
- ✅ Lista completa de paquetes
- ✅ Filtros por estado, fecha, cliente
- ✅ Búsqueda por tracking number
- ✅ Exportar a Excel/PDF

#### Estados de Paquetes:
- 🟡 **Pending:** Pendiente de procesamiento
- 🔵 **Warehouse:** En almacén
- 🟢 **In Transit:** En tránsito
- 🟣 **Out for Delivery:** En ruta de entrega
- ✅ **Delivered:** Entregado
- ❌ **Cancelled:** Cancelado

### Crear Nuevo Paquete

**Pasos:**

1. Click en **"Nuevo Paquete"**
2. Completar información del remitente:
   - Nombre
   - Dirección de origen
   - Teléfono
3. Completar información del destinatario:
   - Seleccionar cliente existente o crear nuevo
   - Dirección de destino
   - Teléfono de contacto
4. Detalles del paquete:
   - Peso (kg)
   - Dimensiones (cm)
   - Valor declarado
   - Tipo de servicio (Express/Standard/Economy)
5. Click en **"Crear Paquete"**

**Resultado:** Se genera automáticamente:
- Tracking number único
- Etiqueta con código QR
- Estimación de entrega
- Cálculo de tarifa

### Editar Paquete

1. En la lista de paquetes, click en el paquete
2. Click en **"Editar"**
3. Modificar información necesaria
4. Click en **"Guardar Cambios"**

### Asignar Courier

1. Seleccionar paquete
2. Click en **"Asignar Courier"**
3. Seleccionar courier disponible
4. Confirmar asignación

**El courier recibirá notificación automática**

### Generar Etiqueta

1. Seleccionar paquete
2. Click en **"Generar Etiqueta"**
3. La etiqueta incluye:
   - Tracking number
   - Código QR
   - Información de origen/destino
   - Código de barras
4. Imprimir o descargar PDF

---

## 👥 Gestión de Clientes

### Ver Clientes

**Navegación:** Sidebar → Clientes

#### Información Mostrada:
- Nombre completo
- Email y teléfono
- Número de casillero
- Paquetes activos
- Balance de cuenta
- Estado (Activo/Inactivo)

### Registrar Nuevo Cliente

**Pasos:**

1. Click en **"Nuevo Cliente"**
2. Información personal:
   - Nombre completo
   - Email
   - Teléfono
   - Identificación
3. Dirección:
   - Dirección completa
   - Ciudad
   - País
4. Configuración de cuenta:
   - Asignar número de casillero
   - Límite de crédito (opcional)
   - Preferencias de envío
5. Click en **"Registrar Cliente"**

**Resultado:** 
- Se crea cuenta de cliente
- Se envía email de bienvenida
- Se asigna casillero en Miami

### Editar Cliente

1. Buscar cliente en la lista
2. Click en el cliente
3. Click en **"Editar"**
4. Modificar información
5. **"Guardar Cambios"**

### Ver Historial de Cliente

1. Seleccionar cliente
2. Click en **"Ver Historial"**

**Información disponible:**
- Todos los paquetes (histórico)
- Pagos realizados
- Facturas generadas
- Incidencias reportadas

---

## 🚚 Gestión de Couriers

### Ver Couriers

**Navegación:** Sidebar → Couriers

#### Estados:
- 🟢 **Available:** Disponible para asignaciones
- 🟡 **Busy:** Ocupado en entregas
- 🔴 **Offline:** No disponible

### Registrar Nuevo Courier

**Pasos:**

1. Click en **"Nuevo Courier"**
2. Información personal:
   - Nombre completo
   - Email
   - Teléfono
   - Licencia de conducir
3. Información del vehículo:
   - Tipo (Moto/Auto/Van)
   - Placa
   - Capacidad
4. Documentos:
   - Licencia de conducir
   - SOAT/Seguro
   - Revisión técnica
5. Click en **"Registrar Courier"**

### Asignar Paquetes a Courier

**Opción 1: Asignación Individual**
1. Ir a Paquetes
2. Seleccionar paquete
3. Asignar courier

**Opción 2: Asignación en Lote**
1. Ir a Couriers
2. Seleccionar courier
3. Click en **"Asignar Paquetes"**
4. Seleccionar múltiples paquetes
5. Confirmar asignación

### Ver Performance de Courier

1. Seleccionar courier
2. Click en **"Ver Performance"**

**Métricas mostradas:**
- Total de entregas
- Entregas a tiempo
- Calificación promedio
- Ingresos generados
- Gráfico de tendencias

---

## 💰 Gestión de Tarifas

### Ver Tarifas

**Navegación:** Sidebar → Tarifas

#### Tipos de Tarifas:
- **Express:** 3-5 días
- **Standard:** 7-10 días
- **Economy:** 14-21 días

### Crear Nueva Tarifa

**Pasos:**

1. Click en **"Nueva Tarifa"**
2. Información básica:
   - Nombre de la tarifa
   - Origen
   - Destino
3. Configuración de precios:
   - Tarifa base
   - Precio por kg adicional
   - Servicios adicionales
4. Configuración de servicio:
   - Tipo (Express/Standard/Economy)
   - Días estimados de entrega
5. Click en **"Crear Tarifa"**

### Editar Tarifa

1. Seleccionar tarifa
2. Click en **"Editar"**
3. Modificar precios o configuración
4. **"Guardar Cambios"**

**⚠️ Nota:** Los cambios solo afectan nuevos envíos

---

## 🏭 Gestión de Almacén

### Ver Ubicaciones

**Navegación:** Sidebar → Almacén

#### Organización:
- **Zonas:** Áreas principales (A, B, C)
- **Pasillos:** Subdivisiones de zonas
- **Estantes:** Ubicaciones específicas

### Crear Ubicación

1. Click en **"Nueva Ubicación"**
2. Configurar:
   - Código (ej: A1-01)
   - Zona
   - Pasillo
   - Estante
   - Capacidad
3. **"Crear Ubicación"**

### Asignar Paquete a Ubicación

1. Seleccionar paquete en almacén
2. Click en **"Asignar Ubicación"**
3. Seleccionar ubicación disponible
4. Confirmar

**El sistema registra:**
- Fecha de entrada
- Ubicación asignada
- Responsable

### Buscar Paquete en Almacén

1. Ir a Almacén
2. Usar buscador
3. Ingresar tracking number
4. Ver ubicación exacta

---

## 📊 Reportes y Analytics

### Tipos de Reportes

**Navegación:** Sidebar → Reportes

#### 1. Reporte de Paquetes
- Paquetes por período
- Estados de paquetes
- Tiempos de entrega
- **Exportar:** PDF, Excel, CSV

#### 2. Reporte Financiero
- Ingresos por período
- Ingresos por servicio
- Ingresos por courier
- Gastos operativos
- **Exportar:** PDF, Excel

#### 3. Reporte de Clientes
- Clientes activos
- Clientes por volumen
- Clientes nuevos
- Retención de clientes

#### 4. Reporte de Performance
- Performance de couriers
- Tiempos de entrega
- Calificaciones
- Incidencias

### Generar Reporte

**Pasos:**

1. Seleccionar tipo de reporte
2. Configurar filtros:
   - Rango de fechas
   - Cliente/Courier específico
   - Tipo de servicio
3. Click en **"Generar Reporte"**
4. Ver reporte en pantalla
5. **Exportar** en formato deseado

---

## ⚙️ Configuración del Sistema

### Configuración General

**Navegación:** Sidebar → Configuración

#### Información de la Empresa
- Nombre de la empresa
- Logo
- Colores corporativos
- Información de contacto

#### Configuración de Notificaciones
- Email de notificaciones
- Plantillas de email
- Notificaciones SMS
- Webhooks

#### Integraciones
- **Stripe:** Pagos con tarjeta
- **SINPE Móvil:** Pagos locales (CR)
- **PayPal:** Pagos internacionales
- **SendGrid:** Envío de emails

### Gestión de Usuarios

1. Ir a **Configuración → Usuarios**
2. Ver lista de usuarios del sistema

#### Crear Usuario

1. Click en **"Nuevo Usuario"**
2. Información:
   - Nombre completo
   - Email
   - Rol (Admin/Agent/Client/Courier)
   - Permisos específicos
3. **"Crear Usuario"**

**El usuario recibirá email con credenciales**

#### Roles y Permisos

- **Admin:** Acceso completo
- **Agent:** Operaciones y ventas
- **Client:** Solo sus paquetes
- **Courier:** Solo sus entregas

---

## 🚨 Gestión de Incidencias

### Ver Incidencias

**Navegación:** Sidebar → Incidencias

#### Tipos de Incidencias:
- 📦 **Daño:** Paquete dañado
- ⏰ **Retraso:** Entrega retrasada
- ❌ **Pérdida:** Paquete extraviado
- 👤 **Cliente Ausente:** No se encontró al destinatario

### Crear Incidencia

1. Click en **"Nueva Incidencia"**
2. Seleccionar paquete afectado
3. Tipo de incidencia
4. Descripción detallada
5. Evidencia (fotos, documentos)
6. Asignar responsable
7. **"Crear Incidencia"**

### Resolver Incidencia

1. Seleccionar incidencia
2. Click en **"Resolver"**
3. Ingresar solución aplicada
4. Adjuntar evidencia de resolución
5. **"Marcar como Resuelta"**

**El cliente recibe notificación automática**

---

## 📱 Funcionalidades Móviles

### App Móvil (Próximamente)

El sistema está preparado para:
- Scanner de códigos QR
- Captura de firmas digitales
- Fotos de evidencia
- GPS tracking en tiempo real

---

## 💡 Casos de Uso Comunes

### Caso 1: Procesar Nuevo Envío

1. Cliente solicita envío
2. Crear nuevo paquete en el sistema
3. Generar cotización automática
4. Cliente aprueba y paga
5. Generar etiqueta
6. Asignar a ubicación en almacén
7. Cuando llegue el courier, asignar paquete
8. Courier entrega y captura firma
9. Sistema marca como entregado

### Caso 2: Cliente Reporta Problema

1. Cliente contacta por paquete retrasado
2. Buscar paquete por tracking
3. Verificar estado actual
4. Crear incidencia si es necesario
5. Contactar al courier asignado
6. Actualizar cliente con información
7. Resolver incidencia
8. Notificar al cliente

### Caso 3: Fin de Mes - Reportes

1. Ir a Reportes
2. Seleccionar "Reporte Financiero"
3. Configurar: Mes anterior
4. Generar reporte
5. Revisar ingresos y gastos
6. Exportar a Excel
7. Compartir con contabilidad

---

## ❓ Preguntas Frecuentes

### ¿Cómo cambio la tarifa de un servicio?

1. Ir a Tarifas
2. Editar la tarifa existente
3. Los cambios solo afectan nuevos envíos

### ¿Puedo eliminar un paquete?

No se recomienda eliminar. Mejor usar estado "Cancelado" para mantener el historial.

### ¿Cómo agrego un nuevo courier?

Ir a Couriers → Nuevo Courier → Completar formulario → Registrar

### ¿Cómo genero un reporte personalizado?

Ir a Reportes → Seleccionar tipo → Configurar filtros → Generar

### ¿Qué hago si un paquete se pierde?

1. Crear incidencia tipo "Pérdida"
2. Investigar última ubicación conocida
3. Contactar courier y almacén
4. Informar al cliente
5. Procesar según póliza de seguros

---

## 📞 Soporte

**Email:** soporte@sistemacourier.com  
**Teléfono:** +506-8888-8888  
**Horario:** Lunes a Viernes, 8:00 AM - 6:00 PM

---

## 🔄 Actualizaciones

**Versión 1.0.0** - Diciembre 2025
- Lanzamiento inicial del sistema
- Todas las funcionalidades core implementadas
- Integración con Stripe, SINPE, PayPal
- Sistema multi-tenant completo

---

**¡Bienvenido al Sistema Courier SaaS! 🚀**
