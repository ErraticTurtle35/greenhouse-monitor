var express = require('express'),
    config = require('./server/configuration'),
    app = express();

var thinky = require('thinky')(config.rethinkdb);
var r = thinky.r;
var type = thinky.type;

var TemperatureLog = thinky.createModel("TemperatureLog", {
    id: type.string(),
    date: type.date(),
    value: type.number(),
    createdAt: type.date().default(r.now())
});
TemperatureLog.ensureIndex("createdAt");

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.set('port', process.env.port || config.express.port);

var server = app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});