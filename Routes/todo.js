var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var utils = require("../utils/fn");
var mongoose = require("mongoose");

const Item = require("../Model/todoModel");
// POST
router.post("/create-item", function (request, response) {
  var itemObj = new Item({
    item: request.body.item,
  });
  itemObj
    .save()
    .then((newItem) => {
      console.log("Item document added successfully");
      let respObj = utils.fnCustomResponse(true, "success", newItem);
      response.send(respObj);
    })
    .catch((error) => {
      console.log("ERROR in route: " + error);

      let respObj = utils.fnCustomResponse(false, "error in route", error);
      response.send(respObj);
    });
});

// GET
router.get("/get-all-todos", async (req, res) => {
  try {
    const todos = await Item.find({});
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE
router.delete("/delete-one-todo/:id", function (request, response) {
  const objectId = request.params.id;
  Item.deleteOne({ _id: new mongoose.Types.ObjectId(objectId) })
    .then((result) => {
      let respObj = utils.fnCustomResponse(true, "success", result);
      response.send(respObj);
    })
    .catch((error) => {
      console.error("Error deleting :", error);
      let respObj = utils.fnCustomResponse(false, "failure", error);
      response.send(respObj);
    });
});

// UPDATE
router.put("/update-todo-by-id/:id", async function (request, response) {
  try {
    const updatedItem = await Item.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(request.params.id) },
      {
        $set: {
          item: request.body.item,
        },
      },
      { new: true }
    );

    if (updatedItem) {
      let respObj = utils.fnCustomResponse(true, "success", updatedItem);
      response.send(respObj);
    } else {
      let respObj = utils.fnCustomResponse(false, "failure", "Item not found");
      response.send(respObj);
    }
  } catch (error) {
    console.log(error);
    let respObj = utils.fnCustomResponse(false, "failure", error);
    response.send(respObj);
  }
});

module.exports = router;
