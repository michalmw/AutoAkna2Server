const db = require('../../config/mongo_database');
const express = require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model('User', userSchema);

exports.login = ( req, res ) => {

	let login = req.body.login || '';
	let password = req.body.password || '';


	User.findOne({'login':login}, ( err , user) => {

		if( err )
			res.status(400).send(err);

		if( user ) {

			if( user.password == password)
				res.status(200).send(user);
			else
				res.status(200).send({'status': 'hasło nie jest poprawne'});


		} else {
			res.status(200).send({'status': 'nie znaleziono usera'});
		}


	});

};

exports.logout = ( req, res ) => {

	var user = new User(req.body);

	user.save( ( err ) => {

		if( err )
			res.status(400).send(err);

		res.status(200).send(user);
	})


};