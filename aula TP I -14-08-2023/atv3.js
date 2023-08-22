/// Eidy Alves - UTF8 - 14-08-2023 - pt-Br
function obterDiaDaSemana(numero){
const diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-feira",
 "Quinta-Feira", "Sexta-Feira", "sábado"];
 if(numero >= 1 && numero <= 7) {
     return diasDaSemana [numero - 1];
 }else{
     return "Número inválido. Informe um númerode 1 à 7."
 }
}
const numeroDia = 6;
const diaDaSemana = obterDiaDaSemana(numeroDia)
console.log(diaDaSemana)