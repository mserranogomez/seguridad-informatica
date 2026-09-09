// Configuración de UDs activas
// Para activar una UD, añadir su número al array
// Ejemplo: const UDS_ACTIVAS = [1, 2, 3];
// Para ocultar todas: const UDS_ACTIVAS = [];

const UDS_ACTIVAS = [];

const UDS_INFO = {
    1: { titulo: "Fundamentos de Seguridad y Seguridad Física" },
    2: { titulo: "Almacenamiento y Copias de Seguridad" },
    3: { titulo: "Seguridad Activa y Software Malicioso" },
    4: { titulo: "Criptografía e Identificación Digital" },
    5: { titulo: "Seguridad en Redes" },
    6: { titulo: "Legislación y Protección de Datos" }
};

function esUDActiva(numUD) {
    return UDS_ACTIVAS.includes(numUD);
}

function getNavHTML(paginaActual) {
    let html = '<a href="../principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUDActiva(i)) {
            const active = paginaActual === 'ud' + i ? ' class="active"' : '';
            html += '<a href="ud' + i + '.html"' + active + '>UD' + i + '</a>';
        }
    }
    
    html += '<a href="../evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}

function getNavHTMLRoot(paginaActual) {
    let html = '<a href="principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUDActiva(i)) {
            const active = paginaActual === 'ud' + i ? ' class="active"' : '';
            html += '<a href="ud/ud' + i + '.html"' + active + '>UD' + i + '</a>';
        }
    }
    
    html += '<a href="evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}

function getUDTableHTML() {
    let html = '';
    for (let i = 1; i <= 6; i++) {
        const info = UDS_INFO[i];
        const estado = esUDActiva(i) 
            ? '<span class="badge badge-info">' + i + '</span>' 
            : '<span class="badge" style="background:#cbd5e0;">' + i + '</span>';
        const titulo = esUDActiva(i) 
            ? '<a href="ud/ud' + i + '.html">' + info.titulo + '</a>' 
            : info.titulo;
        html += '<tr><td>' + estado + '</td><td>' + titulo + '</td></tr>';
    }
    return html;
}

// --- Funciones para Sidebar ---

function getSidebarHTMLRoot(paginaActual) {
    let html = '<a href="principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUDActiva(i)) {
            const active = paginaActual === 'ud' + i ? ' class="active"' : '';
            html += '<a href="ud/ud' + i + '.html"' + active + '>UD' + i + ' ' + UDS_INFO[i].titulo + '</a>';
        }
    }
    
    html += '<a href="evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}

function getSidebarHTML(paginaActual) {
    let html = '<a href="../principal.html"' + (paginaActual === 'principal' ? ' class="active"' : '') + '>Inicio</a>';
    
    for (let i = 1; i <= 6; i++) {
        if (esUDActiva(i)) {
            const active = paginaActual === 'ud' + i ? ' class="active"' : '';
            html += '<a href="ud' + i + '.html"' + active + '>UD' + i + ' ' + UDS_INFO[i].titulo + '</a>';
        }
    }
    
    html += '<a href="../evaluacion.html"' + (paginaActual === 'evaluacion' ? ' class="active"' : '') + '>Evaluación</a>';
    return html;
}
