//versão iterativa
const num = 5;
function fatorial(numero) {
  if (numero < 0) return `${num} é menor que zero! Insira um número maior que zero`;


  else if (numero == 0) {
    return `o fatorial de ${num} é sempre 1`;
  }

  else {
    let fat = 1;
    for (let i = 2; i <= numero; i++) {
      fat *= i;
    }
    return fat;
  }
}
console.log(fatorial(num));

//versão recursiva
const fator = num => {
  if (num < 2) return 1;
  return num * fator(num - 1);
}
console.log(fator(10));

//versão recursiva reduzida
const fat = numero => {
  return (numero < 2) ? 1 : numero * fat(numero - 1);
}
console.log(fat(4));

//versão recursiva + reduzida
const f = n => (n < 2) ? 1 : n * f(n - 1);
console.log(f(3));
