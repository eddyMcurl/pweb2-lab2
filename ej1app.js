function diaDlaSemana(){
    var fecha= parseInt(document.getElementById('numero').value);
    let fechaactual = new Date().getDay();
    const dia =[
        'domingo','lunes','martes','miercoles','jueves','sabado'
    ]
    const nombreDia = dia[fechaactual];
    alert(nombreDia+" numero recibido fue: "+fechaactual);
}
