"use strict";
const router = require('express').Router();
const DDClass = require('../../models/DDClass');
const Ability = require('../../models/Ability');

/* GET home page. */
router.get('/', function(req, res, next) {
    const abilities = JSON.parse(JSON.stringify(Ability.ALL))
    abilities.forEach(a => a.bonus = 0);
	for (let ddclassType of ['charRace', 'subrace']) {
		let ddclass = DDClass.ALL[req.query[ddclassType]];
	    abilities.forEach(a => a.bonus += ddclass.abilities[a.id] || 0);
	}
	res.render('char-finish', {
	    abilities,
	    query: req.query
	});
});

module.exports = router;

