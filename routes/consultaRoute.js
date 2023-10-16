const app = require("express");
const router = app.Router();
const controller = require("../controllers/consultaController");


router.post("/consultacreate", controller.createConsulta);
router.delete("/consulta/:id", controller.deleteConsulta);
router.get("/consulta", controller.getAllConsultas);
router.get("/consultaAll", controller.pegaTudo);

module.exports = router;
