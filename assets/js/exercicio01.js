
function simuladorDeSalario() {

    const SALARIO_COMERCIAL = 1300;
    const PERCENTUAL_DE_COMISSAO = 0.1;
    const META = 1000;
    var nomeVendedor = document.getElementById('nomeVendedor').value;
    var totalDeVendas = document.getElementById('totalDeVendas').value;

    

    if (totalDeVendas >= META) {
        var salarioBruto = SALARIO_COMERCIAL + (totalDeVendas * PERCENTUAL_DE_COMISSAO);
        var comissao = totalDeVendas * PERCENTUAL_DE_COMISSAO;
        exibirMensagenResultadoSucesso(nomeVendedor, salarioBruto, comissao );
    }
    else {
        var comissao = totalDeVendas * PERCENTUAL_DE_COMISSAO;
        exibirMensagenResultadoErro(nomeVendedor, totalDeVendas);
    }
}
function exibirMensagenResultadoSucesso(nome, salario, comissao) {
    let html =  '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +  
                '<div class="alert alert-success" role="alert">' +
                '<h4>'+nome+', seu salário bruto será de '+salario+' reais.<br>Você recebeu R$'+comissao+' de comissao</h4>' +
                '</div>' +
                '</div>';
    let mensageResultado = document.getElementById('mensageResultado');
    mensageResultado.className = 'row visible';
    mensageResultado.innerHTML = html;
}
function exibirMensagenResultadoErro(nome, vendas) {
    let html =  '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +  
                '<div class="alert alert-danger" role="alert">' +
                '<h4>'+nome+',você não recebera comissao.<br>Total de vendas é R$'+vendas+' e esta abaixo valor minimo permitido</h4>' +
                '</div>' +
                '</div>';
    let mensageResultado = document.getElementById('mensageResultado');
    mensageResultado.className = 'row visible';
    mensageResultado.innerHTML = html;
}

