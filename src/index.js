const express = require("express");

// ✅ create app FIRST
const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ import router AFTER app created
const postsRouter = require("./routes/posts.routes");

// ✅ mount router
app.use("/api/v1/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Blogify API running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;