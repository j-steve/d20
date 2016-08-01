"use strict";
const DDClass = require('./DDClass');
const ddData = require('./ddData');

module.exports.ALL = [
	new DDClass('Barbarian',
			'Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times per day, but that is usually sufficient to defeat whatever threats arise.', '/img/classes/barbarian.jpg')
		.attr('baseHP', 12).attr('savingThrows', ['STR', 'CON'])
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['all simple weapons', 'martial weapons'])
		.attr('equipment', ['greataxe OR any martial weapon', '2x handaxes OR any simple weapon', '4x javelins', 'explorer\'s pack'])
		.attr('features', 'Rage', "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain benefits to attack.  See Player's Handbook pp42 for details.")
		.attr('features', 'Unarmored Defense', "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity m odifier + your Constitution modifier. You can use a shield and still gain this benefit.")
		.decide('Skills', 2, ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival'])
			.parent,
	new DDClass('Bard', 
			'The bard is a master of song and speech, and the magic they contain. Their greatest strength is their versatility. Bards use magical songs or chants to inspire their allies and hinder their foes, or magically bolstering their own swords and armor.', '/img/classes/bard.png')
		.attr('baseHP', 8).attr('savingThrows', ['DEX', 'CHA']).attr('spellcastAbility', 'CHA')
		.attr('armor', ['light armor'])
		.attr('weapons', ['all simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'])
		.attr('equipment', ['rapier OR longsword OR any simple weapon', 'diplomat\'s pack OR entertainer\'s pack', 'lute OR any musical instrument', 'leather armor', 'dagger'])
		.attr('features', 'Bardic Inspiration', "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.")
		.attr('features', 'Ritual Casting', "You can cast any bard spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a musical instrument as a spellcasting focus for your bard spells.")
		.decide('Cantrips', 2, ['Blade Ward', 'Dancing Lights', 'Friends', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Prestidigitation', 'True Strike', 'Vicious Mockery'])
			.parent
		.decide('Level-1 Spells', 4, ['Animal Friendship', 'Bane', 'Charm Person', 'Comprehend Languages', 'Cure Wounds', 'Detect Magic', 'Disguise Self', 'Dissonant Whispers', 'Faerie Fire', 'Feather Fall', 'Healing Word', 'Heroism', 'Identify', 'Illusory Script', 'Longstrider', 'Silent Image', 'Sleep', 'Speak with Animals', "Tasha's Hideous Laughter", 'Thunderwave', 'Unseen Servant']).alias('spells1')
			.parent
		.decide('Skills', 3, ddData.skills)
			.parent
		.decide('Musical Instrument Skills', 3, ddData.instruments).alias('tools')
			.parent,
	new DDClass('Cleric',
			"Clerics are conduits for divine power, manifesting a god's power as miraculous effects. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of thier deity’s wishes.", '/img/classes/cleric.jpg')
		.attr('baseHP', 8).attr('savingThrows', ['WIS', 'CHA']).attr('spellcastAbility', 'WIS')
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['all simple weapons'])
		.attr('equipment', ['mace OR warhammer (if proficient)', 'scale mail OR leather armor OR chain mail (if proficient)', 'light crossbow and 20x bolts OR any simple weapon', 'priest\'s pack OR explorer\'s pack', 'shield', 'holy symbol'])
		.attr('features', 'Ritual Casting', "You can cast any cleric spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a holy symbol as a spellcasting focus for your cleric spells.")
		.decide('Divine Domain', 1, ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery'])
			.of(new DDClass("Knowledge")
				.attr('features', "Blessing of Knowledge", "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills.")
			)
			.of(new DDClass("Life")
				.attr('armor', 'heavy armor')
				.attr('features', "Disciple of Life", "your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level.")
			)
			.of(new DDClass("Light")
				.attr('cantrips', 'Light')
				.attr('features', 'Warding Flare', "You can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.")
			)
			.of(new DDClass("Nature")
				.attr('armor', 'heavy armor')
				/*.decide('Druid Cantrip', 1, ['Create Bonfire', 'Control Flames', 'Druidcraft', 'Frostbite', 'Guidance', 'Gust', 'Magic Stone', 'Mending', 'Mold Earth', 'Poison Spray', 'Produce Flame', 'Resistance', 'Shape Water', 'Shillelagh', 'Thorn Whip', 'Thunderclap']).alias('cantrips')
					.parent*/ //TODO
			)
			.of(new DDClass("Tempest")
				.attr('weapons', 'all martial weapons')
				.attr('armor', 'heavy armor')
				.attr('features', "Wrath of the Storm", "You can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.")
			)
			.of(new DDClass("Trickery")
				.attr('features', "Blessing of the Trickster", "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.")
			)
			.of(new DDClass("War")
				.attr('weapons', 'all martial weapons')
				.attr('armor', 'heavy armor')
				.attr('features', "War Priest", "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.")
			)
			.parent
		.decide('Cantrips', 3, ['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'])
			.parent
		.decide('Level-1 Spells', 2, ['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith']).alias('spells1')
			.parent
		.decide('Skills', 2, ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'])
			.parent,
	new DDClass('Druid',
			'Druids revere nature above all, gaining their spells and other magical powers from a natural diety or nature itself. Many druids pursue a mystic spirituality of transcendent union with nature, while others serve gods of wild nature, animals, or elemental forces.', '/img/classes/druid.png')
		.attr('baseHP', 8).attr('savingThrows', ['INT', 'WIS']).attr('spellcastAbility', 'WIS')
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'])
		.attr('tools', ['herbalism kit'])
		.attr('languages', ['Druidic'])
		.attr('features', 'Druidic Language', "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.")
		.attr('features', 'Ritual Casting', "You can cast any druid spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a druidic focus as a spellcasting focus for your druid spells.")
		.attr('equipment', ['wooden shield OR any simple weapon', 'scimitar OR any simple melee weapon', 'leather armor', 'explorer\'s pack', 'druidic focus'])
		.decide('Cantrips', 2, ['Create Bonfire', 'Control Flames', 'Druidcraft', 'Frostbite', 'Guidance', 'Gust', 'Magic Stone', 'Mending', 'Mold Earth', 'Poison Spray', 'Produce Flame', 'Resistance', 'Shape Water', 'Shillelagh', 'Thorn Whip', 'Thunderclap'])
			.parent
		.decide('Level-1 Spells', 2, ['Absorb Elements', 'Animal Friendship', 'Beast Bond', 'Charm Person', 'Create or Destroy Water', 'Cure Wounds', 'Detect Magic', 'Detect Poison and Disease', 'Earth Tremor', 'Entangle', 'Faerie Fire', 'Fog Cloud', 'Goodberry', 'Healing Word', 'Ice Knife', 'Jump', 'Longstrider', 'Purify Food and Drink', 'Speak with Animals', 'Thunderwave']).alias('spells1')
			.parent
		.decide('Skills', 2, ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'])
			.parent,
	new DDClass('Fighter',
			'Fighters are veteran soldiers, military officers, trained bodyguards, or dedicated knights. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic.', '/img/classes/fighter.png')
		.attr('baseHP', 10).attr('savingThrows', ['STR', 'CON']).attr('spellcastAbility', 'INT')
		.attr('armor', ['light armor', 'medium armor', 'heavy armor', 'shields'])
		.attr('weapons', ['all simple weapons', 'all martial weapons'])
		.attr('equipment', ['chain mail OR leather armor, longbow, and 20x arrows', 'martial weapon', 'martial weapon OR shield', 'light crossbow and 20x bolts OR two handaxes', "dungeoneer's pack OR explorer's pack"])
		.attr('features', 'Second Wind', 'You have a limited well o f stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.')
		.decide('Fighting Style')
			.ofAttr('features', 'Archery', 'You gain a +2 bonus to attack rolls you make with ranged weapons.')
			.ofAttr('features', 'Defense', 'While you are wearing armor, you gain a +1 bonus to AC.')
			.ofAttr('features', 'Dueling', 'When you are wielding a melee w eapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.')
			.ofAttr('features', 'Great Weapon Fighting', 'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.')
			.ofAttr('features', 'Protection', 'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.')
			.ofAttr('features', 'Two-Weapon Fighting', 'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.')
			.parent
		.decide('Skills', 2, ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'])
			.parent,
	new DDClass('Monk',
			'Monks make careful study of a magical energy that most monastic traditions call ki. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. Their martial training and mastery of ki gives them power over their bodies and the bodies of their foes.', '/img/classes/monk.png')
		.attr('baseHP', 8).attr('savingThrows', ['STR', 'DEX']).attr('spellcastAbility', 'WIS')
		.attr('armor', [])
		.attr('weapons', ['all simple weapons', 'shortswords'])
		.attr('equipment', ['shortsword OR any simple weapon', '10x darts', "dungeoneer's pack OR explorer's pack"])
		.attr('features', 'Unarmored Defense', 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.')
		.attr('features', 'Martial Arts', 'At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property. See Player\'s Handbook pp72 for details.')
		.decide('Skills', 2, ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'])
			.parent
		.decide('Tool Skills', 1, ["Artisan's tools"].concat(ddData.instruments)).alias('tools')
			.parent,
	new DDClass('Paladin',
			'A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects, but all are bound by their sacrad oaths that grant them their power.', '/img/classes/paladin.jpg')
		.attr('baseHP', 10).attr('savingThrows', ['WIS', 'CHA']).attr('spellcastAbility', 'CHA')
		.attr('armor', ['light armor', 'medium armor', 'heavy armor', 'shields'])
		.attr('weapons', 'all simple weapons', 'all martial weapons')
		.attr('equipment', ['martial weapon', 'martial weapon OR shield', '5x javelins OR any simple melee weapon', "priest's pack OR explorer's pack", 'chain mail armor', 'holy symbol'])
		.attr('features', 'Divinse Sense', 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being w hose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.')
		.attr('features', 'Lay On Hands', 'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.')
		.decide('Skills', 2, ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'])
			.parent,
	new DDClass('Ranger',
			'Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt.', '/img/classes/ranger.jpg')
		.attr('baseHP', 10).attr('savingThrows', ['STR', 'DEX']).attr('spellcastAbility', 'WIS')
		.attr('armor', ['light armor', 'medium armor', 'shields'])
		.attr('weapons', ['all simple weapons', 'all martial weapons'])
		.attr('equipment', ['scale mail armor OR leather armor', '2x shortsords OR two simple melee weapons', "dungeoneer's pack OR explorer's pack", 'longbow', 'quiver', '20x arrows'])
		.decide('Favored Enemy', ['aberrations', 'beasts', 'celestials', 'constructs', 'dragons', 'elementals', 'fey', 'fiends', 'giants', 'monstosities', 'oozes', 'plants', 'undead', 'any two humanoid races'])
			.parent
		.decide('Favored Terrain', ['arctic', 'coast', 'desert', 'forest', 'grassland', 'mountain', 'swamp', 'the Underdark'])
			.parent
		.decide('Skills', 3, ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'])
			.parent,
	new DDClass('Rogue',
			"Rogues rely on stealth and cunning to exploit their and their foes' weaknesses. Most of them make a living as burglars, assassins, cutpurses, and con-artists. In combat, a rogue would rather make one precise strike, placed exactly where it will hurt the target most, over sheer brute force.",
			'https://alzrius.files.wordpress.com/2014/07/rogue.jpg')
		.attr('baseHP', 8).attr('savingThrows', ['DEX', 'INT']).attr('spellcastAbility', 'INT')
		.attr('armor', ['light armor'])
		.attr('weapons', ['all simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'])
		.attr('tools', "thieves' tools")
		.attr('equipment', ['rapier OR shortsword', 'shortbow and quiver of 20 arrows OR shortsword', "burglar's pack OR dungeoneer's pack OR explorer's pack", 'leather armor', '2x daggers', "thieves' tools"])
		.attr('features', 'Expertise', "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.")
		.attr('features', 'Sneak Attack', "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don’t have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.")
		.attr('features', "Thieves' Cant", "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.")
		.decide('Skills', 4, ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'])
			.parent,
	new DDClass('Sorcerer',
			'No one chooses sorcery; the power chooses the sorcerer. Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.', '/img/classes/sorcerer.jpg')
		.attr('baseHP', 6).attr('savingThrows', ['CON', 'CHA']).attr('spellcastAbility', 'CHA')
		.attr('armor', [])
		.attr('weapons', ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'])
		.attr('equipment', ['light crossbow and 20x bolts OR any simple weapon', 'component pouch OR arcane focus', "dungeoneer's pack OR explorer's pack", "2x daggers"])
		.attr('features', 'Spellcasting Focus', "You can use a arcane focus as a spellcasting focus for your sorceror spells.")
		.decide('Cantrips', 4, ["Acid Splash", "Blade Ward", "Booming Blade", "Control Flames", "Chill Touch", "Create Bonfire", "Dancing Lights", "Fire Bolt", "Friends", "Frostbite", "Greenflame Blade", "Gust", "Light", "Lightning Lure", "Mage Hand", "Mending", "Message", "Minor Illusion", "Mold Earth", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shape Water", "Shocking Grasp", "Sword Burst", "Thunderclap", "True Strike"])
			.parent
		.decide('Level-1 Spells', 2, ["Burning Hands", "Catapult", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Earth Tremor", "Expeditious Retreat", "False Life", "Feather Fall", "Fog Cloud", "Ice Knife", "Jump", "Mage Armor", "Magic Missile", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Thunderwave", "Witch Bolt"]).alias('spells1')
			.parent
		.decide('Skills', 2, ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'])
			.parent
		.decide('Sorcerous Origins', 1).alias('sorcererOrigin')
			.of(new DDClass('Draconic Bloodline', 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.')
				.attr('features', "Draconic Resilience", "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren’t wearing armor, your AC equals 13 + your Dexterity modifier.")
			)
			.of(new DDClass('Wild Magic', 'Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic m agic churns within you, waiting for any outlet.')
				.attr('features', "Wild Magic Surge", "Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect.")
			)
			.parent,
	new DDClass('Warlock',
			"A warlock is defined by a pact with an otherworldly being, be it a demon prince, an archdevil, or an utterly alien entity. They might lead a secret cult dedicated the worship of their deity, or might serve in private as an apprentice serves a master. In exhange the patron grants the warlock some portion of their power.",
			'/img/classes/warlock.png')
		.attr('baseHP', 8).attr('savingThrows', ['WIS', 'CHA']).attr('spellcastAbility', 'CHA')
		.attr('armor', ['light armor'])
		.attr('armor', ['all simple weapons'])
		.attr('equipment', ['light crossbow and 20x bolts OR any simple weapon', 'component pouch OR arcane focus', "scholar's pack OR dungeoneer's pack", 'leather armor', 'any simple weapon', '2x daggers'])
		.attr('features', 'Spellcasting Focus', "You can use a arcane focus as a spellcasting focus for your warlock spells.")
		.decide('Cantrips', 2, ["Blade Ward", "Chill Touch", "Create Bonfire", "Eldritch Blast", "Friends", "Frostbite", "Mage Hand", "Magic Stone", "Minor Illusion", "Poison Spray", "Prestidigitation", "Thunderclap", "True Strike"])
			.parent
		.decide('Level-1 Spells', 2, ["Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Illusory Script", "Protection from Evil and Good", "Unseen Servant", "Witch Bolt"]).alias('spells1')
			.parent
		.decide('Skills', 2, ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'])
			.parent,
	new DDClass('Wizard',
			'Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.',
			'https://s-media-cache-ak0.pinimg.com/564x/4a/dd/bc/4addbc856f6df5d9cddc182665692804.jpg')
		.attr('baseHP', 6).attr('savingThrows', ['INT', 'WIS']).attr('spellcastAbility', 'INT')
		.attr('armor', [])
		.attr('armor', ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'])
		.attr('equipment', ['quarterstaff OR dagger', 'component pouch OR arcane focus', "scholar's pack OR explorer's pack", 'spellbook'])
		.attr('features', 'Ritual Casting', "You can cast any wizard spell you know as a ritual if that spell has the ritual tag.")
		.attr('features', 'Spellcasting Focus', "You can use a arcane focus as a spellcasting focus for your wizard spells.")
		.attr('features', 'Arcane Recovery', "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.")
		.decide('Cantrips', 3, ["Acid Splash", "Blade Ward", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"])
			.parent
		.decide('Level-1 Spells', 6, ["Alarm", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Grease", "Identify", "Illusory Script", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Tasha's Hideous Laughter", "Tenser's Floating Disk", "Thunderwave", "Unseen Servant", "Witch Bolt"]).alias('spells1')
			.parent
		.decide('Skills', 2, ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'])
			.parent
];