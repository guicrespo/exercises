function maiorValor(array) {
    let maiorElemento = Math.max.apply(null, array);
    return array.indexOf(maiorElemento);
}
console.log (maiorValor([2, 3, 6, 7, 10, 1]));

// ||

function maiorValor(array) {
    var maiorElemento = array.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return array.indexOf(maiorElemento);
}
console.log (maiorValor([2, 3, 6, 7, 10, 1]));