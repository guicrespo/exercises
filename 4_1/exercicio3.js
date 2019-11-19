num1 = 30;
num2 = 50;
num3 = 50;

if (num1 > num2 && num1 > num3) {
    console.log("num1 é o maior");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 é o maior");
} else if (num3 > num1 && num3 > num2) {
    console.log("num3 é o maior");
} else if (num1 == num2 && num1 > num3) {
    console.log("num1 e num2 são iguais e são os maiores")
} else if (num2 == num3 && num3 > num1) {
    console.log("num2 e num3 são iguais e são os maiores")
} else if (num1 == num3 && num1 > num2) {
    console.log("num1 e num3 são iguais e são os maiores")
} else {
    console.log("os três números são iguais")
}