function maiorNome(array) {
    let nome = array[0];
    let arrayNomes = [];
    let contador = 0;
    let tamanhoNome = array[0].length;
    for (let i = 1; i < array.length; i++) {
        if (tamanhoNome <= array[i].length) {
            if (tamanhoNome == array[i].length) {
                arrayNomes[contador] = tamanhoNome;
                contador++;
            }
            tamanhoNome = array[i].length;
            nome = array[i];
            arrayNomes[contador] = tamanhoNome;
            contador++;
        }
    }
    return arrayNomes;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Fernando']))
