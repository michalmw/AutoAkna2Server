'use strict';

var db = require('../../config/mongo_database');
var express = require('express');
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({}, { strict: false });
var Course = mongoose.model('Course', userSchema);

exports.list = function (req, res) {
	console.log('Zapytanie');
	Course.find(function (err, courses) {

		if (err) res.status(400).send(err);

		res.status(200).send(courses);
	});
};

exports.add = function (req, res) {

	var course = new Course(req.body);

	course.save(function (err) {

		if (err) res.status(400).send(err);

		res.status(200).send(course);
	});
};

exports.update = function (req, res) {

	// delete req.body._id;


	// Gallery.findOneAndUpdate({_id: req.params.id}, {title: req.body.title}, ( err, gallery ) => {

	// 	if(err)
	// 		res.status(400).send(err);

	// 	res.status(200).send(gallery);

	// });
};

exports.delete = function (req, res) {};