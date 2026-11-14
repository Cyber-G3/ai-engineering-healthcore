# Empresa elegida: HealthCore

## Por qué elijo HealthCore

Elijo HealthCore porque combina la atención sanitaria con retos de automatización, privacidad y gobernanza de datos, áreas que conectan con mi experiencia previa en farmacia y mi trabajo actual en ciberseguridad GRC y gobernanza de IA. El briefing describe una red de 12 clínicas en Estados Unidos y el Reino Unido cuyos dos sistemas de historia clínica electrónica no se comunican, lo que dificulta que la información acompañe al paciente entre sedes. También indica que el 22 % de las citas termina en inasistencia, con un coste estimado de 1,8 millones de dólares al año, y que el 14 % de las reclamaciones de facturación de EE. UU. se rechaza. Me interesa construir soluciones con resultados operativos medibles y, al mismo tiempo, trabajar con las restricciones de HIPAA y UK GDPR que protegen los datos de los pacientes.

## Departamentos que más me interesan

- **Cumplimiento y Gobierno del Dato:** los registros de acceso a los dos sistemas EHR se mantienen por separado, las pistas de auditoría están incompletas y las solicitudes de datos requieren trabajo manual. Me interesa este departamento porque conecta la privacidad y el cumplimiento con controles, evidencias y gobernanza de datos que pueden diseñarse y medirse.
- **Experiencia del Paciente y Acceso:** no hay una plataforma compartida de reservas online ni contacto proactivo para pacientes con riesgo de faltar; la tasa de no-shows de la red es del 22 %. Me interesa porque combina automatización práctica con una mejora medible del acceso y de la experiencia del paciente.

## Reto de automatización con IA que quiero explorar

**Área del roadmap: Experiencia del Paciente y Acceso.** El briefing propone predecir las citas con riesgo de inasistencia y facilitar el contacto proactivo para recordar o reprogramar. Quiero explorar un sistema que priorice esas citas para revisión del personal y sugiera el seguimiento adecuado. Es un reto concreto porque HealthCore estima que los no-shows representan aproximadamente 1,8 millones de dólares anuales en huecos de cita perdidos.

## My AI Agent Idea

**Purpose and users:** A decision-support agent for HealthCore’s patient-access staff that identifies appointments at higher risk of becoming no-shows and recommends timely follow-up.

**Trigger:** The agent runs when the appointment schedule is updated and again 48 hours before an appointment. The 48-hour timing is a proposed workflow, not a current HealthCore policy.

**Information needed:** Appointment time, clinic, appointment type, prior attendance history, and responses to previous reminders. It should use only the minimum information needed, with role-based access and access logs appropriate to HIPAA and UK GDPR.

**What it does and produces:** It estimates risk, explains the main factors behind each alert, and creates a prioritized review queue with a suggested action, such as sending an approved reminder or asking staff to contact the patient.

**Human review:** Authorized staff review and approve outreach or rescheduling. The agent does not cancel appointments, change clinical plans, or make clinical decisions on its own; staff can correct its suggestions and record the outcome.