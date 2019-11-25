function somaAntecedentes(N) {
    let soma = 0;
    if (N > 0) {
        for (i = 1; i <= N; i++) {
            soma += i;
        }
        return soma;
    }
    else return "Insira um número inteiro maior que zero."   
}
console.log(somaAntecedentes(10));
console.log(somaAntecedentes(5));
console.log(somaAntecedentes("dois"));
console.log(somaAntecedentes("5"));
console.log(somaAntecedentes(0));
console.log(somaAntecedentes(-10));