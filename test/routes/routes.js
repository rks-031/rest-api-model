const express = require("express");
const router = express.Router();

const joota = require("../models/shoes.js");

//getting all
router.get("/", async (req, res) => {
  try {
    const joote = await joota.find();
    res.json(joote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//creating one
router.post("/", async (req, res) => {
  const shoe = new joota({
    brand: req.body.brand,
    color: req.body.color,
    size: req.body.size,
    manufacturingDate: req.body.manufacturingDate,
  });

  try {
    const newjoota = await shoe.save();
    res.status(201).json(newjoota);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//deleting one
router.delete("/:id", (req, res) => {});

//updating one
router.patch("/:id", (req, res) => {});

module.exports = router;
