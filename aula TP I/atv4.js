// Eidy Alves - UTF8 - 14-08-2023 - pt-Br
function calcularPagamento(tipoCombustivel){
    const precoAlcool = 1.9;
    const precoGasolina = 2.5;
    let descontoPorLitro = 0;

    if(tipoCombustivel == 'a' || tipoCombustivel == 'A'){
        if(litrosVendidos <= 20){
            descontoPorLitro = 0.003;
        }else{
            descontoPorLitro = 0.005;
        }
        const valorPago = (precoAlcool - (precoAlcool * descontoPorLitro)) * litrosVendidos;
        console.log ("Valor a ser pago: R$" + valorPago.toFixed(2));
    }else if(tipoCombustivel == 'g' || tipoCombustivel == 'G'){
            if(litrosVendidos <= 20){
                descontoPorLitro = 0.004;
            }else{
                descontoPorLitro = 0.006;
            }
            const valorPago = (precoGasolina - (precoGasolina * descontoPorLitro)) * litrosVendidos;
            console.log("Valor a ser pago: R$" + valorPago.toFixed(2))
    }else{
        console.log("Tipo de combustivel inválido. Use 'a' para alcool e 'g' para gasolina!");
    }
}

let tipoCombustivel = 'G';
let litrosVendidos = 43;
calcularPagamento(tipoCombustivel, litrosVendidos);