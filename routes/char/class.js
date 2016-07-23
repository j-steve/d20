var router = require('express').Router();
var url = require('url');
var CharClass = require ('../../models/CharClass');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.ddclasses = CharClass.ALL;
	res.locals.title = 'Class';
	res.locals.nextPage = '/char/background';
	res.locals.query = req.query
	res.render('choose');
});

module.exports = router;

