function mostrar()
{
	let nota;

	nota = Math.floor(Math.random() * 10 + 1);

	if (nota > 8){
		alert("EXCELENTE");
	}
	else if (nota >= 4){
			alert("APROBÓ");
		}
	else{
			alert("Vamos, la proxima se puede");
		}

}