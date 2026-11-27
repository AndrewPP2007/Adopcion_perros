const perros = [
  { nombre: "Toby", edad: "2 años", tamano: "Mediano" },
  { nombre: "Luna", edad: "8 meses", tamano: "Pequeño" }
];

const solicitudes = [];

const formPerro = document.getElementById("form-perro");
const listaPerros = document.getElementById("lista-perros");
const selectPerro = document.getElementById("select-perro");
const formAdopcion = document.getElementById("form-adopcion");
const listaSolicitudes = document.getElementById("lista-solicitudes");
const mensajeEstado = document.getElementById("mensaje-estado");

function renderizarPerros() {
  listaPerros.innerHTML = "";
  selectPerro.innerHTML = "";

  perros.forEach((perro) => {
    const item = document.createElement("li");
    item.textContent = `${perro.nombre} — ${perro.edad} — Tamaño: ${perro.tamano}`;
    listaPerros.appendChild(item);

    const opcion = document.createElement("option");
    opcion.value = perro.nombre;
    opcion.textContent = `${perro.nombre} (${perro.tamano})`;
    selectPerro.appendChild(opcion);
  });
}

function renderizarSolicitudes() {
  listaSolicitudes.innerHTML = "";

  solicitudes.forEach((sol) => {
    const item = document.createElement("li");
    item.textContent = `Solicitante: ${sol.adoptante} (${sol.contacto}) — Perro: ${sol.perro}`;
    listaSolicitudes.appendChild(item);
  });
}

formPerro.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.getElementById("nombre-perro").value.trim();
  const edad = document.getElementById("edad-perro").value.trim();
  const tamano = document.getElementById("tamano-perro").value;

  if (!nombre || !edad) return;

  perros.push({ nombre, edad, tamano });
  renderizarPerros();
  formPerro.reset();
  mensajeEstado.textContent = `Se agregó a "${nombre}" a la lista de perros disponibles.`;
});

formAdopcion.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const perro = selectPerro.value;
  const adoptante = document.getElementById("nombre-adoptante").value.trim();
  const contacto = document.getElementById("correo-adoptante").value.trim();

  if (!perro || !adoptante || !contacto) return;

  solicitudes.push({ perro, adoptante, contacto });
  renderizarSolicitudes();
  formAdopcion.reset();
  mensajeEstado.textContent = `Solicitud registrada para adoptar a "${perro}" a nombre de ${adoptante}.`;
});

renderizarPerros();
renderizarSolicitudes();
// Mejora de trazabilidad en consola para registro de perros
