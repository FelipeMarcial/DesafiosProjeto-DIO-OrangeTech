/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 4.39;
const precoGasolina = 5.70;
const tipoCombustivel = 'Gasolina';
const distanciaKm = 100;
const mediaKmLt = 10;
let valorGasto;

if(tipoCombustivel === 'Gasolina'){
    valorGasto = (distanciaKm/mediaKmLt) * precoGasolina;
    console.log('O valor gasto em gasolina foi de: R$ ' + valorGasto);
}
else{
    valorGasto = (distanciaKm/mediaKmLt) * precoEtanol;
    console.log('O valor gasto em etanol foi de: R$ ' + valorGasto);
}