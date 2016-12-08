const db = require('../../config/mongo_database');
const express = require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({}, { strict: false });
const Course = mongoose.model('Course', userSchema);

exports.list = ( req, res ) => {
	console.log('Zapytanie');
	Course.find( ( err , courses) => {

		if( err )
			res.status(400).send(err);

		res.status(200).send(courses);

	});

};

exports.add = ( req, res ) => {

	var course = new Course(req.body);

	course.save( ( err ) => {

		if( err )
			res.status(400).send(err);

		res.status(200).send(course);
	})


};

exports.update = ( req, res ) => {


	// delete req.body._id;

	
	// Gallery.findOneAndUpdate({_id: req.params.id}, {title: req.body.title}, ( err, gallery ) => {

	// 	if(err)
	// 		res.status(400).send(err);

	// 	res.status(200).send(gallery);

	// });
};

exports.delete = ( req, res ) => {




};
