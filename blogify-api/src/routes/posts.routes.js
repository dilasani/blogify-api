// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

// Import the controller
const { getAllPosts } = require('../controllers/posts.controller');

// Use the controller in the route
router.get('/', getAllPosts);

module.exports = router;