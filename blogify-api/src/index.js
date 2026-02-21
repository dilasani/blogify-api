// src/index.js
const express = require('express');
const app = express();
const routes = require('./routes/index.routes');

// Global Middleware
app.use(express.json());

// Mount main router (versioned)
app.use('/api/v1', routes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));