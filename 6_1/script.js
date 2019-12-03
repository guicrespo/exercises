let inputs = document.getElementsByTagName("input");
for(let element of inputs) {
  element.value = null;
}

let estados = document.getElementById('estados');
let listaEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

listaEstados.forEach(function(item) {
  let option = document.createElement('option');
  option.value = item;
  estados.appendChild(option);
})