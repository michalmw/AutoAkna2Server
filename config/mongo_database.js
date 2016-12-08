const mongoose = require('mongoose');
const mongodbURL = 'mongodb://localhost/akna';

mongoose.connect(mongodbURL, {}, ( err, res) => {

	if(err)
		console.log('Błąd łączenia się z bazą danych', err);
	else
		console.log('Poprawnie połączony z bazą ', mongodbURL);

});