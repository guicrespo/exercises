const exercises1_6 = require('./exercise1');
const exercise7 = require('./exercise7');
// import exercises1_6 from './exercise1';

describe('Funções 1 a 6 da aula 10.1', () => {
  it('função soma', () => {
    expect(exercises1_6.sum(2, 1)).toBe(3);
  })

  it('função myIndexOf', () => {
    const arr = [1, 2, 3, 4];
    expect(exercises1_6.myIndexOf(arr, 3)).toBe(2);
    expect(exercises1_6.myIndexOf(arr, 5)).toBe(-1);
  })

  it('função mySum', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, -4]
    expect(exercises1_6.mySum(arr1)).toBe(10);
    expect(exercises1_6.mySum(arr2)).toBe(2);
  })

  it('função myRemove', () => {
    const arr = [1, 2, 3, 4];
    expect(exercises1_6.myRemove(arr, 3)).toEqual([1, 2, 4]);
    expect(exercises1_6.myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
    exercises1_6.myRemove(arr);
    expect(arr).toEqual([1, 2, 3, 4]);
    expect(exercises1_6.myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  })

  it('função myRemoveWithoutCopy', () => {
    const arr = [1, 2, 3, 4];
    expect(exercises1_6.myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
    expect(exercises1_6.myRemoveWithoutCopy(arr, 3)).not.toEqual([1, 2, 3, 4]);
    const arr2 = [1, 2, 3, 4];
    exercises1_6.myRemoveWithoutCopy(arr2, 2);
    expect(arr2).toEqual([1, 3, 4]);
    const arr3 = [1, 2, 3, 4];
    expect(exercises1_6.myRemoveWithoutCopy(arr3, 5)).toEqual([1, 2, 3, 4]);
  })

  it('função myFizzBuzz', () => {
    expect(exercises1_6.myFizzBuzz(15)).toBe('fizzbuzz');
    expect(exercises1_6.myFizzBuzz(9)).toBe('fizz');
    expect(exercises1_6.myFizzBuzz(20)).toBe('buzz');
    expect(exercises1_6.myFizzBuzz(26)).toBe(26);
    expect(exercises1_6.myFizzBuzz('xablau')).toBe(false);
  })
})