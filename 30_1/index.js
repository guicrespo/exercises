const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Está vivo!');
})

app.listen(3000, () => console.log('listening to port 3000'))