const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepEqual(myFizzBuzz(15), 'fizzbuzz');
assert.deepEqual(myFizzBuzz(9), 'fizz');
assert.deepEqual(myFizzBuzz(10), 'buzz');
assert.deepEqual(myFizzBuzz(7), 7);
assert.deepEqual(myFizzBuzz('xablau'), false);