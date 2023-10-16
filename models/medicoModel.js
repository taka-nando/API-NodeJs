const connection = require('../config/dbConnection');


const createMedico = async (task) => {
    const {nome, cpf, crm, telefone} = task;
    const query = "INSERT INTO medicos (nome, cpf, crm, telefone) VALUES (?, ?, ?, ?);"
    const [createdMedico] = await connection.execute(query,  [nome, cpf, crm, telefone]);
    return createdMedico;
}

const updateMedico = async (id, task) => {
    const {nome, cpf, crm, telefone} = task;
    const query = "UPDATE medicos SET nome = ?, cpf = ?, crm = ?, telefone = ? WHERE id = ?;"
    const [updatedMedico] = await connection.execute(query,  [nome, cpf, crm, telefone, id]);
    return updatedMedico;
}

const deleteMedico = async (id) => {
    const deletedMedico = await connection.execute("DELETE FROM medicos WHERE id = ?;",  [id]);
    return deletedMedico;
}

const getAllMedicos = async () => {
    const tasks = await connection.execute("SELECT * FROM medicos;");
    return tasks[0];
}


module.exports = {
    createMedico,
    updateMedico,
    deleteMedico,
    getAllMedicos
};