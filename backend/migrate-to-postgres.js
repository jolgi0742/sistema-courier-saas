// Script para migrar pool.execute() a pool.query() para PostgreSQL
const fs = require('fs');
const path = require('path');

// Función para reemplazar en un archivo
function migrateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Reemplazar pool.execute con pool.query
    if (content.includes('pool.execute')) {
        content = content.replace(/pool\.execute\(/g, 'pool.query(');
        modified = true;
    }

    // En PostgreSQL, pool.query devuelve { rows } directamente
    // Cambiar: const [rows] = await pool.query(...) 
    // Por: const { rows } = await pool.query(...)
    if (content.includes('const [rows] = await pool.query')) {
        content = content.replace(/const \[rows\] = await pool\.query/g, 'const { rows } = await pool.query');
        modified = true;
    }

    // Cambiar otros destructuring arrays por objetos
    if (content.includes('const [') && content.includes('] = await pool.query')) {
        content = content.replace(/const \[([^\]]+)\] = await pool\.query/g, 'const { rows: $1 } = await pool.query');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Migrado: ${filePath}`);
        return true;
    }
    return false;
}

// Función recursiva para procesar directorio
function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            count += processDirectory(filePath);
        } else if (file.endsWith('.ts')) {
            if (migrateFile(filePath)) {
                count++;
            }
        }
    });

    return count;
}

// Ejecutar migración
const srcDir = path.join(__dirname, 'src');
console.log('🔄 Iniciando migración MySQL → PostgreSQL...\n');
const filesModified = processDirectory(srcDir);
console.log(`\n✅ Migración completada: ${filesModified} archivos modificados`);
