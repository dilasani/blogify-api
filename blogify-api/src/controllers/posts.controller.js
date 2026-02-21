// src/controllers/posts.controller.js
const posts = [
  { id: 1, title: 'First Post', content: 'Hello World' },
  { id: 2, title: 'Second Post', content: 'Another Post' },
];

// Standardized Response Utility
const sendResponse = require('../utils/response.util');

const getAllPosts = (req, res) => {
  try {
    sendResponse(res, 200, true, posts, 'Posts retrieved successfully');
  } catch (error) {
    sendResponse(res, 500, false, null, 'Server Error');
  }
};

const createPost = (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    sendResponse(res, 201, true, newPost, 'Post created successfully');
  } catch (error) {
    sendResponse(res, 500, false, null, 'Server Error');
  }
};

module.exports = { getAllPosts, createPost };