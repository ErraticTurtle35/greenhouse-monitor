var GreenHouseModel = require('../models/greenhouse');

module.exports = {
    index: function (request, response) {
        var viewModel = {
            greenhouses: []
        };

        GreenHouseModel.run().then(function (greenHouses) {
            viewModel.greenhouses = JSON.stringify(greenHouses);
            response.render('index', viewModel);
        }).error(function (response) {
            return function (error) {
                return response.send(500, {error: error.message});
            }
        })
    }
};