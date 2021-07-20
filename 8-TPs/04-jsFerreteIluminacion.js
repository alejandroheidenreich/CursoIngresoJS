function CalcularPrecio () 
{
 	let precio = 35;
    let cant;
    let marca;
    let impuesto;

    cant = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca");

    switch (cant){
        case 6:
            precio *= 6.5;
            break;
        case 5:
            if(marca == "ArgentinaLuz"){
                precio *= 5.6;
            }else{
                precio *= 5.7;
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                precio *= 4.75;
            }else{
                precio *= 4.8;
            }
            break;
        case 3:
            if(marca == "ArgentinaLuz"){
                precio *= 3.85;
            }else if (marca == "FelipeLamparas"){
                precio *= 3.9;
            }else{
                precio *= 3.95;
            }
            break;
        case 2:
            precio *= 2;
            break;
    }
    document.getElementById("txtIdprecioDescuento").value = precio;
    
    if(precio > 120){
    impuesto = precio * .1;
    precio += impuesto;
    alert("IIBB Usted pago " + precio + ", siendo " + impuesto + " el impuesto que se pagó");
}


}
