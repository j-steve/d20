"use strict";
const DDClass = require('./DDClass');
const Skill = require('./Skill');

class CharClass extends DDClass {

	constructor(name, image, description) {
		super(name, image, description);
	}

	attrs(baseHP, savingThrows, spellcastAbility) {
		this.baseHP = baseHP;
		this.savingThrows = savingThrows;
		this.spellcastAbility = spellcastAbility;
		return this;
	}
}

const INSTRUMENTS = ['Bagpipes', 'Drum', 'Dulcimer', 'Flute', 'Lute', 'Lyre', 'Horn', 'Pan flute', 'Shawn', 'Viol'];

CharClass.ALL = [
	new CharClass('Barbarian', 'http://static.fjcdn.com/pictures/How_bddcce_5492235.jpg', 'Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.')
		.attrs(12, ['STR', 'CON'], null)
		.decide('Skills', 2, ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival']),
	new CharClass('Bard', '/img/classes/bard.png', 'The bard is a master of song, speech, and the magic they contain. The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor.')
		.attrs(8, ['DEX', 'CHA'], 'CHA')
		.decide('Skills', 3, Skill.ALL.map(x => x.name))
		.decide('Musical Instrument Skills', 3, INSTRUMENTS).alias('instrumentSkills'),
	new CharClass('Cleric', 'https://cdnb3.artstation.com/p/assets/images/images/001/103/579/large/magnus-noren-dwarf-cleric1.jpg?1440110780', 'Clerics are conduits for divine power, manifesting a god\'s power as miraculous effects. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of thier deity’s wishes.')
		.attrs(8, ['WIS', 'CHA'], 'WIS')
		.decide('Skills', 2, ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']),
	new CharClass('Druid', 'http://api.ning.com/files/sOStUTCPGwuVCiYZOM1nPnqrQXAS7cj6IFcagCRfCnQqYGrFWvisxt3EThFXhp3IoAA0bNn0gf7qVcl4dLEEfR71ObSfFooS/DruidPaintedWeb.png', 'Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality o f transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces.')
		.attrs(8, ['INT', 'WIS'], 'WIS')
		.decide('Skills', 2, ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']),
	new CharClass('Fighter', '/img/classes/fighter.png', 'Fighters are veteran soldiers, military officers, trained bodyguards, or dedicated knights. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic.')
		.attrs(10, ['STR', 'CON'], 'INT')
		.decide('Skills', 2, ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival']),
	new CharClass('Monk', '/img/classes/monk.png', 'Monks make careful study of a magical energy that most monastic traditions call ki. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.')
		.attrs(8, ['STR', 'DEX'], 'WIS')
		.decide('Skills', 2, ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'])
		.decide('Tool Skills', 1, ["Artisan's tools"].concat(INSTRUMENTS)),
	new CharClass('Paladin', 'http://i10.photobucket.com/albums/a117/elbriga/5f7e782a85cb177b874613c504699887.jpg', 'A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work.')
		.attrs(10, ['WIS', 'CHA'], 'CHA')
		.decide('Skills', 2, ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']),
	new CharClass('Ranger', 'http://api.ning.com/files/wr*6D7ZUFRoLMgYi7-ucpxW86tpWjvMohI-ryYoH6GZhcAGhOl2XSSAPpVxhBjlOcpgqVba891kwQuOF5VJytbgjAAvzLBL1/092311_RangerArt.jpg', 'Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt.')
		.attrs(10, ['STR', 'DEX'], 'WIS')
		.decide('Skills', 3, ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']),
	new CharClass('Rogue', 'https://alzrius.files.wordpress.com/2014/07/rogue.jpg', 'Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. Most of them make a living as burglars, assassins, cutpurses, and con artists. When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most.')
		.attrs(8, ['DEX', 'INT'], 'INT')
		.decide('Skills', 4, ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth']),
	new CharClass('Sorcerer', 'http://whfrp.weebly.com/uploads/1/2/4/0/12408478/689515733_orig.jpg?176', 'No one chooses sorcery; the power chooses the sorcerer. Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.')
		.attrs(6, ['CON', 'CHA'], 'CHA')
		.decide('Skills', 2, ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'])
		.decide('Sorcerous Origins', 1).alias('sorcererOrigin')
			.of('Draconic Bloodline', 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.')
			.of('Wild Magic', 'Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic m agic churns within you, waiting for any outlet.'),
	new CharClass('Warlock', '/img/classes/warlock.png', 'A warlock is defined by a pact with an otherworldly being, though the beings are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity. More often though the arrangement is similar to that between a master and an apprentice: the warlock learns and grows in power, at the cost of occasional services performed on the patron\'s behalf.')
		.attrs(8, ['WIS', 'CHA'], 'CHA')
		.decide('Skills', 2, ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']),
	new CharClass('Wizard', 'https://s-media-cache-ak0.pinimg.com/564x/4a/dd/bc/4addbc856f6df5d9cddc182665692804.jpg', 'Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.')
		.attrs(6, ['INT', 'WIS'], 'INT')
		.decide('Skills', 2, ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'])
];

module.exports = CharClass;