'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var usersRoutes = require('./routes/users/route.js');
var courseRoutes = require('./routes/course/route.js');
var inspektoratRoutes = require('./routes/inspektorat/route.js');

app.use('/api/users', usersRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/inspektorat', inspektoratRoutes);

app.get('/', function (req, res) {
  res.json('eeee');
});

module.exports = app;