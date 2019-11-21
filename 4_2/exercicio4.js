// essa ficou meio gambiarra, mas não consegui fazer melhor do que isso, por enquanto.

let n = 5;
let espaco = " ";
let ast = "*";

if (n % 2 == 0 || n < 3) {
    console.log("Não é possível pirâmide com base de número par ou menor que três!");
    return;
}

for (let i = 1; i < n - 3; i++) {
    espaco += " ";
}
for (let i = 1; i <= n; i++) {
    console.log(espaco + ast)
    ast += "**"
    espaco = espaco.slice(1);
    n -= 1;
}