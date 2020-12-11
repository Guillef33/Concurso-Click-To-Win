function myFunction() 
	{
  var str = document.getElementById("demo"); 
  var res = str.replace("Prueba tu suerte", "¡Ganaste!");
  var no = str.replace("Prueba tu suerte", "¡Perdiste! Segui intentando");
  var random = Math.random();
  var muestra = document.getElementById('hola');

  	if (random > 0.5) {
  		document.getElementById("demo").innerHTML = res;
  		muestra.innerHTML = "Tu numero es: "+random;

  		}
  	else {
  		document.getElementById("demo").innerHTML = no;
  		muestra.innerHTML = "Tu numero es: "+random;
  		}

  	console.log(muestra);

}
