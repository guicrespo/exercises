// let custoProduto = 100;
//     valorVenda = 100;
//     custoProdutoComImposto = custoProduto += custoProduto * 0.2
//     lucro = (valorVenda - custoProdutoComImposto) * 1000;

// if (custoProduto < 0 || valorVenda < 0) {
//     console.log("Os valores de custo e venda não podem ser menores que zero")
// } else if (lucro < 0) {
//     console.log("Você teve um prejuízo de",-lucro,"reais :(")
// } else if (lucro == 0) {
//     console.log("Você não teve lucro nem prejuízo.")
// } else {
//     console.log("Você teve um lucro de",lucro,"reais! :D")
// }

function lucroVenda(custoProduto, valorVenda) {
    let custoProdutoComImposto = custoProduto += custoProduto * 0.2
    let lucro = (valorVenda - custoProdutoComImposto) * 1000;
    if (custoProduto < 0 || valorVenda < 0) {
        return "Os valores de custo e venda não podem ser menores que zero";
    }
    if (lucro < 0) return "Você teve um prejuízo de " + -lucro + " reais :(";
    if (lucro == 0) return "Você não teve lucro nem prejuízo.";
    return "Você teve um lucro de " + lucro + " reais! :D";
}
console.log(lucroVenda(50, 60))