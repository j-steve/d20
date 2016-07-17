var router = require('express').Router();


router.get('/', function(req, res, next) {
	res.redirect('char/class');
});

module.exports = router;