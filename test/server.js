const express = require("express");

const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("error");
});

db.once("open", () => {
  console.log("Connected to database");
});

app.use(express.json()); //json is setup

const shoesRouter = require("./routes/routes.js"); //setup my route

app.use("/shoes", shoesRouter);

app.listen(4000, () => {
  console.log("Listening to the port 3000");
});
