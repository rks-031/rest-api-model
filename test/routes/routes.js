const express = require("express");
const router = express.Router();

const shoe = require("../models/shoes.js");

//getting all
router.get("/", async (req, res) => {
  res.send("Hello");
});

//getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//creating one
router.post("/", (req, res) => {});

//deleting one
router.delete("/:id", (req, res) => {});

//updating one
router.patch("/:id", (req, res) => {});

module.exports = router;
