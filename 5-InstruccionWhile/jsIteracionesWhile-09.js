/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let num,
		max,
		min,
		flag = 1,
		respt;

	do {
		num = parseInt(prompt("Ingrese un numero."));

		while (isNaN(num)) {
			num = parseInt(prompt("Dato incorrecto: Ingrese un numero."));
		}

		if (flag) {
			max = num;
			min = num;
			flag = 0;
		} else {
			if (num > max) {
				max = num;
			} else if (num < min) {
				min = num;
			}
		}

		/*
		if (flag || num > max){
			max = num;
		}
		if (flag || num > min){
			min = num;
			flag = 0;
		}
		*/
		respt = prompt("Quiere ingresar otro numero? Si/No.").toLowerCase();
		while (respt != "si" && respt != "no") {
			respt = prompt("Respuesta No Válida: Quiere ingresar otro numero? Si/No.").toLowerCase();
		}

	} while (respt == "si");


	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;

}


// function mostrar() {
// 	let num,
// 		max = Number.NEGATIVE_INFINITY,
// 		min = Number.POSITIVE_INFINITY,
// 		respt;

// 	do {
// 		num = parseInt(prompt("Ingrese un numero."));

// 		while (isNaN(num)) {
// 			num = parseInt(prompt("Dato incorrecto: Ingrese un numero."));
// 		}
			
// 		if (num > max) {
// 			max = num;
// 		}  
// 		if (num < min) {
// 			min = num;
// 		}
		
// 		respt = prompt("Quiere ingresar otro numero? Si/No.").toLowerCase();
// 		while (respt != "si" && respt != "no") {
// 			respt = prompt("Respuesta No Válida: Quiere ingresar otro numero? Si/No.").toLowerCase();
// 		}

// 	} while (respt == "si");


// 	document.getElementById("txtIdMaximo").value = max;
// 	document.getElementById("txtIdMinimo").value = min;

// }