// Script mejorado para migración completa MySQL → PostgreSQL
const fs = require('fs');
const path = require('path');

function migrateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // 1. Cambiar placeholders ? por $1, $2, etc.
    const queries = content.match(/`[^`]*\?[^`]*`/g);
    if (queries) {
        queries.forEach(query => {
            let paramCount = 0;
            const newQuery = query.replace(/\?/g, () => {
                paramCount++;
                return `$${paramCount}`;
            });
            content = content.replace(query, newQuery);
            modified = true;
        });
    }

    // 2. Cambiar NOW() por CURRENT_TIMESTAMP
    if (content.includes('NOW()')) {
        content = content.replace(/NOW\(\)/g, 'CURRENT_TIMESTAMP');
        modified = true;
    }

    // 3. Cambiar ON DUPLICATE KEY UPDATE por ON CONFLICT
    if (content.includes('ON DUPLICATE KEY UPDATE')) {
        // Esto requiere análisis manual, solo marcar
        console.log(`⚠️  ${filePath} contiene ON DUPLICATE KEY UPDATE - revisar manualmente`);
    }

    // 4. Remover tipos genéricos incorrectos de pool.query
    if (content.includes('pool.query<any[]>')) {
        content = content.replace(/pool\.query<any\[\]>/g, 'pool.query');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Migrado: ${path.basename(filePath)}`);
        return true;
    }
    return false;
}

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

const srcDir = path.join(__dirname, 'src');
console.log('🔄 Iniciando migración SQL MySQL → PostgreSQL...\n');
const filesModified = processDirectory(srcDir);
console.log(`\n✅ Migración SQL completada: ${filesModified} archivos modificados`);
