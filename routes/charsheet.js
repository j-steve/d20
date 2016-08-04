/* global ROOT_PATH */
"use strict";
const router = require('express').Router();
const DDClass = require('../models/DDClass');
const CharClass = require('../models/CharClass');
const CharRace = require('../models/CharRace');
const Background = require('../models/Background');
const ddData = require('../models/ddData');
const File = require('si-file');

router.post('/:charID?', function(req, res, next) {
	let charID = req.params.charID;
	let charData = req.body;
	let charUrl = null;
	if (!charID) {
		do {charID = Number(Math.random()).toString(36).substr(2, 5);} 
		while (charFile(charID).existsSync())
		charUrl = (req.originalUrl + '/' + charID).replace('//', '/');
		
		const playerChar = new DDClass("");
		
		for (let key of Object.keys(req.body)) {
			let ddClass = DDClass.ALL[req.body[key]];
			if (ddClass) {playerChar.mergeFrom(ddClass, true);}
			playerChar.attr(key, req.body[key]);
		}
		charData = playerChar.attrs;
	}
	const charDataJson = JSON.stringify(charData, null, '\t');
	charFile(charID).write(charDataJson).then(function() {
		if (charUrl) res.redirect(charUrl);
		else next();
	}).catch(next);
});

router.all('/:charID?', function(req, res, next) {
	const charDataStr = req.params.charID ? charFile(req.params.charID).readSync() : "{}";
	res.render('charsheet', {
		charDataStr,
		charData: JSON.parse(charDataStr),
		ddData,
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