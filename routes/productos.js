const { Router } = require("express");
const { check } = require("express-validator");
const {
  getProductController,
  addProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/productos.js");
const { productExiste } = require("../helpers/db-validators.js");
const { validarCampos } = require("../middlewares/validar-campos.js");

const router = Router();

router.get("/getproducts", getProductController);

router.post(
  "/addproducts",
  [check("name").custom(productExiste)],
  validarCampos,
  addProductController
);

router.put("/updateproducts", updateProductController);

router.post("/deleteproducts", deleteProductController);

module.exports = router;
