#!/usr/bin/env python3
"""
Genera un archivo Word (.docx) con el cuestionario de conocimientos previos
para importar en Microsoft Forms mediante Quick Import.

Uso: python generar_cuestionario.py
Requisitos: pip install python-docx
"""

from docx import Document
from docx.shared import Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH

def crear_cuestionario():
    doc = Document()

    title = doc.add_heading('Cuestionario de Conocimientos Previos', 0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER

    subtitle = doc.add_paragraph()
    subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = subtitle.add_run('Seguridad Informatica - 0226')
    run.font.size = Pt(14)

    doc.add_paragraph()

    doc.add_paragraph(
        'Este cuestionario tiene como objetivo conocer tu nivel de conocimientos previos '
        'sobre los contenidos que necesitaremos en este modulo. No se evalua, solo nos '
        'sirve para adaptar el ritmo de trabajo al grupo. Responde con sinceridad.'
    )

    doc.add_paragraph()

    preguntas = [
        {
            'texto': 'Senala cual de estos programas es un sistema operativo:',
            'opciones': [
                'a) Visual Studio Code',
                'b) Ubuntu',
                'c) Firefox',
                'd) Excel'
            ]
        },
        {
            'texto': 'En Linux, que comando se utiliza para desplazarse entre directorios?',
            'opciones': [
                'a) ls',
                'b) mv',
                'c) cd',
                'd) rm'
            ]
        },
        {
            'texto': 'Que es una maquina virtual?',
            'opciones': [
                'a) Un ordenador portatil de pequeno tamano',
                'b) Un programa que emula un ordenador completo dentro de otro',
                'c) Un dispositivo de almacenamiento externo',
                'd) Una red inalambrica'
            ]
        },
        {
            'texto': 'Que es Docker?',
            'opciones': [
                'a) Un navegador web alternativo',
                'b) Un gestor de contenedores que empaqueta aplicaciones con su entorno',
                'c) Un programa de edicion de video',
                'd) Un tipo de cable de red'
            ]
        },
        {
            'texto': 'Cual es la diferencia principal entre una maquina virtual y un contenedor?',
            'opciones': [
                'a) No hay diferencia, son lo mismo',
                'b) La MV emula hardware completo; el contenedor comparte el SO del anfitrion',
                'c) El contenedor es mas lento que la MV',
                'd) La MV no necesita recursos del ordenador'
            ]
        },
        {
            'texto': 'Que capa del modelo OSI se encarga del enrutamiento de paquetes entre redes distintas?',
            'opciones': [
                'a) Capa 2 (Enlace de datos)',
                'b) Capa 3 (Red)',
                'c) Capa 4 (Transporte)',
                'd) Capa 7 (Aplicacion)'
            ]
        },
        {
            'texto': 'En que capa del modelo OSI opera un switch de red?',
            'opciones': [
                'a) Capa 1 (Fisica)',
                'b) Capa 2 (Enlace de datos)',
                'c) Capa 3 (Red)',
                'd) Capa 4 (Transporte)'
            ]
        },
        {
            'texto': 'Que protocolo utiliza un router para decidir por donde enviar cada paquete?',
            'opciones': [
                'a) TCP',
                'b) OSPF',
                'c) HTTP',
                'd) FTP'
            ]
        },
        {
            'texto': 'Que dispositivo de red traduce direcciones IP a direcciones MAC?',
            'opciones': [
                'a) DNS',
                'b) DHCP',
                'c) ARP',
                'd) NAT'
            ]
        },
        {
            'texto': 'Una direccion IPv4 esta formada por:',
            'opciones': [
                'a) 6 bloques de 4 digitos hexadecimales',
                'b) 4 octetos separados por puntos, cada uno entre 0 y 255',
                'c) 8 octetos separados por dos puntos',
                'd) Un numero entero de 64 bits'
            ]
        },
        {
            'texto': 'Cual de estas contrasenas es mas segura?',
            'opciones': [
                'a) Maria2026!',
                'b) Clave123',
                'c) p4$$w0rD_82x',
                'd) Contrasena'
            ]
        },
        {
            'texto': 'Si recibes un correo de tu banco pidiendote que hagas clic en un enlace para "verificar tu cuenta", lo mas probable es que se trate de:',
            'opciones': [
                'a) Una promocion legitima del banco',
                'b) Un ataque de phishing',
                'c) Un error del sistema de correo',
                'd) Una actualizacion de seguridad'
            ]
        },
        {
            'texto': 'Que significa "cifrar" un archivo?',
            'opciones': [
                'a) Comprimirlo para que ocupe menos espacio',
                'b) Convertir su contenido en codigo ilegible sin la clave adecuada',
                'c) Moverlo a una carpeta oculta',
                'd) Eliminar sus metadatos'
            ]
        },
        {
            'texto': 'Un ataque de fuerza bruta consiste en:',
            'opciones': [
                'a) Enganar al usuario para que revele su contrasena',
                'b) Probar sistematicamente combinaciones hasta encontrar la correcta',
                'c) Interceptar el trafico de red entre dos equipos',
                'd) Inyectar codigo malicioso en una pagina web'
            ]
        },
        {
            'texto': 'Que hace un antivirus?',
            'opciones': [
                'a) Acelera la velocidad del procesador',
                'b) Detecta y elimina software malicioso del sistema',
                'c) Comprime los archivos para ahorrar espacio',
                'd) Gestiona las actualizaciones del sistema operativo'
            ]
        }
    ]

    for i, pregunta in enumerate(preguntas, 1):
        doc.add_paragraph(f'{i}. {pregunta["texto"]}')

        for opcion in pregunta['opciones']:
            p = doc.add_paragraph(opcion)
            p.paragraph_format.left_indent = Pt(20)

        doc.add_paragraph()

    doc.save('cuestionario-previos.docx')
    print('Archivo "cuestionario-previos.docx" generado correctamente.')
    print('Para importar en Microsoft Forms:')
    print('1. Ir a forms.office.com')
    print('2. Seleccionar "Quick Import" > "Upload from this device"')
    print('3. Seleccionar el archivo "cuestionario-previos.docx"')
    print('4. Revisar las preguntas importadas')
    print('5. Anadir respuesta correcta y puntos a cada pregunta')

if __name__ == '__main__':
    crear_cuestionario()
