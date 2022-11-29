const Product = require("../models/producto.js");

//for add or fetch
const getProductController = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

//for add
const addProductController = async (req, res) => {
  try {
    const newProducts = new Product(req.body);
    await newProducts.save();
    res.status(200).send("Producto creado con éxito!");
  } catch (error) {
    console.log(error);
  }
};

//for update
const updateProductController = async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body, {
      new: true,
    });
    res.status(201).json("Producto Actualizado!");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

//for delete
const deleteProductController = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("Producto Eliminado!");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  deleteProductController,
  updateProductController,
  addProductController,
  getProductController,
};
