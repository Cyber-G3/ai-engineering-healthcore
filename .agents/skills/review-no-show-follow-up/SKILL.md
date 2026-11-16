---
name: review-no-show-follow-up
description: Revisa cambios de producto o diseño que prioricen citas con riesgo de inasistencia y propongan seguimiento para HealthCore. Úsala antes de modificar ese flujo, sus datos o sus interacciones con pacientes.
---

# Revisión del seguimiento de citas con riesgo de inasistencia

## Objetivo

Comprobar que un cambio del flujo de priorización de citas de HealthCore sea coherente con el briefing, trate los datos con cautela y mantenga la decisión de contacto en manos del personal autorizado.

## Cuándo usarla

- Antes de implementar o revisar el score, cola, alerta o vista de citas con riesgo de no-show.
- Antes de cambiar recordatorios, contacto proactivo, reprogramación o la información visible para el personal de acceso.
- Antes de añadir datos o evaluaciones relacionadas con asistencia a citas.

No la uses para cambios sin relación con citas, experiencia del paciente o seguimiento de inasistencias.

## Inputs

- La propuesta/tarea concreta y su diff, si ya existe.
- `BRIEFING.md`, secciones «Experiencia del Paciente y Acceso» y «Cumplimiento y Gobierno del Dato».
- `company-choice.md`, secciones «Reto de automatización con IA» y «My AI Agent Idea».
- `CONTEXT.es.md`, especialmente «Enfoque elegido», «Esquema inicial propuesto» y «Restricciones para el diseño».
- El README de la carpeta afectada y el código o pruebas existentes, si los hay.
- `memory-bank/projectbrief.md` y `memory-bank/techContext.md`, si existen.

No solicites ni uses datos reales de pacientes como entrada de esta revisión.

## Procedimiento

1. Extrae del briefing el hecho medible: 22 % de no-shows y coste anual estimado de 1,8 M USD; trátalos como cifras del escenario, no como telemetría actual.
2. Comprueba que la función propuesta solo identifica/prioriza citas y explica la señal para que personal autorizado la revise.
3. Comprueba que cualquier recordatorio, contacto o reprogramación necesita aprobación humana. Rechaza cancelación automática, cambios de plan clínico o decisiones clínicas por el agente.
4. Distingue políticas confirmadas de propuestas: la ejecución 48 horas antes consta como idea de `company-choice.md`, no como política operativa aprobada.
5. Revisa qué campos y datos se usan. Trata los campos del esquema de `CONTEXT.es.md` como hipótesis; pide confirmación antes de convertirlos en contrato. Comprueba minimización, acceso por función y trazabilidad según el contexto disponible.
6. Comprueba que ejemplos/evaluaciones no expongan datos de pacientes; el README de evaluación recomienda datos sintéticos o anonimizados. Detente si no se puede determinar si los datos contienen PHI/PII.
7. Revisa que la ubicación respete el README de la carpeta afectada y que el cambio no invente stack, infraestructura o comandos.
8. Si falta una política de cumplimiento, una decisión de producto o evidencia técnica necesaria, informa el bloqueo en vez de resolverlo mediante suposición.

## Output esperado

Un resumen de revisión con: hallazgos por severidad; supuestos y propuestas distinguidos de hechos; archivos/rutas afectados; datos sensibles o permisos implicados; decisiones que requieren aprobación; comprobaciones documentadas disponibles y límites de verificación. Si se revisa un diff, indica si satisface los criterios o qué debe corregirse.

## Criterios de aceptación

- Se consultaron las fuentes de HealthCore y el README de cada ruta tocada.
- Las cifras 22 % y 1,8 M USD se describen como cifras del briefing, no como valores actuales.
- El disparador de 48 horas se marca como propuesta si aparece.
- El personal autorizado conserva la aprobación de contacto/reprogramación; no hay autonomía clínica o de cancelación atribuida al agente.
- No se introducen datos reales de pacientes; el uso de campos hipotéticos o cambios de política queda señalado para confirmar.
- La revisión nombra los archivos afectados, evidencia de aceptación y cualquier bloqueo; no afirma haber ejecutado pruebas que no estén documentadas.
