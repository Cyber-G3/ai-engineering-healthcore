// Dependency-free behavior checks for validation.js (run with Node.js).
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

class ClassListMock {
  constructor() {
    this.values = new Set(["hidden"]);
  }

  add(...values) {
    values.forEach((value) => this.values.add(value));
  }

  remove(...values) {
    values.forEach((value) => this.values.delete(value));
  }

  contains(value) {
    return this.values.has(value);
  }

  toggle(value, force) {
    const enabled = force === undefined ? !this.values.has(value) : force;
    enabled ? this.values.add(value) : this.values.delete(value);
    return enabled;
  }
}

class ElementMock {
  constructor(id, value = "") {
    this.id = id;
    this.value = value;
    this.textContent = "";
    this.classList = new ClassListMock();
    this.attributes = {};
    this.listeners = {};
    this.focused = false;
  }

  addEventListener(type, listener) {
    this.listeners[type] = listener;
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  getAttribute(name) {
    return this.attributes[name] ?? null;
  }

  focus() {
    this.focused = true;
  }

  dispatch(type) {
    this.listeners[type]?.({ target: this });
  }
}

const fieldIds = ["full-name", "email", "phone", "location", "service"];
const fields = fieldIds.map((id) => new ElementMock(id));
const errors = fieldIds.map((id) => new ElementMock(`${id}-error`));
const status = new ElementMock("form-status");
const formListeners = {};
const form = {
  querySelectorAll: () => fields,
  addEventListener: (type, listener) => {
    formListeners[type] = listener;
  },
};
const elements = new Map([...fields, ...errors, status].map((element) => [element.id, element]));

vm.runInNewContext(fs.readFileSync("validation.js", "utf8"), {
  document: {
    getElementById: (id) => (id === "application-form" ? form : elements.get(id)),
  },
  window: { setTimeout: (callback) => callback() },
});

let assertions = 0;
function check(condition, message) {
  assertions += 1;
  assert.ok(condition, message);
}
function submit() {
  formListeners.submit({ preventDefault() {} });
}

submit();
check(status.textContent.includes("4 campos necesitan atención"), "blocks empty required fields");
check(fields[0].getAttribute("aria-invalid") === "true", "marks invalid name accessibly");
check(fields[2].getAttribute("aria-invalid") === "false", "keeps optional phone valid when empty");
check(fields[0].focused, "focuses the first invalid field");
check(errors[0].textContent === "Escribe tu nombre completo.", "shows a name-specific error");
check(errors[1].textContent.includes("correo electrónico"), "shows a required email error");
check(errors[3].textContent.includes("ubicación"), "shows a location-specific error");
check(errors[4].textContent.includes("servicio"), "shows a service-specific error");

fields[0].value = "A";
fields[1].value = "incorrect";
fields[2].value = "123";
fields[3].value = "texas";
fields[4].value = "primary-care";
submit();
check(errors[0].textContent.includes("al menos 2"), "rejects a name that is too short");
check(errors[1].textContent.includes("correo válido"), "rejects a malformed email");
check(errors[2].textContent.includes("7 a 15 dígitos"), "rejects a malformed optional phone");

fields[0].value = "A".repeat(81);
fields[1].value = "ana@domain..com";
fields[2].value = "123456";
fields[3].value = "texas";
fields[4].value = "primary-care";
submit();
check(errors[0].textContent.includes("80 caracteres"), "rejects a name longer than 80 characters");
check(errors[1].textContent.includes("correo válido"), "rejects email addresses with consecutive dots");
check(errors[2].textContent.includes("7 a 15 dígitos"), "rejects a phone shorter than 7 digits");

fields[0].value = "Ana Gómez";
fields[1].value = "a".repeat(250) + "@example.com";
fields[2].value = "1234567890123456";
submit();
check(errors[1].textContent.includes("correo válido"), "rejects an email longer than 254 characters");
check(errors[2].textContent.includes("7 a 15 dígitos"), "rejects a phone longer than 15 digits");

fields[0].value = "Ana Gómez";
fields[1].value = "ana@example.com";
fields[2].value = "";
fields[3].value = "london";
fields[4].value = "preventive-health";
submit();
check(status.textContent.includes("Envío simulado"), "accepts valid values with phone omitted");

fields[1].value = "bad";
fields[1].dispatch("input");
check(errors[1].textContent.includes("correo válido"), "validates an edited field in real time");
fields[1].value = "ana@example.com";
fields[1].dispatch("input");
check(errors[1].classList.contains("hidden"), "clears an error when the field is corrected");

fields[2].value = "+1 (555) 123-4567";
fields[3].value = "unknown";
fields[4].value = "unknown";
submit();
check(errors[3].textContent.includes("ubicaciones disponibles"), "rejects an unknown location");
check(errors[4].textContent.includes("servicios disponibles"), "rejects an unknown service");
fields[3].value = "florida";
fields[4].value = "chronic-care";
submit();
check(status.textContent.includes("Envío simulado"), "accepts a valid international phone value");

for (const location of ["texas", "florida", "georgia", "london", "manchester"]) {
  fields[3].value = location;
  submit();
  check(errors[3].classList.contains("hidden"), `accepts location option ${location}`);
}
for (const service of ["primary-care", "specialist-consultation", "chronic-care", "preventive-health"]) {
  fields[4].value = service;
  submit();
  check(errors[4].classList.contains("hidden"), `accepts service option ${service}`);
}

fields.forEach((field) => {
  field.value = "";
});
formListeners.reset();
check(errors.every((error) => error.textContent === ""), "reset clears field errors");
check(fields.every((field) => field.getAttribute("aria-invalid") === "false"), "reset clears invalid states");
check(status.textContent === "", "reset clears the form status");
check(!/\b(fetch|XMLHttpRequest)\b|\.submit\(/.test(fs.readFileSync("validation.js", "utf8")), "does not transmit form data");

console.log(`PASS: ${assertions} form behavior assertions`);
