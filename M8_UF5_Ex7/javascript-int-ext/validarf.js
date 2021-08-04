function validarForm() {
    var nom = document.forms["primerform"]["nom"].value;
    if (nom == "") {
        alert("Completa el teu nom");
        return false;
    }else {
    	 alert("El teu nom es ... "+nom);
    	document.getElementById("primerform").submit();
    	
			
    	 return false;
	}
}