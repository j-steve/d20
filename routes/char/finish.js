"use strict";
const router = require('express').Router();
const DDClass = require('../../models/DDClass');
const ddData = require('../../models/ddData');

/* GET home page. */
router.get('/', function(req, res, next) {
    const charData = new DDClass();
	for (let key of Object.keys(req.query)) {
		let archtype = req.query[key];
		let ddclass = DDClass.ALL[archtype];
		if (ddclass) {charData.mergeFrom(ddclass);}
	}
	res.render('char-finish', {
	    abilities: ddData.abilities,
	    charDataAbilities: charData.attrs.abilities || {},
	    query: req.query
	});
});

module.exports = router;

