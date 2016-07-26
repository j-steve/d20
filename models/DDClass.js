"use strict";

class DDClass {
	
	constructor(name, image, description) {
		this.name = name;
		this.image = image;
		this.description = description;
		this.decisions = [];
	}
	
	decide(name, count, options) {
	    if (count == null) {count = 1;}
	    if (options == null) {options = [];} 
	    else if (options.length && typeof options[1] === 'string') {
	    	options = options.map(x => ({name:x}));
	    }
		this.decisions.push({name, count, paramName: name.toLowerCase(), options});
		return this;
	}
	
	alias(paramName) {
		const lastDecision = this.decisions[this.decisions.length-1];
		lastDecision.paramName = paramName;
		return this;
	}
	
	of(name, description) {
		const lastDecision = this.decisions[this.decisions.length-1];
		lastDecision.options.push({name, description});
		return this;
	}
}

module.exports = DDClass;