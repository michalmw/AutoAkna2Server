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

exports.getCount = function (req, res) {

	Course.count({ 'type': req.params.id,
		$and: [{
			$or: [{ 'status': 'zatwierdzony' }, { 'status': 'zmieniony' }, { 'status': 'zakończony' }, { 'status': 'odwołany' }]
		}] }, function (err, course) {
		if (err) res.status(400).send(err);

		// console.log('Course', course);
		if (course) res.status(200).json({ 'Is': course });else res.status(200).json({ 'Is': 0 });
	});
};

exports.get = function (req, res) {

	Course.findOne({ _id: req.params.id }, function (err, course) {
		if (err) res.status(400).send(err);

		res.status(200).send(course);
	});
};

exports.update = function (req, res) {

	delete req.body._id;

	Course.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, course) {

		if (err) res.status(400).send(err);

		res.status(200).send(course);
	});
};

exports.delete = function (req, res) {

	Course.remove({ _id: req.params.id }, function (err, course) {

		if (err) res.status(400).send(err);

		res.status(200).send(course);
	});
};