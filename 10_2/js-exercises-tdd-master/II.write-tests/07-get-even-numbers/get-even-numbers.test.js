const getEven = require("./get-even-numbers");
const assert = require('assert');

test("Get numbers greater than 10", function() {
  const arr = getEven([22, 13, 73, 82, 4]);
  const expected = [22, 82, 4];
  assert.deepEqual(arr, expected)
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
