/*
    3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
    O salário a ser transferido é calculado da seguinte maneira:

    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

    Para calcular o percentual de imposto segue as aliquotas:

        De R$ 0.00 a R$ 1100.00 = 5.00%
        De R$ 1100.00 a R$ 2500.00 = 10.00%
        Maior que R$ 2500.00 = 15.00%

    Exemplo:
        Entrada: 
            2000
            250

    Saída:
        2050.00
*/
const { gets, print } = require('./funcoes-auxiliares03');

let valorSalario = gets();
const valorBeneficios = gets();
let valorATransferir = 0;

function calcularPorcentagem(valorSalario, percentual) {
    return valorSalario * (percentual / 100);
}

function pegarAliquota(valorSalario) {
    if (valorSalario >= 0 && valorSalario <= 1100) {
        return 5;
    } else if (valorSalario >= 1101 && valorSalario <= 2500) {
        return 10;
    } else if (valorSalario > 2500) {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(valorSalario);
const tax = calcularPorcentagem(valorSalario, aliquotaImposto);
valorATransferir = (valorSalario - tax) + valorBeneficios; 

print(valorATransferir.toFixed(2));