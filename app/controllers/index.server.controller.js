exports.render = function (request, response) {
    if (request.session.lastVisit) {
        console.log('lastVisit', request.session.lastVisit);
    }
    request.session.lastVisit = new Date();
    response.render('index', {
        title: 'Hello world!'
    })
};  