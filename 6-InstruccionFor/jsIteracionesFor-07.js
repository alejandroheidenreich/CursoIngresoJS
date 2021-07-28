function mostrar() {
	let num,
		div = 0;

	do {
		num = parseInt(prompt("Ingrese un numero válido."));
	} while (isNaN(num) || num <= 0);

	for (let i = 1; i <= num; i++) {
		if (num % i) {
			continue;
		}
		console.log(i);
	 	div++;
	}

	console.log("Cantidad de divisores: " + div);

}