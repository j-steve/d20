var router = require('express').Router();


router.get('/', function(req, res, next) {
	var classItems = getItemsFrom(req.query.class);
	var bkrdItems = getItemsFrom(req.query.background);
	res.locals.inventory = classItems.concat(bkrdItems);
	res.render();
});

function getItemsFrom(className) {
	switch (className) {
		
		case 'Barbarian': return ['greataxe OR any martial weapon', '2x handaxes OR any simple weapon', '4x javelins', 'explorer\'s pack'];
		case 'Bard': return ['rapier OR longsword OR any simple weapon', 'diplomat\'s pack OR entertainer\'s pack', 'lute OR any musical instrument', 'leather armor', 'dagger'];
		case 'Cleric': return ['mace OR warhammer (if proficient)', 'scale mail OR leather armor OR chain mail (if proficient)', 'light crossbow and 20x bolts OR any simple weapon', 'priest\'s pack OR explorer\'s pack', 'shield', 'holy symbol'];
		case 'Druid': return ['wooden shield OR any simple weapon', 'scimitar OR any simple melee weapon', 'leather armor', 'explorer\'s pack', 'druidic focus'];
		case 'Fighter': return ['chain mail OR leather armor, longbow, and 20x arrows', 'martial weapon', 'martial weapon OR shield', 'light crossbow and 20x bolts OR two handaxes', "dungeoneer's pack OR explorer's pack"];
		case 'Monk': return ['shortsword OR any simple weapon', '10x darts', "dungeoneer's pack OR explorer's pack"];
		case 'Paladin': return ['martial weapon', 'martial weapon OR shield', '5x javelins OR any simple melee weapon', "priest's pack OR explorer's pack", 'chain mail armor', 'holy symbol'];
		case 'Ranger': return ['scale mail armor OR leather armor', '2x shortsords OR two simple melee weapons', "dungeoneer's pack OR explorer's pack", 'longbow', 'quiver', '20x arrows'];
		case 'Rogue': return ['rapier OR shortsword', 'shortbow and quiver of 20 arrows OR shortsword', "burglar's pack OR dungeoneer's pack OR explorer's pack", 'leather armor', '2x daggers', "thieves' tools"];
		case 'Sorcerer': return ['light crossbow and 20x bolts OR any simple weapon', 'component pouch OR arcane focus', "dungeoneer's pack OR explorer's pack", "2x daggers"];
		case 'Warlock': return ['light crossbow and 20x bolts OR any simple weapon', 'component pouch OR arcane focus', "scholar's pack OR dungeoneer's pack", 'leather armor', 'any simple weapon', '2x daggers'];
		case 'Wizard': return ['quarterstaff OR dagger', 'component pouch OR arcane focus', "scholar's pack OR explorer's pack", 'spellbook'];
		
		case 'Acolyte': return ['holy symbol', 'prayer book OR prayer wheel', '5x sticks of incense', 'vestments', 'set of common clothes', 'belt pouch', '15gp'];
		case 'Charlatan': return ['set of fine clothes', 'disguise kit', 'con tools: 10x stoppered bottles filled with colored liquid OR set of weighted dice OR deck of marked cards OR signet ring of imaginary duke', 'belt pouch', '15gp'];
		case 'Criminal': return ['crowbar', 'set of dark common clothes with hood', 'belt pouch', '15gp'];
		case 'Entertainer': return ['any musical instrument', 'the favor of an admirer: love letter OR lock of hair OR trinket', 'costume', 'belt pouch', '15gp'];
		case 'Folk Hero': return ["any artisan's tools", 'shovel', 'iron pot', 'set of common clothes', 'belt pouch', '10gp'];
		case 'Guild Artisan': return ["any artisan's tools", "letter of introduction from your guild", "set of traveler's clothes", "belt pouch", "15gp"];
		case 'Hermit': return ["a scroll case stuffed full of notes from your studies or prayers", "a winter blanket", "set of common clothes", "herbalism kit", "5gp"];
		case 'Noble': return ["set of fine clothes", "signet ring", "scroll of pedigree", "coinpurse", "25gp"];
		case 'Outlander': return ["staff", "hunting trap", "trophy from an animal you killed", "set of traveler's clothes", "belt pouch", "10gp"];
		case 'Sage': return ["bottle of black ink", "quill", "small knife", "letter from a dead colleague posing a question you have not yet been able to answer", "set of common clothes", "belt pouch", "10gp"];
		case 'Sailor': return ["belaying pin (club)", "50 feet of silk rope", "luck charm such as a rabbit foot or small stone with a hole in the center OR random trinket", "set of common clothes", "belt pouch", "10gp"];
		case 'Soldier': return ["insignia of rank", "trophy taken from a fallen enemy: dagger OR broken blade OR piece of a banner", "set of bone dice OR deck of cards", "set of common clothes", "belt pouch", "10gp"];
		case 'Urchin': return ["small knife", "map of the city you grew up in", "pet mouse", "token to remember your parents by", "set of common clothes", "belt pouch", "10gp"];
		
		default: return [];
	}
}

function item(name) {
	this.name = name;
}

module.exports = router;