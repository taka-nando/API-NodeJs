const connection = require('../config/dbConnection');


const createPaciente = async (task) => {
    const {nome, cpf, dataNascimento, endereco, telefone, genero} = task;
    const query = "INSERT INTO pacientes (nome, cpf, dataNascimento, endereco, telefone, genero) VALUES (?, ?, ?, ?, ?, ?);"
    const [createPaciente] = await connection.execute(query,  [nome, cpf, dataNascimento, endereco, telefone, genero]);
    return createPaciente;
}

const updatePaciente = async (id, task) => {
    const {nome, cpf, dataNascimento, endereco, telefone, genero} = task;
    const query = "UPDATE pacientes SET nome = ?, cpf = ?, dataNascimento = ?, endereco = ?, telefone = ?, genero = ? WHERE id = ?;"
    const [updatedPaciente] = await connection.execute(query,  [nome, cpf, dataNascimento, endereco, telefone, genero, id]);
    return updatedPaciente;
}

const deletePaciente = async (id) => {
    const deletedPaciente = await connection.execute("DELETE FROM pacientes WHERE id = ?;",  [id]);
    return deletedPaciente;
}

const getAllPacientes = async () => {
    const tasks = await connection.execute("SELECT * FROM pacientes;");
    return tasks[0];
}


module.exports = {
    getAllPacientes,
    createPaciente,
    updatePaciente,
    deletePaciente
};