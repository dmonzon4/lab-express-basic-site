const express = require("express");
const app = express(); // <= nuestro servidor

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/aboutpage.html");
});

app.get("/jobs", (req, res) => {
  res.sendFile(__dirname + "/views/jobpage.html");
});

app.get("/galery", (req, res) => {
  res.sendFile(__dirname + "/views/fotogalery.html");
});

const port = 3000;

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});
