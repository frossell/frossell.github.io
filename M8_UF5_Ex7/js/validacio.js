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
			return true;
	} else {
		return false;	
	}
}