
function mostrar() {
    let ancho,
        largo,
        perimetro;

    ancho = parseInt(prompt("Ingrese el ancho del rectangulo."));
    while (isNaN(ancho) || ancho <= 0) {
        ancho = parseInt(prompt("ERROR: Ingrese un valor valido para el ancho del rectangulo."));
    }

    largo = parseInt(prompt("Ingrese el largo del rectangulo."));
    while (isNaN(largo) || largo <= 0) {
        largo = parseInt(prompt("ERROR: Ingrese un valor valido para el largo del rectangulo."));
    }

    perimetro = 2 * (ancho + largo);

    alert(`El perimentro del rectangulo es: ${perimetro}`);
}
