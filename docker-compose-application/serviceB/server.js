'use strict';

const express = require('express');
const app = express();

app.get('/call', function (req, res) {
  res.send('Hi! This is service B :)');
});

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function() {
  console.log('App B is listening on port ' + server.address().port);
});
