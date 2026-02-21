// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();
const { getPostById } = require('../controllers/posts.controller');

// Route for all posts
router.get('/', (req, res) => {
  res.json({ message: 'All posts endpoint works!' });
});

// Dynamic route for single post
router.get('/:postId', getPostById);

module.exports = router;