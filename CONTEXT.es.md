# Contexto del proyecto: HealthCore

Este archivo resume el dominio que deben compartir los entregables, las aplicaciones y los agentes de IA del proyecto. El briefing completo está en [BRIEFING.md](./BRIEFING.md); úsalo como referencia cuando necesites más detalle.

## Organización

HealthCore es una red de atención ambulatoria con 12 clínicas: nueve en Estados Unidos (Texas, Florida y Georgia) y tres en el Reino Unido (Londres y Mánchester). Cuenta con unas 200 personas y aproximadamente 28 millones de dólares de facturación anual.

La empresa trabaja con dos sistemas de historia clínica electrónica (EHR) que no se comunican entre sí. La programación de citas, facturación y gestión de datos también está repartida entre sistemas distintos y procesos manuales. No existe una capa de datos compartida ni monitorización centralizada.

## Áreas y problemas principales

- **Operaciones Clínicas:** 120 profesionales clínicos aproximadamente; los dos EHR no comparten información y la documentación administrativa ocupa unos 35 minutos diarios por profesional.
- **Experiencia del Paciente y Acceso:** no hay una plataforma común de reserva online ni seguimiento proactivo. La tasa de inasistencia es del 22 %, con un coste anual estimado de 1,8 millones de dólares en citas perdidas.
- **Ciclo de Ingresos y Facturación:** la tasa de rechazo de reclamaciones en Estados Unidos es del 14 %. La facturación del Reino Unido sigue parcialmente en hojas de cálculo.
- **Cumplimiento y Gobierno del Dato:** aplican HIPAA en Estados Unidos y UK GDPR en el Reino Unido. Los registros de acceso de los EHR están separados, las pistas de auditoría son incompletas y compilar datos para responder solicitudes de pacientes es manual.
- **Personas y Fuerza Laboral:** los puestos clínicos tardan una media de 47 días en cubrirse; la formación médica continua (CME) se registra en hojas de cálculo.
- **Tecnología:** equipo de seis personas en Austin; sistemas heredados sin integración, telemetría o logging centralizado.

## Enfoque elegido para este proyecto

Explorar la predicción de citas con riesgo de inasistencia y el seguimiento proactivo para ayudar a los pacientes a confirmar o reprogramar. El agente puede priorizar citas para revisión y sugerir recordatorios o contacto del personal. No debe tomar decisiones clínicas ni cancelar citas automáticamente; las alertas y acciones quedan sujetas a revisión humana.

## Entidades de dominio

El briefing menciona pacientes, citas, clínicas, profesionales clínicos, sistemas EHR, reclamaciones, registros de acceso, recordatorios y formación CME. Sus definiciones y relaciones deben confirmarse en cada milestone antes de implementarlas.

### Esquema inicial propuesto

Los siguientes campos son una hipótesis de diseño para explorar, no una especificación confirmada por HealthCore:

- **Cita:** identificador, paciente seudonimizado, clínica, fecha y hora, tipo de cita, profesional, estado, canal de reserva.
- **Asistencia:** identificador de cita, estado de asistencia, fecha de registro.
- **Recordatorio:** identificador de cita, canal, fecha de envío, estado de entrega, respuesta.
- **Alerta de riesgo:** identificador de cita, nivel de riesgo, factores explicativos, acción sugerida, estado de revisión humana.

## Restricciones para el diseño

- Aplicar acceso mínimo necesario y separar permisos según función.
- Proteger los datos sanitarios y considerar por separado los marcos HIPAA y UK GDPR.
- Minimizar datos personales en ejemplos, prototipos, registros y prompts.
- Mantener trazabilidad de accesos, alertas y acciones.
- Explicar las alertas de IA y permitir revisión humana.
- No presentar predicciones operativas como diagnósticos ni recomendaciones clínicas.
