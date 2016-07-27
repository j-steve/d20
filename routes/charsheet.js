/* global ROOT_PATH */
"use strict";
const router = require('express').Router();
const Skill = require('../models/Skill');
const CharClass = require('../models/CharClass');
const CharRace = require('../models/CharRace');
const Background = require('../models/Background');
const Ability = require('../models/Ability');
const File = require('si-file');

router.post('/:charID?', function(req, res, next) {
	let charID = req.params.charID,
		charUrl = null;
	if (!charID) {
		do {charID = Number(Math.random()).toString(36).substr(2, 5);} 
		while (charFile(charID).existsSync())
		charUrl = (req.originalUrl + '/' + charID).replace('//', '/');
		const charRace = CharRace.ALL.find(x => x.name === req.body.charRace);
		//const charRace = CharRace.ALL.find(x => x.name === req.body.subrace);
		const charClass = CharClass.ALL.find(x => x.name === req.body.charClass);
		const background = Background.ALL.find(x => x.name === req.body.background);
		getFeature(req, 'equipment', charClass, charRace, background, '\n');
		getFeature(req, 'features', charClass, charRace, background, '\n\n');
		getFeature(req, 'languages', charClass, charRace, background, ', ');
		let miscSkils = [];
		if (req.body.languages) {miscSkils = miscSkils.concat('LANGUAGES: ' + [].concat(req.body.languages).join(', '));}
		if (req.body.tools) {miscSkils = miscSkils.concat('TOOLS: ' + [].concat(req.body.tools).join(', '));}
		req.body.miscSkills = miscSkils.join('\n\n');
		req.body.speed = charRace.speed;
		if (!req.body.subrace) {req.body.subrace = req.body.charRace;}
	}
	const charData = JSON.stringify(req.body);
	charFile(charID).write(charData).then(function() {
		if (charUrl) res.redirect(charUrl);
		else next();
	}).catch(next);
});

router.all('/:charID?', function(req, res, next) {
	res.render('charsheet', {
		charData: req.params.charID ? charFile(req.params.charID).readSync() : '{}',
		Abilities: Ability.ALL,
		Skills: Skill.ALL,
		CharClasses: CharClass.ALL,
		CharRaces: CharRace.ALL,
		Backgrounds: Background.ALL,
		Alignments: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']
	});
});

function charFile(charId) {
	return new File(ROOT_PATH + '/data/chars/' + charId)
}

function getFeature(req, name, charClass, charRace, background, seperator) {
	let values = (charRace[name] || []).concat(charClass[name] || []).concat(background[name] || []);
	req.body[name] = (req.body[name] || '') + values.join(seperator);
}

module.exports = router;