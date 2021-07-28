// Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// b) Del tipo con mas unidades, el promedio por compra
// c) Cuántas unidades de jabones hay en total 
function mostrar() {
	let tipo,
		precio,
		cantidad,
		marca,
		fabricante,
		minAlcohol,
		flagA = 1,
		minCantAlcohol = 0,
		minFabriAlcohol,
		cantAlcohol = 0,
		cantJabon = 0,
		cantBarbijo = 0,
		sumaPrecioAlochol = 0,
		sumaPrecioJabon = 0,
		sumaPrecioBarbijo = 0,
		maxTipo,
		promedioCompra;

	for (let i = 0; i < 5; i++) {
		tipo = prompt("Ingrese el tipo de producto. (barbijo/alcohol/jabon)").toLowerCase();
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("ERROR: Ingrese un tipo de producto VALIDO.").toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio de producto. (100-300)"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseInt(prompt("ERROR: Ingrese un precio VALIDO."));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de unidades del producto. (1-1000)"));
		while (isNaN(cantidad) || cantidad < 0 || cantidad > 1000) {
			cantidad = parseInt(prompt("ERROR: Ingrese una cantidad VALIDO."));
		}

		marca = prompt("Ingrese la marca de producto.");
		while (marca == "") {
			marca = prompt("ERROR: Ingrese la marca de producto.");
		}

		fabricante = prompt("Ingrese el fabricante de producto.");
		while (fabricante == "") {
			fabricante = prompt("ERROR: Ingrese el fabricante de producto.");
		}

		switch (tipo) {
			case "alcohol":
				cantAlcohol += cantidad;
				sumaPrecioAlochol += (precio * cantidad);
				if (flagA || minAlcohol > precio) {
					minAlcohol = precio;
					minCantAlcohol = cantidad;
					minFabriAlcohol = fabricante;
					flagA = 0;
				}
				break;
			case "barbijo":
				cantBarbijo += cantidad;
				sumaPrecioBarbijo += (precio * cantidad);
				break;
			case "jabon":
				cantJabon += cantidad;
				sumaPrecioJabon += (precio * cantidad);
				break;
		}

		// console.log("cantidad alcohol" + cantAlcohol);
		// console.log("cantidad barbijo" + cantBarbijo);
		// console.log("cantidad jabon" + cantJabon);
	}

	if (cantAlcohol > cantBarbijo && cantAlcohol > cantJabon) {
		promedioCompra = sumaPrecioAlochol / cantAlcohol;
		maxTipo = "Alcohol";
	}
	else if (cantBarbijo > cantAlcohol && cantBarbijo > cantJabon) {
		promedioCompra = sumaPrecioBarbijo / cantBarbijo;
		maxTipo = "Barbijo";
	}
	else {
		promedioCompra = sumaPrecioJabon / cantJabon;
		maxTipo = "Jabon";
	}


	alert(`La cantidad de unidades del alcohol mas barato: ${minCantAlcohol}
		\nEl fabricante del alcohol mas barato: ${minFabriAlcohol}
		\nEl tipo con mas unidades es: ${maxTipo}, y su promedio de compra es: ${promedioCompra}
		\nUnidades de jabones total: ${cantJabon}`);

}
