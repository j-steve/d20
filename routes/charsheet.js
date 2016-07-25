"use strict";
const router = require('express').Router();
const Skill = require('../models/Skill');
const CharClass = require('../models/CharClass');
const Crypto = require('crypto');
const File = require('si-file');

router.post('/:charID?', function(req, res, next) {
    if (!req.params.charID) {
        const charID = Crypto.randomBytes(2).toString('hex');
        res.redirect(req.originalUrl + '/' + charID);
    }
});

router.all('/:charID?', function(req, res, next) {
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
    res.locals.CharClasses = CharClass.ALL;
    res.locals.Alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
	res.render('charsheet');
});

module.exports = router;