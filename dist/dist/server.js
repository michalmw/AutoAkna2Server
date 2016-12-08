'use strict';

var app = require('./app');

app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function () {

	console.log('Server up on port: ' + app.get('port'));
});