"use strict";
const DDClass = require('./DDClass');
const Skill = require('./Skill');

class CharClass extends DDClass {

	constructor(name, baseHP, savingThrows, spellcastAbility, image, description) {
		super(name, image, description);
		this.baseHP = baseHP;
		this.savingThrows = savingThrows;
		this.spellcastAbility = spellcastAbility;
	}
}

const INSTRUMENTS = ['Bagpipes', 'Drum', 'Dulcimer', 'Flute', 'Lute', 'Lyre', 'Horn', 'Pan flute', 'Shawn', 'Viol'];

CharClass.ALL = [
	new CharClass('Barbarian', 12, ['STR', 'CON'], null, 'http://static.fjcdn.com/pictures/How_bddcce_5492235.jpg', 'Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.')
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['all simple weapons', 'martial weapons'])
		.attr('equipment', ['greataxe OR any martial weapon', '2x handaxes OR any simple weapon', '4x javelins', 'explorer\'s pack'])
		.attr('features', 'Rage', "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain benefits to attack.  See Player's Handbook pp42 for details.")
		.attr('features', 'Unarmored Defense', "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity m odifier + your Constitution modifier. You can use a shield and still gain this benefit.")
		.decide('Skills', 2, ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival']),
	new CharClass('Bard', 8, ['DEX', 'CHA'], 'CHA', '/img/classes/bard.png', 'The bard is a master of song, speech, and the magic they contain. The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor.')
		.attr('armor', ['light armor'])
		.attr('weapons', ['all simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'])
		.attr('equipment', ['rapier OR longsword OR any simple weapon', 'diplomat\'s pack OR entertainer\'s pack', 'lute OR any musical instrument', 'leather armor', 'dagger'])
		.attr('features', 'Bardic Inspiration', "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.")
		.attr('features', 'Ritual Casting', "You can cast any bard spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a musical instrument as a spellcasting focus for your bard spells.")
		.decide('Cantrips', 2, ['Blade Ward', 'Dancing Lights', 'Friends', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Prestidigitation', 'True Strike', 'Vicious Mockery'])
		.decide('Level-One Spells', 4, ['Animal Friendship', 'Bane', 'Charm Person', 'Comprehend Languages', 'Cure Wounds', 'Detect Magic', 'Disguise Self', 'Dissonant Whispers', 'Faerie Fire', 'Feather Fall', 'Healing Word', 'Heroism', 'Identify', 'Illusory Script', 'Longstrider', 'Silent Image', 'Sleep', 'Speak with Animals', "Tasha's Hideous Laughter", 'Thunderwave', 'Unseen Servant'])
		.decide('Skills', 3, Skill.ALL)
		.decide('Musical Instrument Skills', 3, INSTRUMENTS).alias('instrumentSkills'),
	new CharClass('Cleric', 8, ['WIS', 'CHA'], 'WIS', 'https://cdnb3.artstation.com/p/assets/images/images/001/103/579/large/magnus-noren-dwarf-cleric1.jpg?1440110780', 'Clerics are conduits for divine power, manifesting a god\'s power as miraculous effects. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of thier deity’s wishes.')
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['all simple weapons'])
		.attr('equipment', ['mace OR warhammer (if proficient)', 'scale mail OR leather armor OR chain mail (if proficient)', 'light crossbow and 20x bolts OR any simple weapon', 'priest\'s pack OR explorer\'s pack', 'shield', 'holy symbol'])
		.attr('features', 'Ritual Casting', "You can cast any cleric spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a holy symbol as a spellcasting focus for your cleric spells.")
		.decide('Divine Domain', 1, ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery', 'War'])
		.decide('Cantrips', 3, ['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'])
		.decide('Level-One Spells', 2, ['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'])
		.decide('Skills', 2, ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']),
	new CharClass('Druid', 8, ['INT', 'WIS'], 'WIS', 'http://api.ning.com/files/sOStUTCPGwuVCiYZOM1nPnqrQXAS7cj6IFcagCRfCnQqYGrFWvisxt3EThFXhp3IoAA0bNn0gf7qVcl4dLEEfR71ObSfFooS/DruidPaintedWeb.png', 'Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality o f transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces.')
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'])
		.attr('tools', ['herbalism kit'])
		.attr('languages', ['Druidic'])
		.attr('features', 'Druidic Language', "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.")
		.attr('features', 'Ritual Casting', "You can cast any druid spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a druidic focus as a spellcasting focus for your druid spells.")
		.attr('equipment', ['wooden shield OR any simple weapon', 'scimitar OR any simple melee weapon', 'leather armor', 'explorer\'s pack', 'druidic focus'])
		.decide('Cantrips', 2, ['Create Bonfire', 'Control Flames', 'Druidcraft', 'Frostbite', 'Guidance', 'Gust', 'Magic Stone', 'Mending', 'Mold Earth', 'Poison Spray', 'Produce Flame', 'Resistance', 'Shape Water', 'Shillelagh', 'Thorn Whip', 'Thunderclap'])
		.decide('Level-One Spells', 2, ['Absorb Elements', 'Animal Friendship', 'Beast Bond', 'Charm Person', 'Create or Destroy Water', 'Cure Wounds', 'Detect Magic', 'Detect Poison and Disease', 'Earth Tremor', 'Entangle', 'Faerie Fire', 'Fog Cloud', 'Goodberry', 'Healing Word', 'Ice Knife', 'Jump', 'Longstrider', 'Purify Food and Drink', 'Speak with Animals', 'Thunderwave'])
		.decide('Skills', 2, ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']),
	new CharClass('Fighter', 10, ['STR', 'CON'], 'INT', '/img/classes/fighter.png', 'Fighters are veteran soldiers, military officers, trained bodyguards, or dedicated knights. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic.')
		.attr('armor', ['light armor', 'medium armor', 'heavy armor', 'shields'])
		.attr('weapons', ['all simple weapons', 'all martial weapons'])
		.attr('equipment', ['chain mail OR leather armor, longbow, and 20x arrows', 'martial weapon', 'martial weapon OR shield', 'light crossbow and 20x bolts OR two handaxes', "dungeoneer's pack OR explorer's pack"])
		.attr('features', 'Second Wind', 'You have a limited well o f stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.')
		.decide('Fighting Style')
			.of('Archery', 'You gain a +2 bonus to attack rolls you make with ranged weapons.')
			.of('Defense', 'While you are wearing armor, you gain a +1 bonus to AC.')
			.of('Dueling', 'When you are wielding a melee w eapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.')
			.of('Great Weapon Fighting', 'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.')
			.of('Protection', 'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.')
			.of('Two-Weapon Fighting', 'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.')
		.decide('Skills', 2, ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival']),
	new CharClass('Monk', 8, ['STR', 'DEX'], 'WIS', '/img/classes/monk.png', 'Monks make careful study of a magical energy that most monastic traditions call ki. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.')
		.attr('armor', [])
		.attr('weapons', ['all simple weapons', 'shortswords'])
		.attr('equipment', ['shortsword OR any simple weapon', '10x darts', "dungeoneer's pack OR explorer's pack"])
		.attr('features', 'Unarmored Defense', 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.')
		.attr('features', 'Martial Arts', 'At 1st level, your practice o f martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property. See Player\'s Handbook pp72 for details.')
		.decide('Skills', 2, ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'])
		.decide('Tool Skills', 1, ["Artisan's tools"].concat(INSTRUMENTS)).alias('tools'),
	new CharClass('Paladin', 10, ['WIS', 'CHA'], 'CHA', 'http://i10.photobucket.com/albums/a117/elbriga/5f7e782a85cb177b874613c504699887.jpg', 'A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work.')
		.attr('armor', ['light armor', 'medium armor', 'heavy armor', 'shields'])
		.attr('weapons', 'all simple weapons', 'all martial weapons')
		.attr('equipment', ['martial weapon', 'martial weapon OR shield', '5x javelins OR any simple melee weapon', "priest's pack OR explorer's pack", 'chain mail armor', 'holy symbol'])
		.attr('features', 'Divinse Sense', 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being w hose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.')
		.attr('features', 'Lay On Hands', 'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.')
		.decide('Skills', 2, ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']),
	new CharClass('Ranger', 10, ['STR', 'DEX'], 'WIS', 'http://api.ning.com/files/wr*6D7ZUFRoLMgYi7-ucpxW86tpWjvMohI-ryYoH6GZhcAGhOl2XSSAPpVxhBjlOcpgqVba891kwQuOF5VJytbgjAAvzLBL1/092311_RangerArt.jpg', 'Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt.')
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['all simple weapons', 'all martial weapons'])
		.attr('equipment', ['scale mail armor OR leather armor', '2x shortsords OR two simple melee weapons', "dungeoneer's pack OR explorer's pack", 'longbow', 'quiver', '20x arrows'])
		.decide('Favored Enemy', ['aberrations', 'beasts', 'celestials', 'constructs', 'dragons', 'elementals', 'fey', 'fiends', 'giants', 'monstosities', 'oozes', 'plants', 'undead', 'any two humanoid races'])
		.decide('Favored Terrain', ['arctic', 'coast', 'desert', 'forest', 'grassland', 'mountain', 'swamp', 'the Underdark'])
		.decide('Skills', 3, ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']),
	new CharClass('Rogue', 8, ['DEX', 'INT'], 'INT', 'https://alzrius.files.wordpress.com/2014/07/rogue.jpg', 'Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. Most of them make a living as burglars, assassins, cutpurses, and con artists. When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most.')
		.attr('armor', ['light armor'])
		.attr('weapons', ['all simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'])
		.attr('tools', "thieves' tools")
		.attr('equipment', ['rapier OR shortsword', 'shortbow and quiver of 20 arrows OR shortsword', "burglar's pack OR dungeoneer's pack OR explorer's pack", 'leather armor', '2x daggers', "thieves' tools"])
		.attr('features', 'Expertise', "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.")
		.attr('features', 'Sneak Attack', "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don’t have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.")
		.attr('features', "Thieves' Cant", "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.")
		.decide('Skills', 4, ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth']),
	new CharClass('Sorcerer', 6, ['CON', 'CHA'], 'CHA', 'http://whfrp.weebly.com/uploads/1/2/4/0/12408478/689515733_orig.jpg?176', 'No one chooses sorcery; the power chooses the sorcerer. Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.')
		.attr('armor', [])
		.attr('weapons', ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'])
		.attr('equipment', ['light crossbow and 20x bolts OR any simple weapon', 'component pouch OR arcane focus', "dungeoneer's pack OR explorer's pack", "2x daggers"])
		.attr('features', 'Spellcasting Focus', "You can use a arcane focus as a spellcasting focus for your sorceror spells.")
		.decide('Cantrips', 4, ["Acid Splash", "Blade Ward", "Booming Blade", "Control Flames", "Chill Touch", "Create Bonfire", "Dancing Lights", "Fire Bolt", "Friends", "Frostbite", "Greenflame Blade", "Gust", "Light", "Lightning Lure", "Mage Hand", "Mending", "Message", "Minor Illusion", "Mold Earth", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shape Water", "Shocking Grasp", "Sword Burst", "Thunderclap", "True Strike"])
		.decide('Level-One Spells', 2, ["Burning Hands", "Catapult", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Earth Tremor", "Expeditious Retreat", "False Life", "Feather Fall", "Fog Cloud", "Ice Knife", "Jump", "Mage Armor", "Magic Missile", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Thunderwave", "Witch Bolt"])
		.decide('Skills', 2, ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'])
		.decide('Sorcerous Origins', 1).alias('sorcererOrigin')
			.of('Draconic Bloodline', 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.')
			.of('Wild Magic', 'Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic m agic churns within you, waiting for any outlet.'),
	new CharClass('Warlock', 8, ['WIS', 'CHA'], 'CHA', '/img/classes/warlock.png', 'A warlock is defined by a pact with an otherworldly being, though the beings are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity. More often though the arrangement is similar to that between a master and an apprentice: the warlock learns and grows in power, at the cost of occasional services performed on the patron\'s behalf.')
		.attr('armor', ['light armor'])
		.attr('armor', ['all simple weapons'])
		.attr('equipment', ['light crossbow and 20x bolts OR any simple weapon', 'component pouch OR arcane focus', "scholar's pack OR dungeoneer's pack", 'leather armor', 'any simple weapon', '2x daggers'])
		.attr('features', 'Spellcasting Focus', "You can use a arcane focus as a spellcasting focus for your warlock spells.")
		.decide('Cantrips', 2, ["Blade Ward", "Chill Touch", "Create Bonfire", "Eldritch Blast", "Friends", "Frostbite", "Mage Hand", "Magic Stone", "Minor Illusion", "Poison Spray", "Prestidigitation", "Thunderclap", "True Strike"])
		.decide('Level-One Spells', 2, ["Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Illusory Script", "Protection from Evil and Good", "Unseen Servant", "Witch Bolt"])
		.decide('Skills', 2, ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']),
	new CharClass('Wizard', 6, ['INT', 'WIS'], 'INT', 'https://s-media-cache-ak0.pinimg.com/564x/4a/dd/bc/4addbc856f6df5d9cddc182665692804.jpg', 'Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.')
		.attr('armor', [])
		.attr('armor', ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'])
		.attr('equipment', ['quarterstaff OR dagger', 'component pouch OR arcane focus', "scholar's pack OR explorer's pack", 'spellbook'])
		.attr('features', 'Ritual Casting', "You can cast any wizard spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a arcane focus as a spellcasting focus for your wizard spells.")
		.attr('features', 'Arcane Recovery', "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.")
		.decide('Cantrips', 3, ["Acid Splash", "Blade Ward", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"])
		.decide('Level-One Spells', 6, ["Alarm", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Grease", "Identify", "Illusory Script", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Tasha's Hideous Laughter", "Tenser's Floating Disk", "Thunderwave", "Unseen Servant", "Witch Bolt"])
		.decide('Skills', 2, ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'])
];

module.exports = CharClass;