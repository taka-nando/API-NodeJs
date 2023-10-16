const tasksModel = require('../models/pacienteModel');


const createPaciente = async (request, response) => {
    await tasksModel.createPaciente(request.body);
    return response.redirect('/home');
}

const updatePaciente = async (request, response) => {
    const { id } = request.params;
    await tasksModel.updatePaciente(id, request.body);
    return response.redirect('/home');
}

const deletePaciente = async (request, response) => {
    const { id } = request.params;
    await tasksModel.deletePaciente(id);
    return response.status(204).json();
}

const getAllPacientes = async (request, response) => {
    const tasks = await tasksModel.getAllPacientes();
    return response.status(200).json(tasks);
}


module.exports = {
    getAllPacientes,
    createPaciente,
    updatePaciente,
    deletePaciente
};
