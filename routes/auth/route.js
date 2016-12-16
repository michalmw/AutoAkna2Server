const express = require('express');
const router = express.Router();
const authRoute = require('./details.js');

router
	.get('/login', authRoute.login)
	.get('/logout', authRoute.logout);

module.exports = router;