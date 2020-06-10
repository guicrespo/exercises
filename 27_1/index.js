const readlineSync = require('readline-sync');

function calcBMI(weight, height) {
  const weightFixed = weight.toFixed(2);
  const heightFixed = height.toFixed(2);
  const bmi = Math.round(weightFixed / Math.pow(heightFixed, 2));
  return { bmi };
}

function showBMI() {
  const weight = readlineSync.questionInt('What\'s your weight (in kg)? ');
  const height = readlineSync.questionFloat('What\'s your height (in meters)? ');

  const { bmi } = calcBMI(weight, height);

  console.log(`Your Body Mass Index(BMI) is ${bmi}.`);

  if (bmi < 18.5) {
    console.log("Your weight is below normal (thinness).");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your weight is normal.");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight.");
  } else if (bmi >= 30 && bmi <= 34.9) {
    console.log("You have class I obesity.");
  } else if (bmi >= 35 && bmi <= 39.9) {
    console.log("You have class II obesity.");
  } else {
    console.log("You have class III (or IV) obesity");
  };
}

showBMI();
