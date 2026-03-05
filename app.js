const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;
const postsRouter = require("./routers/posts");
const NotFoundMiddleware = require("./middlewares/NotFound");

//^ Middlewares
app.use(express.static("public"));
app.use(express.json());

//^ Routes
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

//^ Not found
app.use(NotFoundMiddleware);

app.listen(port, () => {
  console.log(`Server online on ${appUrl}`);
});
