/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel
por Kilômetro rodado.
Crie um método que dado a quantidade de quilometro e o preço do combustivel
nos de o valor gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calculoGastoCombustivel(distanciaEmKM, precoCombustivel) {
        return distanciaEmKM * this.gastoMedioPorKM * precoCombustivel;

    }
}


const hondaCivic = new Carro('Honda Civic', 'Preto', 1/12);
console.log(hondaCivic);
const valorTotalHonda = hondaCivic.calculoGastoCombustivel(70, 5);
console.log(`O gasto total da corrida foi de: ${valorTotalHonda}`);


const palio = new Carro('Palio', 'Prata', 1/10);
console.log(palio);
const valorTotalPalio = palio.calculoGastoCombustivel(70, 5);
console.log(`O gasto total da corrida foi de: ${valorTotalPalio}`);
