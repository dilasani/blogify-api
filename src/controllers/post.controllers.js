const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Get all posts endpoint works!",
  });
};

module.exports = { getAllPosts };