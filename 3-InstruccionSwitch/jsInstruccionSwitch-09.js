function mostrar() {
	let precio = 15000;
	let dest;
	let estacion;

	dest = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	if (estacion == "Invierno") {
		switch (dest) {
			case "Bariloche":
				precio *= 1.2;
				break;
			case "Cataratas":
			case "Cordoba":
				precio *= .9;
				break;
			case "Mar del plata":
				precio *= .8;
				break;
		}
	} else if (estacion == "Verano") {
		switch (dest) {
			case "Bariloche":
				precio *= .8;
				break;
			case "Cataratas":
			case "Cordoba":
				precio *= 1.1;
				break;
			case "Mar del plata":
				precio *= 1.2;
				break;
		}
	} else
		switch (dest) {
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				precio *= 1.1;
				break;
			// case "Cordoba":
			// 	break;
		}

	alert("El precio final es: " + precio);
}

