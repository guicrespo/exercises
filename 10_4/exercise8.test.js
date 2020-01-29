const fetchJoke = require('./exercise8');

// até onde eu consegui chegar sozinho (não funciona):
// it('verificar chamada da API para um resultado específico', () => {
//   const joke = fetch(API_URL, {
//     'id': '7h3oGtrOfxc',
//     'joke': 'Whiteboards ... are remarkable.',
//     'status': 200
//   })
//   fetchJoke(joke);
//   return joke.then(result => {
//     expect(result).toEqual('Whiteboards ... are remarkable.');
//   })
// })

// GABARITO (também não funciona):
const fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  })
}));

it('should fetch a joke', () => {
  return fetchJoke(fetch)
    .then(data => expect(data).toEqual('Whiteboards ... are remarkable.'));
});
