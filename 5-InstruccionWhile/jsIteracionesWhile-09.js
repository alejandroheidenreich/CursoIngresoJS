/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let i = 0,
		num,
		max = Number.NEGATIVE_INFINITY,
		min = Number.POSITIVE_INFINITY,
		r;

	do {
		num = parseInt(prompt("Ingrese un numero."));

		while (isNaN(num)) {
			num = parseInt(prompt("Dato incorrecto: Ingrese un numero."));
		}

		if (num > max) {
				max = num;
		} else if (num < min) {
			min = num;
		}
		r = prompt("Quiere ingresar otro numero? si/no").toLowerCase();
		while (r != "si" && r != "no") {
			r = prompt("Respuesta No Válida: Quiere ingresar otro numero? si/no").toLowerCase();
		}
		
	} while (r == "si");

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;

}