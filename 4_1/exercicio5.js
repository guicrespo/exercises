// let ang1 = 30;
// let ang2 = 60;
// let ang3 = 90;

// if (ang1 == 0 || ang2 == 0 || ang3 == 0) {
//     console.log("o triângulo não pode ter ângulo igual a zero")
// } else if (ang1 + ang2 + ang3 == 180) {
//     console.log(true)
// } else if (ang1 + ang2 + ang3 !== 180) {
//     console.log(false)
// }

function angulosTriangulo(ang1, ang2, ang3) {
    if (ang1 == 0 || ang2 == 0 || ang3 == 0) {
        return "o triângulo não pode ter ângulo igual a zero";
    }
    if (ang1 + ang2 + ang3 !== 180) return false;
    return true;
}
console.log(angulosTriangulo(30, 60, 90))