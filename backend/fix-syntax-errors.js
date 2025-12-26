// Script final para corregir TODOS los errores de migración PostgreSQL
const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const original = content;

    // 1. Corregir operadores ternarios rotos (? reemplazado por $N)
    // Patrón: algo $N algo : algo
    const ternaryPattern = /(\w+)\s+\$(\d+)\s+(\w+)\s*:/g;
    if (ternaryPattern.test(content)) {
        content = content.replace(ternaryPattern, '$1 ? $3 :');
        modified = true;
    }

    // 2. Corregir accesos a propiedades rotos (. reemplazado por $N.)
    // Patrón: algo[0]$N.propiedad
    const propertyPattern = /\[0\]\$\d+\./g;
    if (propertyPattern.test(content)) {
        content = content.replace(propertyPattern, '[0].');
        modified = true;
    }

    // 3. Corregir encadenamiento de propiedades: $N.$N.$N
    const chainPattern = /\$\d+\.\w+\$\d+\./g;
    if (chainPattern.test(content)) {
        content = content.replace(/\$\d+\./g, '.');
        modified = true;
    }

    // 4. Corregir placeholders en queries dinámicos con template strings
    // WHERE id = ? AND tenant_id = ? → WHERE id = $1 AND tenant_id = $2
    const queryMatches = content.match(/`[^`]*`|'[^']*'/g);
    if (queryMatches) {
        queryMatches.forEach(match => {
            if (match.includes('?')) {
                let paramCount = 0;
                const fixed = match.replace(/\?/g, () => {
                    paramCount++;
                    return `$${paramCount}`;
                });
                content = content.replace(match, fixed);
                modified = true;
            }
        });
    }

    // 5. Corregir UPDATE dinámicos con placeholders hardcodeados
    // fields.push('name = ?') → necesita ser dinámico
    const updatePattern = /fields\.push\('(\w+)\s*=\s*\$\d+'\)/g;
    if (updatePattern.test(content)) {
        content = content.replace(updatePattern, (match, fieldName) => {
            return `fields.push('${fieldName} = ?')`;
        });
        modified = true;
    }

    if (modified && content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Corregido: ${path.basename(filePath)}`);
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
            if (fixFile(filePath)) {
                count++;
            }
        }
    });

    return count;
}

const srcDir = path.join(__dirname, 'src');
console.log('🔧 Corrigiendo errores de sintaxis...\n');
const filesFixed = processDirectory(srcDir);
console.log(`\n✅ Corrección completada: ${filesFixed} archivos corregidos`);
