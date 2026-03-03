let posts = require("../data/posts.js");

function index(req, res) {
  const updatedPosts = posts.map(imgPathCrafter);

  res.json({
    results: updatedPosts,
    message: "Lista dei post",
    success: true,
  });
}

function show(req, res) {
  const postId = req.params.id;
  const searchedPost = posts.find((post) => post.id === parseInt(postId));

  if (!searchedPost) {
    res.status(404).json({
      message: `Post ${postId} non trovato`,
      success: false,
    });
  }

  res.json({
    results: imgPathCrafter(searchedPost),
    message: `Ecco il post ${postId}`,
    success: true,
  });
}

function store(req, res) {
  res.json({
    message: `Creato nuovo post`,
    success: true,
  });
}

function update(req, res) {
  const postId = req.params.id;

  res.json({
    message: `post ${postId} modificato interamente`,
    success: true,
  });
}

function destroy(req, res) {
  const postId = req.params.id;

  res.json({
    message: `post ${postId} eliminato`,
    success: true,
  });
}

function imgPathCrafter(post) {
  return { ...post, image: "http://localhost:3000/" + post.image };
}

module.exports = { index, show, store, update, destroy };
