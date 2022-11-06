/*
3) Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escohla da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

do {
	const precoProduto = 100;
	const formaPagamento = 4;
	
	if(formaPagamento === 1){
	    console.log(precoProduto - (precoProduto * (10/100)))
	}
	else if(formaPagamento === 2){
	    console.log(precoProduto - (precoProduto * (15/100)))
	}
	else if(formaPagamento === 3){
	    console.log(precoProduto)
	}
	else{
	    console.log(precoProduto + (precoProduto * (10/100)))
	}
} while (condition);