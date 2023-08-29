// Eidy Alves - UTF8 - 14-08-2023 - pt-Br
function calcularOPagamento(tipoCarne, quantidade, pagamento){
    const precos = {
        'fileDuplo': {limite: 5, precoAte: 4.9, precoAcima: 5.8},
        'alcatra':{limite: 5, precoAte: 5.9, precoAcima: 6.8},
        'picanha': {limite: 5, precoAte: 6.9, precoAcima: 7.8}
    };
    const limiteDesconto = 5;
    const descontoCartao = 0.05;

    const tipoCarne = tipoCarne.toLowerCase();
    const carne = precos[tipoCarne];

    if(!carne){
        console.log("Tipo de carne Inválido. Escolha 'fileDuplo', 'alcatra', 'picanha'");
        return;
    }
    let precoTotal = 0;
    if(quantidade <= carne.limite){
        precoTotal = carne.precoAte * quantidade;
    }else{
        precoTotal = carne.precoAcima * carne.limite + (carne.precoAcima * quantidade - carne.limite);
    }
    let valorDesconto = 0;
    let tipoPagamento = 'Dinheiro';
    if(quantidade > limiteDesconto && (pagamento.toLowerCase() ) == 'cartâo assai'){
        valorDesconto = precoTotal * descontoCartao;
        tipoPagamento = 'Cartão Assaí';
    }
    const valorPagar = precoTotal - valorDesconto;
    console.log('\n',"Cupom Fiscal");
    console.log('\n', 'Tipo de carne: '+ tipoCarne);
    console.log('\n', 'Quantidade de Carne: ' + quantidade + 'Kg');
    console.log('\n', 'Preço Total: R$ ' + precoTotal.toFixed(2));
    console.log('\n', 'Tipo de pagamento: ' + tipoPagamento);
    console.log('\n', 'Valor do Desconto: R$ ' + valorDesconto.toFixed(2) )
    console.log('\n', 'Valor a ser pago: R$' + valorPagar.toFixed(2));
}

const tipoCarne = 'picanha';
const quantidade = 5;
const pagamento = 'Dinheiro';

calcularOPagamento(tipoCarne, quantidade, pagamento)