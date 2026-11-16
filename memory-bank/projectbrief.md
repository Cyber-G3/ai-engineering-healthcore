# Contexto de negocio — HealthCore

## Identidad y actividad

HealthCore es una red de atención sanitaria ambulatoria fundada en Austin en 2011. Opera 12 clínicas: nueve en Estados Unidos y tres en el Reino Unido; cuenta con unas 200 personas y una facturación anual aproximada de 28 millones de dólares. Ofrece atención primaria, consultas especializadas, gestión de enfermedades crónicas y programas preventivos. Fuente: [BRIEFING.md](../BRIEFING.md), secciones iniciales «Cómo está organizada la empresa» y «Dónde está la empresa hoy».

## Problema y público afectado

La empresa depende de sistemas heredados no integrados: dos EHR que no se comunican, procesos separados de reservas y facturación, y ausencia de una capa de datos compartida. La dirección recibe métricas retrasadas y contradictorias. Esto afecta a pacientes, personal clínico, equipos de acceso y facturación, cumplimiento, operaciones y dirección. Fuente: [BRIEFING.md](../BRIEFING.md), «Dónde está la empresa hoy» y «Los Departamentos y sus Problemas».

## Enfoque elegido para explorar

`company-choice.md` selecciona **Experiencia del Paciente y Acceso** y propone priorizar citas con riesgo de inasistencia para que el personal autorizado valore un recordatorio o contacto proactivo. El briefing estima una tasa de no-shows del 22 % y aproximadamente 1,8 millones de dólares anuales en citas perdidas. La idea del agente en `company-choice.md` propone una ejecución al actualizar la agenda y otra 48 horas antes; el propio documento aclara que el plazo de 48 horas es una propuesta, no una política confirmada.

La automatización es apoyo a decisiones: el personal revisa y aprueba el contacto o la reprogramación. No cancelar citas, cambiar planes clínicos ni tomar decisiones clínicas de forma autónoma. Fuentes: [BRIEFING.md](../BRIEFING.md), sección «Experiencia del Paciente y Acceso»; [company-choice.md](../company-choice.md), «Reto de automatización con IA» y «My AI Agent Idea»; [CONTEXT.es.md](../CONTEXT.es.md), «Enfoque elegido para este proyecto».

## Hoja de ruta de negocio descrita en el briefing

El briefing presenta necesidades y oportunidades por departamento, no una hoja de ruta aprobada con fechas. Entre ellas están reservas online unificadas, recordatorios, predicción de riesgo de inasistencia, revisión de reclamaciones, reporting ejecutivo, monitorización de cumplimiento e integración de sistemas. El reto elegido para explorar primero es la priorización de citas de riesgo y el seguimiento humano. Fuente: [BRIEFING.md](../BRIEFING.md), apartados «Los Departamentos y sus Problemas» y «¿Por qué elegir HealthCore?»; elección concreta en `company-choice.md`.

## Restricciones y cautelas

- HealthCore opera bajo HIPAA en Estados Unidos y UK GDPR en el Reino Unido; el briefing indica que deben evaluarse los sistemas que gestionen datos de pacientes bajo ambos marcos.
- El README de `data/raw/` recomienda documentar PII y evitar subir datos sensibles; los ejemplos o evaluaciones deben usar datos sintéticos o anonimizados conforme a `data/eval/README.es.md`.
- `CONTEXT.es.md` recoge como restricciones de diseño minimizar datos personales, aplicar acceso mínimo, mantener trazabilidad y permitir revisión humana. Sus campos de cita, asistencia, recordatorio y alerta se identifican explícitamente como hipótesis, no como especificación confirmada.
- No se han confirmado políticas concretas de residencia, retención, consentimiento, proveedores de mensajería, umbrales del modelo ni procedimiento de aprobación regulatoria. No presentarlas como decisiones de HealthCore.

## Estado de certeza

**Confirmado por archivos del repositorio:** HealthCore es la empresa elegida; los datos y problemas anteriores constan en `BRIEFING.md`; la dirección propuesta del agente y sus límites constan en `company-choice.md` y `CONTEXT.es.md`.

**Decisión de trabajo:** usar el briefing raíz y el contexto español como fuentes de dominio; tratar el score de inasistencia solo como señal para revisión humana.

**Procedencia verificada:** el original está en [`content/contexts/00-general-contexts/healthcore-BRIEFING.es.md`](https://github.com/4GeeksAcademy/ai-engineering-syllabus/blob/fd2da034894ba93ba738559280ccde074ab1d953/content/contexts/00-general-contexts/healthcore-BRIEFING.es.md). El blob Git de esa fuente y el de `BRIEFING.md` en este repositorio son idénticos (`5158cf167c0e61238bbd5ab023b5364fce92106d`), por lo que el contenido y el idioma ya coinciden exactamente. El historial local registra `319f273 Add HealthCore company briefing`.
