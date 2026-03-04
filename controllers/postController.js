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
    return res.status(404).json({
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
  const newPost = {
    id: posts[posts.length - 1].id + 1,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  console.log(newPost);
  posts.push(newPost);

  res.status(201).json({
    results: posts,
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

  const filteredPosts = posts.filter((post) => {
    return post.id !== parseInt(postId);
  });

  console.log(filteredPosts);
  res.status(204).send();
}

function imgPathCrafter(post) {
  return { ...post, image: "http://localhost:3000/" + post.image };
}

module.exports = { index, show, store, update, destroy };
