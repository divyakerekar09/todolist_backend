const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  item: {
    type: String,
  },
});

const todoModel = mongoose.model("items", todoSchema);

module.exports = todoModel;
