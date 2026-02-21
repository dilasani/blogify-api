// src/index.js
const express = require('express');
const app = express();

// Minimal "database" array for testing
const posts = [
  { id: '123-abc', title: 'First Post', content: 'Hello World!' },
  { id: '456-def', title: 'Second Post', content: 'Another post.' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Blogify API is running!');
});

// Route for all posts
app.get('/api/v1/posts', (req, res) => {
  res.json(posts);
});

// Dynamic route for single post
app.get('/api/v1/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: `Post with ID ${postId} not found` });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});