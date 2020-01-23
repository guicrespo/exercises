const greetPeople = require('./greet-people');
const assert = require('assert');

test("print list of names prefixed with Hello", function() {
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors);
  // expect(result).toEqual("Hello IrinaAshleighEtza");
  assert.deepEqual(result, "Hello IrinaAshleighEtza")
});
