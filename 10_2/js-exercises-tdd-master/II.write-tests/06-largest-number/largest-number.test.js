const getLargestNumber = require("./largest-number");
const assert = require('assert');

test("Get numbers greater than 10", function() {
  const arr = getLargestNumber([3, 21, 88, 4, 36]);
  const expected = 88;
  assert.deepEqual(arr, expected)
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
