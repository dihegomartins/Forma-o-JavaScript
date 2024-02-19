/*
Elabore um algoritmo que calcule o que deve ser pago por um
produto, considerando o preço normal de etiqueta e a escolha da
condição de pagamento. Utilize os códigos da tabela a seguir para
ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:

1 - À vista débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */


let valorProduto = 100;
const metodoDePagamento = 3;

if (metodoDePagamento === 1) {
    valorProduto = valorProduto - (valorProduto * 0.10);
} else if (metodoDePagamento === 2) {
    valorProduto = valorProduto - (valorProduto * 0.15);
} else if (metodoDePagamento === 3) {
    const qtsParcelas = 2;
    if (qtsParcelas <= 2) {
        valorProduto = valorProduto;
    } else {
        valorProduto = valorProduto + (valorProduto * 0.10);
    }
}

console.log(valorProduto.toFixed(2));