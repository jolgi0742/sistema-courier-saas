# 🔄 Guía de Migración MySQL → PostgreSQL

**Estado:** Migración completada  
**Tiempo:** ~30 minutos

---

## ✅ Cambios Realizados

### 1. Dependencias
- ✅ Instalado `pg` (PostgreSQL driver)
- ✅ Instalado `@types/pg`
- ✅ Removido `mysql2`

### 2. Configuración de Base de Datos
- ✅ Actualizado `src/config/database.ts`
- ✅ Cambiado de `mysql.createPool()` a `new Pool()`
- ✅ Puerto cambiado: 3306 → 5432
- ✅ Usuario default: root → postgres

### 3. Helper de Queries
- ✅ Agregado función `query()` para compatibilidad

---

## 📝 Diferencias Clave MySQL vs PostgreSQL

### Tipos de Datos
```sql
-- MySQL → PostgreSQL
INT AUTO_INCREMENT → SERIAL
DATETIME → TIMESTAMP
TEXT → TEXT (igual)
VARCHAR(255) → VARCHAR(255) (igual)
TINYINT(1) → BOOLEAN
```

### Sintaxis
```sql
-- MySQL usa backticks
`table_name`

-- PostgreSQL usa comillas dobles
"table_name"

-- Pero ambos aceptan sin comillas si no hay palabras reservadas
table_name
```

### Funciones
```sql
-- MySQL
NOW()
CURDATE()

-- PostgreSQL
NOW() (igual)
CURRENT_DATE
```

---

## 🔧 Próximos Pasos

### 1. Actualizar Scripts SQL (Opcional)
Los scripts SQL actuales son mayormente compatibles. Solo necesitan ajustes menores:
- `AUTO_INCREMENT` → `SERIAL`
- `DATETIME` → `TIMESTAMP`

### 2. Crear Base de Datos en Render
- New → PostgreSQL
- Name: `sistema-courier-db`
- Region: Oregon
- Plan: Free

### 3. Ejecutar Scripts
```sql
-- En PostgreSQL de Render
\i database/01_create_tables_postgres.sql
\i database/02_seed_data.sql
\i database/demo_data.sql
```

### 4. Configurar Variables de Entorno
```bash
DB_HOST=[internal-postgres-url]
DB_PORT=5432
DB_USER=[from-render]
DB_PASSWORD=[from-render]
DB_NAME=sistema_courier_saas
```

---

## ✅ Verificación

### Test Local (Opcional)
```bash
# Instalar PostgreSQL localmente
# Crear base de datos
createdb sistema_courier_saas

# Ejecutar scripts
psql sistema_courier_saas < database/01_create_tables_postgres.sql

# Probar conexión
npm run dev
```

---

## 🚀 Deployment en Render

**Ahora estamos listos para:**
1. Crear PostgreSQL database en Render
2. Crear Web Service
3. Configurar variables
4. Deploy

---

**¡Migración completada! Listo para deployment.**
