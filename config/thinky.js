var config = require('./config'),
    thinky = require('thinky');

module.exports = function () {
    return thinky(config.rethinkdb);
};