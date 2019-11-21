let n = 25;
let espaco = "";
let ast = "*";

if (n % 2 == 0 || n < 3) {
    console.log("Não é possível pirâmide com base de número par ou menor que três!");
    return;
}

for (let i = 1; i <= n/2 - 0.5; i++) {
    espaco += " ";
}
for (let i = 1; i <= n; i++) {
    console.log(espaco + ast)
    ast += "**"
    espaco = espaco.slice(1);
    n -= 1;
}