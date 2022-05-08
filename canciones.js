var express = require('express');
var router = express.Router();
var path = require('path');
  router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'public','index2.html'));
  });
  router.post('/',function(req, res) {
    res.send('Respuesta a POST');
  });
  router.put('/',function(req, res) {
    res.send('Respuesta a PUT');
  });
  router.delete('/',function(req, res) {
    res.send('Respuesta a Delete');   
  });

  module.exports = router;