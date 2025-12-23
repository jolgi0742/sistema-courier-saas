// src/shared/utils/export-utils.ts
// Utilidades compartidas para exportar datos a CSV y generar PDFs

/**
 * Exporta un array de objetos a formato CSV
 * @param data - Array de datos a exportar
 * @param filename - Nombre base del archivo (sin extensión)
 * @param columns - Configuración de columnas con key (campo del objeto) y label (encabezado CSV)
 */
export const exportToCSV = (
  data: any[],
  filename: string,
  columns: Array<{ key: string; label: string }>
): void => {
  // Crear encabezados
  const headers = columns.map((c) => c.label).join(',');

  // Crear filas escapando comillas y caracteres especiales
  const rows = data.map((item) =>
    columns
      .map((c) => {
        const value = item[c.key] ?? '';
        // Escapar comillas dobles duplicándolas y envolver en comillas
        return `"${String(value).replace(/"/g, '""')}"`;
      })
      .join(',')
  );

  // Combinar todo
  const csvContent = [headers, ...rows].join('\n');

  // Crear blob y descargar
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
  link.click();

  // Limpiar
  URL.revokeObjectURL(url);
};

/**
 * Genera y abre un PDF para impresión usando HTML + CSS
 * @param config - Configuración del PDF con título, datos, columnas y estadísticas opcionales
 */
export const generatePDF = (config: {
  title: string;
  filename: string;
  stats?: Array<{ label: string; value: string | number; icon?: string }>;
  data: any[];
  columns: Array<{ key: string; label: string }>;
}): void => {
  const { title, filename, stats, data, columns } = config;

  // Obtener estilos corporativos
  const styles = getPDFStyles();

  // Generar header
  const header = getPDFHeader(title);

  // Generar sección de estadísticas si existe
  const statsSection = stats
    ? `
    <div class="kpi-grid">
      ${stats.map((stat) => `
        <div class="kpi-card blue">
          <div class="kpi-icon blue">${stat.icon || '📊'}</div>
          <div class="kpi-value">${stat.value}</div>
          <div class="kpi-label">${stat.label}</div>
        </div>
      `).join('')}
    </div>
  `
    : '';

  // Generar tabla
  const tableHTML = `
    <div class="section">
      <div class="section-content">
        <table>
          <thead>
            <tr>
              ${columns.map((col) => `<th>${col.label}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${data.map((item) => `
              <tr>
                ${columns.map((col) => {
    let value = item[col.key] ?? '-';
    // Formatear booleanos
    if (typeof value === 'boolean') {
      value = value ? 'Activo' : 'Inactivo';
    }
    return `<td>${value}</td>`;
  }).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Footer
  const footer = `
    <div class="footer">
      <div class="footer-logo">ITOBOX - Courier & Logistics</div>
      <div>Generado: ${new Date().toLocaleDateString('es-CR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}</div>
    </div>
  `;

  // HTML completo
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${title} - ITOBOX</title>
        ${styles}
      </head>
      <body>
        <div class="page">
          ${header}
          ${statsSection}
          ${tableHTML}
          ${footer}
        </div>
      </body>
    </html>
  `;

  // Abrir en nueva ventana para impresión
  const printWindow = window.open('', '_blank', 'width=800,height=600');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();

    // Esperar a que cargue y luego abrir diálogo de impresión
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  }
};

/**
 * Estilos CSS corporativos para PDFs
 */
const getPDFStyles = (): string => {
  return `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      
      * { 
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
      }
      
      body { 
        font-family: 'Inter', 'Segoe UI', sans-serif; 
        background: white;
        color: #1f2937;
        font-size: 11px;
        line-height: 1.5;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      .page {
        padding: 40px;
        min-height: 100vh;
      }
      
      /* Header Corporativo */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e5e7eb;
      }
      
      .logo-container {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .logo-img {
        width: 45px;
        height: 45px;
        object-fit: contain;
      }
      
      .logo-text {
        font-size: 22px;
        font-weight: 700;
        color: #1f2937;
        letter-spacing: -0.5px;
      }
      
      .logo-subtitle {
        font-size: 9px;
        color: #9ca3af;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }
      
      .report-info {
        text-align: right;
      }
      
      .report-title {
        font-size: 16px;
        font-weight: 700;
        color: #1e40af;
        margin-bottom: 4px;
      }
      
      .report-date {
        color: #9ca3af;
        font-size: 10px;
      }
      
      /* KPI Cards Grid */
      .kpi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 16px;
        margin-bottom: 30px;
      }
      
      .kpi-card {
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 16px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      
      .kpi-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #1e40af, #3b82f6);
      }
      
      .kpi-icon {
        width: 40px;
        height: 40px;
        margin: 0 auto 8px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        background: #dbeafe;
        color: #1e40af;
      }
      
      .kpi-value {
        font-size: 28px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 2px;
      }
      
      .kpi-label {
        font-size: 10px;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: 500;
      }
      
      /* Sections */
      .section {
        margin-bottom: 25px;
        background: white;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        overflow: hidden;
      }
      
      .section-content {
        padding: 16px;
      }
      
      /* Tables */
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: 10px;
      }
      
      thead {
        background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
      }
      
      th {
        color: white;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      td {
        padding: 10px 12px;
        border-bottom: 1px solid #f3f4f6;
      }
      
      tr:nth-child(even) { 
        background: #f9fafb; 
      }
      
      tbody tr:hover { 
        background: #f3f4f6; 
      }
      
      /* Footer */
      .footer {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 2px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #6b7280;
        font-size: 9px;
      }
      
      .footer-logo {
        font-weight: 600;
        color: #1e40af;
      }
      
      @media print {
        body { 
          padding: 0; 
        }
        .page { 
          padding: 30px; 
        }
        .section { 
          break-inside: avoid; 
        }
      }
    </style>
  `;
};

/**
 * Genera el header HTML del PDF con logo ITOBOX
 */
const getPDFHeader = (title: string, subtitle?: string): string => {
  const fecha = new Date().toLocaleDateString('es-CR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
    <div class="header">
      <div class="logo-container">
        <img src="/assets/itobox-logo.png" class="logo-img" alt="ITOBOX" />
        <div>
          <div class="logo-text">ITOBOX</div>
          <div class="logo-subtitle">Courier & Logistics</div>
        </div>
      </div>
      <div class="report-info">
        <div class="report-title">${title}</div>
        ${subtitle ? `<div class="report-date">${subtitle}</div>` : ''}
        <div class="report-date">${fecha}</div>
      </div>
    </div>
  `;
};
