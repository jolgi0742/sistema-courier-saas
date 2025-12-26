# 🗄️ Credenciales PostgreSQL - Render

**Database Name:** sistema-courier-db  
**Status:** ✅ Available  
**Region:** Oregon (US West)  
**Plan:** Free

---

## 🔐 Connection Details

### Database Information
```
Database Name: sistema_courier_saas
Username: sistema_courier_saas_user
Password: b7KNUZdSmUpomEfg2D8mWcF9GDFi1pn0
Port: 5432
```

### Hostnames
```
External Hostname: dpg-d56vmt8gjchc7399ltu0-a-a.oregon-postgres.render.com
Internal Hostname: dpg-d56vmt8gjchc7399ltu0-a
```

### Connection Strings

**Internal Database URL** (usar en Render):
```
postgresql://sistema_courier_saas_user:b7KNUZdSmUpomEfg2D8mWcF9GDFi1pn0@dpg-d56vmt8gjchc7399ltu0-a/sistema_courier_saas
```

**External Database URL** (para conexiones locales):
```
postgresql://sistema_courier_saas_user:b7KNUZdSmUpomEfg2D8mWcF9GDFi1pn0@dpg-d56vmt8gjchc7399ltu0-a-a.oregon-postgres.render.com/sistema_courier_saas
```

---

## 📝 Variables de Entorno para Render

Usar estas variables en el Web Service:

```bash
DB_HOST=dpg-d56vmt8gjchc7399ltu0-a
DB_PORT=5432
DB_USER=sistema_courier_saas_user
DB_PASSWORD=b7KNUZdSmUpomEfg2D8mWcF9GDFi1pn0
DB_NAME=sistema_courier_saas
```

**O usar la URL completa:**
```bash
DATABASE_URL=postgresql://sistema_courier_saas_user:b7KNUZdSmUpomEfg2D8mWcF9GDFi1pn0@dpg-d56vmt8gjchc7399ltu0-a/sistema_courier_saas
```

---

## 🔌 Conexión Local (Opcional)

Para conectar desde tu PC:

```bash
psql "postgresql://sistema_courier_saas_user:b7KNUZdSmUpomEfg2D8mWcF9GDFi1pn0@dpg-d56vmt8gjchc7399ltu0-a-a.oregon-postgres.render.com/sistema_courier_saas"
```

---

## ⚠️ Importante

- **NO compartir** estas credenciales públicamente
- **Usar Internal URL** para servicios en Render (más rápido)
- **Usar External URL** solo para conexiones desde fuera de Render

---

**✅ Base de datos lista para uso!**
