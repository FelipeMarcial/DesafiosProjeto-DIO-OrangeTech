/*
2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura));
    Instancia uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça ao José para dizer o valor de se IMC.
*/

class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (Math.pow(this.altura,2));
    }
    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return 'Está abaixo do peso.'
        }
        else if(imc >= 18.5 && imc < 25){
            return 'Está com o peso normal.'
        }
        else if(imc >= 25 && imc < 30){
            return 'Está acima do peso.'
        }
        else if(imc >= 30 && imc < 40){
            return 'Está obeso.'
        }
        else {
            return 'Obesidade grave'
        }
    }

}

const jose = new Pessoas('José', 70, 1.75);
console.log(jose.classificarImc());
const felipe = new Pessoas('Felipe', 102, 1.80);
console.log(felipe.classificarImc());