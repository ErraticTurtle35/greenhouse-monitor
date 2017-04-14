var GreenHouseModel = require('../models/greenhouse');

module.exports = {
    index: function (request, response) {
        var viewModel = {
            greenhouse: []
        };
        response.render('greenhouse', viewModel);
    }
};