let mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'projetoapi'
});

module.exports = connection;







