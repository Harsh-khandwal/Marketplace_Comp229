const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchecma = new Schema({
  name: String,
  description: String,
  price: Number,
  published: Boolean,
  category: String,
});
module.exports = mongoose.model("Product", productSchecma);
