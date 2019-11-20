let custoProduto = 100;
    valorVenda = 100;
    custoProdutoComImposto = custoProduto += custoProduto * 0.2
    lucro = (valorVenda - custoProdutoComImposto) * 1000;

if (custoProduto < 0 || valorVenda < 0) {
    console.log("Os valores de custo e venda não podem ser menores que zero")
} else if (lucro < 0) {
    console.log("Você teve um prejuízo de",-lucro,"reais :(")
} else if (lucro == 0) {
    console.log("Você não teve lucro nem prejuízo.")
} else {
    console.log("Você teve um lucro de",lucro,"reais! :D")
}