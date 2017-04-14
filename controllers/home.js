var GreenHouseModel = require('../models/greenhouse');

module.exports = {
    index: function (request, response) {
        var viewModel = {
            greenhouses: []
        };

        GreenHouse.orderBy({index: 'name'}).run().then(function (greenHouses) {
            viewModel.greenhouses = JSON.stringify(greenHouses);
            response.render('index', viewModel);
        }).error(function (response) {
            return function (error) {
                return greenHouses.send(500, {error: error.message});
            }
        })
    }
};