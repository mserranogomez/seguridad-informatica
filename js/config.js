// Configuración de UDs activas
// Para activar una UD, añadir su número al array
// Ejemplo: const UDS_ACTIVAS = [1, 2, 3];
// Para ocultar todas: const UDS_ACTIVAS = [];

const UDS_ACTIVAS = [];

const UDS_INFO = {
    1: { titulo: "Fundamentos de Seguridad y Seguridad Física", horas: 20, ra: 1 },
    2: { titulo: "Almacenamiento y Copias de Seguridad", horas: 25, ra: 2 },
    3: { titulo: "Seguridad Activa y Software Malicioso", horas: 15, ra: 3 },
    4: { titulo: "Criptografía e Identificación Digital", horas: 18, ra: 4 },
    5: { titulo: "Seguridad en Redes", horas: 25, ra: 4 },
    6: { titulo: "Legislación y Protección de Datos", horas: 15, ra: 5 }
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
            : info.titulo + ' <span style="font-size:0.75rem;color:var(--text-light);">(próximamente)</span>';
        html += '<tr><td>' + estado + '</td><td>' + titulo + '</td><td>' + info.horas + ' h</td></tr>';
    }
    return html;
}

function getProximamenteHTML() {
    let html = '';
    for (let i = 1; i <= 6; i++) {
        if (!esUDActiva(i)) {
            const info = UDS_INFO[i];
            html += '<li><strong>UD' + i + ':</strong> ' + info.titulo + ' (' + info.horas + ' h)</li>';
        }
    }
    return html ? '<div class="card"><h2>Próximamente</h2><ul>' + html + '</ul></div>' : '';
}
