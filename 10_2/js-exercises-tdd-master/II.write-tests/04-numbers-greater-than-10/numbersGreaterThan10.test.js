var largerThanTen = require("./numbersGreaterThan10");
const assert = require('assert');

test("Get numbers greater than 10", function() {
  const arr = largerThanTen([4, 10, 32, 9, 21]);
  const expected = [32, 21];
  assert.deepEqual(arr, expected)
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
