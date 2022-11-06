function escrevaNome(nome){
    return 'Meu nome é: ' + nome + '. ';
}

function verificaIdade(idade){
    if(idade >= 18){
        return 'Maior de idade.';
    } else{
        return 'Menor de idade.';
    }
}

console.log(escrevaNome('Felipe') +  verificaIdade(11));