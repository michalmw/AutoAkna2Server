'use strict';

var db = require('../../config/mongo_database');
var express = require('express');
var mongoose = require('mongoose');
var inspektoratSchema = new mongoose.Schema({}, { strict: false });
var Inspektorat = mongoose.model('Inspektorat', inspektoratSchema);

exports.list = function (req, res) {
	Inspektorat.find(function (err, inspektoraty) {

		if (err) res.status(400).send(err);

		res.status(200).send(inspektoraty);
	});
};

exports.add = function (req, res) {

	var inspektorat = new Inspektorat(req.body);

	inspektorat.save(function (err) {

		if (err) res.status(400).send(err);

		res.status(200).send(inspektorat);
	});
};

exports.get = function (req, res) {

	Inspektorat.findOne({ _id: req.params.id }, function (err, inspektorat) {
		if (err) res.status(400).send(err);

		res.status(200).send(inspektorat);
	});
};

exports.update = function (req, res) {

	delete req.body._id;

	Inspektorat.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, inspektorat) {

		if (err) res.status(400).send(err);

		res.status(200).send(inspektorat);
	});
};

exports.delete = function (req, res) {

	Inspektorat.remove({ _id: req.params.id }, function (err, inspektorat) {

		if (err) res.status(400).send(err);

		res.status(200).send(inspektorat);
	});
};