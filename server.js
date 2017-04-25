var express = require('express');
var customConf = require('./customConf');

var app = express();
app.use('/', function (request, response) {
    response.send('Hello World!');
});
app.listen(customConf.express.port);
console.log('Server running in port: ' + customConf.express.port);

module.exports = app;