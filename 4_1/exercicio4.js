// let num = -2.3;

// if (num > 0) {
//     console.log("positive")
// } else if (num < 0) {
//     console.log("negative")
// } else {
//     console.log("zero")
// }

function positiveNegative(num) {
    if (num > 0) return num + " é positivo";
    if (num < 0) return num + " é negativo";
    return "o valor é zero"
}
console.log(positiveNegative(0))