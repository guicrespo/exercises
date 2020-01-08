//versão iterativa

// const frase = "O rato roeu roupa do rei de roma";
// function longestWord(texto) {
//   let arrayPalavras = texto.split(' ');
//   let contagem = 0;
//   let maiorPalavra = '';
//   for (let i = 0; i < arrayPalavras.length; i++) {
//     let comprimentoPalavra = arrayPalavras[i].length;
//     if (comprimentoPalavra > contagem) {
//       contagem = comprimentoPalavra;
//       maiorPalavra = arrayPalavras[i];
//     }
//   }
//   return `${maiorPalavra} é a maior palavra da frase`;
// }


//versão com reduce e arrow function

// console.log(longestWord(frase));
// const frase = "O rato roeu roupa do rei de roma";
// function longestWord(texto) {
//   let maiorPalavra = texto.split(' ').reduce((palavraInicial, palavraAtual) => {
//     if (palavraInicial.length > palavraAtual.length) return palavraInicial;
//     return palavraAtual;
//   })
//   return maiorPalavra;
// }
// console.log(longestWord(frase));


//versão com reduce e arrow function recursiva

// const frase = "O rato roeu roupa do rei de roma";
// function longestWord(texto) {
//   let maiorPalavra = texto.split(' ').reduce((initial, current) => (initial.length > current.length) ? initial : current);
//   return maiorPalavra;
// }
// console.log(longestWord(frase));


//versão recursiva de uma linha
const palavra = texto => texto.split(' ').reduce((inicial, atual) => (inicial.length > atual.length) ? inicial : atual);
console.log(`${palavra("Antônio foi no banheiro e não sabemos o que aconteceu")} é a maior palavra da frase`);