# 📝 Resumen de Credenciales - Sistema Courier SaaS

**Fecha:** 25 de diciembre de 2025  
**Estado:** En proceso de obtención

---

## ✅ FIREBASE - COMPLETADO

### Credenciales Frontend
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

### Credenciales Backend
```bash
FIREBASE_PROJECT_ID=sistema-courier-saas
FIREBASE_CLIENT_EMAIL=[Pendiente - descargar Service Account JSON]
GOOGLE_APPLICATION_CREDENTIALS=/etc/secrets/firebase-credentials.json
```

**Acción Pendiente:**
- Descargar Service Account JSON desde Firebase Console
- Ubicación: Settings → Service Accounts → "Generar nueva clave privada"

---

## ⏳ SENDGRID - EN PROCESO

### Página Actual
Estás en: https://login.twilio.com/u/signup

### Información para Registro

**Datos Personales:**
```
First Name: [Tu nombre]
Last Name: [Tu apellido]
Email: [Tu email - será el de administrador]
Password: [Crear contraseña segura]
  - Mínimo 8 caracteres
  - Al menos 1 mayúscula
  - Al menos 1 número
  - Al menos 1 carácter especial
```

**Después del Registro:**
1. Verificar email (recibirás link)
2. Verificar teléfono (recibirás SMS)
3. Completar perfil:
   - What do you plan to build? → "Transactional emails"
   - Role? → "Developer"
   - Company: "Sistema Courier SaaS"
   - Emails per month? → "Less than 40,000"

**Single Sender Verification:**
```
From Name: Sistema Courier
From Email: noreply@tudominio.com (o tu-email@gmail.com temporal)
Reply To: soporte@tudominio.com
Company Address: [Tu dirección]
City: [Tu ciudad]
Country: [Tu país]
```

**Crear API Key:**
- Name: "Sistema Courier Production"
- Permissions: "Full Access"
- ⚠️ COPIAR LA API KEY (solo se muestra una vez)

### Credenciales Esperadas
```bash
SENDGRID_API_KEY=SG.[tu-api-key-aqui]
SENDGRID_FROM_EMAIL=noreply@tudominio.com
```

---

## ⏳ SINPE MÓVIL - PENDIENTE

### Información Requerida
```bash
SINPE_PHONE_NUMBER=[Tu número de teléfono SINPE]
SINPE_BANK_NAME=[Nombre de tu banco]
SINPE_HOLDER_NAME=[Nombre del titular de la cuenta]
```

**Ejemplo:**
```bash
SINPE_PHONE_NUMBER=8888-8888
SINPE_BANK_NAME=Banco Nacional de Costa Rica
SINPE_HOLDER_NAME=Juan Pérez
```

---

## 📋 CHECKLIST DE PROGRESO

### Firebase
- [x] Proyecto creado
- [x] Authentication habilitado
- [x] Credenciales frontend obtenidas
- [ ] Service Account JSON descargado

### SendGrid
- [ ] Cuenta creada
- [ ] Email verificado
- [ ] Teléfono verificado
- [ ] Single Sender verificado
- [ ] API Key creada y copiada

### SINPE Móvil
- [ ] Información bancaria recopilada

### Opcional
- [ ] Stripe (Secret Key)
- [ ] PayPal (Client ID/Secret)

---

## 🎯 PRÓXIMOS PASOS INMEDIATOS

### 1. Completar Registro en SendGrid (5-10 min)
- Llenar formulario en la página actual
- Verificar email
- Verificar teléfono
- Completar perfil

### 2. Configurar Single Sender (3-5 min)
- Crear sender identity
- Verificar email del sender

### 3. Crear API Key (2 min)
- Ir a Settings → API Keys
- Crear nueva key
- Copiar y guardar

### 4. Configurar SINPE (1 min)
- Recopilar información bancaria

### 5. Descargar Firebase JSON (1 min)
- Volver a Firebase Console
- Descargar Service Account

---

## 📁 ARCHIVOS DE REFERENCIA

### Guías Disponibles
- `documentacion/guia-firebase.md` - Guía completa Firebase
- `documentacion/guia-sendgrid.md` - Guía completa SendGrid
- `documentacion/guia-sendgrid-paso-a-paso.md` - Guía detallada SendGrid
- `documentacion/firebase-credentials.md` - Credenciales Firebase

### Scripts
- `database/generate-demo-passwords.js` - Generar hashes de passwords

---

## 💾 GUARDAR CREDENCIALES

### Crear Archivo Temporal
Crear: `credentials-temp.txt` (NO subir a Git)

```bash
# Firebase
FIREBASE_PROJECT_ID=sistema-courier-saas
FIREBASE_CLIENT_EMAIL=[pendiente]

# SendGrid
SENDGRID_API_KEY=[pendiente]
SENDGRID_FROM_EMAIL=[pendiente]

# SINPE
SINPE_PHONE_NUMBER=[pendiente]
SINPE_BANK_NAME=[pendiente]
SINPE_HOLDER_NAME=[pendiente]
```

---

## ⏱️ TIEMPO ESTIMADO RESTANTE

- SendGrid: 15-20 minutos
- SINPE: 1 minuto
- Firebase JSON: 1 minuto
- **Total: ~20-25 minutos**

---

**Estado Actual:** Listo para completar registro en SendGrid
