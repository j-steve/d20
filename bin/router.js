//var File = require('si-file');
var fs = require('fs');
var path = require('path');
var app = require('express')();

var ROUTES_DIR = ROOT_PATH + '/routes';

var routeFiles = readAllFiles(ROUTES_DIR).filter(x => path.extname(x) === '.js');

app.use(function(req, res, next) {
	
	// Require all files in routes directory.
    routeFiles.forEach(function(file) {
		var name = file.substr(0, file.indexOf('.'));
		var url = (file === 'index.js') ? path.basename(name) : name;
		app.use('/' + url, require(ROUTES_DIR + '/' + name));
	});
	
	// Add auto-render functionality.
	var parentRender = res.render;
	res.render = function(name, args) {
		if (name == null || typeof name === 'object') {
			args = name;
			name = req.baseUrl + req.url;
			name = name.replace(/^\/|\/$/g, '');
		}
		console.log('renderin', req.baseUrl + req.url, 'as', name);
		parentRender.call(res, name, args);
	};
	
	next();
});

function readAllFiles(dir) {
	if (dir.slice(-1) !== '/') {dir += '/';}
	var returnFiles = [];
	var filesToRead = fs.readdirSync(dir);
	while (filesToRead.length > 0) {
		var file = filesToRead.pop();
		if (fs.statSync(dir + file).isDirectory()) {
			var children = fs.readdirSync(dir + file).map(x => file + '/' + x);
			filesToRead = filesToRead.concat(children);
		} else {
			returnFiles.push(file);
		}
	}
	return returnFiles;
}

module.exports = app;