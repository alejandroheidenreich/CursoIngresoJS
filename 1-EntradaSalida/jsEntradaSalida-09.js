/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	sueldo = sueldo * 1.1;

	document.getElementById("txtIdResultado").value = sueldo;

}
