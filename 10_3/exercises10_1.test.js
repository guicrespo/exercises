const exercises1_6 = require('./exercise1-6');
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

describe('demais testes da aula 10.1', () => {
  it('verifa se uma variável foi definida', () => {
    let i;
    let z = 10;
    expect(exercise7.varIsUndefined(i)).toBe('a variável não foi definida');
    expect(exercise7.varIsUndefined(z)).toBe(10);
  })

  it('verificar se uma função foi definida', () => {
    expect(exercise7.test()).toBe(true);
    expect(exercise7.test2()).toBe(undefined);
  })

  it('verificar se é um array', () => {
    const arr = [1, 2];
    const str = 'xpto';
    expect(exercise7.isAnArray(arr)).toBe(true);
    expect(exercise7.isAnArray(str)).toBe('a variável não é um array');
  })

  it('comparar dois objetos', () => {
    const obj = {
      "estudantes": [
        { "firstName": "Lauro", "lastName": "Lyra" },
        { "firstName": "Pedro", "lastName": "Tófani" },
        { "firstName": "Conrado", "lastName": "Medeiros" }
      ]
    }

    const obj2 = {
      "estudantes": [
        { "firstName": "Lauro", "lastName": "Lyra" },
        { "firstName": "Pedro", "lastName": "Tófani" },
        { "firstName": "Conrado", "lastName": "Medeiros" }
      ]
    }

    expect(exercise7.objCompare(obj, obj2)).toBe(true);

    const obj3 = {
      "estudantes": [
        { "firstName": "Lucas", "lastName": "Werner" },
        { "firstName": "Pedro", "lastName": "Tófani" },
        { "firstName": "Conrado", "lastName": "Medeiros" }
      ]
    }

    expect(exercise7.objCompare(obj, obj3)).toBe('os objetos não são iguais');
  })

  it('compara números', () => {
    expect(exercise7.numCompare(2, 1)).toEqual(['2 é maior que 1']);
    expect(exercise7.numCompare(1, 2)).toEqual(['1 é menor que 2']);
    expect(exercise7.numCompare(1, 1)).toBe('são iguais :)');
  })
})
