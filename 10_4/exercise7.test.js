const multipleAdd = require('./exercise7');

it('verificar se a função add foi chamada e com quais valores', () => {
  const counter = {
    add: jest.fn(),
  }
  multipleAdd(counter);
  expect(counter.add).toHaveBeenCalled();
  expect(counter.add).toHaveBeenCalledWith(15);
  expect(counter.add).toHaveBeenCalledWith(20);
})
