"use strict";
const DDClass = require('./DDClass');
const ddData = require('./ddData');

module.exports.ALL = [
    new DDClass('Acolyte', 
            'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.',
            'http://1.bp.blogspot.com/-sHNLXhEVEYs/VJHDEhKFMcI/AAAAAAAABYc/2DOUmxXzvhM/s1600/PZO8500-DeaganCallimedes.jpg')
        .attr('skills', ['Insight', 'Religion'])
        .decide('Languages', 2, ddData.languages).alias('languages').parent
        .attr('equipment', ['holy symbol', 'prayer book OR prayer wheel', '5x sticks of incense', 'vestments', 'set of common clothes', 'belt pouch', '15gp'])
        .attr('features', 'Shelter of the Faithful', "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence o f your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."),
    new DDClass('Charlatan', 
            "You have always had a way with people, and after a few minutes of conversation you can read them like a book. You've made a living conning others, playing on their hopes or their insecurities. A fool and his gold are soon parted, and you're the one to part them.",
            '/img/backgrounds/charlatan.png') //http://files.meetup.com/252197/Trader.jpg
        .attr('skills', ['Deception', 'Sleight of Hand'])
        .attr('equipment', ['set of fine clothes', 'disguise kit', 'con tools: 10x stoppered bottles filled with colored liquid OR set of weighted dice OR deck of marked cards OR signet ring of imaginary duke', 'belt pouch', '15gp'])
        .attr('features', 'False Identity', "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."),
    new DDClass('Criminal', 
            "You are an experienced criminal with contacts in the criminal underworld. You're closer than most to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules of society.",
            '/img/backgrounds/criminal.png')
        .attr('skills', ['Deception', 'Stealth'])
        .decide('Gaming Set Proficiency', ['Dice set', 'Dragonchess set', 'Playing card set', 'Three-Dragon Ante set']).alias('tools').parent
        .attr('equipment', ['crowbar', 'set of dark common clothes with hood', 'belt pouch', '15gp'])
        .attr('features', "Criminal Contact", "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."),
    new DDClass('Entertainer', 
            'You thrive in front of an audience. Your performances entrance, entertain, and even inspire the audience. Your music raises spirits, your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.',
            '/img/backgrounds/entertainer.png')
        .attr('skills', ['Acrobatics', 'Performance'])
        .decide("Musical Instrument Proficiency", ddData.instruments).alias('tools').parent
        .decide("Equipment", ddData.instruments).alias('equipment').parent
        .attr('equipment', ['the favor of an admirer: love letter OR lock of hair OR trinket', 'costume', 'belt pouch', '15gp'])
        .attr('features', "By Popular Demand", "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you."),
    new DDClass('Folk Hero',
            'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.', '/img/backgrounds/folkhero.png')
        .attr('skills', ['Animal Handling', 'Survival'])
        .decide("Artisan's Tools Proficiency", ddData.artisanTools).alias('tools').parent
        .decide("Equipment", ddData.artisanTools).alias('equipment').parent
        .attr('equipment', ['shovel', 'iron pot', 'set of common clothes', 'belt pouch', '10gp'])
        .attr('features', 'Rustic Hospitality', "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."),
    new DDClass('Guild Artisan',
            "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world. You learned your skills as an apprentice to a master artisan until you became a master in your own right.",
            'http://4.bp.blogspot.com/-MKhQ3DBAtO0/UjR31bbrRmI/AAAAAAAAAZU/cRL3Gk-pK_E/s1600/Saldoran-Gorst.jpg')
        .attr('skills', ['Insight', 'Persuasion'])
        .decide("Artisan's Tools Proficiency", ddData.artisanTools).alias('tools').parent
        .decide("Equipment", ddData.artisanTools).alias('equipment').parent
        .decide('Language', ddData.languages).alias('languages').parent
        .attr('equipment', ["letter of introduction from your guild", "set of traveler's clothes", "belt pouch", "15gp"])
        .attr('features', "Guild Membership", "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces."),
    new DDClass('Hermit',
            'You lived in seclusion—either in a sheltered community such as a monastery, or entirely alone—for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.',
            '/img/backgrounds/hermit.png')
        .attr('skills', ['Medicine', 'Religion'])
        .decide('Language', ddData.languages).alias('languages').parent
        .attr('equipment', ["a scroll case stuffed full of notes from your studies or prayers", "a winter blanket", "set of common clothes", "herbalism kit", "5gp"])
        .attr('features', 'Discovery', "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign."),
    new DDClass('Noble',
            'You carry a noble title, and your family owns land, collects taxes, and wields political influence. You understand wealth, power, and privilege. You might be a pampered aristocrat with a sense of entitlement, a hard-working merchant just elevated to the nobility, or a disinherited scoundrel.',
            '/img/backgrounds/noble.png')
        .attr('skills', ['History', 'Persuasion'])
        .decide('Language', ddData.languages).alias('languages').parent
        .decide('Gaming Set Proficiency', ['Dice set', 'Dragonchess set', 'Playing card set', 'Three-Dragon Ante set']).alias('tools').parent
        .attr('equipment', ["set of fine clothes", "signet ring", "scroll of pedigree", "coinpurse", "25gp"])
        .attr('features', 'Position of Privilege', "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to."),
    new DDClass('Outlander',
            "You grew up in the wilds, far from the comforts of civilization. Whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder, you've seen the migration of great herds, survived extreme weather, and enjoyed the solitude of being the only creature for miles in any direction.",
            '/img/backgrounds/outlander.png')
        .attr('skills', ['Athletics', 'Survival'])
        .decide('Language', ddData.languages).alias('languages').parent
        .decide('Musical Instrument Proficiency', 1, ddData.instruments).alias('tools').parent
        .attr('equipment', ["staff", "hunting trap", "trophy from an animal you killed", "set of traveler's clothes", "belt pouch", "10gp"])
        .attr('features', 'Wanderer', "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."),
    new DDClass('Sage',
            'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.',
            '/img/backgrounds/sage.png') //https://s-media-cache-ak0.pinimg.com/736x/b5/2f/5e/b52f5ef08fded7f696f7cf0d0cb07026.jpg
        .attr('skills', ['Arcana', 'History'])
        .decide('Languages', 2, ddData.languages).alias('languages').parent
        .attr('equipment', ["bottle of black ink", "quill", "small knife", "letter from a dead colleague posing a question you have not yet been able to answer", "set of common clothes", "belt pouch", "10gp"])
        .attr('features', 'Researcher', "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign."),
    new DDClass('Sailor',
            "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant horizon and the feel of wind and sea against your face.",
            '/img/backgrounds/sailor.png')
        .attr('skills', ['Athletics', 'Perception'])
        .attr('equipment', ["belaying pin (club)", "50 feet of silk rope", "luck charm such as a rabbit foot or small stone with a hole in the center OR random trinket", "set of common clothes", "belt pouch", "10gp"])
        .attr('features', "Ship's Passage", "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage."),
    new DDClass('Soldier',
            "War has been your life for as long as you care to remember. You've studied the use of weapons and armor and know how to stay alive on the battlefield. You might have been part of a standing national army, a mercenary company, or a local militia.",
            'https://s-media-cache-ak0.pinimg.com/236x/82/ca/04/82ca04a43d67d80635805b8afabf334c.jpg') //http://images2.wikia.nocookie.net/__cb20111202143725/assassinscreed/images/9/96/ACR_Soldier_Art_HD.png
        .attr('skills', ['Athletics', 'Intimidation'])
        .decide('Gaming Set Proficiency', ['Dice set', 'Dragonchess set', 'Playing card set', 'Three-Dragon Ante set']).alias('tools').parent
        .decide('Equipment', ['set of bone dice', 'deck of cards']).alias('equipment').parent
        .attr('equipment', ["insignia of rank", "trophy taken from a fallen enemy: dagger OR broken blade OR piece of a banner", "set of bone dice OR deck of cards", "set of common clothes", "belt pouch", "10gp"])
        .attr('features', 'Military Rank', "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized."),
    new DDClass('Urchin',
            'You grew up on the streets alone, orphaned, and poor, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept in alleyways and survived through cunning, strength, or speed.',
            'http://66.media.tumblr.com/24f0d2bb4eba69d9d0b972e45de1d6cd/tumblr_nu8c62VkND1ufp1n9o1_500.jpg')
        .attr('skills', ['Sleight of Hand', 'Stealth'])
        .attr('equipment', ["small knife", "map of the city you grew up in", "pet mouse", "token to remember your parents by", "set of common clothes", "belt pouch", "10gp"])
        .attr('features', 'City Secrets', "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."),
    new DDClass('Custom',
            'If none of the background archetypes are appropriate you may create a custom background with its own set of skills.',
            'https://upload.wikimedia.org/wikipedia/commons/3/37/No_person.jpg')
        .attr('skills', [])
        .attr('equipment', [])
        .decide('Skills', 2, ddData.skills).parent
];