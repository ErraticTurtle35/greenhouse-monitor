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
    router.get('/greenhouse/delete/:greenhouseId', home.deleteGreenhouseById);
    router.post('/greenhouse/sensor/:greenhouseId', greenhouse.saveSensor);
    router.put('/greenhouse/:greenhouseId/sensor/:sensorId', greenhouse.updateSensorById);
    router.get('/greenhouse/:greenhouseId/sensor/delete/:sensorId/', greenhouse.deleteSensorById);
    app.use(router)
};