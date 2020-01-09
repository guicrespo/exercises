function verificaPalindromo(palavra) {
    let palavraReversa = palavra.split("").reverse().join("").toLowerCase();
    if (palavraReversa == palavra.toLowerCase()) return true;
    return false;
}
console.log(verificaPalindromo("RADAr"));