var router = require('express').Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.ddclasses = [
		new DDClass('Acolyte', 'http://1.bp.blogspot.com/-sHNLXhEVEYs/VJHDEhKFMcI/AAAAAAAABYc/2DOUmxXzvhM/s1600/PZO8500-DeaganCallimedes.jpg', 'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.'),
		new DDClass('Charlatan', 'http://pre12.deviantart.net/a1d3/th/pre/i/2012/144/5/b/charlatan_by_butterfrog-d5106r3.jpg', 'You have always had a way with people. You know what makes them tick, you can tease out their hearts\' desires after a few minutes of conversation, and with a few leading questions you can read them like a book. It\'s a useful talent, and one that you\'re perfectly willing to use for your advantage. Common sense should steer people away, but you make it sound like the real deal.'), //http://files.meetup.com/252197/Trader.jpg
		new DDClass('Criminal', 'http://orig00.deviantart.net/e858/f/2011/241/1/3/rogue_by_sabin_boykinov-d486zda.jpg', 'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules of society.'),
		new DDClass('Entertainer', 'https://s-media-cache-ak0.pinimg.com/736x/6e/57/d3/6e57d3285786691d0934e112531b046c.jpg', 'You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.'),
		new DDClass('Folk Hero', 'https://s-media-cache-ak0.pinimg.com/564x/a0/ea/4e/a0ea4eec88715749e609e47d1f5a25f2.jpg', 'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.'),
		new DDClass('Guild Artisan', 'http://4.bp.blogspot.com/-MKhQ3DBAtO0/UjR31bbrRmI/AAAAAAAAAZU/cRL3Gk-pK_E/s1600/Saldoran-Gorst.jpg', 'You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan until you became a master in your own right.'),
		new DDClass('Hermit', 'https://s-media-cache-ak0.pinimg.com/236x/6f/f6/88/6ff6882e164e72c2c8ab7105876601f8.jpg', 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen or a long-lost relic. It might be information that would be damaging to the people who consigned you to exile.'),
		new DDClass('Noble', 'http://2.bp.blogspot.com/-AuKRogqz4es/U3oHpOzm-nI/AAAAAAAAAqE/iXRPmHSbfvc/s1600/balian2bmonforte.jpg', 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a hard-working merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement.'),
		new DDClass('Outlander', 'https://s-media-cache-ak0.pinimg.com/736x/f2/62/5d/f2625d32ee9f2ec85fa0d1d1740600d8.jpg', 'You grew up in the wilds, far from civilization and the comforts of town and technology. Whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder, you’ve witnessed the migration of herds survived extreme weather, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood.'),
		new DDClass('Sage', 'https://s-media-cache-ak0.pinimg.com/736x/d8/56/b5/d856b550461b28d17d24ba7360635f6f.jpg', 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.'), //https://s-media-cache-ak0.pinimg.com/736x/b5/2f/5e/b52f5ef08fded7f696f7cf0d0cb07026.jpg
		new DDClass('Sailor', 'http://img06.deviantart.net/7720/i/2013/021/5/f/sailor_by_angevere-d5s8ncj.jpg', 'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those w ho wanted to sink your craft to the bottom less depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.'),
		new DDClass('Soldier', 'https://s-media-cache-ak0.pinimg.com/236x/82/ca/04/82ca04a43d67d80635805b8afabf334c.jpg', 'War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.'), //http://images2.wikia.nocookie.net/__cb20111202143725/assassinscreed/images/9/96/ACR_Soldier_Art_HD.png
		new DDClass('Urchin', 'http://66.media.tumblr.com/24f0d2bb4eba69d9d0b972e45de1d6cd/tumblr_nu8c62VkND1ufp1n9o1_500.jpg', 'You grew up on the streets alone, orphaned, and poor, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements. You’ve survived despite all odds, and did so through cunning, strength, speed, or some combination of each.')
	];
	res.locals.title = "Background" 
	res.locals.nextPage = `/inventory${url.parse(req.url).search}&background=`
	res.render('choose');
});

module.exports = router;


function DDClass(name, image, description) {
	var self = this;
	
	this.name = name;
	this.image = image;
	this.description = description
	this.decisions = [];
	
	this.choose = function(decisionName, optionName, optionDesc) {
		self.decisions.push({name: decisionName, options: [{name:optionName, description:optionDesc}]});
		return self;
	};
	
	this.or = function(name, description) {
		self.decisions[self.decisions.length-1].options.push({name, description});
		return self;
	};
}