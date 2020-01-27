function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myIndexOf(arr, item) {
  return arr.findIndex((element) => element === item);
}

function mySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

function myRemove(arr, item) {
  return arr.filter((elem) => elem !== item);
}

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

module.exports = {
  sum,
  myIndexOf,
  mySum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz
};

// export default {
//   sum,
//   myIndexOf,
//   mySum,
//   myRemove,
//   myRemoveWithoutCopy,
//   myFizzBuzz
// }
