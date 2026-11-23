# Matriz de requisitos y verificación

Alcance: `uis/website` en la rama `feature/healthcore-public-website`. No se modificó `BRIEFING.md`.

| Requisito | Estado | Prueba realizada | Resultado |
|---|---|---|---|
| Trabajar sobre el repositorio y la ruta de producto existentes | Verificado | Revisados `README.md`, `uis/README.md`, `AGENTS.md`, reglas y contexto HealthCore | Sitio ubicado en `uis/website`; sin repositorio nuevo |
| Leer el plan aprobado | Pendiente | Búsqueda en el repositorio y materiales disponibles | No se encontró el plan. Esta implementación continúa con los requisitos de la petición y la rúbrica oficial |
| No modificar `BRIEFING.md` | Verificado | Comparación del archivo de trabajo con `main` | Sin diferencias |
| Landing con header, navegación, hero, secciones, CTA y footer | Verificado | Inspección estructural de `index.html` | Incluye navegación, hero, servicios, enfoque, ubicaciones, CTA y footer |
| Contenido basado en HealthCore | Verificado | Contraste manual con `BRIEFING.md` y `CONTEXT.es.md` | Servicios y ubicaciones corresponden a los datos disponibles |
| Dos o más secciones adicionales | Verificado | Recuento de secciones semánticas de la landing | Incluye servicios, enfoque y ubicaciones, además del hero y CTA |
| Formulario con campos exactos del briefing | Limitación documentada | Revisión de `BRIEFING.md` | El briefing no define campos. Se implementaron campos mínimos inferidos: nombre, email, teléfono opcional, ubicación y servicio; no se piden datos clínicos |
| Tipos de campo, etiquetas y agrupación | Verificado | Parser HTML: cinco controles, etiquetas asociadas y `fieldset`/`legend` | Nombre `text`, email `email`, teléfono `tel` y dos listas `select`; labels asociados |
| Campos obligatorios marcados | Verificado | Inspección de atributos HTML y pruebas de validación | Nombre, email, ubicación y servicio son obligatorios; teléfono es opcional |
| Validación específica para cada campo | Verificado | `node validation.test.js` | 35 aserciones pasan: vacíos, límites de nombre/email/teléfono, formatos inválidos y todas las opciones de ubicación/servicio |
| Validación en tiempo real y al perder foco | Verificado a nivel de lógica | Pruebas Node con DOM simulado | Se actualizan los errores al editar campos ya validados y al salir del campo |
| Bloquear datos inválidos y mostrar éxito simulado | Verificado a nivel de lógica | Pruebas Node con DOM simulado | El envío inválido se bloquea; los datos válidos muestran confirmación simulada |
| Botón para limpiar formulario | Verificado a nivel de lógica | Prueba de evento `reset` | Limpia valores, errores, estados ARIA y mensaje de estado |
| No enviar ni persistir los datos del formulario | Verificado por inspección | Búsqueda de llamadas de red y prueba del código | No hay llamadas `fetch`, `XMLHttpRequest` ni envío a backend; el sitio lo informa claramente |
| HTML semántico y jerarquía | Verificado estáticamente | Parser HTML | Header, nav, main, sections, artículos, formulario, fieldsets, legends y footer presentes |
| Atributos ARIA y errores anunciables | Verificado estáticamente | Revisión de `aria-label`, `aria-describedby`, `aria-invalid`, `aria-live` y `role=status` | Los campos relacionan sus instrucciones y errores; el estado anuncia el resultado |
| Acceso por teclado y foco visible | Verificado en marcado | Revisión de enlaces, botones, inputs y clases de foco | Controles nativos y estilos `focus-visible`; no se pudo hacer una sesión interactiva de teclado en navegador |
| Contraste mínimo de colores | Verificado por cálculo | Cálculo WCAG de combinaciones de texto/fondo utilizadas | Las combinaciones comprobadas alcanzan al menos 4,5:1 |
| Diseño mobile-first y breakpoints Tailwind | Verificado en clases; visual pendiente | Inspección de utilidades `sm:`, `md:` y `lg:` en ambas páginas | Breakpoints presentes; no fue posible confirmar visualmente el renderizado en un navegador |
| Imágenes con texto alternativo | No aplica | Inspección de imágenes | No se usan imágenes; los SVG decorativos tienen `aria-hidden="true"` |
| Estilos con Tailwind y sin CSS manual | Verificado | Inspección de los archivos | Tailwind CDN y clases utilitarias; sin hoja CSS propia |
| SEO básico | Verificado estáticamente | Revisión de títulos, descripciones y Open Graph | Metadatos presentes; no hay dominio público disponible para probar canonical/preview |
| Schema.org | Verificado | Parseo JSON del bloque JSON-LD | JSON válido con `MedicalOrganization`, servicios, áreas y año de fundación |
| JavaScript sin errores de sintaxis | Verificado | `node --check validation.js` y `node --check validation.test.js` | Ambos comandos pasan |
| Servir ambos documentos por HTTP | Verificado con servidor de humo | Servidor estático Python temporal en el entorno; solicitudes a `/`, `/application.html` y `/validation.js` | Las tres rutas respondieron HTTP 200 |
| Comando `npx` en Codespaces | No verificado en Codespaces | Se intentó `npx --yes http-server . -p 3000 -a 0.0.0.0` en el entorno disponible | El proceso falló al consultar interfaces de red (`uv_interface_addresses`); el entorno no es un Codespace |
| Consola del navegador | Pendiente | Intento de abrir el preview local en el navegador conectado | El navegador no pudo acceder al servidor local; no se atribuye una consola limpia |
| Responsive real en móvil, tablet y escritorio | Pendiente | La automatización Chromium no pudo arrancar por restricción de sockets del entorno | Requiere probar las vistas a 375, 768 y 1440 px en Codespaces o Chrome local |
| Lighthouse/PageSpeed ≥80 | Pendiente | No se dispone de URL pública ni navegador automatizable en este entorno | No hay puntuación Lighthouse; no se declara superado |
| URL pública de Codespaces | Pendiente | No hay un Codespace asociado disponible para reenviar el puerto | Debe generarse al abrir el repositorio en Codespaces y exponer el puerto 3000 |
| Pull Request | Verificado | Estado consultado después de publicar la rama | PR #4 abierta como borrador contra `main`, sin fusionar |
