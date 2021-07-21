/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let num,
		suma = 0,
		mult= 1,
		flag = 0,
		r;

	do {
		num = parseInt(prompt("Ingrese un numero."));

		if(num>=0){
			suma += num;
		}else{
			mult *= num;
			flag = 1;
		}
		r = prompt("Quiere ingresar otro numero? si/no");

	} while (r == "si");

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = mult * flag;

}