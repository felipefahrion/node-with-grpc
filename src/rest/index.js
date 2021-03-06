const express = require('express');
const newsList = require('../../db/news')

const app = express();
app.use(express.json())

const PORT = 3000

app.get('/getAll', (req, res) => {
  return res.send(newsList);
});

app.get('/getById/:id', (req, res) => {
  const { id } = req.params

  const news = newsList.news.find((e) => e.id === id)

  if (!news) return res.send(new Error('Not found'))

  return res.send(news);
});

app.delete('/delete/:index', (req, res) => {
  const { index } = req.params

    newsList.news.splice(index, 1);
    return res.send(newsList);
});

app.post('/create', (req, res) => {

  const {title, body, postImage} = req.body
    
  const newNews = {
    id: (newsList.news.length + 1).toString(),
    title,
    content,
    image
  }

  newsList.news.push(newNews)

  return res.send(newsList);
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}!`),
);
