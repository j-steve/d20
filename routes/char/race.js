"use strict";
const router = require('express').Router();
const CharRace = require('../../models/CharRace');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('choose', {
		title: 'Race',
		formField: 'charRace',
		ddclasses: CharRace.ALL,
		nextPage: '/char/class',
		query: req.query
	});
});

module.exports = router;