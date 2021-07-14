function mostrar() {
	let dest;

	dest = document.getElementById("txtIdDestino").value;

	switch (dest) {
		case "Bariloche":
		case "Ushuaia":
			alert("Frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;
	}

}