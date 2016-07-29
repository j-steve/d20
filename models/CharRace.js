"use strict";
const DDClass = require('./DDClass');
const Skill = require('./Skill');

const priv = new WeakMap();

class CharRace extends DDClass {

	constructor(name, speed, abilities, image, description, parent) {
		super(name, image, description);
		this.subraces = [];
		this.decideSubrace = null;
		this.speed = speed;
		this.abilities = abilities;
		this.parent = parent;
	}
	
	addSubrace(name, abilities, description) {
		if (this.parent) {throw new Error('Cannot add race to a subrace');}
		if (!this._subrace) {this._subrace = this.decide('Subrace');}
		this._subrace.of(name, description);
		const subrace = new CharRace(name, this.speed, abilities, null, description, this);
		this.subraces.push(subrace);
		return subrace;
	}

}

CharRace.ALL = [
	new CharRace('Dwarf', 25, {CON:2}, '/img/races/dwarf.png', "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds. Individual dwarves are determined, loyal, and decisive in action, sometimes to the point of stubbornness.")
		.attr('languages', ['Common', 'Dwarvish'])
		.attr('features', "Darkvision", "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.")
		.attr('features', "Dwarven Resilience", "You have advantage on saving throws against poison, and you have resistance against poison damage.")
		.attr('features', "Dwarven Combat Training", "You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.")
		.attr('features', "Stonecunning", "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.")
		.decide('Tool Proficiency', 1, ["Smith's tools", "Brewer's supplies", "Mason's tools"]).alias('tools').parent
		.addSubrace('Hill Dwarf', {WIS:1}, "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.").parent
		.addSubrace('Mountain Dwarf', {STR:2}, "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration.").parent,
	new CharRace('Elf', 30, {DEX:2}, '/img/races/elf.png', "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.")
		.attr('languages', ['Common', 'Elvish'])
		.attr('features', "Darkvision", "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.")
		.attr('features', "Keen Senses", "You have proficiency in the Perception skill.") //TODO
		.attr('features', "Fey Ancestry", "You have advantage on saving throws against being charmed, and magic can't put you to sleep.")
		.attr('features', "Trance", "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.")
		.addSubrace('High Elf', {INT:1}, "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type are more common and more friendly, and often encountered among humans and other races.").parent
		.addSubrace('Wood Elf', {WIS:1}, "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. Some woold elves are reclusive and distrusting of non-elves. Wood elves' skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.").parent
		.addSubrace('Dark Elf (Drow)', {CHA:1}, "Also called dark elves, the drow are descendant from an earlier subrace of dark-skinned elves banished from the surface world for following a dark goddess down the path to evil and corruption. Now they have built their own civilization in the depths. Drow have black skin that resembles polished obsidian and stark white or pale yellow hair, commonly with very pale eyes.").parent,
	new CharRace('Halfling', 25, {DEX:2}, '/img/races/halfling.png', "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal, fine drink and fine conversation. The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.")
		.attr('languages', ['Common', 'Halfling'])
		.attr('features', 'Lucky', 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.')
		.attr('features', 'Brave', 'You have advantage on saving throws against being frightened.')
		.attr('features', 'Halfling Nimbleness', 'You can move through the space of any creature that is of a size larger than yours.')
		.addSubrace('Lightfoot Halfling', {CHA:1}, "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.").parent
		.addSubrace('Stout Halfling', {CON:1}, "Some say that stouts have dwarven blood. As a stout halfling, you’re hardier than average and have some resistance to poison.").parent,
	new CharRace('Human', 30, {STR:1, DEX:1, CON:1, INT:1, WIS:1, CHA:1}, '/img/races/human.png', "Humans are the most adaptable and ambitious people among the common races. In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves or elves. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.")
		.attr('languages', ['Common']) //TODO: prevent potential background languages from appearing in this list.
		.decide('Language', 1, ['Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Orc', 'Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon']).alias('languages').parent,
	new CharRace('Gnome', 25, {INT:2}, '/img/races/gnome.png', "As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of enjoyment out of their three to five centuries of life. Humans might wonder about getting bored over the course of such a long life, but gnomes seem to worry that even with all that time, they can't get in enough of the things they want to do and see.")
		.attr('languages', ['Common', 'Gnomish'])
		.attr('features', "Darkvision", "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.")
		.attr('features', "Gnome Cunning", "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.")
		.addSubrace('Rock Gnome', {CON:1}, "Most gnomes in the worlds of D&D are rock gnomes.  As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. ").parent
		.addSubrace('Forest Gnome', {DEX:1}, "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.").parent
		.addSubrace('Deep Gnome', {}, "Deep gnomes (or svirfneblin) live in small communities scattered in the Underdark. Unlike the duergar and the drow, svirfneblin are as good as their surface cousins. However, their humor and enthusiasm are dampened by their oppressive environment, and their inventive expertise is directed mostly toward stonework.").parent,
	new CharRace('Half-Elf', 30, {CHA:2}, '/img/races/half-elf.png', "To humans, half-elves look like elves, and to elves, they look human. Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.")
		.attr('languages', ['Common', 'Elvish'])
		.attr('features', "Darkvision", "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.")
		.attr('features', "Fey Ancestry", "You have advantage on saving throws against being charmed, and magic can't put you to sleep.")
		.decide('Language', 1, ['Dwarvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Orc', 'Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon']).alias('languages').parent
		.decide('Skills', 2, Skill.ALL).parent //TODO: previous existing background skills from appearing in this list.
		.decide('Abilities', 2, ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom']).parent,
	new CharRace('Half-Orc', 30, {STR:2, CON:1}, '/img/races/half-orc.png', "Orc and human tribes sometimes form alliances, to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become tribal chiefs, their human blood giving them an edge over their full-blooded orc rivals. Many achieve greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.")
		.attr('languages', ['Common', 'Orc'])
		.attr('skills', ['Intimidation'])
		.attr('features', "Relentless Endurance", "When you are reduced to 0 hit points but not k illed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.")
		.attr('features', "Savage Attacks", "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."),
	new CharRace('Tiefling', 30, {CHA:2, INT:1}, '/img/races/tiefling.png', "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings are distrusted by other races, greeted with stares and whispers and suffering violence and insult on the streets. Lacking a homeland, tieflings must make their own way in the world.")
		.attr('languages', ['Common', 'Infernal'])
		.attr('features', "Darkvision", "Thanks to your invernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.")
		.attr('features', "Hellish Resistance", "You have resistance to fire damage.")
		.attr('features', "Infernal Legacy", "You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.")
];

module.exports = CharRace;