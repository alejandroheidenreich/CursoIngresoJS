function mostrar() {
	let num;

	do{
		num = parseInt(prompt("ingrese un número entre 0 y 9"));
	}while (num < 0 || num > 9);

	document.getElementById("txtIdNumero").value = num;
}
