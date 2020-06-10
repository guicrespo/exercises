// solução com inquirer
const inquirer = require('inquirer');

function calcBMI(weight, height) {
  const bmi = (weight / Math.pow(height, 2)).toFixed(2);
  return { bmi };
};

function BMIMessage(bmi) {
  let message;
  if (bmi < 18.5) {
    message = "Your weight is below normal (thinness).";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message = "Your weight is normal.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    message = "You are overweight.";
  } else if (bmi >= 30 && bmi <= 34.9) {
    message = "You have class I obesity.";
  } else if (bmi >= 35 && bmi <= 39.9) {
    message = "You have class II obesity.";
  } else {
    message = "You have class III (or IV) obesity";
  }
  return { message };
};

const questions = [
  {
    type: 'input',
    name: 'weight',
    message: 'What\'s your weight (in kg)?',
    validate: function (value) {
      const weight = !isNaN(value);
      return weight || 'Please enter a number';
    },
  },
  {
    type: 'input',
    name: 'height',
    message: 'What\'s your height (in meters)?',
    validate: function (value) {
      const height = !isNaN(value);
      return height || 'Please enter a number';
    },
  },
];

inquirer.prompt(questions)
  .then((answers) => {
    const { bmi } = calcBMI(answers.weight, answers.height);
    console.log(`Your Body Mass Index(BMI) is ${bmi}.`);
    const { message } = BMIMessage(bmi);
    console.log(message);
  })

// solução com readline-sync
// const readlineSync = require('readline-sync');

// function calcBMI(weight, height) {
//   const bmi = (weightFixed / Math.pow(heightFixed, 2)).toFixed(2);
//   return { bmi };
// };

// function showBMI() {
//   const weight = readlineSync.questionInt('What\'s your weight (in kg)? ');
//   const height = readlineSync.questionFloat('What\'s your height (in meters)? ');

//   const { bmi } = calcBMI(weight, height);

//   console.log(`Your Body Mass Index(BMI) is ${bmi}.`);

//   if (bmi < 18.5) {
//     console.log("Your weight is below normal (thinness).");
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Your weight is normal.");
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log("You are overweight.");
//   } else if (bmi >= 30 && bmi <= 34.9) {
//     console.log("You have class I obesity.");
//   } else if (bmi >= 35 && bmi <= 39.9) {
//     console.log("You have class II obesity.");
//   } else {
//     console.log("You have class III (or IV) obesity");
//   };
// };

// showBMI();
