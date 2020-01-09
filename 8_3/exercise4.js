const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo
//Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
filterPeople = () => people.filter(param => (param.bornIn < 2001 && param.bornIn > 1900) && param.nationality === 'Australian');
// solução Julio utilizando o conteúdo da aula de hoje:
filterPeople = () => people.filter(({bornIn, nationality}) => (bornIn < 2001 && bornIn > 1900) && nationality === 'Australian');

const filteredPeople = filterPeople(people)

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
