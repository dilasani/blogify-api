const express = require('express');
const app = express();
const postRoutes = require('./routes/posts.routes');

// Mount the posts router
app.use('/api/v1/posts', postRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Blogify API is running!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log('Server running on http://localhost:3000'));