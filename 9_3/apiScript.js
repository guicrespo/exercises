const API_URL = "https://icanhazdadjoke.com/"

const fetchJoke = () => {
  const jokeContainer = document.querySelector('#jokeContainer')
  fetch(API_URL, {
    headers: ({
      Accept: "application/json",
    })
  })
    .then(response => response.json()
    .then(response => jokeContainer.innerHTML = response.joke))
    .catch(error => console.log(error));
}

window.onload = () => fetchJoke()

//COM COMENTÁRIOS

// const fetchJoke = () => {
//   const jokeContainer = document.querySelector('#jokeContainer')
//   fetch(API_URL, {
//     headers: ({
//       Accept: "application/json",
//     })
//   }) //o segundo parâmetro indica o formato em que virá a requisição
//     .then(response => {
//       // console.log(response)
//       response.json() //transforma o arquivo em um json
//       .then(response => { // "then" dentro do outro "then"
//         // console.log(response)
//         jokeContainer.innerHTML = response.joke; // "captura" o item joke do objeto
//       })
//     })
//     .catch(error => console.log(error))
// }

// window.onload = () => fetchJoke()


// Fetching a random joke as JSON:
// (info: https://icanhazdadjoke.com/api)

// $ curl -H "Accept: application/json" https://icanhazdadjoke.com/
// {
//   "id": "R7UfaahVfFd",
//   "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
//   "status": 200
// }