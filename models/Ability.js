"use strict";
const DDClass = require('./DDClass'); 

class Ability extends DDClass {
    constructor(name, description) {
        super(name, null, description);
        this.id = name.substr(0, 3).toUpperCase();
    }
}

Ability.ALL = [new Ability('Strength'), new Ability('Dexterity'), new Ability('Constitution'), new Ability('Intelligence'), new Ability('Wisdom'), new Ability('Charisma')];

module.exports = Ability;