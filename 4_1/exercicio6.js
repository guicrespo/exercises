// Rei - qualquer direção
// Rainha - qualquer direção
// Torre - vertical ou horizontal
// Bispo - diagonal
// Cavalo - em L
// Peão - frente

let peca = "bispO".toLowerCase();
    console.log(peca,"move-se:");

switch (peca) {
    case "rei":
        console.log("uma casa em qualquer direção");
        break;
    case "rainha":
        console.log("quantas casas quiser em qualquer direção");
        break;
    case "torre":
        console.log("na vertical e horizontal");
        break;
    case "bispo":
        console.log("em diagonal");
        break;
    case "cavalo":
        console.log("em \"L\"");
        break;
    case "peão":
        console.log("uma casa em frente");
        break;
    default:
        console.log("essa peça não existe")
}

