const { Router } = require("express");

const { servicio } = require("../controllers/servicio");
const { cacheInit } = require("../middleware/cache");

const { validarJWT } = require("../middleware/validar-jwt");
const { esAdminRole, tieneRole } = require("../middleware/validar-roles");

const router = Router();

router.get("/", [validarJWT, cacheInit, tieneRole], servicio);

module.exports = router;
