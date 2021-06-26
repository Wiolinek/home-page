var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')


// router.post('/', function(req, res, next) {
//   let langChosen = req.body.language;

//   mysql.query("SELECT * FROM projects WHERE language = '" + langChosen + "' ", function(error, result, fields) {
//     res.json(result);
//   });
// });

// module.exports = router;

router.get('/', function(req, res, next) {

  mysql.query("SELECT * FROM projects", function(error, result, fields) {
    res.json(result);
  });
});

module.exports = router;