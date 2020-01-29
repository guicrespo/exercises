const getUserName = require('./exercise3');

describe('testando função getUserName com async e await', () => {
  it('quando o usuário é encontrado', async () => {
    // const user = await getUserName(4);
    // expect(user).toEqual('Mark');
    await expect(getUserName(4)).resolves.toEqual('Mark');
  })
  it('quando o usuário não é encontrado', async () => {
    // try {
    //   await getUserName(2);
    // } catch(error) {
    //   expect(error).toEqual({ error: 'User with 2 not found.' });
    // }
    await expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
  })
})
