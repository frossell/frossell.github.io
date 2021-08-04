function mostrar() {
    document.getElementById("sidebar").style.width = "200px";
    
    document.getElementById("obrir").style.display = "none";
    document.getElementById("tancar").style.display = "inline";
    document.getElementById("contingut").style.marginLeft = "200px";
}

function amagar() {
    document.getElementById("sidebar").style.width = "35px";
    
    document.getElementById("obrir").style.display = "inline";
    document.getElementById("tancar").style.display = "none";
    document.getElementById("contingut").style.marginLeft = "35px";
}