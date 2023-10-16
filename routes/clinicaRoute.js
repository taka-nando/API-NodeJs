const app = require("express");
const router = app.Router();
const controller = require("../controllers/clinicaController");


router.post("/clinica", controller.createClinica);
router.put("/clinicaup/:id", controller.updateClinica);
router.delete("/clinicadel/:id", controller.deleteClinica);
router.get("/listaClinicas", controller.getAllClinicas);



module.exports = router;



