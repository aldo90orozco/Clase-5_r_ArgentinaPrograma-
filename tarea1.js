//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

let $boton=document.querySelector("#enviar");

$boton.onclick=function(){

const nombre= document.querySelector("#nombre").value;
console.log(nombre);
const apellido= document.querySelector("#apellido").value;
console.log(apellido);
const edad= document.querySelector("#edad").value;
console.log(edad);

document.querySelector("#campoDeTexto").innerText= nombre+" "+apellido+" "+edad;
document.querySelector("#bienvenidoUsuario").innerText="Bienvenido "+nombre;

return false;

}