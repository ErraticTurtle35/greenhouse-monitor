var config = require('../server/customConf');
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
module.exports = GreenHouse;