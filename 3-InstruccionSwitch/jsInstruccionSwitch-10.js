function mostrar() {
	let dest;
	let estacion;
	let v;

	dest = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	if (estacion == "Invierno") {
		switch (dest) {
			case "Bariloche":
				v = "Se viaja";
				break;
			case "Cataratas":
			case "Cordoba":
			case "Mar del plata":
				v = "No se viaja";
				break;
		}
	} else if (estacion == "Verano") {
		switch (dest) {
			case "Bariloche":
			case "Cordoba":
				v = "No se viaja";
				break;
			case "Cataratas":
			case "Mar del plata":
				v = "Se viaja";
				break;
		}
	} else if (estacion == "Otoño") {
		switch (dest) {
			case "Bariloche":
			case "Cordoba":
			case "Cataratas":
			case "Mar del plata":
				v = "Se viaja";
				break;
		}
	} else
		switch (dest) {
			case "Bariloche":
				v = "No se viaja";
				break;
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
				v = "Se viaja";
				break;

		}

	alert(v);

}