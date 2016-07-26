"use strict";
const router = require('express').Router();
const CharClass = require('../../models/CharClass');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('choose', {
		title: 'Class',
		formField: 'charClass',
		ddclasses: CharClass.ALL,
		nextPage: '/char/background',
		query: req.query
	});
});

module.exports = router;
