/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sex;
	sex = prompt("Ingrese su Sexo ('f' ó 'm')");

	while (sex != "f" && sex != "m") {
		alert("Ingrese un sexo válido");
		sex = prompt("ingrese 'f' ó 'm' ");
	}

	if (sex == "f") {
		document.getElementById("txtIdSexo").value = "Femenino";
	} else {
		document.getElementById("txtIdSexo").value = "Masculino";
	}

}