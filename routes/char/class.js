var router = require('express').Router();0

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.ddclasses = [
		new DDClass('Barbarian', 'http://static.fjcdn.com/pictures/How_bddcce_5492235.jpg', 'Barbarians com e alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.'),
		new DDClass('Bard', 'http://www.joshuad.net/new-bard-handbook-files/imgs/halfling.jpg', 'The bard is a master of song, speech, and the magic they contain. The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor.'),
		new DDClass('Cleric', 'https://cdnb3.artstation.com/p/assets/images/images/001/103/579/large/magnus-noren-dwarf-cleric1.jpg?1440110780', 'Clerics are conduits for divine power, manifesting a god\'s power as miraculous effects. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of thier deity’s wishes.'),
		new DDClass('Druid', 'http://api.ning.com/files/sOStUTCPGwuVCiYZOM1nPnqrQXAS7cj6IFcagCRfCnQqYGrFWvisxt3EThFXhp3IoAA0bNn0gf7qVcl4dLEEfR71ObSfFooS/DruidPaintedWeb.png', 'Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality o f transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces.'),
		new DDClass('Fighter', 'http://i258.photobucket.com/albums/hh275/Ravingdork/HaroldtheRanger-1.jpg', 'Fighters are veteran soldiers, military officers, trained bodyguards, or dedicated knights. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic.'),
		new DDClass('Monk', 'http://www.nerdsonearth.com/wp-content/uploads/2015/08/PZO9009-Monk.jpg', 'Monks make careful study of a magical energy that most monastic traditions call ki. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.'),
		new DDClass('Paladin', 'http://i10.photobucket.com/albums/a117/elbriga/5f7e782a85cb177b874613c504699887.jpg', 'A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work.'),
		new DDClass('Ranger', 'http://api.ning.com/files/wr*6D7ZUFRoLMgYi7-ucpxW86tpWjvMohI-ryYoH6GZhcAGhOl2XSSAPpVxhBjlOcpgqVba891kwQuOF5VJytbgjAAvzLBL1/092311_RangerArt.jpg', 'Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt.'),
		new DDClass('Rogue', 'https://alzrius.files.wordpress.com/2014/07/rogue.jpg', 'Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. Most of them make a living as burglars, assassins, cutpurses, and con artists. When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most.'),
		new DDClass('Sorcerer', 'http://whfrp.weebly.com/uploads/1/2/4/0/12408478/689515733_orig.jpg?176', 'No one chooses sorcery; the power chooses the sorcerer. Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.'),
		new DDClass('Warlock', 'http://orig12.deviantart.net/a2d7/f/2014/143/e/6/dark_warlock_by_seraph777-d7jg9ou.jpg', 'A warlock is defined by a pact with an otherworldly being, though the beings are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity. More often though the arrangement is similar to that between a master and an apprentice: the warlock learns and grows in power, at the cost of occasional services performed on the patron\'s behalf.'),
		new DDClass('Wizard', 'https://s-media-cache-ak0.pinimg.com/564x/4a/dd/bc/4addbc856f6df5d9cddc182665692804.jpg', 'Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.')
	];
	res.render();
});

module.exports = router;


function DDClass(name, image, description) {
	this.name = name;
	this.image = image;
	this.description = description;
}