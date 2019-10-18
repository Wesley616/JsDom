function valorMaior() {
    
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);

    if(numero1 == numero2)
    {
        valoresIguais();
    }
    else
    {
        if (numero1 > numero2) 
        {
            valor1Mairoq2();
        } 
        else 
        {
            valor2Mairoq1();
        }
    }
}
function valoresIguais() 
{
    let html =  '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +  
                '<div class="alert alert-danger" role="alert">' +
                '<h4>Não é permitido digitar valores iguais, por favor digite um valore diferente para o numero 2 </h4>' +
                '</div>' +
                '</div>';
    let resultado = document.getElementById('resultado');
    resultado.className = 'row visible';
    resultado.innerHTML = html;
}
function valor1Mairoq2() 
{
    let html =  '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +  
                '<div class="alert alert-success" role="alert">' +
                '<h4>Numero 1 é maior do que o Numero 2 </h4>' +
                '</div>' +
                '</div>';
    let resultado = document.getElementById('resultado');
    resultado.className = 'row visible';
    resultado.innerHTML = html;
}
function valor2Mairoq1() 
{
    let html =  '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +  
                '<div class="alert alert-success" role="alert">' +
                '<h4>Numero 2 é maior do que o Numero 1 </h4>' +
                '</div>' +
                '</div>';
    let resultado = document.getElementById('resultado');
    resultado.className = 'row visible';
    resultado.innerHTML = html;
}