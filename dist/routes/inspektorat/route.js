'use strict';

var express = require('express');
var router = express.Router();
var inspektoratRoute = require('./details.js');

router.get('/', inspektoratRoute.list).post('/', inspektoratRoute.add).get('/:id', inspektoratRoute.get).put('/:id', inspektoratRoute.update).delete('/:id', inspektoratRoute.delete);

module.exports = router;