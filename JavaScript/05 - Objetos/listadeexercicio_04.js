/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e uma gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    mediaKm;

    constructor(marca, cor, mediaKm){
        this.marca = marca;
        this.cor = cor;
        this.mediaKm = mediaKm;
    }

    calcularGastoViagem(distancia, precoCombustivel){
        return (distancia * (1/this.mediaKm)) * precoCombustivel;
    }

}

const uno = new Carro('Fiat', 'Azul', 16);
console.log(uno.calcularGastoViagem(70,5));
const vectra = new Carro('Chevrolet', 'Preto', 12);
console.log(vectra.calcularGastoViagem(70,5));