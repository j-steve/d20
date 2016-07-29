"use strict";

const priv = new WeakMap();

class Decision {
	constructor(parent, name, count, options) {
		this.name = name;
		this.count = (count == null) ? 1 : count;
	    if (options == null) {
	    	options = [];
	    } else if (options.length && typeof options[1] === 'string') {
	    	options = options.map(x => ({name:x}));
	    }
		this.options = options;
		this.paramName = name.toLowerCase();
		priv[this] = {parent};
	}
	
	alias(paramName) {
		this.paramName = paramName;
		return this;
	}
	
	of(name, description) {
		this.options.push({name, description});
		return this;
	}
	
	get parent() {
		return priv[this].parent;
	}
}

class DDClass {
	
	constructor(name, image, description) {
		this.name = name;
		this.image = image;
		this.description = description;
		this.decisions = [];
		this.attrs = {};
		if (name) {DDClass.ALL[this.name] = this;}
	}
	
	attr(attrName, values, description) {
		if (description != null) {values = {name:values, description}};
		const existingVals = this.attrs[attrName] || [];
		this.attrs[attrName] = existingVals.concat(values || []);
		return this;
	}
	
	forEachAttr(callback) {
		Object.keys(this.attrs).forEach(key => callback.call(null, this.attrs[key], key));	
	}
	
	decide(name, count, options) {
		const decision = new Decision(this, name, count, options);
		this.decisions.push(decision);
		return decision;
	}
}

DDClass.ALL = {};

module.exports = DDClass;