// Configuración de UPs activas
// Para activar una UP, añadir su número al array
// Ejemplo: const UPS_ACTIVAS = [1, 2, 3];
// Para ocultar todas: const UPS_ACTIVAS = [];

const UPS_ACTIVAS = [1];

const UPS_INFO = {
    1: { titulo: "Fundamentos de la Seguridad Informática", ra: "RA1, RA5", eval: "1ª" },
    2: { titulo: "Hardware y Gestión del Almacenamiento", ra: "RA2", eval: "1ª" },
    3: { titulo: "Criptografía", ra: "RA4", eval: "1ª" },
    4: { titulo: "Seguridad en el Sistema Operativo", ra: "RA3", eval: "2ª" },
    5: { titulo: "Seguridad en Redes", ra: "RA4", eval: "2ª" }
};

const UP_SUBPAGES = {
    1: [
        { archivo: "objetivos.html", titulo: "Objetivos de la SI" },
        { archivo: "clasificacion.html", titulo: "Tipos de Seguridad" },
        { archivo: "ciclo.html", titulo: "El ciclo de vida de la SI" },
        { archivo: "amenazas.html", titulo: "Vulnerabilidades" },
        { archivo: "practicas.html", titulo: "Buenas Prácticas" },
        { archivo: "legislacion.html", titulo: "Legislación" }
    ],
    2: [
        { archivo: "fisica.html", titulo: "Seguridad Física" },
        { archivo: "almacenamiento.html", titulo: "Almacenamiento" },
        { archivo: "recuperacion.html", titulo: "Recuperación" }
    ],
    3: [
        { archivo: "tecnicas.html", titulo: "Técnicas criptográficas" },
        { archivo: "cifrado.html", titulo: "Cifrado" },
        { archivo: "resumen.html", titulo: "Función resumen" },
        { archivo: "firma.html", titulo: "Firma digital" },
        { archivo: "ejemplos.html", titulo: "Ejemplos de uso" }
    ],
    4: [
        { archivo: "acceso.html", titulo: "Políticas de acceso" },
        { archivo: "seglogica.html", titulo: "Seguridad Lógica" }
    ],
    5: [
        { archivo: "conectividad.html", titulo: "Conectividad" },
        { archivo: "herramientas.html", titulo: "Herramientas de seguridad" },
        { archivo: "deteccion.html", titulo: "Sistemas de detección" },
        { archivo: "inalambricas.html", titulo: "Redes inalámbricas" },
        { archivo: "ataques.html", titulo: "Ejemplos de ataques" }
    ]
};

const RAS_INFO = {
    RA1: "Aplica medidas de seguridad pasiva en sistemas informáticos, describiendo características de entornos y relacionándolas con sus necesidades",
    RA2: "Gestiona dispositivos de almacenamiento, describiendo los procedimientos efectuados y aplicando técnicas para asegurar la integridad de la información",
    RA3: "Aplica mecanismos de seguridad activa, describiendo sus características y relacionándolas con las necesidades de uso del sistema informático",
    RA4: "Asegura la privacidad de la información transmitida en redes informáticas, describiendo vulnerabilidades e instalando software específico",
    RA5: "Reconoce la legislación y normativa sobre seguridad y protección de datos, analizando las repercusiones de su incumplimiento"
};

function esUPActiva(numUP) {
    return UPS_ACTIVAS.includes(numUP);
}

function getNavHTML(paginaActual) {
    let html = '<a href="../principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    html += '<a href="../evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    
    for (let i = 1; i <= 5; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up' + i + '/index.html"' + active + '>UP' + i + '</a>';
        }
    }
    
    return html;
}

function getNavHTMLRoot(paginaActual) {
    let html = '<a href="principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    html += '<a href="evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    
    for (let i = 1; i <= 5; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up/up' + i + '/index.html"' + active + '>UP' + i + '</a>';
        }
    }
    
    return html;
}

function getUPTableHTML() {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        const info = UPS_INFO[i];
        const estado = esUPActiva(i) 
            ? '<span class="badge badge-info">' + i + '</span>' 
            : '<span class="badge" style="background:#cbd5e0;">' + i + '</span>';
        const titulo = esUPActiva(i) 
            ? '<a href="up/up' + i + '/index.html">' + info.titulo + '</a>' 
            : info.titulo;
        const ra = info.ra || '';
        const evalLabel = info.eval || '';
        html += '<tr><td>' + estado + '</td><td>' + titulo + (ra ? '<br><small style="color:var(--accent);font-weight:600;">' + ra + '</small>' : '') + '</td><td>' + evalLabel + '</td></tr>';
    }
    html += '<tr><td><span class="badge" style="background:#cbd5e0;">FE</span></td><td>Formación en Empresa</td><td>3ª</td></tr>';
    return html;
}

// --- Funciones para Sidebar ---

function getSidebarHTMLRoot(paginaActual) {
    let html = '<a href="principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    html += '<a href="evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    
    html += '<div class="separator"></div>';
    
    for (let i = 1; i <= 5; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up/up' + i + '/index.html"' + active + '>UP' + i + ' ' + UPS_INFO[i].titulo + '</a>';
        }
    }
    
    return html;
}

function getSidebarHTML(paginaActual) {
    let html = '<a href="../principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    html += '<a href="../evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    
    html += '<div class="separator"></div>';
    
    for (let i = 1; i <= 5; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up' + i + '/index.html"' + active + '>UP' + i + ' ' + UPS_INFO[i].titulo + '</a>';
        }
    }
    
    return html;
}