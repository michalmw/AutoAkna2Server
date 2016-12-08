'use strict';

var express = require('express');
var router = express.Router();
var usersRoute = require('./details.js');

router.get('/', usersRoute.list).post('/', usersRoute.add).get('/:id', usersRoute.get).put('/:id', usersRoute.update).delete('/:id', usersRoute.delete);

module.exports = router;