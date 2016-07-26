/* global ROOT_PATH */
"use strict";
const router = require('express').Router();
const Skill = require('../models/Skill');
const CharClass = require('../models/CharClass');
const CharRace = require('../models/CharRace');
const File = require('si-file');

router.post('/:charID?', function(req, res, next) {
    let charID = req.params.charID, charUrl = null;
    if (!charID) {
        do {
            charID = Number(Math.random()).toString(36).substr(2, 5);
        } while (charFile(charID).existsSync())
        charUrl = (req.originalUrl + '/' + charID).replace('//', '/');
    }
    const charData = JSON.stringify(req.body);
    charFile(charID).write(charData).then(function() {
        if (charUrl) res.redirect(charUrl); else next();
    }).catch(next);
});

router.all('/:charID?', function(req, res, next) {
    res.locals.charData = req.params.charID ? charFile(req.params.charID).readSync() : '{}';
    
    res.locals.abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    res.locals.savingThrows = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    res.locals.skills = Skill.ALL;
    res.locals.CharClasses = CharClass.ALL;
    res.locals.CharRaces = CharRace.ALL;
    res.locals.Alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
	res.render('charsheet');
});

function charFile(charId) {
    return new File(ROOT_PATH + '/data/chars/' + charId)
}

module.exports = router;