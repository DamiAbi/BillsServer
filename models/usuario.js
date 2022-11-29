const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

//Quitar datos de la respuesta json
UsuarioSchema.methods.toJSON = function () {
  const { __v, password, _id, ...resto } = this.toObject();
  resto.uid = _id;

  return resto;
};

module.exports = model("Usuario", UsuarioSchema);
