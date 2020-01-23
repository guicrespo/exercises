const assert = require('assert');

//Teste se uma variável foi definida
let variavel = 'xablau';
// let variavel
assert(variavel !== undefined, 'a variável não foi definida');

//Teste se uma função foi definida
function test() { return true };
assert(typeof(test) === 'function', 'function')
assert(typeof(test2) === 'undefined', 'undefined')

//Teste se uma função foi definida
let arr = [1, 2];
assert.ok(arr instanceof Array, 'a variável não é um array')

//Compare dois objetos (JSON) para verificar se são idênticos ou não
const obj = {
  "estudantes": [
    { "firstName": "Lauro", "lastName": "Lyra" },
    { "firstName": "Pedro", "lastName": "Tófani" },
    { "firstName": "Conrado", "lastName": "Medeiros" }
  ]
}

const obj2 = {
  "estudantes": [
    { "firstName": "Lauro", "lastName": "Lyra" },
    { "firstName": "Pedro", "lastName": "Tófani" },
    { "firstName": "Conrado", "lastName": "Medeiros" }
  ]
}

assert.deepEqual(obj, obj2)

//Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
function numCompare(num1, num2) {
  if (num1 > num2) return true;
  if (num1 < num2) return false;
  return "são iguais :)"
}
assert.deepEqual(numCompare(2, 1), true);
assert.deepEqual(numCompare(1, 5), false);
assert.deepEqual(numCompare(1, 1), 'são iguais :)')
