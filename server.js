var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./server/configuration'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.set('port', process.env.port || config.express.port);

var server = app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});