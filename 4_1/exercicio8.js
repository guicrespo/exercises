// let num1 = 1;
// let num2 = 1;
// let num3 = 0;

// if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

function numeroPar(num1, num2, num3) {
    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
        return true;
    }
    return false;
}
console.log(numeroPar(3, 5, 7));