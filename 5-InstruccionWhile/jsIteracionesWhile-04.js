/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;
	num = prompt("ingrese un número entre 0 y 9");

	while(num < 0 || num>9){
		alert("Numero Incorrecto!");
		num = prompt("ingrese un número entre 0 y 9");
	}
	
	document.getElementById("txtIdNumero").value = num;
}