const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
//Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

//utilizando reverse() considerando que são três elementos
// function swap([...myList]) {     // função sem arrow
//   return myList.reverse();
// }
// const swap = ([...myList]) => myList.reverse();  //função com arrow

// function swap([a, b, c]) {
//   return [c, b, a];
// }
const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);

assert.equal(swappedList[0], 3);
assert.equal(swappedList[1], 2);
assert.equal(swappedList[2], 1);
