function modaArray(array) { 
    let contagemRepetidos = 0;
    let numero = 0
    let numeroRepetido = 0;
    for (i = 1; i < array.length; i++) {
        contagemRepetidos = 0;
        for (let numeros of array) {
            if (numeros == array[i]) {
                contagemRepetidos += 1;
                if (contagemRepetidos > numeroRepetido) {
                    numero = array[i];
                    numeroRepetido = contagemRepetidos;
                }
            }
        }
    }
    return numero
}
console.log(modaArray([6, 6, 6, 5, 3, 2, 0, 0, 0, 0]))