function maiorNome(array) {
    let nome = array[0];
    let tamanhoNome = array[0].length;
    for (let i = 1; i < array.length; i++) {
        if (tamanhoNome < array[i].length) {
            tamanhoNome = array[i].length;
            nome = array[i];
        }
    }
    return nome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Fernando']))
