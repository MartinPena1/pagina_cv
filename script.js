const exp_academica = [
  {
    titulo: "Ciclo Superior en Desarrollo de Aplicaciones Web",
    lugar: "CPR Afundación Abanca",
    fechas: "2025 - Actualidad",
    descripcion: "Formación en desarrollo de aplicaciones web."
  },
  {
    titulo: "Bachillerato de Ciencias",
    lugar: "IES Manuel Murguía",
    fechas: "2023 - 2025",
    descripcion: "Itinerario de ciencias."
  }
];

const exp_profesional = [
  // Añade aquí tu experiencia profesional con el mismo formato.
];

function crearItem(item) {
  const article = document.createElement("article");
  article.classList.add("item");
  article.innerHTML = `
    <h3>${item.titulo}</h3>
    <p class="lugar">${item.lugar}</p>
    <p class="fechas">${item.fechas}</p>
    <p>${item.descripcion}</p>
  `;
  return article;
}

function mostrarExperiencia(lista, idContenedor) {
  const contenedor = document.getElementById(idContenedor);

  if (lista.length === 0) {
    const mensaje = document.createElement("article");
    mensaje.classList.add("item");
    mensaje.textContent = "Todavía no tengo experiencia profesional.";
    contenedor.appendChild(mensaje);
    return;
  }

  lista.forEach(item => contenedor.appendChild(crearItem(item)));
}

mostrarExperiencia(exp_academica, "academica");
mostrarExperiencia(exp_profesional, "profesional");