const { request } = require("express");

const jwt = require("jsonwebtoken");

const Usuario = require("../models/usuario");

const validarJWT = async (req = request, res, next) => {
  const token = req.header("x-token");

  //verificar que venga el token
  if (!token) {
    res.status(401).json({
      msg: "No se reconoce el token",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    //leer el usuario
    const usuario = await Usuario.findById(uid);

    //verificar si el usuario existe
    if (!usuario) {
      res.status(401).json({
        msg: "Token no es válido - Usuario no existe",
      });
    }

    //verifivcar si el usuario esta activo

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido - Usuario Suspendido",
    });
  }
};

module.exports = {
  validarJWT,
};
