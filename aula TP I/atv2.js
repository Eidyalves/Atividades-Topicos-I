/// Eidy Alves - UTF8 - 14-08-2023 - pt-Br
function calcularFolhaPagamento(valorHora, horasTrabalhadas){
    const salarioBruto = valorHora * horasTrabalhadas;
    let descontoIR = 0;

    if(salarioBruto <= 900){
        descontoIR = 0;
    }else if(salarioBruto <= 1500){
        descontoIR = 0.005;
    }else if(salarioBruto <= 2500){
        descontoIR = 0.1;
    }else{
        descontoIR = 0.2;
    }
    const descontoValorIR = salarioBruto * descontoIR;
    const descontoINSS =  salarioBruto * 0.1;
    const descontoFgts = salarioBruto * 011;
    const descontoTotal = descontoValorIR + descontoINSS
    const salarioLiquido = salarioBruto - descontoTotal

    console.log('\n' + "Salário Bruto:  R$ " + salarioBruto.toFixed(2) + '\n');
    console.log("Desconto do Imposto de Renda: R$ " + descontoValorIR.toFixed(2)+ '\n');
    console.log("Desconto do Inss: R$ " + descontoINSS.toFixed(2) + '\n');
    console.log("FGTS: R$ "+ descontoFgts.toFixed(2) + '\n');
    console.log("Salário Líquido: R$ " + salarioLiquido.toFixed(2) + '\n');
}
const valorHora = 12.09;
const horasTrabalhadas = 400;
calcularFolhaPagamento(valorHora, horasTrabalhadas)