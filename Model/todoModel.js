const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const todoModel = mongoose.model("items", todoSchema);

module.exports = todoModel;
