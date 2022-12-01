const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'prograweb',
    password: ''
});

conection.connect();
module.exports = conection;