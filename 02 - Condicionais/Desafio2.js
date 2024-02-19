
/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo  elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo do combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem;

*/

const priceGasolina = 5.79;
const priceEtanol = 2.89;
const typeCombustivel = 'G';
const kMLiter = 10;
const distanceKM = 100;

let value = 0;

if (typeCombustivel === 'G') {
    value = (distanceKM / kMLiter) * priceGasolina;    
} else if(typeCombustivel === 'E') {
    value = (distanceKM / kMLiter) * priceEtanol;    
}

console.log('O valor gasto para essa viagem será de: ', value.toFixed(2));