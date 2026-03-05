const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const titleValidate = require("../middlewares/titleValidate");

router.get("/", postController.index);
router.get("/:id", postController.show);
router.post("/", titleValidate, postController.store);
router.put("/:id", titleValidate, postController.update);
router.delete("/:id", postController.destroy);

module.exports = router;
