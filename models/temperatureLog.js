var config = require('./server/configuration');
var thinky = require('thinky')(config.rethinkdb);
var greenHouse = require('./greenhouse');
var r = thinky.r;
var type = thinky.type;


var TemperatureLog = thinky.createModel("TemperatureLog", {
    id: type.string(),
    date: type.date(),
    value: type.number(),
    createdAt: type.date().default(r.now())
});
module.exports = TemperatureLog;

greenHouse.hasMany(TemperatureLog, "TemperatureLog", "id", "temperatureLogId");
