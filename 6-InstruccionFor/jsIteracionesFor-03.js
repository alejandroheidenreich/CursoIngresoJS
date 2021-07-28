function mostrar() {
	let cant;

	cant = parseInt(prompt("Ingresar la cantidad de veces que quiere repetir el mensaje."));

	while (isNaN(cant) || cant <= 0) {
		cant = parseInt(prompt("ERROR: Ingresar una cantidad valida!"));
	}

	for (cant; cant > 0; cant--) {
		alert("Hola UTN FRA");
	}

}