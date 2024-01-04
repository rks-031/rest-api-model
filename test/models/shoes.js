const mongoose = require("mongoose");

//schema ready krna h shoes ka

const shoeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  manufacturingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Joota", shoeSchema);
