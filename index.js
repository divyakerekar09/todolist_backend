const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const todoRoute = require("./Routes/todo");

app.use("/api", todoRoute);

const DB = "mongodb://localhost:27017/kk";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected DB");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log(`server is runing on port no. 3000`);
});
