// Configuración de UPs activas
// Para activar una UP, añadir su número al array
// Ejemplo: const UPS_ACTIVAS = [1, 2, 3];
// Para ocultar todas: const UPS_ACTIVAS = [];

const UPS_ACTIVAS = [];

const UPS_INFO = {
    1: { titulo: "Fundamentos de Seguridad y Seguridad Física", ra: "RA1", eval: "1ª" },
    2: { titulo: "Almacenamiento y Copias de Seguridad", ra: "RA2", eval: "1ª" },
    3: { titulo: "Seguridad Activa y Software Malicioso", ra: "RA3", eval: "1ª" },
    4: { titulo: "Criptografía e Identificación Digital", ra: "RA4", eval: "1ª" },
    5: { titulo: "Seguridad en Redes", ra: "RA4", eval: "2ª" },
    6: { titulo: "Legislación y Protección de Datos", ra: "RA5", eval: "2ª" }
};

const RAS_INFO = {
    RA1: "Aplica medidas de seguridad pasiva en sistemas informáticos",
    RA2: "Gestiona dispositivos de almacenamiento y copias de seguridad",
    RA3: "Aplica mecanismos de seguridad activa y software malicioso",
    RA4: "Asegura la privacidad de la información transmitida en redes",
    RA5: "Reconoce la legislación y normativa sobre seguridad y protección de datos"
};

function esUPActiva(numUP) {
    return UPS_ACTIVAS.includes(numUP);
}

function getNavHTML(paginaActual) {
    let html = '<a href="../principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up' + i + '.html"' + active + '>UP' + i + '</a>';
        }
    }
    
    html += '<a href="../evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}

function getNavHTMLRoot(paginaActual) {
    let html = '<a href="principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up/up' + i + '.html"' + active + '>UP' + i + '</a>';
        }
    }
    
    html += '<a href="evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}

function getUPTableHTML() {
    let html = '';
    for (let i = 1; i <= 6; i++) {
        const info = UPS_INFO[i];
        const estado = esUPActiva(i) 
            ? '<span class="badge badge-info">' + i + '</span>' 
            : '<span class="badge" style="background:#cbd5e0;">' + i + '</span>';
        const titulo = esUPActiva(i) 
            ? '<a href="up/up' + i + '.html">' + info.titulo + '</a>' 
            : info.titulo;
        const ra = info.ra || '';
        const evalLabel = info.eval || '';
        html += '<tr><td>' + estado + '</td><td>' + titulo + (ra ? '<br><small style="color:var(--accent);font-weight:600;">' + ra + '</small>' : '') + '</td><td>' + evalLabel + '</td></tr>';
    }
    html += '<tr><td><span class="badge" style="background:#cbd5e0;">FIE</span></td><td>Formación en Empresa</td><td>3ª</td></tr>';
    return html;
}

// --- Funciones para Sidebar ---

function getSidebarHTMLRoot(paginaActual) {
    let html = '<a href="principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up/up' + i + '.html"' + active + '>UP' + i + ' ' + UPS_INFO[i].titulo + '</a>';
        }
    }
    
    html += '<a href="evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}

function getSidebarHTML(paginaActual) {
    let html = '<a href="../principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUPActiva(i)) {
            const active = paginaActual === 'up' + i ? ' class="active"' : '';
            html += '<a href="up' + i + '.html"' + active + '>UP' + i + ' ' + UPS_INFO[i].titulo + '</a>';
        }
    }
    
    html += '<a href="../evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}
