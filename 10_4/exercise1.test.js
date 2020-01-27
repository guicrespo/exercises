const exercise1 = require('./exercise1');

it('verificar se o callback da função está sendo chamado', () => {
  const callback = jest.fn();
  exercise1('cachorro', callback);
  expect(callback).toHaveBeenCalled();
})
