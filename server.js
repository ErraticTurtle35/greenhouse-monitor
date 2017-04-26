process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    thinky = require('./config/thinky');

var db = thinky();
var app;
app = express();
app.listen(3300);
module.exports = app;

console.log('Server running at http://localhost:3300/');