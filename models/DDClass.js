"use strict";

const priv = new WeakMap();

class Decision {
	constructor(parent, name, count, options) {
		this.name = name;
		this.paramName = name.toLowerCase();
		this.count = (count == null) ? 1 : count;
	    if (options == null) {
	    	options = [];
	    } else if (options.length && typeof options[1] === 'string') {
	    	options = options.map(x => ({name:x}));
	    }
		this.options = options;
		priv[this] = {parent};
	}
	
	alias(paramName) {
		this.paramName = paramName;
		return this;
	}
	
	of(name, description) {
		const obj = (typeof name === 'object') ? name : {name, description};
		this.options.push(obj);
		return this;
	}
	
	ofAttr(attrType, name, description) {
		const attrObj = new DDClass(name, description).attr(attrType, name, description);
		return this.of(attrObj);
	}
	
	get parent() {
		return priv[this].parent;
	}
}

class DDClass {
	
	constructor(name, description, image) {
		this.name = name;
		this.description = description;
		this.decisions = [];
		this.attrs = {};
		if (name) {DDClass.ALL[this.name] = this;}
		this.image = image;
	}
	
	attr(attrName, values, description) {
		if (description != null) {values = [{name:values, description}];}
		setAttr(this.attrs, attrName, values);
		return this;
	}
	
	mergeFrom(otherDDClass) {
		for (let key of Object.keys(otherDDClass.attrs)) {
			this.attr(key, otherDDClass.attrs[key]);
		}
		return this;
	}
	
	decide(name, count, options) {
		const decision = new Decision(this, name, count, options);
		this.decisions.push(decision);
		return decision;
	}
}

/**
 * @param {Object} t	the target to change
 * @param {String} a	the attribute name to set
 * @param {*} newVal	the new value for the target attribute
 */
function setAttr(t, a, newVal) {
	if (Array.isArray(newVal)) {
		t[a] = (t[a] || []).concat(newVal);
	} else if (!isNaN(newVal)) {
		t[a] = (t[a] || 0) + +newVal;
	} else if (newVal && typeof newVal === 'object') {
		if (!t[a]) {t[a] = {};}
		for (let valKey of Object.keys(newVal)) {
			setAttr(t[a], valKey, newVal[valKey]);
		}
	} else {
		if (t[a]) {throw new Error(`Can't replace "${t[a]}"" with "${newVal}"`);}
		t[a] = newVal;
	}
}

DDClass.ALL = {};

module.exports = DDClass;