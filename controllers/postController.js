const posts = require("../data/posts.js");

function index(req, res) {
  res.json({
    results: posts,
    message: "Lista dei post",
    success: true,
  });
}

module.exports = { index };
