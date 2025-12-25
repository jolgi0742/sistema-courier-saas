# 🚀 Guía de Inicio Rápido - Desarrollo Local

## Problema Común: "Empresa no encontrada"

Si ves este error, es porque falta el tenant de prueba en la base de datos.

---

## Solución Rápida

### Paso 1: Verificar que MySQL esté corriendo

```powershell
# Verificar servicio MySQL
Get-Service -Name MySQL*
```

### Paso 2: Inicializar el tenant de prueba

```powershell
# Ir al directorio del proyecto
cd c:\Sistema-Courier-SaaS

# Ejecutar script de inicialización
mysql -u root -p sistema_courier_saas < database/init_demo_tenant.sql
```

Cuando te pida la contraseña, ingresa: `Siccosa$742`

### Paso 3: Iniciar el Backend

```powershell
# Terminal 1 - Backend
cd c:\Sistema-Courier-SaaS\backend
npm run dev
```

Deberías ver:
```
✓ Servidor corriendo en http://localhost:3001
✓ Base de datos conectada
```

### Paso 4: Iniciar el Frontend

```powershell
# Terminal 2 - Frontend
cd c:\Sistema-Courier-SaaS\frontend
npm run dev
```

Deberías ver:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

### Paso 5: Abrir el navegador

Abre: `http://localhost:5173`

**Credenciales:**
- Email: `admin@miempresa.com`
- Password: `Admin123!`

---

## Si Aún Ves "Empresa no encontrada"

### Opción 1: Verificar que el tenant existe

```sql
-- Conectar a MySQL
mysql -u root -p

-- Usar la base de datos
USE sistema_courier_saas;

-- Verificar tenant
SELECT * FROM tenants WHERE subdomain = 'demo';

-- Si no existe, ejecutar:
source c:/Sistema-Courier-SaaS/database/init_demo_tenant.sql
```

### Opción 2: Verificar variables de entorno

**Frontend (.env):**
```
VITE_API_URL=http://localhost:3001
```

**Backend (.env):**
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=Siccosa$742
DB_NAME=sistema_courier_saas
PORT=3001
```

### Opción 3: Limpiar caché y reiniciar

```powershell
# Frontend
cd c:\Sistema-Courier-SaaS\frontend
Remove-Item -Recurse -Force node_modules/.vite
npm run dev

# Backend
cd c:\Sistema-Courier-SaaS\backend
npm run dev
```

---

## Verificar que Todo Funciona

### 1. Backend
Abre: `http://localhost:3001/api/health`

Deberías ver:
```json
{
  "status": "ok",
  "database": "connected"
}
```

### 2. Tenant API
Abre: `http://localhost:3001/api/tenants/by-subdomain/demo`

Deberías ver los datos del tenant.

### 3. Frontend
Abre: `http://localhost:5173`

Deberías ver la página de login sin errores.

---

## Estructura de URLs para Desarrollo

### Localhost con tenant por defecto
```
http://localhost:5173
```
El sistema usa "demo" como tenant por defecto.

### Localhost con tenant específico
```
http://localhost:5173?tenant=demo
```

### Producción (Vercel)
```
https://frontend-jeczito-5818s-projects.vercel.app
```

---

## Comandos Útiles

### Reiniciar Base de Datos
```powershell
# Ejecutar todos los scripts en orden
cd c:\Sistema-Courier-SaaS\database
Get-ChildItem -Filter "*.sql" | Sort-Object Name | ForEach-Object {
    Write-Host "Ejecutando: $($_.Name)"
    mysql -u root -p sistema_courier_saas < $_.FullName
}
```

### Ver Logs del Backend
```powershell
cd c:\Sistema-Courier-SaaS\backend
npm run dev
```

### Ver Logs del Frontend
```powershell
cd c:\Sistema-Courier-SaaS\frontend
npm run dev
```

### Build para Producción
```powershell
# Frontend
cd c:\Sistema-Courier-SaaS\frontend
npm run build

# Backend
cd c:\Sistema-Courier-SaaS\backend
npm run build
```

---

## Troubleshooting

### Error: "Cannot connect to MySQL"
1. Verifica que MySQL esté corriendo
2. Verifica credenciales en `.env`
3. Verifica que la base de datos existe:
   ```sql
   SHOW DATABASES LIKE 'sistema_courier_saas';
   ```

### Error: "Port 3001 already in use"
```powershell
# Encontrar proceso usando el puerto
netstat -ano | findstr :3001

# Matar el proceso (reemplaza PID)
taskkill /PID <PID> /F
```

### Error: "Port 5173 already in use"
```powershell
# Encontrar proceso usando el puerto
netstat -ano | findstr :5173

# Matar el proceso (reemplaza PID)
taskkill /PID <PID> /F
```

### Error: "Module not found"
```powershell
# Reinstalar dependencias
cd c:\Sistema-Courier-SaaS\backend
Remove-Item -Recurse -Force node_modules
npm install

cd c:\Sistema-Courier-SaaS\frontend
Remove-Item -Recurse -Force node_modules
npm install
```

---

## ¡Listo!

Ahora deberías poder acceder al sistema sin problemas. Si aún tienes errores, revisa los logs en la consola del navegador (F12) y en las terminales del backend/frontend.
