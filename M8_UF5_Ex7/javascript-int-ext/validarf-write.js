function validarForm() {
    var nom = document.forms["primerform"]["nom"].value;
    if (nom == "") {
        alert("Completa el teu nom");
        return false;
    }else {
    	 alert("El teu nom es ... "+nom);
    	 //document.getElementById("primerform").submit();
    	 document.write('<h1>Hola '+nom+'</h1><object data="gracies.html" width="100%" noscroll > Your browser doesnt support the object tag.</object>');
			
			// '
			//'</object>'
			//'<p>final</p>' 
			//);
			
    	 return false;
	}
}