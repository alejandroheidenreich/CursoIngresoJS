/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let num,
		sumaPositivos = 0,
		sumaNegativos = 0,
		cantPositivos = 0,
		cantNegativos = 0,
		cantPar = 0,
		cantCero = 0,
		promedioPositivos,
		promedioNegativos,
		diferencia;
	respt;

	do {
		num = parseInt(prompt("Ingrese un numero."));
		while (isNaN(num)) {
			num = parseInt(prompt("Dato incorrecto: Ingrese un numero."));
		}
		if (num > 0) {
			sumaPositivos += num;
			cantPositivos++;
		} else if (num < 0) {
			sumaNegativos += num;
			cantNegativos++;
		} else {
			cantCero++;
		}

		if (num % 2 == 0) {
			cantPar++;
		}

		respt = prompt("Quiere ingresar otro numero? si/no").toLowerCase();
		while (respt != "si" && respt != "no") {
			respt = prompt("Respuesta No Válida: Quiere ingresar otro numero? si/no").toLowerCase();
		}

	} while (respt == "si");

	if (cantPositivos = 0) {
		promedioPositivos = 0;
	} else {
		promedioPositivos = sumaPositivos / cantPositivos;
	}
	if (cantNegativos = 0) {
		promedioNegativos = 0;
	} else {
		promedioNegativos = sumaNegativos / cantNegativos;
	}

	diferencia = cantPositivos - cantNegativos;
	if (diferencia < 0) {
		diferencia *= -1;
	}

	alert(`Suma de Positivos: ${sumaPositivos} \n Suma de Negativos: ${sumaNegativos} \n Cantidad de Positivos: ${cantPositivos} \n Cantidad de Negativos: ${cantNegativos} \n Cantidad de Ceros: ${cantCero} \n Cantidad de Numeros Pares: ${cantPar} \n Promedio de Positivos: ${promedioPositivos} \n Promedio de Negativos: ${promedioNegativos} \n Diferencia entre Positivos y Negativos: ${diferencia}`);

}