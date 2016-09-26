var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  console.log('Environment variables of A: \n');
  console.log(process.env);
  res.render('index');
});

router.get('/call', function(req, res, next) {
  console.log('calling B...');
  var url = process.env.SERVICE_B_1_PORT;
  console.log(url);
  var adr = 'http://' + process.env.SERVICE_B_1_PORT_8080_TCP_ADDR + '8080';
  console.log('adr: ' + adr);
  request('http://172.17.0.2:8080/call', function (error, response, body) {
    if (!error && response.statusCode == 200) {
    console.log('Got a response from B!\n' + response.body);
    res.send(response.body);
  } else {
    console.log('Couldnt get a response :( )\n' + response.statusCode);
    res.send(response.statusCode);
  }
  });
});
module.exports = router;
