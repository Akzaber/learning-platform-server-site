const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

const categories = require("./Data/Category.json");

app.get("/", (req, res) => {
  res.send("Hello Server Courses");
});

app.get("/courses-category", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Expample is running with port ${port}`);
});
