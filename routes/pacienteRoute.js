const app = require("express");
const router = app.Router();
const controller = require("../controllers/pacienteController");


router.get("/listaAll", controller.getAllPacientes);
router.post("/paciente", controller.createPaciente);
router.put("/pacienteup/:id", controller.updatePaciente);
router.delete("/pacientedel/:id", controller.deletePaciente);



module.exports = router;



