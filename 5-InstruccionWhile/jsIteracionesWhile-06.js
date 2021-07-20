// function mostrar()
// {
// let num;

// num = parseInt(prompt("ingrese numero"));
// num += parseInt(prompt("ingrese numero"));
// num += parseInt(prompt("ingrese numero"));
// num += parseInt(prompt("ingrese numero"));
// num += parseInt(prompt("ingrese numero"));

// document.getElementById("txtIdSuma").value = num;
// document.getElementById("txtIdPromedio").value = num/5;

// }


function mostrar()
{
let num;
let i=0;

while(i<5){
	num += parseInt(prompt("ingrese numero"));
	i++;
}

document.getElementById("txtIdSuma").value = num;
document.getElementById("txtIdPromedio").value = num/5;

}