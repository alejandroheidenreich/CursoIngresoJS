function mostrar() {
	let num,
		suma = 0,
		contador = 0;

	// for (let i = 1; i <= 10; i++) {
	// 	console.log(i);
	// }



	do {
		contador++;
		num = parseInt(prompt("Ingrese numero."));
		suma += num;

	} while (suma < 1000);

	alert(`La suma de los numero es ${suma} y la cantidad de numeros es ${contador}.`);

}