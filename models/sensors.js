var config = require('../server/customConf');
var thinky = require('thinky')(config.rethinkdb);
var GreenHouse = require('./greenhouse');
var r = thinky.r;
var type = thinky.type;


var Sensors = thinky.createModel('Sensors', {
    id: type.string(),
    name: type.string(),
    type: type.string(),
    greenhouseId: type.string()
});
module.exports = Sensors;

GreenHouse.hasMany(Sensors, 'sensors', 'id', 'greenhouseId');

