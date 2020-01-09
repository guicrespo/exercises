let n = 5;
let espaco = " ";
let caractere = "*";

for (let i = 1; i < n - 1; i++) {
    espaco += " ";
}
 for (let i = 1; i <= n; i++) {
    console.log(espaco + caractere);
    caractere += "*";
    espaco = espaco.substring(1);
 }