var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')


router.post('/', function(req, res, next) {
  let langChosen = req.body.language;

  mysql.query("SELECT * FROM contact INNER JOIN languages ON languages.id = contact.language WHERE languages.language = '" + langChosen + "' ", function(error, result, fields) {
    res.json(result);
  });
});

module.exports = router;