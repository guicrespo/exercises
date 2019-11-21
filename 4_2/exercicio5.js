let numero = 2;
    numeroDeDivisiveis = 0;

for (let i = 0; i < numero; i++) {
    if (numero % i == 0) {
        numeroDeDivisiveis += 1;
    }
}
if (p == 1) {
    console.log("Esse número é primo")
} else {
    console.log("Esse número não é primo")
}


// explicação

// for (let i = 0; i < numero; i++) { // "i < numero" pois só tenho que verificar se os números abaixo dele são divisíveis
    // if (numero % i == 0) { // o 'for' vai fazer um loop de todos os números menores do que a variável "numero", sempre verificando pelo 'if' se são divisíveis por ele
        // numeroDeDivisiveis += 1; // se a condição for estabelecida, vai adicionar + 1 ao númeroDeDivisiveis -> basicamente está contando quantos números menores do que a variável "numero" são divisíveis por ela

// if (p == 1) { // caso apenas um dos números seja divísel (o número 1, no caso, pois ele sempre será divível pelo "numero"), ele aplica a condição e imprime que é primo
//     console.log("Esse número é primo")
// } else {
//     console.log("Esse número não é primo")
// }