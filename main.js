function calcular()
{
    var n = document.getElementById("numero").value;
    var salida = document.getElementById("salida");
    
	if (n <= 21) {
        salida.innerHTML = 21-n ;
        
    } else {
        salida.innerHTML = (n-21)*2 ;
    }
}
    
    
    
