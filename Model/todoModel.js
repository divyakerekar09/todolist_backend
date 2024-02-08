const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  item: {
    type: String,
  },
  description: {
    type: String,
  },
  isCompleted: { type: Boolean, default: false }


});

const todoModel = mongoose.model("items", todoSchema);

module.exports = todoModel;
