"use strict";
const router = require('express').Router();
const DDClass = require('../../models/DDClass');
const ddData = require('../../models/ddData');

/* GET home page. */
router.get('/', function(req, res, next) {
    const abilities = Object.map(ddData.abilities, (name, id) => ({id, name, bonus: 0}));
	for (let ddclassType of ['charRace', 'subrace']) {
		let ddclass = DDClass.ALL[req.query[ddclassType]];
		if (ddclass) {
	        abilities.forEach(a => a.bonus += ddclass.abilities[a.id] || 0);
		}
	}
	res.render('char-finish', {
	    abilities,
	    query: req.query
	});
});

module.exports = router;

