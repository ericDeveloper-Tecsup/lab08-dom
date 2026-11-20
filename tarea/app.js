// Clase Pelicula
class Pelicula {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  descripcion() {
    return this.nombre + " (" + this.genero + ")";
  }
}

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const lista = document.querySelector("#lista");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const pelicula = new Pelicula(
    nombre.value,
    genero.value
  );

  const li = document.createElement("li");
  li.textContent = pelicula.descripcion() + " ";

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";

  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnBorrar);
  lista.appendChild(li);

  nombre.value = "";
  genero.value = "";
});