require('dotenv').config()
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("hey i am suraj! ");
});
// we have to hot reload every time when u make changes.
app.get("/login", (req, res) => {
  res.send("<h1>i am logind </h1> ");
});
app.get("/yt", (req, res) => {
  res.send("<h2>hey youtube</h2> ");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
