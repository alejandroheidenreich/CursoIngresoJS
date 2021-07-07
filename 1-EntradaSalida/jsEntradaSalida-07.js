function sumar() {

	let num1;
	let num2;
	let suma;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = num1 + num2;

	alert(`la suma es ${suma}`);
}

function restar() {

	let num1;
	let num2;
	let resta;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = num1 - num2;

	alert(`la resta es ${resta}`);

}

function multiplicar() {

	let num1;
	let num2;
	let mult;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	mult = num1 * num2;

	alert(`la multiplicacion es ${mult}`);
}

function dividir() {

	let num1;
	let num2;
	let div;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	div = num1 / num2;

	alert(`la divisiona es ${div}`);

}

