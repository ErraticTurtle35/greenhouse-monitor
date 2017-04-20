var GreenHouseModel = require('../models/greenhouse');

module.exports = {
    index: function (request, response) {
        var viewModel = {
            greenhouse: []
        };
        response.render('new-greenhouse', viewModel);
    },

    saveGreenhouse: function (request, response) {
        var body = request.body;
        if (body.state === 'on') {
            body.state = true
        } else {
            body.state = false
        }
        var greenHouse = new GreenHouseModel({
            name: body.name,
            state: body.state,
            address: body.address,
            owner: body.owner,
            description: body.description
        });

        greenHouse.saveAll().then(function (greenhouse) {
            response.redirect('/greenhouse/' + greenhouse.id);
            console.log('save a new greenhouse, baby!', greenhouse.id);
        })

    },

    getGreenHouseById: function (request, response) {
        var viewModel = {
            greenhouse: {}
        };

        GreenHouseModel.get(request.params.greenhouseId).then(function (greenhouse) {
            viewModel.greenhouse = greenhouse;
            response.render('greenhouse', viewModel);
            console.log('Seeing the greenhouse', greenhouse.id);
        })
    },

    updateGreenhouseById: function (request, response) {
        var data = request.body; // Data posted by the user
        GreenHouseModel.get(request.params.greenhouseId).run().then(function (oldGreenhouse) {
            if (!data.state && data.state !== 'on') {
                data.state = false;
            } else {
                data.state = true;
            }
            oldGreenhouse.merge(data).save().then(function (newGreenhouse) {
                response.json(newGreenhouse);
                console.log('Updating the greenhouse', newGreenhouse.id);
            });
        });
    },

    saveSensor: function (request, response) {

    },

    updateSensorById: function (request, response) {

    },

    deleteSensorById: function (request, response) {

    }
};