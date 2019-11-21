// let num1 = 10;
// let num2 = 20;

// if (num1 < num2) {
//     console.log("num2 é maior")
// } else if (num1 == num2) {
//     console.log("num1 e num2 têm o mesmo valor")
// } else {
//     console.log("num1 é maior")
// }

function valorMenorMaior (num1, num2) {
    if (num1 < num2) return "O número " + num1 + " é o menor dentre os dois";
    if (num2 < num1) return "O número " + num2 + " é o menor dentre os dois";
    if (num1 == num2) return "Os números são iguais";
}
console.log(valorMenorMaior(5, 2))

//ou

function valorMenorMaior (num1, num2) {
    if (num1 < num2) return num1;
    if (num2 < num1) return num2;
    if (num1 == num2) return num1; //já que são iguais, tanto faz qual imprime.
}
console.log(valorMenorMaior(5, 5))