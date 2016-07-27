"use strict";
const router = require('express').Router();
const Background = require('../../models/Background');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('choose', {
		title: 'Background',
		formField: 'background',
		ddclasses: Background.ALL,
		nextPage: '/char/class',
		query: req.query
	});
});

module.exports = router;