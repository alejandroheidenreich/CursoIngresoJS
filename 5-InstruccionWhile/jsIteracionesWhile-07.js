/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let i = 0,
		num = 0,
		suma = 0,
		r;

	do {
		num = parseInt(prompt("Ingrese un numero."));
		suma += num;
		i++;
		r = prompt("Quiere ingresar otro numero? si/no");

	} while (r == "si");

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = suma / i;

}