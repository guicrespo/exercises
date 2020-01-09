function menorValor(array) {
    let menorElemento = Math.min.apply(null, array);
    return array.indexOf(menorElemento);
}
console.log (menorValor([2, 3, 6, 7, 10, -1]));

// ||

function menorValor(array) {
    var menorElemento = array.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return array.indexOf(menorElemento);
}
console.log (menorValor([2, 3, 6, 7, 10, 1, 10, 35, -40, 33]));