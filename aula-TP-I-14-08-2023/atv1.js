/// Eidy Alves - UTF8 - 14-08-2023 - pt-Br
function calcularReajuste(salario){
    let percentual = 0;

    if (salario <= 280){
        percentual = 0.2;
    } else if(salario <= 700){
        percentual = 0.15;
    }else if(salario <= 1500){
        percentual = 0.1;
    }else{
        percentual = 0.05;
    }
    const aumento = salario * percentual;
    const novoSalario = salario + aumento;

    console.log('\n' + "O salário antes do ajuste é: R$ " + salario.toFixed(2) + '\n');
    console.log("O percentual de aumento aplicado é: R$ " + (percentual * 100) + "%" + '\n');
    console.log("O valor do aumento é: R$ " + aumento.toFixed(2) + '\n');
    console.log("O salário novo é de: R$ " + novoSalario.toFixed(2) + '\n');
}

const salarioColaborador = parseFloat(prompt("Insira o salario"))
calcularReajuste(salarioColaborador);   