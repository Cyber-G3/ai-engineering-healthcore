# Contexto técnico confirmado

## Propósito y estructura del repositorio

Este repositorio es una plantilla de monorepo para el proyecto transversal de AI Engineering de 4Geeks, personalizada para HealthCore. El mapa de carpetas está documentado en [README.es.md](../README.es.md). La copia actual contiene documentación y estructura base; no se encontró código de aplicaciones desplegable ni un runner global.

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

No se crearon `uis/website`, `uis/backoffice` ni servicios. Los README reservan esos destinos para futuras implementaciones.

## Stack y herramientas observables

- `.devcontainer/devcontainer.json` especifica una imagen base Ubuntu 24.04, Node.js 22, Python 3.12, Docker outside-of-Docker y GitHub CLI. Esto describe el entorno preparado, no demuestra que ya exista una aplicación con esos stacks.
- `packages/shared/package.json` identifica un paquete privado `@repo/shared-types` con `index.ts` como entrada/tipos, pero no declara scripts y no se observó runner de workspace en la raíz.
- El árbol actual contiene README y plantillas; no contiene código de producto que permita confirmar frameworks, bases de datos, endpoints, arquitectura de despliegue o flujos de ejecución.

## Comandos y validación

Los README de la plantilla no documentan comandos globales de desarrollo, build, test o validación de Markdown. El `postCreateCommand` del devcontainer prepara pnpm/Python y ejecuta instalaciones solo si encuentra manifiestos, pero en el estado actual no hay `package.json` ni `pyproject.toml` en la raíz. No se debe describir esa preparación como un comando de build o test.

El paquete `packages/shared` declara `"scripts": {}`. Por tanto, para esta infraestructura documental no existe una comprobación automatizada de Markdown documentada por la plantilla. Se pueden realizar revisiones manuales de contenido, enlaces y diff, sin atribuirles cobertura automatizada.

## Convenciones, restricciones y decisiones pendientes

- Leer el README local antes de modificar una carpeta; cada app, servicio, agente o pipeline futuro debe documentar objetivo, tecnología y cómo ejecutarlo, según [README.es.md](../README.es.md).
- Mantener interfaces en `uis/`, APIs/servicios en `services/`, datos y pipelines en las rutas `data/`, y evitar crear una estructura paralela.
- Los README de datos prohíben implícitamente tratar datos sensibles como fixtures de repositorio: `data/raw/README.es.md` recomienda evitar subirlos y `data/eval/README.es.md` recomienda datos sintéticos o anonimizados.
- La plantilla no define todavía frameworks de producto, bases de datos, despliegue, CI, arquitectura detallada de servicios ni comandos verificables. Decidirlos solo cuando un hito y sus README/propuesta técnica aporten evidencia.
- Los README raíz identifican HealthCore y enlazan las fuentes canónicas. `CONTEXT.md` solo orienta a las fuentes para evitar duplicar el briefing.


## Preparación del repositorio (25/11/2026)

- Codespaces declara Python 3.12 y Node.js 22, la extensión 4Geeks Student, Jupyter, Python, GitHub CLI, Docker tooling y herramientas habituales de VS Code.
- El comando de creación prepara un entorno virtual Python sin instalar dependencias de proyecto. Las dependencias deben pertenecer a cada proyecto/milestone y quedar declaradas con sus locks; no hay manifiesto raíz común.
- `.gitignore` excluye entornos locales, cachés, logs y archivos típicos de secretos, sin ignorar datos de curso de forma general.
- CI valida whitespace, JSON versionado y que los diffs de PR no alteren `BRIEFING.md`. No se configura build/test global sin código ejecutable o comandos de proyecto aprobados.
- `.github/copilot-instructions.md` remite a `AGENTS.md` y reglas activas; no duplica la política completa.

- Verificación de la PR #5: el workflow básico terminó correctamente; revisión de enlaces relativos del contenido de infraestructura sin enlaces rotos. La validación de aplicaciones y pruebas específicas queda condicionada a que los hitos incorporen código y comandos declarados.
