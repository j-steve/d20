var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.ddclasses = [
		new DDClass('Dwarf', 'http://img14.deviantart.net/1e79/i/2011/186/6/9/dreieich_con_dwarf_by_melaniemaier-d3l39l0.jpg', "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds. Individual dwarves are determined, loyal, and decisive in action, sometimes to the point of stubbornness."),
		new DDClass('Elf', 'https://web.archive.org/web/20160718150042/http://s-media-cache-ak0.pinimg.com/236x/b0/18/07/b01807af8707b2e388faf0e21e6879f8.jpg', "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world."),
		new DDClass('Halfling', 'http://vignette3.wikia.nocookie.net/elemud/images/0/08/Halfling.jpg/revision/latest?cb=20160406203001', "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal, fine drink and fine conversation. The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.")
			.choose('Subrace').from('Lightfoot', "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.")
			.or('Stout', "Some say that stouts have dwarven blood. As a stout halfling, you’re hardier than average and have some resistance to poison."),
		new DDClass('Human', 'http://vignette3.wikia.nocookie.net/tabularasadd/images/5/54/Auckish_01.png/revision/latest?cb=20150427102550', "Humans are the most adaptable and ambitious people among the common races. In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves or elves. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds."),
		new DDClass('Gnome', 'https://theclichedtavern.files.wordpress.com/2015/09/tinker.jpg', "As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of enjoyment out of their three to five centuries of life. Humans might wonder about getting bored over the course of such a long life, but gnomes seem to worry that even with all that time, they can't get in enough of the things they want to do and see."),
		new DDClass('Half-Elf', 'http://pathfinderwiki.com/mediawiki/images/thumb/d/d5/Varian_Jeggare.jpg/200px-Varian_Jeggare.jpg', "To humans, half-elves look like elves, and to elves, they look human. Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves."),
		new DDClass('Half-Orc', '1d4chan.org/images/e/e2/Half_ork.jpg', "Orc and human tribes sometimes form alliances, to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become tribal chiefs, their human blood giving them an edge over their full-blooded orc rivals. Many achieve greatness for their mighty deeds and notoriety for their barbaric customs and savage fury."),
		new DDClass('Tiefling', 'https://web.archive.org/web/20160518221608/http://mystsofeyr.com/images/tiefling.jpg', "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings are distrusted by other races, greeted with stares and whispers and suffering violence and insult on the streets. Lacking a homeland, tieflings must make their own way in the world."),
	];
	res.locals.title = "Class";
	res.locals.nextPage = '/char/class?race=';
	res.render('choose');
});

module.exports = router;


function DDClass(name, image, description) {
	var self = this;
	
	this.name = name;
	this.image = image;
	this.description = description
	this.decisions = [];
	
	this.choose = function(name, count) {
		if (count == null) {count = 1;}
		self.decisions.push({name, count, options: []});
		return self;
	};
	
	this.from = this.or = function(name, description) {
		self.decisions[self.decisions.length-1].options.push({name, description});
		return self;
	};
}