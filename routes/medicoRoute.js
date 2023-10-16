const app = require("express");
const router = app.Router();
const controller = require("../controllers/medicoController");


router.post("/medico", controller.createMedico);
router.put("/medico/:id", controller.updateMedico);
router.delete("/medicodel/:id", controller.deleteMedico);
router.get("/listaMedicos", controller.getAllMedicos);



module.exports = router;



