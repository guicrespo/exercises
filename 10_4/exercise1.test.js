const uppercase = require('./exercise1');

it('verificar se o callback da função está sendo chamado', done => {
  uppercase('cachorro', result => {
    expect(result).toEqual('CACHORRO');
    done();
  })
})
