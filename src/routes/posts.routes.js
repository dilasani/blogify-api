const express = require("express");

const router = express.Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Posts fetched successfully"
  });
});

module.exports = router;