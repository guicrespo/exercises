const app = require('./exercise6');

it('verificar quantas vezes increment foi executado e se getCount foi executado ou não', () => {
  const counter = { //cria um objeto com um mock das duas funções
    increment: jest.fn(),
    getCount: jest.fn()
  }
  app(counter); //executa a função que incrementa duas vezes
  expect(counter.increment).toHaveBeenCalledTimes(2); //verifica se o increment foi chamado 2x
  expect(counter.getCount).not.toHaveBeenCalled(); // verifica se o getCount não foi chamado -> efetivamente não foi
})
