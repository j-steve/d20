"use strict";
const DDClass = require('./DDClass');

class CharRace extends DDClass {

	constructor(name, image, description) {
		super(name, image, description);
		this.subraces = [];
		this.decideSubrace = null
	}
	
	addSubrace(name, description) {
		if (!this.subraces.length) {this.decide('Subrace');}
		this.of(name, description);
		this.subraces.push(new CharRace(name, null, description));
		return this;
	}

}

CharRace.ALL = [
	new CharRace('Dwarf', '/img/races/dwarf.png', "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds. Individual dwarves are determined, loyal, and decisive in action, sometimes to the point of stubbornness.")
		.addSubrace('Hill Dwarf', "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.")
		.addSubrace('Mountain Dwarf', "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration."),
	new CharRace('Elf', '/img/races/elf.png', "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.")
		.addSubrace('High Elf', "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type are more common and more friendly, and often encountered among humans and other races.")
		.addSubrace('Wood Elf', "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. Some woold elves are reclusive and distrusting of non-elves. Wood elves' skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.")
		.addSubrace('Dark Elf (Drow)', "Also called dark elves, the drow are descendant from an earlier subrace of dark-skinned elves banished from the surface world for following a dark goddess down the path to evil and corruption. Now they have built their own civilization in the depths. Drow have black skin that resembles polished obsidian and stark white or pale yellow hair, commonly with very pale eyes."),
	new CharRace('Halfling', '/img/races/halfling.png', "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal, fine drink and fine conversation. The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.")
		.addSubrace('Lightfoot Halfling', "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.")
		.addSubrace('Stout Halfling', "Some say that stouts have dwarven blood. As a stout halfling, you’re hardier than average and have some resistance to poison."),
	new CharRace('Human', '/img/races/human.png', "Humans are the most adaptable and ambitious people among the common races. In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves or elves. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds."),
	new CharRace('Gnome', '/img/races/gnome.png', "As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of enjoyment out of their three to five centuries of life. Humans might wonder about getting bored over the course of such a long life, but gnomes seem to worry that even with all that time, they can't get in enough of the things they want to do and see.")
		.addSubrace('Rock Gnome', "Most gnomes in the worlds of D&D are rock gnomes.  As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. ")
		.addSubrace('Forest Gnome', "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.")
		.addSubrace('Deep Gnome', "Deep gnomes (or svirfneblin) live in small communities scattered in the Underdark. Unlike the duergar and the drow, svirfneblin are as good as their surface cousins. However, their humor and enthusiasm are dampened by their oppressive environment, and their inventive expertise is directed mostly toward stonework."),
	new CharRace('Half-Elf', '/img/races/half-elf.png', "To humans, half-elves look like elves, and to elves, they look human. Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves."),
	new CharRace('Half-Orc', '/img/races/half-orc.png', "Orc and human tribes sometimes form alliances, to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become tribal chiefs, their human blood giving them an edge over their full-blooded orc rivals. Many achieve greatness for their mighty deeds and notoriety for their barbaric customs and savage fury."),
	new CharRace('Tiefling', '/img/races/tiefling.png', "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings are distrusted by other races, greeted with stares and whispers and suffering violence and insult on the streets. Lacking a homeland, tieflings must make their own way in the world."),
];

module.exports = CharRace;