/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a taebla abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprrovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('A média foi de: ' + media.toFixed(2) + '. O aluno foi reprovado!');
}
else if(media >= 5 && media <= 7){
    console.log('A média foi de: ' + media.toFixed(2) + '. O aluno está de recuperação!');
}
else{
    console.log('A média foi de: ' + media.toFixed(2) + '. O aluno foi aprovado!');   
}