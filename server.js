const app = require('./app');

app.set('port', 8009);


const server = app.listen(app.get('port'), () => {

	console.log('Server up on port: ' + app.get('port'));

});