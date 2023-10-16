const tasksModel = require('../models/medicoModel');


const createMedico = async (request, response) => {
    await tasksModel.createMedico(request.body);
    return response.redirect('/home');
}

const updateMedico = async (request, response) => {
    const { id } = request.params;
    await tasksModel.updateMedico(id, request.body);
    return response.redirect('/home');
}

const deleteMedico = async (request, response) => {
    const { id } = request.params;
    await tasksModel.deleteMedico(id);
    return response.status(204).json();
}

const getAllMedicos = async (request, response) => {
    const tasks = await tasksModel.getAllMedicos();
    return response.status(200).json(tasks);
}


module.exports = {
    createMedico,
    updateMedico,
    deleteMedico,
    getAllMedicos
};
