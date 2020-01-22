new Promise((resolve, reject) => {
  const arraySum = [...Array(10)].map(() => Math.floor((Math.random() * 50) + 1)).map(number => number * number).reduce((acc, cur) => acc + cur)
  const arrayDivisao = [Math.round(arraySum/2), Math.round(arraySum/3), Math.round(arraySum/5), Math.round(arraySum/10)]
  if (arraySum < 8000) resolve(arrayDivisao);
  reject();
})
  .then(response => {
    console.log(response);
    return new Promise((resolve, reject) => {
      resolve(arrayDivisao = []);
      reject();
    })
    .then(response => console.log(response))
    .catch(() => console.log("erro"))
  })
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
  