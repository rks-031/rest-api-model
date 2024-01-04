const express = require("express");
const router = express.Router();

const joota = require("../models/shoes.js");

// Getting all shoes
router.get("/", async (req, res) => {
  try {
    const joote = await joota.find();
    res.json(joote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one shoe
router.get("/:id", getShoe, (req, res) => {
  res.json(res.shoe);
});

// Creating one shoe
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

// Updating one shoe
router.patch("/:id", getShoe, async (req, res) => {
  //we update only those things which are requested to us
  if (req.body.brand != null) {
    res.shoe.brand = req.body.brand;
  }
  if (req.body.color != null) {
    res.shoe.color = req.body.color;
  }
  if (req.body.size != null) {
    res.shoe.size = req.body.size;
  }
  if (req.body.manufacturingDate != null) {
    res.shoe.manufacturingDate = req.body.manufacturingDate;
  }
  try {
    const updatedshoe = await res.shoe.save();
    res.json(updatedshoe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting one shoe
router.delete("/:id", getShoe, async (req, res) => {
  try {
    await joota.findByIdAndDelete(req.params.id);
    res.json({ message: "Shoe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a single shoe by ID
async function getShoe(req, res, next) {
  let shoe;
  try {
    shoe = await joota.findById(req.params.id);
    // Check if the shoe exists
    if (shoe == null) {
      return res
        .status(404)
        .json({ message: "Bad request since shoe does not exist" });
    } else {
      res.shoe = shoe;
      next();
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;
