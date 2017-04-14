var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    greenhouse = require('../controllers/greenhouse');

module.exports = function (app, upload) {
    router.get('/', home.index);

    router.get('/greenhouse', greenhouse.index);
    router.get('/savegreenhouse', greenhouse.saveGreenhouse);
    app.use(router)
};