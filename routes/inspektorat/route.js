const express = require('express');
const router = express.Router();
const inspektoratRoute = require('./details.js');

router
	.get('/', inspektoratRoute.list)
	.post('/', inspektoratRoute.add)
	.get('/:id', inspektoratRoute.get)
	.put('/:id', inspektoratRoute.update)
	.delete('/:id', inspektoratRoute.delete);

module.exports = router;