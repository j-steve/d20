
function DDClass(name, image, description) {
	var self = this;
	
	this.name = name;
	this.image = image;
	this.description = description
	this.decisions = [];
	
	this.decide = function(name, count, paramName) {
	    if (count == null) {count = 1;}
	    if (paramName == null) {paramName = name.toLowerCase();}
		self.decisions.push({name, count, paramName, options: []});
		return self;
	};
	
	this.of = function(name, description) {
		self.decisions[self.decisions.length-1].options.push({name, description});
		return self;
	};
}

module.exports = DDClass;