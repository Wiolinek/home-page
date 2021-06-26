var mysql = require('mysql');


var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '2200',
  database        : 'home_page'
});


module.exports = pool;