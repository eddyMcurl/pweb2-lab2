function diaarequipa(){
    let respuesta = document.getElementById('respuesta');
    let fechaActual = new Date("5/15/2022");
    let fechaFutura = new Date("8/15/2022");
    let milisgdsxdia=24*60*60*1000;
    let milisegundos = Math.abs(fechaFutura.getTime()-fechaActual.getTime());
    let resta=Math.round(milisegundos/milisgdsxdia);
    
    respuesta.innerHTML ="Faltan "+resta+" para el aniversario de arequipa hoy es "+fechaActual;

}