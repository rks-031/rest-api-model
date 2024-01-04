const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});

app.listen(3000, () => {
  console.log("Listening to the port 3000");
});
