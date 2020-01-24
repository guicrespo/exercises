var getSecondThird = require("./get-second-third");
const assert = require('assert');

test("Get numbers greater than 10", function() {
  const arr = getSecondThird([90, 5, 11, 8, 6]);
  const expected = [6, 8];
  assert.deepEqual(arr, expected)
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
