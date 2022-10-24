const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Server Courses");
});

app.listen(port, () => {
  console.log(`Expample is running with port ${port}`);
});
