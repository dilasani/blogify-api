// src/routes/index.routes.js
const express = require('express');
const router = express.Router();
const postsRoutes = require('./posts.routes');

router.use('/posts', postsRoutes);

module.exports = router;