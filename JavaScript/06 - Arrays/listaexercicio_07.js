// 2) Crie um programa queseja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [2,4,6,7,9,11,12,13];
let numerosPar  = [];
let nI = 0;
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        numerosPar[nI] = numeros[i];
        nI++;
    }
}
console.log('Da lista: ' + numeros + ' os números: ' + numerosPar + ' são pares.');