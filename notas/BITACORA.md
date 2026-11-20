# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | Modifico el titulo| Si |
| style.color |Si cambio el color azul |Si |

 
## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click |Al pulsar el boton 1 vez | 1|
| dblclick |Al pulsar el boton 2 veces seguidas | 1|
| mouseover |Al pasar el puntero del mouse encima | 1|

 
## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre |Se agrega lo escrito a la palabra Hola |No |
| Enviar sin preventDefault | Se borraran los datos ingresados|Si |
| Enviar con preventDefault, correo sin @ |Sale un mensaje de error color rojo |No |
| Enviar con preventDefault, correo con @ |Sale un mensaje de enviado al correo |No |

 
## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop| 2500| 1875
| mouse |Mouse |45 |33.75 |
| teclado |Teclado |120 | 90|

    La ventaja de usar Clases es que desde ua sola plantilla como es la Clase Producto, se instancian varios objetos con diferentes atributos y como comparten metodos, solo se lellama al metodo y se aplican.

