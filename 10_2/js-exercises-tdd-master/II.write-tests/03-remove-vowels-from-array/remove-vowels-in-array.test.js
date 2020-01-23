const removeVowelsForWords = require('./remove-vowels-in-array');
const assert = require('assert');

test("remove vowels from all words in array", function() {
  const nomes = removeVowelsForWords(["Irina", "Etza", "Daniel"])
  const expected = ["__i_a", "___a", "_a_ie_"]
  assert.deepEqual(nomes, expected) 
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
