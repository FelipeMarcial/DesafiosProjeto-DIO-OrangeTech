/*
Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
    1- Preço do combustível;
    2- Gasto médio de combustível do carro por KM;
    3- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const mediaKmLt = 10;
const ditanciaKm = 100;
let valorGasto;

valorGasto = (ditanciaKm/mediaKmLt) * precoEtanol;

console.log(valorGasto.toFixed(2));