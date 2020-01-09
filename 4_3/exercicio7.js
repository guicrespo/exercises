function verificaFimPalavra (stringWord, stringEnd) {
    let palavra1 = stringWord.toLowerCase().split("").reverse();
    let palavra2 = stringEnd.toLowerCase().split("").reverse();
    let contador = 0;
    if (palavra1.length > palavra2.length) {
        for (i = 0; i < palavra2.length; i++) {
            if (palavra2[i] !== palavra1[i]) return false;
            if (palavra2[i] == palavra1[i]) {
                contador += 1;
            }
        }
        return true;
    }
    return false;
}
console.log(verificaFimPalavra("Banana", "ana")); // true
console.log(verificaFimPalavra("Banana", "ANA")); // true
console.log(verificaFimPalavra("Banana", "caramelo")); // false
console.log(verificaFimPalavra("Banana", "ab")); // false
console.log(verificaFimPalavra("Trybe", "BE")); // true
console.log(verificaFimPalavra("Trybe", "E")); // true
console.log(verificaFimPalavra("Trybe", "rybe")); // true
console.log(verificaFimPalavra("Trybe", "tybe")); // false
console.log(verificaFimPalavra("Caramelo", "emlo")); // false
console.log(verificaFimPalavra("Caramelo", "MElo")); // true
console.log(verificaFimPalavra("amarelo", "caraMElo")); // false
console.log(verificaFimPalavra("amarelo", "marelo")); // true