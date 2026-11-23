# Contexto técnico confirmado

## Propósito y estructura del repositorio

Este repositorio es una plantilla de monorepo para el proyecto transversal de AI Engineering de 4Geeks, personalizada para HealthCore. El mapa de carpetas está documentado en [README.es.md](../README.es.md). La plantilla base contenía documentación y estructura, sin un runner global; ahora `uis/website` incluye el sitio estático de este hito.

| Ruta | Función confirmada por la plantilla | Evidencia |
| --- | --- | --- |
| `./uis/website` | Sitio web público de HealthCore | [uis/README.es.md](../uis/README.es.md) |
| `./uis/backoffice` | Aplicación interna de administración y operaciones | [uis/README.es.md](../uis/README.es.md) |
| `./services` (ruta solicitada como `/services`) | APIs y workers backend, cada servicio con documentación propia | [services/README.es.md](../services/README.es.md) |
| `./data/raw`, `./data/pipelines`, `./data/process`, `./data/eval` | Datos fuente, ingesta/transformación, artefactos procesados y evaluación | README de cada carpeta bajo `data/` |
| `./agents` | Agentes de IA con documentación de objetivo, capacidades, fuentes, herramientas y pruebas | [agents/README.es.md](../agents/README.es.md) |
| `./skills` | Skills reutilizables del monorepo y del trabajo de agentes | [skills/README.es.md](../skills/README.es.md) |
| `./mcps`, `./workflows` | Servidores MCP y automatización/orquestación | README de cada carpeta |
| `./packages`, `./shared` | Paquetes versionables y recursos compartidos no empaquetados | README de cada carpeta |
| `./docs`, `./infra`, `./scripts`, `./internal` | Documentación transversal, infraestructura, scripts auxiliares y herramientas internas | README de cada carpeta |

La plantilla reservaba `uis/website`, `uis/backoffice` y `services/` para futuras implementaciones. Este hito crea únicamente el sitio público en `uis/website`.

## Stack y herramientas observables

- `.devcontainer/devcontainer.json` especifica una imagen base Ubuntu 24.04, Node.js 22, Python 3.12, Docker outside-of-Docker y GitHub CLI. Esto describe el entorno preparado, no demuestra que ya exista una aplicación con esos stacks.
- `packages/shared/package.json` identifica un paquete privado `@repo/shared-types` con `index.ts` como entrada/tipos, pero no declara scripts y no se observó runner de workspace en la raíz.
- La plantilla no contenía código de producto que permitiera confirmar frameworks, bases de datos, endpoints, arquitectura de despliegue o flujos de ejecución. `uis/website` usa HTML estático, Tailwind CDN y JavaScript Vanilla, según el alcance solicitado para este hito.

## Comandos y validación

Los README de la plantilla no documentan comandos globales de desarrollo, build, test o validación de Markdown. El `postCreateCommand` del devcontainer prepara pnpm/Python y ejecuta instalaciones solo si encuentra manifiestos, pero en el estado actual no hay `package.json` ni `pyproject.toml` en la raíz. No se debe describir esa preparación como un comando de build o test.

El paquete `packages/shared` declara `"scripts": {}`. Por tanto, para esta infraestructura documental no existe una comprobación automatizada de Markdown documentada por la plantilla. Se pueden realizar revisiones manuales de contenido, enlaces y diff, sin atribuirles cobertura automatizada.

## Convenciones, restricciones y decisiones pendientes

- Leer el README local antes de modificar una carpeta; cada app, servicio, agente o pipeline futuro debe documentar objetivo, tecnología y cómo ejecutarlo, según [README.es.md](../README.es.md).
- Mantener interfaces en `uis/`, APIs/servicios en `services/`, datos y pipelines en las rutas `data/`, y evitar crear una estructura paralela.
- Los README de datos prohíben implícitamente tratar datos sensibles como fixtures de repositorio: `data/raw/README.es.md` recomienda evitar subirlos y `data/eval/README.es.md` recomienda datos sintéticos o anonimizados.
- La plantilla no define todavía frameworks de producto, bases de datos, despliegue, CI, arquitectura detallada de servicios ni comandos verificables. Decidirlos solo cuando un hito y sus README/propuesta técnica aporten evidencia.
- El README raíz conserva referencias de plantilla a `CONTEXT.md` y empresas Brasaland/TrackFlow/Nexova; para el dominio actual, la elección y contexto HealthCore están en `BRIEFING.md`, `company-choice.md` y `CONTEXT.es.md`. No se cambió el README genérico en este hito.

## Sitio web público — estado técnico

- `uis/website/index.html` y `application.html` son páginas estáticas con HTML semántico, clases Tailwind cargadas desde CDN y JavaScript Vanilla.
- `validation.js` valida nombre, email, teléfono opcional, ubicación y servicio. El envío es simulado y no transmite ni guarda los datos.
- El briefing no define campos de contacto y el plan aprobado no estaba en los archivos disponibles. Los campos actuales son una propuesta mínima basada en las ubicaciones y servicios confirmados; no solicitan datos clínicos.
- `validation.test.js` usa Node.js sin dependencias y cubre validaciones, límites, opciones, reset y éxito simulado.
- El README de `uis/website` documenta ejecución con `npx http-server`. En el entorno de esta revisión, el comando no pudo consultar interfaces de red y no había un Codespace conectado.
