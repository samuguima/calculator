
function soma(a, b){
    valor= parseInt(a) + parseInt(b);
    document.getElementById("resultNumero").innerHTML=valor;
}

function sub(a, b){
    valor= parseInt(a) - parseInt(b);
    document.getElementById("resultNumero").innerHTML=valor;
}

function mult(a, b){
    valor= parseInt(a) * parseInt(b);
    document.getElementById("resultNumero").innerHTML=valor;
}

function div(a, b){
    valor= parseInt(a) / parseInt(b);
    document.getElementById("resultNumero").innerHTML=valor;
}

texto = "Bem vindo ao Calculator";
alert(texto);