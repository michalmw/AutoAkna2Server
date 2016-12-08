'use strict';

var mongoose = require('mongoose');
var mongodbURL = 'mongodb://localhost/akna';

mongoose.connect(mongodbURL, {}, function (err, res) {

	if (err) console.log('Błąd łączenia się z bazą danych', err);else console.log('Poprawnie połączony z bazą ', mongodbURL);
});