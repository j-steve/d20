"use strict";
const DDClass = require('./DDClass');
const ddData = require('./ddData');

module.exports.ALL = [
    new DDClass('Acolyte', 
            'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.',
            'http://1.bp.blogspot.com/-sHNLXhEVEYs/VJHDEhKFMcI/AAAAAAAABYc/2DOUmxXzvhM/s1600/PZO8500-DeaganCallimedes.jpg')
        .attr('skills', ['Insight', 'Religion'])
        .attr('equipment', ['holy symbol', 'prayer book OR prayer wheel', '5x sticks of incense', 'vestments', 'set of common clothes', 'belt pouch', '15gp']),
    new DDClass('Charlatan', 
            "You have always had a way with people, and after a few minutes of conversation you can read them like a book. You've made a living conning others, playing on their hopes or their insecurities. A fool and his gold are soon parted, and you're the one to part them.",
            '/img/backgrounds/charlatan.png') //http://files.meetup.com/252197/Trader.jpg
        .attr('skills', ['Deception', 'Sleight of Hand'])
        .attr('equipment', ['set of fine clothes', 'disguise kit', 'con tools: 10x stoppered bottles filled with colored liquid OR set of weighted dice OR deck of marked cards OR signet ring of imaginary duke', 'belt pouch', '15gp']),
    new DDClass('Criminal', 
            'You are an experienced criminal with contacts in the criminal underworld. You’re closer than most to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules of society.',
            '/img/backgrounds/criminal.png')
        .attr('skills', ['Deception', 'Stealth'])
        .attr('equipment', ['crowbar', 'set of dark common clothes with hood', 'belt pouch', '15gp']),
    new DDClass('Entertainer', 
            'You thrive in front of an audience. Your performances entrance, entertain, and even inspire the audience. Your music raises spirits, your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.',
            '/img/backgrounds/entertainer.png')
        .attr('skills', ['Acrobatics', 'Performance'])
        .attr('equipment', ['any musical instrument', 'the favor of an admirer: love letter OR lock of hair OR trinket', 'costume', 'belt pouch', '15gp']),
    new DDClass('Folk Hero',
            'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.', '/img/backgrounds/folkhero.png')
        .attr('skills', ['Animal Handling', 'Survival'])
        .attr('equipment', ["any artisan's tools", 'shovel', 'iron pot', 'set of common clothes', 'belt pouch', '10gp']),
    new DDClass('Guild Artisan',
            'You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world. You learned your skills as an apprentice to a master artisan until you became a master in your own right.',
            'http://4.bp.blogspot.com/-MKhQ3DBAtO0/UjR31bbrRmI/AAAAAAAAAZU/cRL3Gk-pK_E/s1600/Saldoran-Gorst.jpg')
        .attr('skills', ['Insight', 'Persuasion'])
        .attr('equipment', ["any artisan's tools", "letter of introduction from your guild", "set of traveler's clothes", "belt pouch", "15gp"]),
    new DDClass('Hermit',
            'You know the quiet seclusion of long years spent in total isolation. Perhaps you were exiled by a powerful ruler. But your hermitage gave you access to a unique and powerful discovery: a great truth about nature, the cosmos, or the gods; or perhaps you stumbled upon an ancient site or a long-lost relic.',
            '/img/backgrounds/hermit.png')
        .attr('skills', ['Medicine', 'Religion'])
        .attr('equipment', ["a scroll case stuffed full of notes from your studies or prayers", "a winter blanket", "set of common clothes", "herbalism kit", "5gp"]),
    new DDClass('Noble',
            'You carry a noble title, and your family owns land, collects taxes, and wields political influence. You understand wealth, power, and privilege. You might be a pampered aristocrat with a sense of entitlement, a hard-working merchant just elevated to the nobility, or a disinherited scoundrel.',
            '/img/backgrounds/noble.png')
        .attr('skills', ['History', 'Persuasion'])
        .attr('equipment', ["set of fine clothes", "signet ring", "scroll of pedigree", "coinpurse", "25gp"]),
    new DDClass('Outlander',
            'You grew up in the wilds, far from the comforts of civilization. Whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder, you’ve seen the migration of great herds, survived extreme weather, and enjoyed the solitude of being the only creature for miles in any direction.',
            '/img/backgrounds/outlander.png')
        .attr('skills', ['Athletics', 'Survival'])
        .attr('equipment', ["staff", "hunting trap", "trophy from an animal you killed", "set of traveler's clothes", "belt pouch", "10gp"]),
    new DDClass('Sage',
            'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.',
            '/img/backgrounds/sage.png') //https://s-media-cache-ak0.pinimg.com/736x/b5/2f/5e/b52f5ef08fded7f696f7cf0d0cb07026.jpg
        .attr('skills', ['Arcana', 'History'])
        .attr('equipment', ["bottle of black ink", "quill", "small knife", "letter from a dead colleague posing a question you have not yet been able to answer", "set of common clothes", "belt pouch", "10gp"]),
    new DDClass('Sailor',
            "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant horizon and the feel of wind and sea against your face.",
            '/img/backgrounds/sailor.png')
        .attr('skills', ['Athletics', 'Perception'])
        .attr('equipment', ["belaying pin (club)", "50 feet of silk rope", "luck charm such as a rabbit foot or small stone with a hole in the center OR random trinket", "set of common clothes", "belt pouch", "10gp"]),
    new DDClass('Soldier',
            "War has been your life for as long as you care to remember. You've studied the use of weapons and armor and know how to stay alive on the battlefield. You might have been part of a standing national army, a mercenary company, or a local militia.",
            'https://s-media-cache-ak0.pinimg.com/236x/82/ca/04/82ca04a43d67d80635805b8afabf334c.jpg') //http://images2.wikia.nocookie.net/__cb20111202143725/assassinscreed/images/9/96/ACR_Soldier_Art_HD.png
        .attr('skills', ['Athletics', 'Intimidation'])
        .attr('equipment', ["insignia of rank", "trophy taken from a fallen enemy: dagger OR broken blade OR piece of a banner", "set of bone dice OR deck of cards", "set of common clothes", "belt pouch", "10gp"]),
    new DDClass('Urchin',
            'You grew up on the streets alone, orphaned, and poor, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept in alleyways and survived through cunning, strength, or speed.',
            'http://66.media.tumblr.com/24f0d2bb4eba69d9d0b972e45de1d6cd/tumblr_nu8c62VkND1ufp1n9o1_500.jpg')
        .attr('skills', ['Sleight of Hand', 'Stealth'])
        .attr('equipment', ["small knife", "map of the city you grew up in", "pet mouse", "token to remember your parents by", "set of common clothes", "belt pouch", "10gp"]),
    new DDClass('Custom',
            'If none of the background archetypes are appropriate you may create a custom background with its own set of skills.',
            'https://upload.wikimedia.org/wikipedia/commons/3/37/No_person.jpg')
        .attr('skills', [])
        .attr('equipment', [])
        .decide('Skills', 2, ddData.skills).parent
];