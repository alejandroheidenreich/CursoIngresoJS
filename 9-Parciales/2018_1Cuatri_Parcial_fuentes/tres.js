function mostrar()
{
    let precio,
        descuento,
        precioFinal;

        precio = parseInt(prompt("Ingrese el precio deseado."));
        while (isNaN(precio) || precio > 0) {
            precio = parseInt(prompt("ERROR: Ingrese el precio válido."));
        }

        descuento = parseInt(prompt("Ingrese el descuento deseado."));
        while (isNaN(descuento) || descuento > 0) {
            descuento = parseInt(prompt("ERROR: Ingrese el descuento válido."));
        }

        descuento *=  precio / 100;
        precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;

}
