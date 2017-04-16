var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    greenhouse = require('../controllers/greenhouse');

module.exports = function (app, upload) {
    router.get('/', home.index);

    router.get('/greenhouse', greenhouse.index);
    router.post('/savegreenhouse', greenhouse.saveGreenhouse);
    router.get('/greenhouse/:greenhouseId', greenhouse.getGreenHouseById);
    router.put('/greenhouse/:greenhouseId', greenhouse.updateGreenhouseById);
    app.use(router)
};