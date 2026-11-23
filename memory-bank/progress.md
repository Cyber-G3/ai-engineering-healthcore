# Progreso — Ingeniería impulsada por IA

## Inspección inicial

- Repositorio: `Cyber-G3/ai-engineering-healthcore`; remoto `origin` apunta a ese fork. La rama base era `main` y el clon estaba limpio al inicio.
- Empresa elegida confirmada: HealthCore, según `company-choice.md`; `BRIEFING.md` contiene el briefing completo y específico de la red de clínicas de EE. UU. y Reino Unido.
- El archivo fuente original bajo `00-general-contexts` no está incluido en el clon. El historial registra `319f273 Add HealthCore company briefing`; la comparación con la fuente original queda pendiente.
- La plantilla describe los destinos `uis/website`, `uis/backoffice` y `services/`; no se encontraron aplicaciones ni scripts globales.
- Los README de carpeta recomiendan documentar componentes, no exponer datos sensibles y usar datos sintéticos/anonimizados en evaluación.

## Infraestructura creada en este hito

- `memory-bank/projectbrief.md`: contexto de negocio, foco seleccionado, restricciones y procedencia de afirmaciones.
- `memory-bank/techContext.md`: estructura, tecnología confirmada por archivos, convenciones y límites de verificación.
- `AGENTS.md`: lectura inicial, consulta de reglas, inspección de README/código, flujo precommit y condiciones de consulta.
- `.agents/rules/healthcore-development.md`: regla activa para cambios del repositorio con cautelas sobre datos sanitarios, rutas y revisión humana.
- `.agents/skills/review-no-show-follow-up/SKILL.md`: skill específica para revisar cambios del flujo de priorización y seguimiento de citas con riesgo de inasistencia.

## Verificaciones

- Inspección de rama, estado y remoto: al inicio, clon limpio en `main` siguiendo `origin/main`; se creó `feature/agent-memory-bank` desde esa base.
- Briefing: comprobado como contenido completo de HealthCore; no es placeholder. El historial contiene `319f273 Add HealthCore company briefing`. No cotejado byte a byte con `00-general-contexts`, que no está disponible en este clon ni en los directorios locales inspeccionados.
- Rutas de producto: contrastadas con `uis/README.es.md` (sitio público y backoffice) y `services/README.es.md` (APIs y workers). No se crearon aplicaciones ni carpetas de producto.
- AGENTS: revisión manual confirma lectura inicial de briefing/memoria/reglas, inspección de README/código, cinco pasos ordenados antes del commit y condiciones concretas de consulta.
- Regla: revisión manual confirma alcance explícito siempre activo y convenciones/condiciones de parada ligadas a HealthCore.
- Skill: revisión manual confirma frontmatter y secciones de objetivo, uso, inputs, procedimiento, output y criterios verificables, específicas del flujo de citas con riesgo de inasistencia.
- Comandos: revisados README, manifiestos y `.devcontainer/devcontainer.json`; no hay comando de build/test global ni validador Markdown documentado. No se ejecutó build ni prueba; no hay aplicación ejecutable en este estado del monorepo.
- Enlaces y rutas citadas en los documentos nuevos: revisados manualmente contra los archivos/README existentes.
- Diff y estado Git: revisados manualmente en `feature/agent-memory-bank`; el conjunto preparado contiene exactamente seis documentos de este hito y no incluye cambios de producto, briefing/contexto, dependencias ni archivos del entorno. No se observaron secretos ni datos de pacientes en el diff.

## Decisiones y próximos pasos

- Se conserva `BRIEFING.md`, `CONTEXT.es.md`, `CONTEXT.md` y el resto de la plantilla sin reescrituras. El `CONTEXT.md` y el README raíz aún muestran texto genérico heredado; la documentación de este hito declara las fuentes HealthCore aplicables y el límite de procedencia.
- No se crea código de aplicación ni se declaran stacks, comandos o políticas regulatorias que no estén demostrados.
- Commit de entrega en GitHub: `2aa72f1` (`Add HealthCore agent context and reusable skill`); el árbol remoto fue cotejado y coincide con el commit local `4241816`.
- Rama publicada: `feature/agent-memory-bank`. El `git push` desde terminal no pudo autenticar; la misma rama y los seis archivos se publicaron mediante la conexión autenticada de GitHub.
- Pull Request abierta contra `main`: [#2](https://github.com/Cyber-G3/ai-engineering-healthcore/pull/2). No se ha fusionado.
- Pendiente para el siguiente hito: obtener el archivo original de `00-general-contexts` para cotejar la procedencia exacta del briefing; definir decisiones de producto/técnicas solo cuando exista evidencia o aprobación.

## Hito — Sitio web público de HealthCore (23/11/2026)

- Rama local preparada desde `main`: `feature/healthcore-public-website`.
- Se añadieron `uis/website/index.html`, `application.html`, `validation.js`, `validation.test.js`, `README.md` y `QA_MATRIX.md`.
- El formulario recoge nombre, email, teléfono opcional, ubicación y servicio de interés. Es una propuesta mínima: `BRIEFING.md` no enumera campos y el plan aprobado no se encontró entre los archivos disponibles. No se solicitan datos clínicos y la demo no envía ni almacena datos.
- Verificaciones: 35 aserciones de validación pasan; `node --check` pasa; comprobaciones estáticas de semántica, etiquetas, enlaces internos, breakpoints Tailwind y JSON-LD pasan; cálculo de contraste de colores pasa. Un servidor HTTP de humo sirvió las tres rutas solicitadas con HTTP 200.
- Límites del entorno: `npx http-server` falló al consultar interfaces de red (`uv_interface_addresses`); Chrome automatizado no pudo iniciar por restricción de sockets y el navegador conectado no pudo acceder al servidor local. Responsive visual, consola del navegador y Lighthouse quedan sin verificar. No hay URL pública de Codespaces.
- Commit local: `dee601c` (`Build HealthCore public website and contact form`). El push directo desde terminal no pudo autenticar; se publicó el mismo contenido mediante la conexión GitHub y se cotejaron los SHA de los ocho archivos.
- Pull Request: [#4](https://github.com/Cyber-G3/ai-engineering-healthcore/pull/4), abierta como borrador contra `main`; estado `open`, `merged=false`. No se hizo merge.
- No se modificó `BRIEFING.md`. El SHA de la copia del briefing coincide con `main`.
