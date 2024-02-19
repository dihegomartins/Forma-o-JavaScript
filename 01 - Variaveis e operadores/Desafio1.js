/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo  eles:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem;
*/

const priceFuel = 5.79;
const kMLiter = 10;
const distanceKM = 100;

let value = (distanceKM / kMLiter) * priceFuel;

console.log('O valor gasto para essa viagem será de: ', value.toFixed(2));





