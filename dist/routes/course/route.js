'use strict';

var express = require('express');
var router = express.Router();
var courseRoute = require('./details.js');

router.get('/', courseRoute.list).post('/', courseRoute.add).put('/:id', courseRoute.update).delete('/:id', courseRoute.delete);

module.exports = router;