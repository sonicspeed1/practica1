var existencias;
var enviado;
existencias=true;
enviado=false;
var elStock=document.getElementById('stock');
elStock.className=existencias;
var elEnvio=document.getElementById('envio');
elEnvio.className=enviado;
function saludo(nombre)
{
    document.write("<h4>hola "+nombre+"</h4>");
}
saludo('Andres');