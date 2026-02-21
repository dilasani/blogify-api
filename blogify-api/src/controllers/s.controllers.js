// src/controllers/posts.controller.js
const getPostById = (req, res) => {
  const { postId } = req.params;
  res.status(200).json({
    message: `Fetching data for post with ID: ${postId}`
  });
};

module.exports = { getPostById };