function validarForm() {
    var nom = document.forms["primerform"]["nom"].value;
    var x;
    if (nom == "") {
        alert("Completa el teu nom");
        return false;
    }else {
    	 alert("El teu nom es ... "+nom);
    	 //document.getElementById("primerform").submit();//
    	 x = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=frossell@ies-eugeni.cat&body=" + nom + "&su=MISSED"; 
alert(x);    	 
    	 document.getElementById("primerform").action =x;
		 document.getElementById("primerform").submit()	;
    	 return false;
	}
}