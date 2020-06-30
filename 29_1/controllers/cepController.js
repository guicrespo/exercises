const cepModel = require('../models/cepModel');

const findCep = async (req, res) => {
  const { cep } = req.body;

  if (!cep || !cepModel.isValid(cep))
    return res.render('home', {
      message: 'Digite um CEP válido!',
      cepData: null,
    });

  const cleanCep = cep.replace('-', '');

  const dbCep = await cepModel.getCepFromDatabase(cep);

  if (dbCep) return res.render('home', { message: null, cepData: dbCep });

  const apiCep = await cepModel.getCepFromAPI(cep);

  if (!apiCep)
    return res.render('home', { message: 'CEP não encontrado', cepData: null });

  await cepModel.addCepToDatabase(apiCep);

  res.render('home', { message: null, cepData: apiCep });
};

const cepForm = async (_req, res) => {
  res.render('home', { message: null, cepData: null });
};

module.exports = {
  findCep,
  cepForm,
};
