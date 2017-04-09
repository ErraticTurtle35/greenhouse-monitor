var thinky = require('thinky');
var config = require('./server/configuration');

thinky.init({
    host: config.host,
    port: config.port,
    db: config.db
});

exports.thinky = thinky;