const express = require('express');
const router = express.Router();
const usersRoute = require('./details.js');

router
	.get('/', usersRoute.list)
	.post('/', usersRoute.add)
	.post('/login', usersRoute.login)
	.post('/logout', usersRoute.logout)
	.get('/:id', usersRoute.get)
	.put('/:id', usersRoute.update)
	.delete('/:id', usersRoute.delete);

module.exports = router;