const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
