(() => {
  "use strict";

  const form = document.getElementById("application-form");
  if (!form) return;

  const fields = Array.from(form.querySelectorAll("input, select"));
  const status = document.getElementById("form-status");
  const emailPattern = /^(?!.*\.\.)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phonePattern = /^\+?[0-9().\s-]+$/;
  const allowedLocations = new Set([
    "texas",
    "florida",
    "georgia",
    "london",
    "manchester",
  ]);
  const allowedServices = new Set([
    "primary-care",
    "specialist-consultation",
    "chronic-care",
    "preventive-health",
  ]);
  let touchedFields = new WeakSet();

  function validateField(field) {
    const value = field.value.trim();
    let message = "";

    if (field.id === "full-name") {
      if (!value) {
        message = "Escribe tu nombre completo.";
      } else if (value.length < 2) {
        message = "El nombre debe tener al menos 2 caracteres.";
      } else if (value.length > 80) {
        message = "El nombre no puede superar 80 caracteres.";
      }
    } else if (field.id === "email") {
      if (!value) {
        message = "Escribe tu correo electrónico.";
      } else if (value.length > 254 || !emailPattern.test(value)) {
        message = "Introduce un correo válido, por ejemplo nombre@ejemplo.com.";
      }
    } else if (field.id === "phone") {
      if (value) {
        const digitCount = value.replace(/\D/g, "").length;
        if (!phonePattern.test(value) || digitCount < 7 || digitCount > 15) {
          message = "Introduce un teléfono con 7 a 15 dígitos; puedes usar +, espacios, paréntesis, puntos o guiones.";
        }
      }
    } else if (field.id === "location") {
      if (!value) {
        message = "Selecciona una ubicación de interés.";
      } else if (!allowedLocations.has(value)) {
        message = "Selecciona una de las ubicaciones disponibles.";
      }
    } else if (field.id === "service") {
      if (!value) {
        message = "Selecciona un servicio de interés.";
      } else if (!allowedServices.has(value)) {
        message = "Selecciona uno de los servicios disponibles.";
      }
    }

    const error = document.getElementById(`${field.id}-error`);
    if (error) {
      error.textContent = message;
      error.classList.toggle("hidden", !message);
    }
    field.setAttribute("aria-invalid", String(Boolean(message)));
    field.classList.toggle("border-rose-700", Boolean(message));
    field.classList.toggle("ring-2", Boolean(message));
    field.classList.toggle("ring-rose-100", Boolean(message));
    return message;
  }

  function showStatus(message, kind) {
    status.textContent = message;
    status.className = "rounded-xl border px-4 py-3 text-sm font-semibold";
    if (kind === "success") {
      status.classList.add("border-emerald-300", "bg-emerald-50", "text-emerald-900");
    } else {
      status.classList.add("border-rose-300", "bg-rose-50", "text-rose-900");
    }
  }

  function clearStatus() {
    status.textContent = "";
    status.className = "hidden rounded-xl border px-4 py-3 text-sm font-semibold";
  }

  fields.forEach((field) => {
    field.setAttribute("aria-invalid", "false");
    field.addEventListener("input", () => {
      if (touchedFields.has(field)) validateField(field);
      clearStatus();
    });
    field.addEventListener("change", () => {
      touchedFields.add(field);
      validateField(field);
      clearStatus();
    });
    field.addEventListener("focusout", () => {
      touchedFields.add(field);
      validateField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fields.forEach((field) => touchedFields.add(field));
    const invalidFields = fields.filter((field) => validateField(field));

    if (invalidFields.length > 0) {
      const count = invalidFields.length;
      showStatus(
        `Revisa el formulario: ${count} ${count === 1 ? "campo necesita" : "campos necesitan"} atención.`,
        "error",
      );
      invalidFields[0].focus();
      return;
    }

    showStatus(
      "Validación correcta. Envío simulado: no se ha enviado ni guardado ningún dato.",
      "success",
    );
  });

  form.addEventListener("reset", () => {
    window.setTimeout(() => {
      touchedFields = new WeakSet();
      fields.forEach((field) => {
        const error = document.getElementById(`${field.id}-error`);
        if (error) {
          error.textContent = "";
          error.classList.add("hidden");
        }
        field.setAttribute("aria-invalid", "false");
        field.classList.remove("border-rose-700", "ring-2", "ring-rose-100");
      });
      clearStatus();
    }, 0);
  });
})();
