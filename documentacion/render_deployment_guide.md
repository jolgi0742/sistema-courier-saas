# 🚀 Guía de Deployment en Render - Sistema Courier SaaS

**Fecha:** 25 de diciembre de 2025  
**Sistema:** Sistema Courier SaaS Multi-tenant  
**Repositorio:** https://github.com/jolgi0742/sistema-courier-saas.git

---

## ✅ Estado Pre-Deployment

### Verificación Completada

- ✅ Código sincronizado con GitHub
- ✅ Último commit: `cb039881 - Add Render domain to CORS allowedOrigins`
- ✅ Archivo `render.yaml` configurado
- ✅ Health check endpoint: `/health`
- ✅ CORS configurado para `.onrender.com`
- ✅ 25 rutas API implementadas
- ✅ 24 servicios backend operativos
- ✅ 100% de funcionalidades migradas

---

## 📋 PASO 1: Crear Cuenta en Render

### 1.1 Registrarse en Render

1. Ve a [https://render.com](https://render.com)
2. Click en **"Get Started"** o **"Sign Up"**
3. Opciones de registro:
   - **GitHub** (Recomendado - más fácil para conectar repos)
   - **GitLab**
   - **Email**

### 1.2 Conectar con GitHub

1. Si elegiste GitHub, autoriza a Render
2. Selecciona los repositorios que Render puede acceder
3. Busca y selecciona: `jolgi0742/sistema-courier-saas`

---

## 📋 PASO 2: Crear Base de Datos MySQL

> [!IMPORTANT]
> **Debes crear la base de datos ANTES del servicio web** para tener las credenciales listas.

### 2.1 Crear MySQL Database

1. En el Dashboard de Render, click en **"New +"**
2. Selecciona **"MySQL"**
3. Configuración:
   - **Name:** `sistema-courier-db`
   - **Database:** `sistema_courier_saas`
   - **User:** `courier_user` (o el que prefieras)
   - **Region:** `Oregon` (mismo que el servicio web)
   - **Plan:** Selecciona el plan (Free tier si está disponible, o el más económico)

4. Click en **"Create Database"**

### 2.2 Obtener Credenciales

Una vez creada la base de datos:

1. Ve a la página de la base de datos
2. En la sección **"Connections"**, encontrarás:
   - **Internal Database URL** (para usar desde Render)
   - **External Database URL** (para acceso externo)
   - **Host**
   - **Port**
   - **Database**
   - **Username**
   - **Password**

3. **Copia estas credenciales** - las necesitarás en el Paso 4

### 2.3 Ejecutar Migraciones (Opcional - Después del Deployment)

Puedes ejecutar las migraciones de dos formas:

**Opción A: Desde tu PC (usando External URL)**
```bash
# Conectar a la base de datos
mysql -h <EXTERNAL_HOST> -P <PORT> -u <USERNAME> -p

# Ejecutar scripts
source c:/Sistema-Courier-SaaS/database/01_create_tables.sql
source c:/Sistema-Courier-SaaS/database/02_seed_data.sql
```

**Opción B: Desde Render Shell (después del deployment)**
```bash
# En el dashboard del servicio web, ir a "Shell"
npm run db:migrate
```

---

## 📋 PASO 3: Crear Web Service

### 3.1 Nuevo Servicio

1. En el Dashboard de Render, click en **"New +"**
2. Selecciona **"Web Service"**
3. Conecta tu repositorio:
   - Busca: `jolgi0742/sistema-courier-saas`
   - Click en **"Connect"**

### 3.2 Configuración del Servicio

**Información Básica:**
- **Name:** `sistema-courier-api`
- **Region:** `Oregon`
- **Branch:** `master`
- **Root Directory:** `backend` (⚠️ IMPORTANTE)
- **Runtime:** `Node`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

**Configuración Avanzada:**
- **Plan:** `Free` (o el que prefieras)
- **Auto-Deploy:** `Yes` (para deployar automáticamente con cada push)

### 3.3 Health Check

- **Health Check Path:** `/health`
- Render verificará este endpoint para confirmar que el servicio está funcionando

---

## 📋 PASO 4: Configurar Variables de Entorno

> [!WARNING]
> **Este es el paso más importante.** Sin las variables de entorno correctas, el servicio no funcionará.

### 4.1 Acceder a Environment Variables

1. En la configuración del servicio, busca **"Environment"**
2. Click en **"Add Environment Variable"**

### 4.2 Variables Requeridas

#### **Base de Datos (MySQL)**

Usa las credenciales del Paso 2:

```
DB_HOST=<internal-host-from-render>
DB_PORT=3306
DB_USER=<username-from-render>
DB_PASSWORD=<password-from-render>
DB_NAME=sistema_courier_saas
```

> [!TIP]
> Usa el **Internal Database URL** para mejor performance (conexión interna de Render).

#### **Node.js**

```
NODE_ENV=production
PORT=10000
```

#### **Frontend URL**

```
FRONTEND_URL=https://tu-frontend-url.vercel.app
```

> [!NOTE]
> Si aún no has deployado el frontend, puedes dejarlo vacío por ahora y agregarlo después.

#### **Firebase**

```
FIREBASE_PROJECT_ID=<tu-project-id>
FIREBASE_CLIENT_EMAIL=<service-account-email>
GOOGLE_APPLICATION_CREDENTIALS=<ruta-o-json-completo>
```

> [!IMPORTANT]
> Para `GOOGLE_APPLICATION_CREDENTIALS`, tienes dos opciones:
> 1. Pegar el JSON completo como string
> 2. Usar Render's Secret Files (recomendado)

**Para usar Secret Files:**
1. En Environment, busca **"Secret Files"**
2. Click en **"Add Secret File"**
3. Filename: `firebase-credentials.json`
4. Contents: Pega el contenido completo del archivo JSON de Firebase
5. En la variable `GOOGLE_APPLICATION_CREDENTIALS`, pon: `/etc/secrets/firebase-credentials.json`

#### **SendGrid**

```
SENDGRID_API_KEY=<tu-api-key>
SENDGRID_FROM_EMAIL=<email-verificado>
```

> [!TIP]
> Obtén tu API Key en: https://app.sendgrid.com/settings/api_keys

#### **SINPE Móvil (Costa Rica)**

```
SINPE_PHONE_NUMBER=<numero-telefono>
SINPE_BANK_NAME=<nombre-banco>
SINPE_HOLDER_NAME=<nombre-titular>
```

#### **Stripe (Opcional - para billing)**

```
STRIPE_SECRET_KEY=<tu-secret-key>
STRIPE_WEBHOOK_SECRET=<tu-webhook-secret>
```

### 4.3 Guardar Configuración

1. Después de agregar todas las variables, click en **"Save Changes"**
2. Render reiniciará el servicio automáticamente

---

## 📋 PASO 5: Iniciar Deployment

### 5.1 Deploy Manual

1. En la página del servicio, click en **"Manual Deploy"**
2. Selecciona **"Deploy latest commit"**
3. Click en **"Deploy"**

### 5.2 Monitorear el Deployment

1. Ve a la pestaña **"Logs"**
2. Observa el proceso:
   ```
   ==> Building...
   ==> Installing dependencies...
   ==> Running build command...
   ==> Starting service...
   ==> Service is live!
   ```

3. Busca mensajes de error si algo falla

### 5.3 Tiempos Esperados

- **Build:** 2-5 minutos
- **Start:** 30-60 segundos
- **Total:** ~3-6 minutos

---

## 📋 PASO 6: Verificación Post-Deployment

### 6.1 Verificar Health Check

Una vez que el servicio esté **"Live"**, verifica el health check:

```bash
curl https://sistema-courier-api.onrender.com/health
```

**Respuesta esperada:**
```json
{
  "status": "ok",
  "service": "Sistema Courier SaaS API",
  "timestamp": "2025-12-25T19:18:45.000Z"
}
```

### 6.2 Verificar Endpoints de API

**Probar endpoint de tenants:**
```bash
curl https://sistema-courier-api.onrender.com/api/tenants/by-subdomain/demo
```

**Probar endpoint de paquetes:**
```bash
curl https://sistema-courier-api.onrender.com/api/packages
```

> [!NOTE]
> Algunos endpoints requieren autenticación, así que es normal recibir errores 401 en esos casos.

### 6.3 Verificar Logs

1. En el Dashboard de Render, ve a **"Logs"**
2. Busca el mensaje de inicio:
   ```
   ╔════════════════════════════════════════════╗
   ║     Sistema Courier SaaS - Backend API     ║
   ╠════════════════════════════════════════════╣
   ║  🚀 Servidor corriendo en puerto 10000     ║
   ║  📍 http://localhost:10000                 ║
   ║  🔧 Entorno: production                    ║
   ╚════════════════════════════════════════════╝
   ```

3. Verifica que no haya errores de conexión a la base de datos

---

## 📋 PASO 7: Configurar Dominio Personalizado (Opcional)

### 7.1 Agregar Dominio

1. En la configuración del servicio, ve a **"Settings"**
2. Busca **"Custom Domain"**
3. Click en **"Add Custom Domain"**
4. Ingresa tu dominio: `api.tudominio.com`

### 7.2 Configurar DNS

1. En tu proveedor de DNS (GoDaddy, Namecheap, etc.)
2. Agrega un registro CNAME:
   ```
   Type: CNAME
   Name: api
   Value: sistema-courier-api.onrender.com
   ```

3. Espera la propagación DNS (puede tomar hasta 24 horas)

### 7.3 SSL Automático

Render configurará automáticamente SSL/HTTPS con Let's Encrypt.

---

## 📋 PASO 8: Conectar Frontend

### 8.1 Actualizar Frontend

En tu proyecto frontend (Vercel, Netlify, etc.), actualiza la variable de entorno:

```
VITE_API_URL=https://sistema-courier-api.onrender.com
```

### 8.2 Actualizar CORS en Backend

Si usas un dominio diferente para el frontend, asegúrate de agregarlo a la lista de CORS en `backend/src/app.ts`.

---

## 🔧 Troubleshooting

### Problema: Build Failed

**Solución:**
1. Verifica que el **Root Directory** sea `backend`
2. Verifica que el **Build Command** sea correcto
3. Revisa los logs para ver el error específico

### Problema: Service Won't Start

**Solución:**
1. Verifica las variables de entorno
2. Verifica la conexión a la base de datos
3. Revisa los logs para errores de inicio

### Problema: Database Connection Error

**Solución:**
1. Verifica que uses el **Internal Database URL**
2. Verifica las credenciales (usuario, password, database name)
3. Verifica que la base de datos esté en la misma región

### Problema: Health Check Failing

**Solución:**
1. Verifica que el endpoint `/health` esté implementado
2. Verifica que el servicio esté escuchando en el puerto correcto (10000)
3. Verifica los logs para errores

---

## 📊 Monitoreo Continuo

### Métricas de Render

Render proporciona métricas automáticas:
- **CPU Usage**
- **Memory Usage**
- **Request Count**
- **Response Time**

### Logs

- Accede a los logs en tiempo real desde el Dashboard
- Los logs se mantienen por 7 días en el plan Free

### Alertas

Configura alertas para:
- Service Down
- High Error Rate
- High Response Time

---

## 🎉 ¡Deployment Completado!

### URLs del Sistema

**Backend API:**
```
https://sistema-courier-api.onrender.com
```

**Health Check:**
```
https://sistema-courier-api.onrender.com/health
```

**API Endpoints:**
```
https://sistema-courier-api.onrender.com/api/*
```

### Próximos Pasos

1. ✅ Deployar el frontend en Vercel/Netlify
2. ✅ Configurar dominio personalizado
3. ✅ Configurar webhooks de Stripe
4. ✅ Configurar backups de base de datos
5. ✅ Configurar monitoreo y alertas
6. ✅ Realizar pruebas de integración completas

---

## 📝 Notas Importantes

> [!WARNING]
> **Plan Free de Render:**
> - El servicio se "duerme" después de 15 minutos de inactividad
> - El primer request después de dormir puede tomar 30-60 segundos
> - Considera upgradar a un plan pagado para producción

> [!TIP]
> **Para mantener el servicio activo:**
> - Usa un servicio de "ping" como UptimeRobot
> - Configura un cron job que haga requests cada 10 minutos
> - O upgrada a un plan pagado

> [!IMPORTANT]
> **Seguridad:**
> - Nunca compartas tus variables de entorno
> - Usa Secret Files para credenciales sensibles
> - Rota las API keys regularmente
> - Habilita 2FA en tu cuenta de Render

---

## 🆘 Soporte

**Documentación de Render:**
- https://render.com/docs

**Comunidad:**
- https://community.render.com

**Status de Render:**
- https://status.render.com

---

**¡Tu Sistema Courier SaaS está ahora en producción! 🎉**
