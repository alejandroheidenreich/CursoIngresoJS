/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let num1;
    let num2;
    let num3;
    let suma;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = num1 + num2 + num3;

    alert("La suma de los precios es " + suma);

}

function Promedio() {
    let num1;
    let num2;
    let num3;
    let promedio;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    //promedio = Sumar() / 3; Preguntar
    promedio = (num1 + num2 + num3) / 3;

    alert("El promedio de los precios es " + promedio);

}

function PrecioFinal() {
    let num1;
    let num2;
    let num3;
    let iva;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    iva = (num1 + num2 + num3) * 1.21;

    alert("El precio final es " + iva);

}