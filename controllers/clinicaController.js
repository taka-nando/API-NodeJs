const tasksModel = require('../models/clinicaModel');


const createClinica = async (request, response) => {
    await tasksModel.createClinica(request.body);
    return response.redirect('/home');
}

const updateClinica = async (request, response) => {
    const { id } = request.params;
    await tasksModel.updateClinica(id, request.body);
    return response.redirect('/home');
}

const deleteClinica = async (request, response) => {
    const { id } = request.params;
    await tasksModel.deleteClinica(id);
    return response.status(204).json();
}

const getAllClinicas = async (request, response) => {
    const tasks = await tasksModel.getAllClinicas();
    return response.status(200).json(tasks);
}


module.exports = {
    createClinica,
    updateClinica,
    deleteClinica,
    getAllClinicas
};
