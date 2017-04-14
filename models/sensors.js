var config = require('./server/configuration');
var thinky = require('thinky')(config.rethinkdb);
var GreenHouse = require('./greenhouse');
var r = thinky.r;
var type = thinky.type;


var Sensors = thinky.createModel('Sensors', {
    id: type.string(),
    name: type.string(),
    type: type.string(),
    frequency: type.number(),
    state: type.boolean(),
    minimalValue: type.number(),
    maximumValue: type.number()
});
module.exports = Sensors;

Sensors.belongsTo(GreenHouse, "GreenHouse", "greenhouseId", "id");
GreenHouse.hasMany(Sensors, "Sensors", "id", "sensorId");

