var express = require('express'),
    bodyParser = require('body-parser'),
    customConf = require('./server/customConf'),
    configuration = require('./server/configuration'),
    app = express();

app.use(express.static(__dirname + '/views'));
app.use(bodyParser());
app.set('port', process.env.port || customConf.express.port);
app = configuration(app);

var server = app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});