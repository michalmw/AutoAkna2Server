const app = require('./app');

app.set('port', process.env.PORT || 8000);


const server = app.listen(app.get('port'), () => {

	console.log('Server up on port: ' + app.get('port'));

});