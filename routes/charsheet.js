var router = require('express').Router();
var Skill = require('../models/Skill');

router.get('/', function(req, res, next) {
    res.locals.abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    res.locals.savingThrows = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    res.locals.skills = Skill.populate({
        'Strength': ['Athletics'],
        'Dexterity': ['Acrobatics', 'Sleight of Hand', 'Stealth'],
        'Constitution': [],
        'Intelligence': ['Arcana', 'History', 'Investigation', 'Nature', 'Religon'],
        'Wisdom': ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'],
        'Charisma': ['Deception', 'Intimidation', 'Performance', 'Persuasion']
    });
	res.render('charsheet');
});

module.exports = router;