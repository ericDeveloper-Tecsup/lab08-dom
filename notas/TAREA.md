# Tarea: Mi componente interactivo

## Componente elegido

Lista de películas por ver.

El usuario puede escribir el nombre de una película y su género, agregarla a una lista y eliminarla cuando lo desee.

## Codigo principal

```js
// Clase propia
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
```

## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|---------|-------------------|----------------|
| Agregar una película válida | La película aparece en la lista | Sí |
| Presionar el botón Borrar | La película desaparece de la lista | Sí |
| Agregar varias películas | Todas se muestran correctamente | Sí |

## Por que disene asi mi clase

Elegí la clase Pelicula porque cada película comparte los mismos datos: nombre y género. Estos atributos permiten identificar fácilmente cada elemento ingresado por el usuario.

El método descripcion() sirve para mostrar la información de manera uniforme dentro de la página. Gracias a la clase, es posible crear muchas películas reutilizando la misma estructura sin repetir código.