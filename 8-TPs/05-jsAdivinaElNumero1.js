/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let num,
  numSecreto;
  i = 0;


function comenzar() {
  numSecreto = Math.random() * (100 - 1) + 1;
  num = parseInt(document.getElementById("txtIdNumero").value);


}

function verificar() {
  i++;
  document.getElementById("txtIdIntentos").value = i;
  while(num != numSecreto){
  
  if (num < numSecreto) {
    alert("Incorrecto, el numero es menor");
    break;
  } else if (num > numSecreto){
    alert("Incorrecto, el numero es mayor");
    break;
  } else{
    alert(`Usted es un ganador!!! y en solo ${i} intentos`);
  }
} 
  
  
}