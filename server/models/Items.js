const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  itemsName: {
    type: String,
    required: true,
  },
  totalStock: {
    type: Number,
    required: true,
  },
});
const Items = mongoose.model("Items", ItemsSchema);
module.exports = Items;
