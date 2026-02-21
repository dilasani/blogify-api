// src/controllers/posts.controller.js

const Post = require('../models/post.model'); // your Post model

// GET all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // fetch all posts
    res.status(200).json({
      success: true,
      data: {
        posts, // wrap posts inside "data"
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch posts',
    });
  }
};

// GET single post by ID
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with ID ${id} not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: {
        post, // wrap post inside "data"
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch post',
    });
  }
};