var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'yuhung',
    password: 'yuhung',
    database: 'app'
});

module.exports = connection;