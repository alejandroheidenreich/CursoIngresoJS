function mostrar() {
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 días");
			break;
		case "Febrero":
			alert("Tiene 28 días");
			break;
		default:
			alert("Tiene 30 días");
	}

}