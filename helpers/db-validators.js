const Usuario = require("../models/usuario");
const Product = require("../models/producto");

//VALIDAR EMAIL SI EXISTE
const emailExiste = async (email) => {
  const existeEmail = await Usuario.findOne({ email });
  if (existeEmail) {
    throw new Error(`El correo ${email} ya existe`);
  }
};

//VALIDAR ID SI EXISTE
const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findOne({ _id: id });

  if (!existeUsuario) {
    throw new Error(`El id ${id} no existe`);
  }
};

const productExiste = async (name) => {
  const existeProduct = await Product.findOne({ name });
  if (existeProduct) {
    throw new Error(`El producto ya existe`);
  }
};

module.exports = {
  emailExiste,
  existeUsuarioPorId,
  productExiste,
};
