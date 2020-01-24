const assert = require('assert');

//Teste se uma variável foi definida
function varIsUndefined(variable) {
  if(variable === undefined) return 'a variável não foi definida';
  return variable;
}

//Teste se uma função foi definida
function test() { return true };
function test2() { };

//Utilize assert.ok() para testar uma condição
function isAnArray(arr) {
  if (arr instanceof Array) return true;
  return 'a variável não é um array';
}

//Compare dois objetos (JSON) para verificar se são idênticos ou não
function objCompare (obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
  return 'os objetos não são iguais';
}
//Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
function numCompare(num1, num2) {
  if (num1 > num2) return [`${num1} é maior que ${num2}`];
  if (num1 < num2) return [`${num1} é menor que ${num2}`];
  return "são iguais :)"
}

module.exports = {
  varIsUndefined,
  test,
  test2,
  isAnArray,
  objCompare,
  numCompare
}
