let porcentagem = 0;

if (porcentagem > 100 || porcentagem < 0) {
    console.log("o valor não pode ser menor que 0 e nem maior que 100")
    return;
}   

switch (true) {
    case porcentagem >= 90:
        console.log("A");
        break;
    case porcentagem >= 80:
        console.log("B");
        break;
    case porcentagem >= 70:
        console.log("C");
        break;
    case porcentagem >= 60:
        console.log("D");
        break;
    case porcentagem >= 50:
        console.log("E");
        break;
    case porcentagem < 50:
        console.log("F");
}