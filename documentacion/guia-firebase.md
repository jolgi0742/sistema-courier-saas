# 🔑 Guía: Obtener Credenciales de Firebase

**Tiempo estimado:** 15-20 minutos

---

## Paso 1: Crear Proyecto en Firebase

### 1.1 Acceder a Firebase Console

1. Ve a: [https://console.firebase.google.com](https://console.firebase.google.com)
2. Inicia sesión con tu cuenta de Google
3. Click en **"Agregar proyecto"** o **"Add project"**

### 1.2 Configurar Proyecto

1. **Nombre del proyecto:**
   ```
   Sistema Courier SaaS
   ```
   (o el nombre que prefieras)

2. **Google Analytics:**
   - Puedes habilitarlo o deshabilitarlo
   - Recomendado: Habilitar para métricas

3. Click en **"Crear proyecto"**
4. Espera a que se cree (1-2 minutos)
5. Click en **"Continuar"**

---

## Paso 2: Habilitar Authentication

### 2.1 Configurar Authentication

1. En el menú lateral, click en **"Authentication"**
2. Click en **"Comenzar"** o **"Get started"**
3. En la pestaña **"Sign-in method"**:
   - Click en **"Email/Password"**
   - Habilitar **"Email/Password"**
   - Click en **"Guardar"**

### 2.2 (Opcional) Configurar Dominios Autorizados

1. En Authentication, ir a **"Settings"** → **"Authorized domains"**
2. Agregar tus dominios:
   ```
   localhost
   sistema-courier.vercel.app
   tu-dominio-personalizado.com
   ```

---

## Paso 3: Obtener Credenciales

### 3.1 Project ID

1. En la página principal del proyecto
2. Click en el ícono de **configuración** ⚙️ (arriba izquierda)
3. Click en **"Configuración del proyecto"**
4. En la pestaña **"General"**:
   - Copia el **"ID del proyecto"**
   - Ejemplo: `sistema-courier-saas-12345`

**Guardar como:** `FIREBASE_PROJECT_ID`

### 3.2 Service Account (Credenciales JSON)

1. En **"Configuración del proyecto"**
2. Ve a la pestaña **"Cuentas de servicio"**
3. Click en **"Generar nueva clave privada"**
4. Confirma en el diálogo
5. Se descargará un archivo JSON

**Ejemplo del archivo descargado:**
```
sistema-courier-saas-12345-firebase-adminsdk-xxxxx.json
```

### 3.3 Extraer Información del JSON

Abre el archivo JSON descargado. Verás algo como:

```json
{
  "type": "service_account",
  "project_id": "sistema-courier-saas-12345",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...",
  "client_email": "firebase-adminsdk-xxxxx@sistema-courier-saas-12345.iam.gserviceaccount.com",
  "client_id": "123456789...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  ...
}
```

**Extraer:**
- `project_id` → `FIREBASE_PROJECT_ID`
- `client_email` → `FIREBASE_CLIENT_EMAIL`
- **Todo el archivo JSON** → `GOOGLE_APPLICATION_CREDENTIALS`

---

## Paso 4: Configurar en Render

### 4.1 Variables de Entorno Simples

En Render, agregar:

```
FIREBASE_PROJECT_ID=sistema-courier-saas-12345
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@sistema-courier-saas-12345.iam.gserviceaccount.com
```

### 4.2 Secret File (Archivo JSON Completo)

1. En Render, en la configuración del servicio
2. Buscar **"Secret Files"**
3. Click en **"Add Secret File"**
4. **Filename:** `firebase-credentials.json`
5. **Contents:** Pegar todo el contenido del JSON descargado
6. Click en **"Save"**

7. En las variables de entorno, agregar:
```
GOOGLE_APPLICATION_CREDENTIALS=/etc/secrets/firebase-credentials.json
```

---

## Paso 5: Verificar Configuración

### 5.1 En Firebase Console

1. Ve a **"Authentication"** → **"Users"**
2. Deberías poder ver la lista (vacía por ahora)
3. Esto confirma que Authentication está habilitado

### 5.2 Test Local (Opcional)

Crear archivo `test-firebase.js`:

```javascript
const admin = require('firebase-admin');

const serviceAccount = require('./firebase-credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('✅ Firebase conectado correctamente!');
console.log('Project ID:', serviceAccount.project_id);
```

Ejecutar:
```bash
node test-firebase.js
```

---

## 📋 Resumen de Credenciales

Al finalizar, deberías tener:

```
FIREBASE_PROJECT_ID=sistema-courier-saas-12345
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@sistema-courier-saas-12345.iam.gserviceaccount.com
GOOGLE_APPLICATION_CREDENTIALS=/etc/secrets/firebase-credentials.json
```

Y el archivo JSON completo guardado como Secret File en Render.

---

## ⚠️ Seguridad

**IMPORTANTE:**
- ❌ NO subas el archivo JSON a GitHub
- ❌ NO compartas las credenciales públicamente
- ✅ Usa Secret Files en Render
- ✅ Agrega `firebase-credentials.json` a `.gitignore`

---

## 🆘 Troubleshooting

### Error: "Permission denied"
- Verifica que el Service Account tenga permisos
- Regenera la clave privada

### Error: "Invalid credentials"
- Verifica que copiaste todo el JSON correctamente
- Verifica que no haya espacios o saltos de línea extra

### Error: "Project not found"
- Verifica el Project ID
- Asegúrate de usar el proyecto correcto

---

**✅ ¡Credenciales de Firebase listas!**

**Siguiente paso:** Obtener credenciales de SendGrid
