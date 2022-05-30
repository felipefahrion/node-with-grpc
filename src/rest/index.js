const express = require('express');
const news = require('../../db/news')

const app = express();

const PORT = 3000

app.get('/getAll', (req, res) => {
  return res.send(news);
});

app.get('/getById', (req, res) => {
  return res.send(news);
});

app.delete('/delete', (req, res) => {
  return res.send(news);
});

app.post('/create', (req, res) => {
  return res.send(news);
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);