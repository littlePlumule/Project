var mysql = require('mysql'); //引入mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'yuhung',
    password: 'yuhung',
    database: 'app'
});

module.exports = connection;