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
| Acceso por teclado y foco visible | Verificado en marcado | Revisión de enlaces, botones, inputs y clases de foco | Controles nativos y estilos `focus-visible`; la navegación completa por teclado aún requiere una prueba manual |
| Contraste mínimo de colores | Verificado por cálculo | Cálculo WCAG de combinaciones de texto/fondo utilizadas | Las combinaciones comprobadas alcanzan al menos 4,5:1 |
| Diseño mobile-first y breakpoints Tailwind | Verificado | Revisión de clases en ambas páginas y prueba visual de la vista publicada | Las páginas usan breakpoints `sm:`, `md:` y `lg:`; se adaptan a los tres tamaños probados |
| Imágenes con texto alternativo | No aplica | Inspección de imágenes | No se usan imágenes; los SVG decorativos tienen `aria-hidden="true"` |
| Estilos con Tailwind y sin CSS manual | Verificado | Inspección de los archivos | Tailwind CDN y clases utilitarias; sin hoja CSS propia |
| SEO básico | Verificado | Revisión de metadatos y PageSpeed Insights público | Metadatos presentes; Lighthouse SEO 100 en móvil y escritorio |
| Schema.org | Verificado | Parseo JSON del bloque JSON-LD | JSON válido con `MedicalOrganization`, servicios, áreas y año de fundación |
| JavaScript sin errores de sintaxis | Verificado | `node --check validation.js` y `node --check validation.test.js` | Ambos comandos pasan |
| Servir ambos documentos por HTTP | Verificado con servidor de humo | Servidor estático Python temporal en el entorno; solicitudes a `/`, `/application.html` y `/validation.js` | Las tres rutas respondieron HTTP 200 |
| Comando `npx` en Codespaces | No verificado en Codespaces | Se intentó `npx --yes http-server . -p 3000 -a 0.0.0.0` en el entorno disponible | Node falló al consultar interfaces de red (`uv_interface_addresses`); no se pudo iniciar un Codespace porque la cuenta muestra la cuota agotada |
| Consola del navegador | Verificado con observaciones | Revisión de la consola en el sitio publicado | Sin errores de JavaScript propios del sitio; Tailwind CDN muestra su aviso de uso en producción y una extensión del navegador generó un error ajeno a la página |
| Responsive real en móvil, tablet y escritorio | Verificado | Prueba visual de `index.html` y `application.html` a 375×812, 768×1024 y 1440×900 CSS px | No hay desbordamiento horizontal; navegación y formulario se reorganizan correctamente en las tres vistas |
| Lighthouse/PageSpeed ≥80 | Verificado | PageSpeed Insights con Lighthouse 13.6.0 en la URL pública | Móvil: rendimiento 96, accesibilidad 100, buenas prácticas 100, SEO 100. Escritorio: 97, 100, 100 y 100. [Móvil](https://pagespeed.web.dev/analysis/https-cyber-g3-github-io-ai-engineering-healthcore/iv5hpfps2k?form_factor=mobile) · [Escritorio](https://pagespeed.web.dev/analysis/https-cyber-g3-github-io-ai-engineering-healthcore/iv5hpfps2k?form_factor=desktop) |
| URL pública de Codespaces | No disponible | Revisión de Codespaces en GitHub | GitHub indica que se agotó la cuota gratuita o el presupuesto. Sitio alternativo público de GitHub Pages: https://cyber-g3.github.io/ai-engineering-healthcore/ |
| URL pública de GitHub Pages | Verificado | Despliegue GitHub Actions y apertura de la página | Sitio accesible en https://cyber-g3.github.io/ai-engineering-healthcore/ |
| Pull Request | Verificado | Estado consultado después de publicar la rama | PR #4 abierta como borrador contra `main`, sin fusionar; incluye workflow de GitHub Pages |
