# 🔑 Credenciales de Firebase - Sistema Courier SaaS

**Fecha:** 25 de diciembre de 2025  
**Proyecto:** sistema-courier-saas  
**Estado:** ✅ Configurado

---

## 📊 Información del Proyecto

### Detalles Generales
```
Nombre del Proyecto: sistema-courier-saas
Project ID: sistema-courier-saas
Plan: Spark (Gratuito)
Región: us-central (predeterminada)
```

### Estado de Servicios

| Servicio | Estado | Notas |
|----------|--------|-------|
| **Authentication** | ✅ Activo | Ya tiene 1 usuario registrado |
| **Firestore Database** | ⏳ Pendiente | Necesita inicialización |
| **Storage** | ⏳ Pendiente | Disponible para configurar |
| **Hosting** | ⏳ Pendiente | Disponible para configurar |

---

## 🔐 Credenciales para el Frontend

### Firebase Config (Web App)

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",
  authDomain: "sistema-courier-saas.firebaseapp.com",
  projectId: "sistema-courier-saas",
  storageBucket: "sistema-courier-saas.firebasestorage.app",
  messagingSenderId: "483089332620",
  appId: "1:483089332620:web:50356bb56b9ae63b6dbea9"
};
```

### Archivo de Configuración Frontend

Crear o actualizar: `frontend/src/config/firebase.ts`

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",
  authDomain: "sistema-courier-saas.firebaseapp.com",
  projectId: "sistema-courier-saas",
  storageBucket: "sistema-courier-saas.firebasestorage.app",
  messagingSenderId: "483089332620",
  appId: "1:483089332620:web:50356bb56b9ae63b6dbea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
```

---

## 🔑 Credenciales para el Backend (Render)

### Variables de Entorno Simples

```bash
FIREBASE_PROJECT_ID=sistema-courier-saas
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@sistema-courier-saas.iam.gserviceaccount.com
```

### Service Account JSON (Pendiente)

**⚠️ IMPORTANTE:** Necesitas descargar el Service Account JSON para el backend.

#### Pasos para Obtener Service Account:

1. En Firebase Console, ir a **⚙️ Configuración del Proyecto**
2. Ir a la pestaña **"Cuentas de servicio"**
3. Click en **"Generar nueva clave privada"**
4. Se descargará un archivo JSON como:
   ```
   sistema-courier-saas-firebase-adminsdk-xxxxx-xxxxxxxxxx.json
   ```

5. **Guardar este archivo** en un lugar seguro

#### Contenido del JSON (Ejemplo):

```json
{
  "type": "service_account",
  "project_id": "sistema-courier-saas",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...",
  "client_email": "firebase-adminsdk-xxxxx@sistema-courier-saas.iam.gserviceaccount.com",
  "client_id": "123456789...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/..."
}
```

---

## 📝 Configuración en Render

### Paso 1: Variables de Entorno

En Render Dashboard → Tu servicio → Environment:

```
FIREBASE_PROJECT_ID=sistema-courier-saas
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@sistema-courier-saas.iam.gserviceaccount.com
```

### Paso 2: Secret File

1. En Render → Environment → **Secret Files**
2. Click en **"Add Secret File"**
3. **Filename:** `firebase-credentials.json`
4. **Contents:** Pegar todo el contenido del JSON descargado
5. Click en **"Save"**

6. Agregar variable de entorno:
```
GOOGLE_APPLICATION_CREDENTIALS=/etc/secrets/firebase-credentials.json
```

---

## ✅ Próximos Pasos

### 1. Descargar Service Account JSON

**Acción Inmediata:**
1. Ir a Firebase Console
2. ⚙️ → Configuración del Proyecto
3. Cuentas de servicio
4. Generar nueva clave privada
5. Guardar el archivo JSON

### 2. (Opcional) Inicializar Firestore

Si necesitas usar Firestore Database:

1. En Firebase Console, ir a **Firestore Database**
2. Click en **"Crear base de datos"**
3. Seleccionar modo:
   - **Producción:** Reglas de seguridad estrictas
   - **Prueba:** Reglas permisivas (30 días)
4. Seleccionar ubicación: `us-central`
5. Click en **"Habilitar"**

**Nota:** Para este sistema, Firestore es opcional. El sistema usa principalmente MySQL.

### 3. Verificar Authentication

**Estado Actual:**
- ✅ Authentication está habilitado
- ✅ Email/Password está configurado
- ✅ Ya existe 1 usuario: `admin@miempresa.com`

**Configuración adicional (opcional):**
- Agregar dominios autorizados
- Configurar templates de email
- Habilitar otros métodos de autenticación (Google, Facebook, etc.)

---

## 🔒 Seguridad

### Proteger Credenciales

**✅ HACER:**
- Usar variables de entorno
- Usar Secret Files en Render
- Agregar `firebase-credentials.json` a `.gitignore`
- Rotar claves periódicamente

**❌ NO HACER:**
- Subir credenciales a GitHub
- Compartir API Keys públicamente
- Hardcodear credenciales en el código

### .gitignore

Asegúrate de tener en `.gitignore`:

```
# Firebase
firebase-credentials.json
*-firebase-adminsdk-*.json

# Environment
.env
.env.local
.env.production
```

---

## 📋 Checklist de Configuración

### Frontend
- [x] Firebase Config obtenido
- [ ] Crear `frontend/src/config/firebase.ts`
- [ ] Actualizar imports en componentes
- [ ] Probar autenticación

### Backend
- [ ] Descargar Service Account JSON
- [ ] Configurar en Render como Secret File
- [ ] Configurar variables de entorno
- [ ] Probar conexión

### Opcional
- [ ] Inicializar Firestore
- [ ] Configurar Storage
- [ ] Configurar Hosting
- [ ] Agregar dominios autorizados

---

## 🆘 Soporte

### Documentación Firebase
- [Firebase Console](https://console.firebase.google.com)
- [Documentación](https://firebase.google.com/docs)
- [Authentication](https://firebase.google.com/docs/auth)

### Troubleshooting
- Si tienes problemas con Authentication, verifica dominios autorizados
- Si el Service Account no funciona, regenera la clave
- Para errores de permisos, verifica las reglas de Firestore

---

**✅ Firebase configurado y listo para usar!**

**Siguiente paso:** Descargar Service Account JSON y configurar en Render
