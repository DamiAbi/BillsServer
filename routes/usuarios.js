const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const { emailExiste, existeUsuarioPorId } = require("../helpers/db-validators");

// const Role = require("../models/role");

const {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  obtenerIdUsuario,
} = require("../controllers/usuarios");
const router = Router();

router.get("/", usuariosGet);

router.get("/validar", obtenerIdUsuario);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("password", "La contraseña debe tener mínimo 6 caracteres").isLength({
      min: 6,
    }),
    check("email", "El correo no es válido").isEmail(),
    check("email").custom(emailExiste),
    validarCampos,
  ],
  usuarioPost
);

router.put(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    // check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuarioPut
);

router.delete(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usuarioDelete
);

module.exports = router;
