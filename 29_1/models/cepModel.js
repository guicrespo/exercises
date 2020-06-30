const { getTable } = require('./connection');
const axios = require('axios');

const FIELDS = ['CEP', 'UF', 'cidade', 'bairro', 'logradouro'];

const isValid = (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;
  return cepRegex.test(cep);
};

const getCepFromAPI = async (cep) => {
  const { data } = await axios.get(`http://cep.la/${cep}`, {
    headers: { Accept: 'application/json' },
  });

  if (Array.isArray(data) && !data.length) return null;

  if (Array.isArray(data)) return data[0];

  return data;
};

const getCepFromDatabase = async (cep) => {
  return getTable('ceps')
    .then((table) =>
      table.select(FIELDS).where('cep = :cep').bind('cep', cep).execute()
    )
    .then((results) => results.fetchAll()[0])
    .then((cepResult) => {
      if (!cepResult) return null;

      const [cep, uf, cidade, bairro, logradouro] = cepResult;

      return {
        cep,
        uf,
        cidade,
        bairro,
        logradouro,
      };
    });
};

const addCepToDatabase = async ({ cep, uf, cidade, bairro, logradouro }) => {
  const table = await getTable('ceps');

  await table
    .insert(FIELDS)
    .values(cep, uf, cidade, bairro, logradouro)
    .execute();
};

module.exports = {
  isValid,
  getCepFromAPI,
  getCepFromDatabase,
  addCepToDatabase,
};
