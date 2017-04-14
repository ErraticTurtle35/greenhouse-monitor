var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./server/configuration'),
    app = express();

TemperatureLog.changes().then(function (feed) {
    feed.each(function (error, doc) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        if (doc.isSaved() === false) {
            console.log("The following document was deleted:");
            console.log(JSON.stringify(doc));
        }
        else if (doc.getOldValue() == null) {
            console.log("A new document was inserted:");
            console.log(JSON.stringify(doc));
        }
        else {
            console.log("A document was updated.");
            console.log("Old value:");
            console.log(JSON.stringify(doc.getOldValue()));
            console.log("New value:");
            console.log(JSON.stringify(doc));
        }
    });
}).error(function (error) {
    console.log(error);
    process.exit(1);
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.route('/temperatureLog/get').get(getTemperatureLogs);
app.route('/temperatureLog/new').put(createTemperatureLog);
app.route('/temperatureLog/update').post(updateTemperatureLog);
app.route('/temperatureLog/delete').post(deleteTemperatureLog);

function getTemperatureLogs(req, res, next) {
    TemperatureLog.orderBy({index: "createdAt"}).run().then(function (result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

function createTemperatureLog(req, res, next) {
    var temperatureLog = new TemperatureLog(req.body);
    temperatureLog.save().then(function (result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

function updateTemperatureLog(req, res, next) {
    var temperatureLog = new TemperatureLog(req.body);
    TemperatureLog.get(temperatureLog.id).update({
        date: req.body.date,
        value: req.body.value
    }).run().then(function (temperatureLog) {
        res.send(JSON.stringify(temperatureLog));
    }).error(handleError(res));
}

function deleteTemperatureLog(req, res, next) {
    TemperatureLog.get(req.body.id).run().then(function (temperatureLog) {
        temperatureLog.delete().then(function (result) {
            res.send("");
        }).error(handleError(res));
    }).error(handleError(res));
}

function handleError(res) {
    return function (error) {
        return res.send(500, {error: error.message});
    }
}

app.set('port', process.env.port || config.express.port);
var server = app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});