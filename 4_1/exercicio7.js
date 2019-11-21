// let porcentagem = 0;

// if (porcentagem > 100 || porcentagem < 0) {
//     console.log("o valor não pode ser menor que 0 e nem maior que 100")
//     return;
// }   

// switch (true) {
//     case porcentagem >= 90:
//         console.log("A");
//         break;
//     case porcentagem >= 80:
//         console.log("B");
//         break;
//     case porcentagem >= 70:
//         console.log("C");
//         break;
//     case porcentagem >= 60:
//         console.log("D");
//         break;
//     case porcentagem >= 50:
//         console.log("E");
//         break;
//     case porcentagem < 50:
//         console.log("F");
// }

function notaPorcentagem(porcentagem) {
    if (porcentagem > 100 || porcentagem < 0) {
        return "digite um valor de 0 a 100";
    }
    switch (true) {
        case porcentagem >= 90: return "A";
        case porcentagem >= 80: return "B";
        case porcentagem >= 70: return "C";
        case porcentagem >= 60: return "D";
        case porcentagem >= 50: return "E";
        case porcentagem < 50: return "F";
    }
}
console.log(notaPorcentagem(80))