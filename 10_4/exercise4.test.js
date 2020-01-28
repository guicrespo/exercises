const getRepos = require('./exercise4');

it('verificar se repositórios estão na lista', () => {
  const repositorio = getRepos('https://api.github.com/users/tryber/repos');
  return repositorio.then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  })
})
 //a função retorna um array com todos os repositórios através do map, por isso não é necessário fazer o .json() no teste, pois a função já faz isso. O toContain pesquisa nesse array se ele contém os repositórios selecionados
