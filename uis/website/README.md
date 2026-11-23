# Sitio web público de HealthCore

Sitio estático creado con HTML semántico, clases utilitarias de Tailwind CSS y JavaScript Vanilla. Presenta la empresa y ofrece un formulario de contacto demostrativo. La validación y el envío simulado se ejecutan solo en el navegador; los datos no se transmiten ni se guardan.

## Ejecución local o en Codespaces

Desde este directorio, inicia el servidor estático en el puerto 3000:

```bash
npx --yes http-server . -p 3000 -a 0.0.0.0
```

Abre `http://localhost:3000`. En Codespaces, reenvía el puerto 3000 y cambia su visibilidad a **Public** si necesitas una URL accesible para revisión externa.

## Archivos

- `index.html`: presentación de HealthCore, servicios, ubicaciones y llamadas a la acción.
- `application.html`: formulario mínimo de contacto: nombre, email, teléfono opcional, ubicación y servicio de interés.
- `validation.js`: validación en tiempo real y al perder el foco, errores accesibles, bloqueo de solicitudes inválidas, limpieza y confirmación simulada.
- `validation.test.js`: comprobaciones de comportamiento sin dependencias externas (`node validation.test.js`).
- `QA_MATRIX.md`: matriz de requisitos, comprobaciones y resultados.

El briefing no define campos de formulario. Los campos anteriores se derivan de las ubicaciones y los servicios descritos en `BRIEFING.md`; el formulario evita solicitar información clínica. Tailwind se carga desde su CDN. No hay backend, proceso de compilación, framework ni dependencias del proyecto.
