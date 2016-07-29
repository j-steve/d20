"use strict";

Object.forEach = function(obj, callback) {
    return Object.keys(obj).forEach(key => callback(obj[key], key));
}

Object.map = function(obj, callback) {
    return Object.keys(obj).map(key => callback(obj[key], key));
}

Array.prototype.includes = function(val, from) {
    return this.indexOf(val, from) !== -1;
}

String.prototype.includes = function(val, from) {
    return this.indexOf(val, from) !== -1;
}
