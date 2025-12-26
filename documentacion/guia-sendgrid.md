# 📧 Guía: Obtener Credenciales de SendGrid

**Tiempo estimado:** 10-15 minutos

---

## Paso 1: Crear Cuenta en SendGrid

### 1.1 Registro

1. Ve a: [https://signup.sendgrid.com](https://signup.sendgrid.com)
2. Completa el formulario:
   - Email
   - Password
   - Nombre completo
   - Empresa
3. Click en **"Create Account"**

### 1.2 Verificar Email

1. Revisa tu email
2. Click en el link de verificación
3. Completa el perfil:
   - Tipo de negocio
   - Volumen de emails estimado
   - Propósito (Transactional emails)

---

## Paso 2: Configurar Sender Identity

### 2.1 Single Sender Verification (Más Rápido)

1. En el dashboard de SendGrid
2. Ve a **"Settings"** → **"Sender Authentication"**
3. Click en **"Get Started"** en **"Single Sender Verification"**
4. Completa el formulario:
   ```
   From Name: Sistema Courier
   From Email Address: noreply@tudominio.com
   Reply To: soporte@tudominio.com
   Company Address: Tu dirección
   City: Tu ciudad
   Country: Tu país
   ```
5. Click en **"Create"**

### 2.2 Verificar Email

1. Revisa el email que usaste como "From Email"
2. Click en el link de verificación
3. Espera confirmación (puede tomar unos minutos)

**⚠️ Nota:** Si no tienes dominio propio, puedes usar un email de Gmail/Outlook temporalmente, pero para producción se recomienda dominio propio.

---

## Paso 3: Crear API Key

### 3.1 Generar API Key

1. En el dashboard, ve a **"Settings"** → **"API Keys"**
2. Click en **"Create API Key"**
3. Configuración:
   ```
   API Key Name: Sistema Courier Production
   API Key Permissions: Full Access
   ```
   (O selecciona "Restricted Access" y habilita solo "Mail Send")
4. Click en **"Create & View"**

### 3.2 Copiar API Key

**⚠️ IMPORTANTE:** La API Key solo se muestra UNA VEZ

1. Copia la API Key completa
2. Guárdala en un lugar seguro
3. Ejemplo de API Key:
   ```
   SG.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
   ```

**Guardar como:** `SENDGRID_API_KEY`

---

## Paso 4: (Opcional) Configurar Domain Authentication

### 4.1 ¿Por qué configurar dominio?

- ✅ Mejor deliverability
- ✅ Emails no van a spam
- ✅ Profesional

### 4.2 Pasos para Domain Authentication

1. Ve a **"Settings"** → **"Sender Authentication"**
2. Click en **"Authenticate Your Domain"**
3. Selecciona tu proveedor DNS (GoDaddy, Namecheap, etc.)
4. Ingresa tu dominio: `tudominio.com`
5. SendGrid te dará registros DNS para agregar:
   ```
   Type: CNAME
   Host: em1234.tudominio.com
   Value: u1234567.wl123.sendgrid.net
   
   Type: CNAME
   Host: s1._domainkey.tudominio.com
   Value: s1.domainkey.u1234567.wl123.sendgrid.net
   
   Type: CNAME
   Host: s2._domainkey.tudominio.com
   Value: s2.domainkey.u1234567.wl123.sendgrid.net
   ```

6. Agrega estos registros en tu proveedor DNS
7. Vuelve a SendGrid y click en **"Verify"**
8. Espera propagación DNS (puede tomar hasta 48 horas)

---

## Paso 5: Configurar en Render

### 5.1 Variables de Entorno

En Render, agregar:

```
SENDGRID_API_KEY=SG.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
SENDGRID_FROM_EMAIL=noreply@tudominio.com
```

### 5.2 (Opcional) Templates

Si quieres usar templates dinámicos:

```
SENDGRID_TEMPLATE_WELCOME=d-abc123def456
SENDGRID_TEMPLATE_PASSWORD_RESET=d-def456ghi789
SENDGRID_TEMPLATE_PACKAGE=d-ghi789jkl012
SENDGRID_TEMPLATE_INVOICE=d-jkl012mno345
```

---

## Paso 6: Probar Configuración

### 6.1 Test Local

Crear archivo `test-sendgrid.js`:

```javascript
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('TU_API_KEY_AQUI');

const msg = {
  to: 'tu-email@ejemplo.com',
  from: 'noreply@tudominio.com',
  subject: 'Test SendGrid - Sistema Courier',
  text: 'Este es un email de prueba',
  html: '<strong>Este es un email de prueba</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('✅ Email enviado correctamente!');
  })
  .catch((error) => {
    console.error('❌ Error:', error);
  });
```

Ejecutar:
```bash
npm install @sendgrid/mail
node test-sendgrid.js
```

### 6.2 Verificar en SendGrid

1. Ve a **"Activity"** en el dashboard
2. Deberías ver el email enviado
3. Revisa tu bandeja de entrada

---

## 📋 Resumen de Credenciales

Al finalizar, deberías tener:

```
SENDGRID_API_KEY=SG.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
SENDGRID_FROM_EMAIL=noreply@tudominio.com
```

---

## 💰 Planes de SendGrid

### Free Tier
- ✅ 100 emails/día
- ✅ Suficiente para desarrollo y demos
- ✅ No requiere tarjeta de crédito

### Essentials ($19.95/mes)
- ✅ 50,000 emails/mes
- ✅ Recomendado para producción pequeña

### Pro ($89.95/mes)
- ✅ 100,000 emails/mes
- ✅ Para producción media/grande

---

## ⚠️ Seguridad

**IMPORTANTE:**
- ❌ NO subas la API Key a GitHub
- ❌ NO compartas la API Key públicamente
- ✅ Usa variables de entorno
- ✅ Rota la API Key periódicamente

---

## 🆘 Troubleshooting

### Error: "Sender not verified"
- Verifica que el email "From" esté verificado
- Completa Single Sender Verification

### Error: "Invalid API Key"
- Verifica que copiaste la API Key completa
- Regenera la API Key si es necesario

### Emails van a spam
- Configura Domain Authentication
- Usa un dominio verificado
- Evita palabras spam en el asunto

### Error: "Daily sending limit exceeded"
- Estás en Free tier (100 emails/día)
- Upgradea a plan pagado

---

## 📧 Tipos de Emails del Sistema

El sistema enviará estos emails:

1. **Bienvenida** - Cuando se registra un cliente
2. **Reset Password** - Recuperación de contraseña
3. **Paquete Recibido** - Cuando llega a Miami
4. **Paquete en Tránsito** - Cuando sale de Miami
5. **Paquete Entregado** - Confirmación de entrega
6. **Factura** - Cuando se genera una factura
7. **Recordatorio de Pago** - Facturas pendientes

---

**✅ ¡Credenciales de SendGrid listas!**

**Siguiente paso:** Configurar información de SINPE Móvil
