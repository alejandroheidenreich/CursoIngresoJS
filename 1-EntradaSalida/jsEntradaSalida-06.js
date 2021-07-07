/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {

	let num1;
	let num2;
	//let suma; mejor crear var
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	// mejor -->  num1 = parseInt(document.getElementBID("txtIdNumeroUno").value);

	num1 = parseInt(num1) + parseInt(num2);

	alert(`la suma es ${num1}`)

}