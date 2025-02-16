const express = require("express");
const {
  getJoyas,
  getJoyasFiltradas,
} = require("../controllers/joyasController");

const router = express.Router();

router.get("/", getJoyas);
router.get("/filtros", getJoyasFiltradas);

module.exports = router;
