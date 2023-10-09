import express from "express";

const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

app.get("/help-us", (req, res) => {
  res.render("pages/help.ejs");
});

app.get("/south-africa", (req, res) => {
  res.render("pages/appearances/south_africa.ejs");
});

app.get("/france", (req, res) => {
  res.render("pages/appearances/france.ejs");
});

app.get("/portugal", (req, res) => {
  res.render("pages/appearances/portugal.ejs");
});

app.get("/brazil", (req, res) => {
  res.render("pages/appearances/brazil.ejs");
});

app.get("/spain", (req, res) => {
  res.render("pages/appearances/spain.ejs");
});

app.listen(port, () => console.log(`Listening on ${port}`));
