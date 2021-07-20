/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let pw;
	pw = prompt("ingrese el número clave.");

	while (pw != "utn750") {
		alert("Clave Incorrecta!");
		pw = prompt("ingrese el número clave.");
	}

	alert("Clave Correcta!");

}