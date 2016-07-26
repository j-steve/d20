"use strict";
const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('char-finish', {query: req.query});
});

module.exports = router;

