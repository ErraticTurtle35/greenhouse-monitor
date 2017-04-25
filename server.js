var express = require('./config/express');

var app;
app = express();
app.listen(3300);
module.exports = app;

console.log('Server running at http://localhost:3300/');