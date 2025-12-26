# 🔐 Passwords Hasheados Generados

**Fecha:** 25 de diciembre de 2025  
**Password:** Demo123!

---

## ✅ Hashes Generados

### Usuario ADMIN
```
$2b$10$fwoTjwwVefrDrV/62HwGNOl0PQfmZ1IdEtVEynmbWx3SDE1Y8VSLkq
```

### Usuario AGENT  
```
$2b$10$[hash-generado-para-agent]
```

### Usuario CLIENT
```
$2b$10$[hash-generado-para-client]
```

### Usuario COURIER
```
$2b$10$aBVlh08RUAOS[hash-generado-para-courier]
```

---

## 📝 Cómo Actualizar demo_data.sql

1. Abrir: `c:\Sistema-Courier-SaaS\database\demo_data.sql`

2. Buscar las líneas con `$2b$10$YourHashedPasswordHere`

3. Reemplazar cada una con el hash correspondiente:

**Usuario ADMIN (línea ~35):**
```sql
INSERT INTO users (..., password_hash, ...) VALUES (
    'user-admin-demo',
    'demo-tenant-001',
    'admin@demo.com',
    '$2b$10$fwoTjwwVefrDrV/62HwGNOl0PQfmZ1IdEtVEynmbWx3SDE1Y8VSLkq',
    ...
);
```

**Usuario AGENT (línea ~50):**
```sql
INSERT INTO users (..., password_hash, ...) VALUES (
    'user-agent-demo',
    'demo-tenant-001',
    'agent@demo.com',
    '$2b$10$[copiar-hash-agent]',
    ...
);
```

**Usuario CLIENT (línea ~65):**
```sql
INSERT INTO users (..., password_hash, ...) VALUES (
    'user-client-demo',
    'demo-tenant-001',
    'client@demo.com',
    '$2b$10$[copiar-hash-client]',
    ...
);
```

**Usuario COURIER (línea ~80):**
```sql
INSERT INTO users (..., password_hash, ...) VALUES (
    'user-courier-demo',
    'demo-tenant-001',
    'courier@demo.com',
    '$2b$10$aBVlh08RUAOS[copiar-hash-courier-completo]',
    ...
);
```

---

## ✅ Verificación

Después de actualizar, todos los usuarios demo podrán iniciar sesión con:
- **Password:** `Demo123!`

---

**Nota:** Los hashes completos están en la salida del script. Cópialos exactamente como aparecen.
