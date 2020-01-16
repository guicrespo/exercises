const getMarsTemperature = () => {
  const maxTemperature = 58
  return Math.floor(Math.random() * maxTemperature)
}

const messageDelay = () => Math.floor(Math.random() * 5000)

const toFarenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32

const temperatureInFarenheit = (temperature) => console.log(`It is currently ${toFarenheit(temperature)}ºF at Mars`)

const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`)

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (marsTemp, farenheitTemp, greetings) => {
  const tempCelsius = marsTemp(getMarsTemperature)

  setTimeout(() => {
    console.log(`Mars temperature is: ${tempCelsius} degree Celsius`)
  }, messageDelay())

  setTimeout(() => {
    farenheitTemp(tempCelsius)
    greetings(tempCelsius)
  }, 5000)
  
}

sendMarsTemperature(getMarsTemperature, temperatureInFarenheit, greet) // imprime "Mars temperature is: 20 degree Celsius", por exemplo
// sendMarsTemperature(temperatureInFarenheit) // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet) // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo





