// function mostrar()
// {
// 	let dest;

// 	dest = document.getElementById("txtIdDestino").value;

// 	switch (dest) {
// 		case "Bariloche":
// 			alert("Oeste");
// 			break;
// 		case "Cataratas":
// 			alert("Norte");
// 			break;
// 		case "Mar del plata":
// 			alert("Este");
// 			break;
// 		case "Ushuaia":
// 			alert("Sur");
// 			break;
// 	}

// }


function mostrar()
{
	let dest;

	dest = document.getElementById("txtIdDestino").value;

	if(dest == "Bariloche"){
		alert("Oeste");
	}else if (dest == "Cataratas"){
		alert("Norte");
	}else if (dest == "Mar del plata"){
		alert("Este");
	}else {
		alert("Sur");
	}

}