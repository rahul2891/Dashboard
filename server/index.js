const express = require("express");
const mongoose = require("mongoose");
const app = express();

const ItemsModel = require("./models/Items");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Rahul281191:Rahul281191@cluster0.0djtb.mongodb.net/items?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const items = new ItemsModel({ itemsName: "Car", totalStock: 4 });

  try {
    await items.save();
    res.send("insert data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
