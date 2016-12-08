'use strict';

var db = require('../../config/mongo_database');
var express = require('express');
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({}, { strict: false });
var User = mongoose.model('User', userSchema);

exports.list = function (req, res) {
	console.log('Zapytanie');
	User.find(function (err, users) {

		if (err) res.status(400).send(err);

		res.status(200).send(users);
	});
};

exports.add = function (req, res) {

	var user = new User(req.body);

	user.save(function (err) {

		if (err) res.status(400).send(err);

		res.status(200).send(user);
	});
};

exports.get = function (req, res) {

	User.findOne({ _id: req.params.id }, function (err, user) {
		if (err) res.status(400).send(err);

		res.status(200).send(user);
	});
};

exports.update = function (req, res) {

	delete req.body._id;

	User.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, user) {

		if (err) res.status(400).send(err);

		res.status(200).send(user);
	});
};

exports.delete = function (req, res) {};