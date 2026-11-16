# Instrucciones para agentes

## Al inicio de cada sesión

1. Lee `BRIEFING.md` y `CONTEXT.es.md` para comprender el dominio HealthCore y sus límites.
2. Lee `memory-bank/projectbrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md` para conocer el objetivo, la evidencia técnica y el estado del trabajo.
3. Consulta las reglas activas de `.agents/rules/` antes de proponer o ejecutar cambios.
4. Inspecciona el estado Git y los archivos de la carpeta que vas a cambiar. Lee su README y el código existente antes de modificarla.

## Ubicación de producto

Respeta el mapa de la plantilla: web pública en `uis/website`, aplicación interna en `uis/backoffice`, y APIs/servicios backend en `services/`. Lee el README correspondiente antes de crear o modificar cualquiera de esas áreas. Mantén datos y pipelines en las rutas `data/` descritas por la plantilla; no crees un árbol alternativo de aplicaciones.

## Flujo obligatorio antes de cada commit

Completa estos pasos en orden:

1. Revisa el estado Git y enumera el alcance exacto de los archivos modificados; confirma que la rama es la prevista.
2. Ejecuta las comprobaciones documentadas en los README o manifiestos aplicables. Si no existe una comprobación para la carpeta, deja constancia de esa limitación; no inventes comandos.
3. Inspecciona el diff completo y corrige errores de contenido, enlaces, secretos, datos personales o archivos no relacionados.
4. Actualiza el memory bank si cambió el contexto, una decisión, la verificación o el estado del proyecto.
5. Revisa el conjunto preparado para commit y confirma que solo incluye el trabajo de esta tarea. No incluyas archivos del entorno local ni datos de pacientes.

Solo después de completar los cinco pasos, crea el commit.

## Detente y consulta al desarrollador

Detente antes de implementar cuando:

- la tarea requiera datos reales o identificables de pacientes, o no esté claro si un dataset contiene PHI/PII;
- se proponga que un agente contacte pacientes, cancele o cambie citas, altere un plan clínico o tome otra decisión con impacto asistencial sin aprobación humana;
- una decisión afecte a HIPAA, UK GDPR, transferencias entre jurisdicciones, retención, consentimiento, permisos o proveedores y el repositorio no aporte la política necesaria;
- el briefing, `company-choice.md`, `CONTEXT.es.md` y la petición se contradigan sobre objetivo, métricas o comportamiento;
- se pretenda añadir una aplicación, framework, base de datos, dependencia, servicio o comando global que no esté respaldado por los README o por una decisión explícita.

No trates cifras del briefing como datos operativos en tiempo real ni las hipótesis de `CONTEXT.es.md` como esquemas aprobados.
