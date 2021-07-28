// Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
// Precio por bolsa (más de cero ),
// al terminar la compra el cliente accede a un descuento segun las bolsas en total
// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
// f) El tipo mas caro 

function mostrar()
{
  let tipo,
    cantidad,
    precio,
    cantArena=0,
    cantCal=0,
    cantCemento=0,
    maxCantTipo,
    precioFinalBruto=0,
    precioFinalDescontado=0,
    cantBolsas = 0,
    respuesta;

    do{
      tipo = prompt("Ingrese el tipo de producto. (arena/cal/cemento)").toLowerCase();
		while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
			tipo = prompt("ERROR: Ingrese un tipo de producto VALIDO.").toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio de producto."));
		while (isNaN(precio) || precio < 0) {
			precio = parseInt(prompt("ERROR: Ingrese un precio VALIDO."));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de unidades del producto. (1-1000)"));
		while (isNaN(cantidad) || cantidad < 0 ) {
			cantidad = parseInt(prompt("ERROR: Ingrese una cantidad VALIDO."));
		}

    precioFinalBruto += (precio*cantidad);
    cantBolsas += cantidad;

    switch(tipo){
      case "arena":
        cantArena++;
        break;
      case "cal":
        cantCal++;
        break;
      case "cemento":
        cantCemento++;
        break;
    }

    respuesta = prompt("Quiere agregar otro producto? Si/No").toLowerCase();
    while (respuesta !="si" && respuesta !="no"){
      respuesta = prompt("Respuesta Incorrecta: Quiere agregar otro producto? Si/No").toLowerCase();
    }
    
    }while(respuesta == "si");

    if (cantArena > cantCal && cantArena > cantCemento) {
      maxCantTipo = "Arena";
    }
    else if (cantCal >= cantArena && cantCal > cantCemento) {
      maxCantTipo= "Cal";
    }
    else {
      maxCantTipo = "Cemento";
    }

    alert(`El importe total a pagar , bruto sin descuento es: ${precioFinalBruto} \n
          el importe total a pagar con descuento(solo si corresponde)
    // d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
    // f) El tipo mas caro 
    
    
    
    `);

}
