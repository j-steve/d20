"use strict";

class DDClass {
	
	constructor(name, image, description) {
		this.name = name;
		this.image = image;
		this.description = description
		this.decisions = [];
	}
	
	decide(name, count, paramName) {
	    if (count == null) {count = 1;}
	    if (paramName == null) {paramName = name.toLowerCase();}
		this.decisions.push({name, count, paramName, options: []});
		return this;
	}
	
	of(name, description) {
		this.decisions[this.decisions.length-1].options.push({name, description});
		return this;
	}
}

module.exports = DDClass;