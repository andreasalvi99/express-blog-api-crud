//^ Importo express dopo aver fatto npm i express
const express = require("express");

//^ Invoco express
const app = express();

//^ Per convenienza creo la const della porta
const port = 3000;

//^ Per convenienza creo la const dell'URL
const appUrl = `http://localhost:${port}`;

//^ Importo le routes
const postsRouter = require("./routers/posts");

//^ Middle ware
app.use(express.static("public"));

app.use("/posts", postsRouter);

//^ Chiamata alla homepage ("/"), restituisce oggetto json come response
app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

//^ Server in ascolto, si verifica con npm run watch
app.listen(port, () => {
  console.log(`Server online on ${appUrl}`);
});
