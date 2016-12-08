const db = require('../../config/mongo_database');
const express = require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model('User', userSchema);

exports.list = ( req, res ) => {
	console.log('Zapytanie');
	User.find( ( err , users) => {

		if( err )
			res.status(400).send(err);

		res.status(200).send(users);

	});

};

exports.add = ( req, res ) => {

	var user = new User(req.body);

	user.save( ( err ) => {

		if( err )
			res.status(400).send(err);

		res.status(200).send(user);
	})


};

exports.get = ( req, res) => {


	User.findOne({_id: req.params.id}, (err, user) => {
		if( err )
			res.status(400).send(err);

		res.status(200).send(user);
	});

};

exports.update = ( req, res ) => {


	delete req.body._id;

	
	User.findOneAndUpdate({_id: req.params.id}, req.body, ( err, user ) => {

		if(err)
			res.status(400).send(err);

		res.status(200).send(user);

	});
};

exports.delete = ( req, res ) => {




};
