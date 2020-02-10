const mysql = require('mysql');

// connection
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'dblatihan13'
})

// export
module.exports = connection;