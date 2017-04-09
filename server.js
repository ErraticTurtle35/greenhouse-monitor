var express = require('express'),
    config = require('./server/configuration'),
    app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.set('port', process.env.port || config.expressPort);

var server = app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});