function codigoLink(){
    let url= document.getElementById('link').value;
    let cadena =url;
    let aux
    let longitud = cadena.length;
    let posSlash= url.lastIndexOf("/");
    let cadenaCguion= url.slice(posSlash+1, longitud);
    let cadenaSguion=cadenaCguion.replace("-","");
    console.log(cadenaSguion);
}