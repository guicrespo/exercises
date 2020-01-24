const assert = require('assert');

function myRemove(arr, item) {
  return arr.filter((elem) => elem !== item);
}

// implemente seus testes aqui
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
let array = [1, 2, 3];
myRemove(array, 1);
assert.deepEqual(array, [1, 2, 3])
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
