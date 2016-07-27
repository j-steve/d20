"use strict";
const DDClass = require('./DDClass');
const Skill = require('./Skill');

class Background extends DDClass {
    constructor(name, image, description) {
        super(name, image, description);
    }
    skills(skills) {
        this.skills = [].slice.call(arguments);
        return this;
    }
}

Background.ALL = [
    new Background('Acolyte', 'http://1.bp.blogspot.com/-sHNLXhEVEYs/VJHDEhKFMcI/AAAAAAAABYc/2DOUmxXzvhM/s1600/PZO8500-DeaganCallimedes.jpg', 'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.')
        .skills('Insight', 'Religion')
        .attr('equipment', ['holy symbol', 'prayer book OR prayer wheel', '5x sticks of incense', 'vestments', 'set of common clothes', 'belt pouch', '15gp']),
    new Background('Charlatan', '/img/backgrounds/charlatan.png', 'You have always had a way with people. You know what makes them tick, you can tease out their hearts\' desires after a few minutes of conversation, and with a few leading questions you can read them like a book. It\'s a useful talent, and one that you\'re perfectly willing to use for your advantage. Common sense should steer people away, but you make it sound like the real deal.') //http://files.meetup.com/252197/Trader.jpg
        .skills('Deception', 'Sleight of Hand')
        .attr('equipment', ['set of fine clothes', 'disguise kit', 'con tools: 10x stoppered bottles filled with colored liquid OR set of weighted dice OR deck of marked cards OR signet ring of imaginary duke', 'belt pouch', '15gp']),
    new Background('Criminal', '/img/backgrounds/criminal.png', 'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules of society.')
        .skills('Deception', 'Stealth')
        .attr('equipment', ['crowbar', 'set of dark common clothes with hood', 'belt pouch', '15gp']),
    new Background('Entertainer', '/img/backgrounds/entertainer.png', 'You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.')
        .skills('Acrobatics', 'Performance')
        .attr('equipment', ['any musical instrument', 'the favor of an admirer: love letter OR lock of hair OR trinket', 'costume', 'belt pouch', '15gp']),
    new Background('Folk Hero', '/img/backgrounds/folkhero.png', 'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.')
        .skills('Animal Handling', 'Survival')
        .attr('equipment', ["any artisan's tools", 'shovel', 'iron pot', 'set of common clothes', 'belt pouch', '10gp']),
    new Background('Guild Artisan', 'http://4.bp.blogspot.com/-MKhQ3DBAtO0/UjR31bbrRmI/AAAAAAAAAZU/cRL3Gk-pK_E/s1600/Saldoran-Gorst.jpg', 'You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan until you became a master in your own right.')
        .skills('Insight', 'Persuasion')
        .attr('equipment', ["any artisan's tools", "letter of introduction from your guild", "set of traveler's clothes", "belt pouch", "15gp"]),
    new Background('Hermit', '/img/backgrounds/hermit.png', 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen or a long-lost relic. It might be information that would be damaging to the people who consigned you to exile.')
        .skills('Medicine', 'Religion')
        .attr('equipment', ["a scroll case stuffed full of notes from your studies or prayers", "a winter blanket", "set of common clothes", "herbalism kit", "5gp"]),
    new Background('Noble', '/img/backgrounds/noble.png', 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a hard-working merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement.')
        .skills('History', 'Persuasion')
        .attr('equipment', ["set of fine clothes", "signet ring", "scroll of pedigree", "coinpurse", "25gp"]),
    new Background('Outlander', '/img/backgrounds/outlander.png', 'You grew up in the wilds, far from civilization and the comforts of town and technology. Whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder, you’ve witnessed the migration of herds survived extreme weather, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood.')
        .skills('Athletics', 'Survival')
        .attr('equipment', ["staff", "hunting trap", "trophy from an animal you killed", "set of traveler's clothes", "belt pouch", "10gp"]),
    new Background('Sage', '/img/backgrounds/sage.png', 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.') //https://s-media-cache-ak0.pinimg.com/736x/b5/2f/5e/b52f5ef08fded7f696f7cf0d0cb07026.jpg
        .skills('Arcana', 'History')
        .attr('equipment', ["bottle of black ink", "quill", "small knife", "letter from a dead colleague posing a question you have not yet been able to answer", "set of common clothes", "belt pouch", "10gp"]),
    new Background('Sailor', '/img/backgrounds/sailor.png', 'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those w ho wanted to sink your craft to the bottom less depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.')
        .skills('Athletics', 'Perception')
        .attr('equipment', ["belaying pin (club)", "50 feet of silk rope", "luck charm such as a rabbit foot or small stone with a hole in the center OR random trinket", "set of common clothes", "belt pouch", "10gp"]),
    new Background('Soldier', 'https://s-media-cache-ak0.pinimg.com/236x/82/ca/04/82ca04a43d67d80635805b8afabf334c.jpg', 'War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.') //http://images2.wikia.nocookie.net/__cb20111202143725/assassinscreed/images/9/96/ACR_Soldier_Art_HD.png
        .skills('Athletics', 'Intimidation')
        .attr('equipment', ["insignia of rank", "trophy taken from a fallen enemy: dagger OR broken blade OR piece of a banner", "set of bone dice OR deck of cards", "set of common clothes", "belt pouch", "10gp"]),
    new Background('Urchin', 'http://66.media.tumblr.com/24f0d2bb4eba69d9d0b972e45de1d6cd/tumblr_nu8c62VkND1ufp1n9o1_500.jpg', 'You grew up on the streets alone, orphaned, and poor, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements. You’ve survived despite all odds, and did so through cunning, strength, speed, or some combination of each.')
        .skills('Sleight of Hand', 'Stealth')
        .attr('equipment', ["small knife", "map of the city you grew up in", "pet mouse", "token to remember your parents by", "set of common clothes", "belt pouch", "10gp"]),
    new Background('Custom', 'https://upload.wikimedia.org/wikipedia/commons/3/37/No_person.jpg', 'If none of the background archetypes are appropriate you may create a custom background with its own set of skills.')
        .skills()
        .decide('Skills', 2, Skill.ALL)
];

module.exports = Background;