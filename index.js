let app = require('./config/server'); //Importando o servidor Express

var cors = require('cors')
app.use(cors()) 

// VIEWS
app.get("/home", function(req, res){res.render('../views/pages/home/index');});
// VIEWS PACIENTE
app.get("/pacienteForm", function(req, res){res.render('../views/pages/paciente/create');});
app.get("/pacienteLista", function(req, res){res.render('../views/pages/paciente/listaPacientes');});
app.get("/pacienteUpdate", function(req, res){res.render('../views/pages/paciente/updatePaciente');});
// VIEWS MEDICO
app.get("/medicoForm", function(req, res){res.render('../views/pages/medico/create');});
app.get("/medicoLista", function(req, res){res.render('../views/pages/medico/listaMedicos');});
app.get("/medicoUpdate", function(req, res){res.render('../views/pages/medico/updateMedico');});
// VIEWS CLINICA
app.get("/clinicaForm", function(req, res){res.render('../views/pages/clinica/create');});
app.get("/clinicaLista", function(req, res){res.render('../views/pages/clinica/listaClinicas');});
app.get("/clinicaUpdate", function(req, res){res.render('../views/pages/clinica/updateClinica');});
// VIEWS CONSULTA
app.get("/consultaForm", function(req, res){res.render('../views/pages/consulta/create');});
app.get("/consultaLista", function(req, res){res.render('../views/pages/consulta/listaConsultas');});



// PACIENTE ROUTE
let pacienteRoute = require("./routes/pacienteRoute");
app.use(pacienteRoute);
app.get(pacienteRoute.get);
app.post(pacienteRoute.post);
app.put(pacienteRoute.put);
app.delete(pacienteRoute.delete);

//MEDICO ROUTE
let medicoRoute = require("./routes/medicoRoute");
app.use(medicoRoute);
app.get(medicoRoute.get);
app.post(medicoRoute.post);
app.put(medicoRoute.put);
app.delete(medicoRoute.delete);

//CLINICA ROUTE
let clinicaRoute = require("./routes/clinicaRoute");
app.use(clinicaRoute);
app.get(clinicaRoute.get);
app.post(clinicaRoute.post);
app.put(clinicaRoute.put);
app.delete(clinicaRoute.delete);

//CONSULTA ROUTE
let consultaRoute = require("./routes/consultaRoute");
app.use(consultaRoute);
app.get(consultaRoute.get);
app.post(consultaRoute.post);
app.delete(consultaRoute.delete);

app.listen(8000, function(){
    console.log("Servidor iniciado na porta 8000");
});
















