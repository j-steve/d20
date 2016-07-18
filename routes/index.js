var router = require('express').Router();


router.get('/', function(req, res, next) {
	res.redirect('char/race');
});

module.exports = router;