var config = require('./server/configuration');
var thinky = require('thinky')(config.rethinkdb);
var r = thinky.r;
var type = thinky.type;


var GreenHouse = thinky.createModel('GreenHouse', {
    id: type.string(),
    name: type.string(),
    address: type.string(),
    owner: type.string(),
    description: type.string(),
    state: type.boolean()
});


var Sensor = thinky.createModel('Sensor', {
    id: type.string(),
    name: type.string(),
    type: type.string(),
    frequency: type.number(),
    state: type.boolean(),
    minimalValue: type.number(),
    maximumValue: type.number()
});


Sensor.belongsTo(GreenHouse, "GreenHouse", "greenhouseId", "id");
GreenHouse.hasMany(Sensor, "Sensor", "id", "sensorId");