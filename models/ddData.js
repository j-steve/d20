/* global ROOT_PATH */
"use strict";
const File = require("si-file");
 
const ddData = parseFile('ddData');
ddData.spells = parseFile('spells').spells;

for (let spell of ddData.spells) {
    for (let charClass of spell.classes) {
        charClass = charClass.toLowerCase();
        const classSpells = ddData.spells[charClass] || (ddData.spells[charClass] = {}); 
        classSpells['lvl' + spell.level] = (classSpells['lvl' + spell.level] || []).concat(spell);
    }
}

function parseFile(fileName) {
    const filePath = ROOT_PATH + '/data/' + fileName + '.json';
    const rawText = new File(filePath).readSync();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        console.log(e);
        throw new SyntaxError(`Invalid JSON format in ${fileName}.json: parsing error "${e.message}"`);
    }
}

module.exports = ddData;