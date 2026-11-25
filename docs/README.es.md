# Documentación del repositorio

Usa esta página como índice. Mantén los hechos de negocio en sus fuentes canónicas y evita copiarlos en documentos de arquitectura o de hitos.

| Necesidad | Ubicación canónica |
| --- | --- |
| Hechos oficiales y restricciones de HealthCore | [`BRIEFING.md`](../BRIEFING.md) |
| Foco elegido para el proyecto | [`company-choice.md`](../company-choice.md) |
| Resumen del dominio e hipótesis de esquema | [`CONTEXT.es.md`](../CONTEXT.es.md) |
| Instrucciones y guías reutilizables para agentes | [`AGENTS.md`](../AGENTS.md), [`.agents/rules/`](../.agents/rules/), [`.agents/skills/`](../.agents/skills/) |
| Estado técnico y continuidad del curso | [`memory-bank/progress.md`](../memory-bank/progress.md), [`memory-bank/techContext.md`](../memory-bank/techContext.md) |
| Responsabilidades de las carpetas | README de `uis/`, `services/`, `data/`, `agents/`, `skills/`, `mcps/` y `workflows/` |

## Arquitectura y decisiones

Todavía no se ha aprobado una arquitectura completa de aplicaciones HealthCore. Documenta la arquitectura cuando un hito introduzca un sistema concreto; guarda los diagramas e interfaces específicos junto al sistema y enlázalos aquí.

Registra decisiones de arquitectura duraderas como `docs/decisions/NNNN-titulo-breve.md` cuando se tome una decisión. Cada registro debe indicar contexto, estado (propuesta o aceptada), responsable de la decisión, alternativas y consecuencias. No conviertas una propuesta o recomendación de plantilla en una decisión aceptada sin aprobación.

## Documentación por hito

Crea un documento bajo `docs/milestones/` solo cuando un hito tenga alcance o entregables concretos. Enlázalo desde el README del componente correspondiente y registra su estado en `memory-bank/progress.md`. La plantilla enumera Web, Programming, Backend, Telemetry, RAG, Agents, Workflows y Real-time; confirma el orden del curso con los materiales actuales de 4Geeks antes de crear planes con fechas.

## APIs, interfaces, pruebas y validación

- Documenta cada API junto a su servicio en `services/<servicio>/README.md`; añade un contrato OpenAPI junto a la implementación cuando exista una API.
- Documenta los flujos de usuario y el comportamiento de interfaz en `uis/<aplicación>/README.md` cuando exista esa aplicación.
- Mantén las pruebas del componente junto al componente. Usa `data/eval/` para conjuntos de evaluación de modelos o agentes y sigue su README y las pautas de seguridad de datos.
- La validación global puede comprobar higiene de archivos y configuración. Añade compilación y pruebas solo cuando un proyecto real declare sus comandos y dependencias.
- No guardes datos reales o identificables de pacientes, credenciales ni secretos en este repositorio público.
