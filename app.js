const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});




const usersRoutes = require('./routes/users/route.js');
const courseRoutes = require('./routes/course/route.js');

app.use('/api/users', usersRoutes );
app.use('/api/course', courseRoutes );



app.get('/',(req, res) => {
	res.json('eeee');
});

module.exports = app;