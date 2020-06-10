const readlineSync = require('readline-sync');

function calcBMI(weight, height) {
  return weight / Math.pow(height, 2);
}

function showBMI() {
  const weight = readlineSync.questionInt('What\'s your weight (in kg)? ');
  const height = readlineSync.questionFloat('What\'s your height (in meters)? ');

  const bmi = Math.round(calcBMI(weight, height));

  console.log(`Your Body Mass Index(BMI) is ${bmi}`);
}

showBMI();
