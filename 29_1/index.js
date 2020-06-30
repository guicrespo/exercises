const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const { getSession } = require('./models/connection');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', async (_req, res) => {
  getSession()
    .then((session) => {
      session.close();
      res.status(200).json({ message: 'Pong!' });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message, stack: err.stack });
    });
});

app.post('/cep', controllers.cep.findCep);

app.get('/cep', controllers.cep.cepForm);

app.listen(3000, () => console.log('Listening on 3000'));
