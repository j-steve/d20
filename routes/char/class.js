"use strict";
const router = require('express').Router();
const CharClass = require('../../models/CharClass');
const Background = require('../../models/Background');

/* GET home page. */
router.get('/', function(req, res, next) {
	const background = Background.ALL.find(x => x.name === req.query.background);
	const ddclasses = JSON.parse(JSON.stringify(CharClass.ALL));
	for (let charClass of ddclasses) {
		for (let decision of charClass.decisions) {
			if (decision.paramName === 'skills') {
				
				console.log(decision.options.filter(x => background.skills.indexOf(x.name) !== -1));
				decision.options = decision.options.filter(x => background.skills.indexOf(x.name) === -1);
			}
		}
	}
	res.render('choose', {
		title: 'Class',
		formField: 'charClass',
		ddclasses,
		nextPage: '/char/finish',
		query: req.query
	});
});

module.exports = router;
