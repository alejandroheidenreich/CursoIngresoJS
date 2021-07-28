function mostrar()
{
    let num1,
    num2,
    suma;

    num1 = parseInt(prompt("Ingrese el primer numero."));
    while (isNaN(num1)) {
        num1 = parseInt(prompt("ERROR: Ingrese un numero."));
    }

    num2 = parseInt(prompt("Ingrese el segundo numero."));
    while (isNaN(num2)) {
        num2 = parseInt(prompt("ERROR: Ingrese un numero."));
    }
    
    suma = num1+num2;

    if (num1 == num2){
        alert(num1+""+num2);
    }
    else if (num1>num2){
        alert(num1-num2);
    }else{
        alert(suma);
    }

    

}
