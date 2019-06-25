function trocaMoeda(){

    if ( $("#selecionarMoeda").val() == "R$" ){

        $('#vlrNumero1').maskMoney({
            thousands: '.',
            decimal: ',',
            allowZero:true,
            prefix: 'R$'
        });
        
        $('#vlrNumero2').maskMoney({
            thousands: '.',
            decimal: ',',
            allowZero:true,
            prefix: 'R$'
        });
        
        $('#resultNumero').maskMoney({
            thousands: '.',
            decimal: ',',
            allowZero:true,
            prefix: 'R$'
        });
    
    }

    if ( $("#selecionarMoeda").val() == "¥" ){

        $('#vlrNumero1').maskMoney({
            thousands: '',
            decimal: '',
            allowZero:true,
            prefix: '¥'
        });
        
        $('#vlrNumero2').maskMoney({
            thousands: '',
            decimal: '',
            allowZero:true,
            prefix: '¥'
        });

    }

    if ( $("#selecionarMoeda").val() == "$" ){

        $('#vlrNumero1').maskMoney({
            thousands: ',',
            decimal: '.',
            allowZero:true,
            prefix: '$'
        });
        
        $('#vlrNumero2').maskMoney({
            thousands: ',',
            decimal: '.',
            allowZero:true,
            prefix: '$'
        });

    }



    if ( $("#selecionarMoeda").val() == "€" ){

        $('#vlrNumero1').maskMoney({
            thousands: '.',
            decimal: ',',
            allowZero:true,
            prefix: '€'
        });
        
        $('#vlrNumero2').maskMoney({
            thousands: '.',
            decimal: ',',
            allowZero:true,
            prefix: '€'
        });

    }

    
}



function soma(a, b){
    valor= parseFloat(a) + parseFloat(b);
    valor = valor.toFixed(2);
    document.getElementById("resultNumero").innerHTML=valor;
}

function sub(a, b){
    valor= parseFloat(a) - parseFloat(b);
    valor = valor.toFixed(2);
    document.getElementById("resultNumero").innerHTML=valor;
}

function mult(a, b){
    valor= parseFloat(a) * parseFloat(b);
    valor = valor.toFixed(2);
    document.getElementById("resultNumero").innerHTML=valor;
}

function div(a, b){
    valor= parseFloat(a) / parseFloat(b);
    valor = valor.toFixed(2);
    document.getElementById("resultNumero").innerHTML=valor;
}



