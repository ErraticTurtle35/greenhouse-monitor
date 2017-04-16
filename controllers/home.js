var GreenHouseModel = require('../models/greenhouse');

module.exports = {
    index: function (request, response) {
        var viewModel = {
            greenhouses: []
        };

        GreenHouseModel.run().then(function (greenHouses) {
            viewModel.greenhouses = greenHouses;
            response.render('index', viewModel);
        }).error(function (response) {
            return function (error) {
                return response.send(500, {error: error.message});
            }
        })
    },
    deleteGreenhouseById: function (request, response) {
        GreenHouseModel.get(request.params.greenhouseId).run().then(function (greenhouse) {
            greenhouse.delete().then(function (result) {
                var viewModel = {
                    greenhouses: []
                };
                greenhouse.isSaved();
                GreenHouseModel.run().then(function (greenhouses) {
                    viewModel.greenhouses = greenhouses;
                    response.render('index', viewModel);
                })
            })
        })
    }
};