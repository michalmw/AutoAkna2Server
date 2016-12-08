const express = require('express');
const router = express.Router();
const courseRoute = require('./details.js');

router
	.get('/', courseRoute.list)
	.post('/', courseRoute.add)
	.put('/:id', courseRoute.update)
	.delete('/:id', courseRoute.delete);

module.exports = router;