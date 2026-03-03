const express = require("express");
const router = express.Router();
//^ Array di elementi da restituire con la chiamata get
const posts = require("../data/posts.js");

//^ Index
router.get("/", (req, res) => {
  res.json({
    results: posts,
    message: "Lista dei post",
    success: true,
  });
});

//^ Show
router.get("/:id", (req, res) => {
  const postId = req.params.id;

  const searchedPost = posts.find((post) => post.id === parseInt(postId));

  if (!searchedPost) {
    res.status(404).json({
      message: `Post ${postId} non trovato`,
      success: false,
    });
  }

  res.json({
    results: searchedPost,
    message: `Ecco il post ${postId}`,
    success: true,
  });
});

//^ Store
router.post("/", (req, res) => {
  res.json({
    message: `Creato nuovo post`,
    success: true,
  });
});

//^ Update
router.put("/:id", (req, res) => {
  const postId = req.params.id;

  res.json({
    message: `post ${postId} modificato interamente`,
    success: true,
  });
});

//^ Destroy
router.delete("/:id", (req, res) => {
  const postId = req.params.id;

  res.json({
    message: `post ${postId} eliminato`,
    success: true,
  });
});

module.exports = router;
