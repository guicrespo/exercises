// let num1 = 5;
// let num2 = 0;
// let num3 = 0;

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

function numeroImpar(num1, num2, num3) {
    if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(numeroImpar(2, 6, 8));