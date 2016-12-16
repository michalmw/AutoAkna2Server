const db = require('../../config/mongo_database');
const express = require('express');
const mongoose = require('mongoose');
const inspektoratSchema = new mongoose.Schema({}, { strict: false });
const Inspektorat = mongoose.model('Inspektorat', inspektoratSchema);

exports.list = ( req, res ) => {
	Inspektorat.find( ( err , inspektoraty) => {

		if( err )
			res.status(400).send(err);

		res.status(200).send(inspektoraty);

	});

};

exports.add = ( req, res ) => {

	var inspektorat = new Inspektorat(req.body);

	inspektorat.save( ( err ) => {

		if( err )
			res.status(400).send(err);

		res.status(200).send(inspektorat);
	})


};

exports.get = ( req, res) => {


	Inspektorat.findOne({_id: req.params.id}, (err, inspektorat) => {
		if( err )
			res.status(400).send(err);

		res.status(200).send(inspektorat);
	});

};

exports.update = ( req, res ) => {


	delete req.body._id;

	
	Inspektorat.findOneAndUpdate({_id: req.params.id}, req.body, ( err, inspektorat ) => {

		if(err)
			res.status(400).send(err);

		res.status(200).send(inspektorat);

	});
};

exports.delete = ( req, res ) => {

	Inspektorat.remove({_id: req.params.id}, ( err, inspektorat) => {

		if(err)
			res.status(400).send(err);

		res.status(200).send(inspektorat);
	});


};
