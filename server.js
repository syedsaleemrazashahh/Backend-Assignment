import express from "express";
const app = express();
const port = process.env.port || 3000;

app.get("/", (request, response) => {
  response.send(`<h1>Syed Saleem Raza Shah</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
