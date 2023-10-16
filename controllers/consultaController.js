let app = require('../config/server');
const connection = require('../config/dbConnection');
const tasksModel = require('../models/consultaModel');


const createConsulta = async (request, response) => {
    await tasksModel.createConsulta(request.body);
    return response.redirect('/home');
}

const deleteConsulta = async (request, response) => {
    const { id } = request.params;
    await tasksModel.deleteConsulta(id);
    return response.status(204).json();
}

const getAllConsultas = async (request, response) => {
    const { id } = request.params;
    const tasks = await tasksModel.getAllConsultas(id);
    return response.status(200).json(tasks);
}

const pegaTudo = async (request, response) => {
    const tasks = await tasksModel.pegaTudo();
    return response.status(200).json(tasks);
}

app.get('/radiobuttonsclinica', (req, res) => {
    connection.query("SELECT id, nome FROM clinicas").then(results => {
        let radioButtons = '';
        results[0].forEach(row => {
         radioButtons += `<input type="radio" name="opcao1" id="id_clinica" value="${row.id}">${row.nome}<br>`;
        });
        res.send(radioButtons);
    });
});

app.get('/radiobuttonsmedico', (req, res) => {
    connection.query("SELECT id, nome FROM medicos").then(results => {
        let radioButtons = '';
        results[0].forEach(row => {
         radioButtons += `<input type="radio" name="opcao2" id="id_medico" value="${row.id}">${row.nome}<br>`;
        });
        res.send(radioButtons);
    });
});

app.get('/radiobuttonspaciente', (req, res) => {
    connection.query("SELECT id, nome FROM pacientes").then(results => {
        let radioButtons = '';
        results[0].forEach(row => {
         radioButtons += `<input type="radio" name="opcao3" id="id_paciente" value="${row.id}">${row.nome}<br>`;
        });
        res.send(radioButtons);
    });
});


module.exports = {
    pegaTudo,
    getAllConsultas,
    createConsulta,
    deleteConsulta
};
