# Regla de desarrollo HealthCore

**Alcance: siempre activa en todo el repositorio.**

## Convenciones que debe respetar el agente

- Para hechos de negocio, usa `BRIEFING.md` y `CONTEXT.es.md`; usa `company-choice.md` para distinguir la idea elegida de las necesidades generales del briefing.
- Antes de cambiar una ruta, lee su README local y el código/configuración que ya exista. Sigue el mapa de `README.es.md`: interfaces en `uis/`, backend en `services/`, pipelines y datos en `data/`, agentes en `agents/` y capacidades compartidas en `skills/`.
- Mantén separadas las necesidades confirmadas, las propuestas de `company-choice.md` y las hipótesis de esquema de `CONTEXT.es.md`.
- No incluyas datos sanitarios reales o identificables en código, fixtures, prompts, logs, documentación o commits. Sigue `data/raw/README.es.md` y `data/eval/README.es.md` para datos fuente y evaluación.
- Los sistemas de apoyo a acceso pueden priorizar citas y sugerir seguimiento para revisión; las personas autorizadas aprueban la acción. No atribuyas capacidad clínica ni autonomía de cancelación al agente.

## Antes de cambiar una ruta

Lee el README de la carpeta afectada y consulta `memory-bank/techContext.md`. Para cambios relacionados con negocio, pacientes, citas o cumplimiento, consulta también `memory-bank/projectbrief.md`, `BRIEFING.md`, `CONTEXT.es.md` y `company-choice.md`. Confirma si hay código y comprobaciones existentes; no infieras un stack a partir del devcontainer.

## Evita o detente

- No añadas apps, dependencias, servicios, políticas de datos o comandos globales sin evidencia en la plantilla o decisión explícita.
- Detente si la petición necesita PHI/PII real, política regulatoria o decisión de producto no documentada, si permite acciones autónomas sobre citas, o si contradice las fuentes del proyecto. Expón la pregunta concreta y el archivo que falta.
- No uses el `CONTEXT.md` inglés sin modificar como fuente actual: contiene instrucciones placeholder de la plantilla. El contexto confirmado está en `BRIEFING.md` y `CONTEXT.es.md`.
