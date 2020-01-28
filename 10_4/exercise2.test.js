const getUserName = require('./exercise2');
// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users para saber quais IDs existem.

describe('verificar o resultado da função getUserName', () => {
  it('quando o usuário é encontrado', async () => {
    const result = await getUserName(4);
    return expect(result).toEqual('Mark');
    // return getUserName(4).then(result => expect(result).toEqual('Mark'));
  })

  it('quando o usuário não é encontrado', () => {
    // const error = await getUserName(2);
    // return expect(error).toEqual({ error: 'User with 2 not found.' });
    return getUserName(2).catch(error => expect(error).toEqual({ error: 'User with 2 not found.' }))
  })
})
