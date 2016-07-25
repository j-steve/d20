var router = require('express').Router();
var CharRace = require ('../../models/CharRace');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.ddclasses = CharRace.ALL;
	res.locals.title = 'Race';
	res.locals.nextPage = '/char/class';
	res.locals.query = req.query
	res.render('choose');
});

module.exports = router;