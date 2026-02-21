// src/controllers/posts.controller.js

// Function to handle fetching all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'All posts retrieved successfully',
    data: [] // you can replace [] with actual posts later
  });
};

// Export the controller function
module.exports = {
  getAllPosts
};