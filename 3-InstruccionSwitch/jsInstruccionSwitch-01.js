function mostrar() {
	let mes;

	mes = document.getElementById("txtIdMes").value;

	// if (mes == "Enero") {
	// 	alert("que comiences bien el año!!!");
	// }
	// else if (mes == "Marzo") {
	// 	alert("a clases!!!");
	// }
	// else if (mes == "Julio") {
	// 	alert("se vienen las vacaciones!!!");
	// }
	// else if (mes == "Diciembre") {
	// 	alert("Felices fiesta!!!");
	// }

	switch (mes) {
		case ("Enero"):
			alert("Que comiences bien el año!!!");
			break;
		case ("Marzo"):
			alert("A clases!!!");
			break;
		case ("Julio"):
			alert("Se vienen las vacaciones!!!");
			break;
		case ("Diciembre"):
			alert("Felices fiesta!!!");
			break;

	}

}