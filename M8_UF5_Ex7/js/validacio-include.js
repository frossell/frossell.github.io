function includeHTML() {
  var z, i, elmnt, file, http;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      http = new HttpRequest();
      http.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      http.open("GET", file, true);
      http.send();
      /*exit the function:*/
      return;
    }
  }
};

function validaContra(pass) {
	if (pass.length < 6) {
		alert('Contrasenya massa curta');
		//alert(pass);
		return false;
	} else {
		return true;	
	}
}

function validaDNI(num,lletra) {
	lletra = lletra.toUpperCase();
	num = num%23;
	lletres_dni = "TRWAGMYFPDXBNJZSQVHLCKET";
	lletra_apartir_num = lletres_dni.substring(num, num+1);
	if (lletra != lletra_apartir_num) {
		alert('DNI erroni, la lletra del DNI no es correcta');
		return false;
	} else {
		alert('Dni correcte');
		return true;	
	}
}
function validarForm() {
	var nom = document.forms["formulari"]["nomComplet"].value;
	var pass = document.getElementById("contrasenya").value;
	//var pass = document.forms["formulari"]["contrasenya"].value;
	var num = document.forms["formulari"]["numerosNIF"].value;
	var lletra = document.forms["formulari"]["lletraNIF"].value;
	alert("Comencem a validar..."+nom+" "+num+" "+lletra)
	if(validaContra(pass) && validaDNI(num,lletra)){
			alert("Tot correcte, envie'm el teu formulari. Gràcies "+nom);
			//document.getElementById("formulari").submit();
			
//Include			
			document.write(
			
			'<h1>Gràcies</h1><div w3-include-html="include.html"></div>'+nom+'<div w3-include-html="forms.html"></div><script>includeHTML();</script>' 
			
			
			);
			
//"<div w3-include-html='forms.html'></div>" 		"<div w3-include-html='../javascript.html'></div>"
						
//			
			return true;
	} else {
		return false;	
	}
}