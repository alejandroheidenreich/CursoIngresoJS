/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
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
    alert("Usted pago " + precio + " de IIBB., siendo" + impuesto + "el impuesto que se pagó");
}


}
