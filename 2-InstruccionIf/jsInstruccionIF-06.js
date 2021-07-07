function mostrar() {
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 & edad <= 17) {
		alert("Es adolecente");
	}
	if (edad < 13) {
		alert("Es un niño");
	}
	if (edad > 17) {
		alert("Es mayor de edad");
	}

}