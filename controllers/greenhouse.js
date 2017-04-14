var GreenHouseModel = require('../models/greenhouse');

module.exports = {
    index: function (request, response) {
        var viewModel = {
            greenhouse: []
        };
        response.render('greenhouse', viewModel);
    },

    saveGreenhouse: function (request, response) {
        var body = request.body;
        var greenHouse = new GreenHouseModel({
            name: body.name,
            state: body.state,
            address: body.address,
            owner: body.owner,
            description: body.description
        });

        greenHouse.saveAll().then(function (greenhouse) {
            response.redirect('/greenhouse/' + greenhouse.id);
        })

    }
};