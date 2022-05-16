function alReves(){
    var tex= document.getElementById('palabra').value;
    let respuesta=document.getElementById('respuesta');
    cadenanueva=tex;
    var x=cadenanueva.length;
    var cadenaInvertida="";
    while(x>=0){
        cadenaInvertida=cadenaInvertida + cadenanueva.charAt(x)
        x--;
    }
    respuesta.innerHTML="Se invirtio a:" +cadenaInvertida;
}