const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;
const postsRouter = require("./routers/posts");
const notFoundMiddleware = require("./middlewares/NotFound");
const loadingMiddleware = require("./middlewares/Loading");

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

//^ Errors
app.use(loadingMiddleware);

//^ Not found
app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`Server online on ${appUrl}`);
});
