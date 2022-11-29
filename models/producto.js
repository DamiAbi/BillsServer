const { Schema, model } = require("mongoose");

//for create table into db
const productSchema = Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  hidden: { type: Boolean, default: false },
});

module.exports = model("Product", productSchema);
