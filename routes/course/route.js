const express = require('express');
const router = express.Router();
const courseRoute = require('./details.js');

router
	.get('/', courseRoute.list)
	.get('/:id', courseRoute.get)
	.get('/count/:id', courseRoute.getCount)
	.post('/', courseRoute.add)
	.put('/:id', courseRoute.update)
	.delete('/:id', courseRoute.delete);

module.exports = router;