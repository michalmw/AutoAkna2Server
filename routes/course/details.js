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

exports.getCount = ( req, res ) => {

	Course.count(
		{'type': req.params.id, 
		$and: [
			{
				$or: [
					{'status': 'zatwierdzony'},
					{'status': 'zmieniony'},
					{'status': 'zakończony'},
					{'status': 'odwołany'}
				]
			}
		]}, ( err, course ) => {
		if( err )
			res.status(400).send(err);

		// console.log('Course', course);
		if (course)
			res.status(200).json({'Is': course});
		else
			res.status(200).json({'Is': 0});

	});

};


exports.get = ( req, res ) => {


	Course.findOne({_id: req.params.id}, (err, course) => {
		if( err )
			res.status(400).send(err);

		res.status(200).send(course);
	});

};

exports.update = ( req, res ) => {


	delete req.body._id;

	
	Course.findOneAndUpdate({_id: req.params.id}, req.body, ( err, course ) => {

		if(err)
			res.status(400).send(err);

		res.status(200).send(course);

	});
};

exports.delete = ( req, res ) => {

	Course.remove({_id: req.params.id}, ( err, course) => {

		if(err)
			res.status(400).send(err);

		res.status(200).send(course);
	});


};
