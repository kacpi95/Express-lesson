const express = require('express');
const shortid = require('shortid');
const posts = require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Beckend works');
});
app.get('/posts', (req, res) => {
  res.json(posts);
});
app.post('/posts', (req, res) => {
  const newPost = {
    id: shortid.generate(),
    title: req.body.title,
  };
  posts.push(newPost);
  res.json(posts);
});
app.delete('/posts/:id', (req, res) => {
  const index = posts.findIndex((post) => post.id === req.params.id);
  if (index !== -1) {
    const deletePost = posts.splice(index, 1);
    return res.json(deletePost[0]);
  }
  res.status(404).json({ error: 'Post not found' });
});

app.listen(8000, () => {
  console.log('Server is runing port 8000');
});
