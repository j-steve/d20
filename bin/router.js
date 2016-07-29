/* global ROOT_PATH */
'use strict';
const fs = require('fs');
const path = require('path');

const ROUTES_DIR = ROOT_PATH + '/routes';

exports.route = function(app) {
	
	// Require all files in routes directory.
	readAllFiles(ROUTES_DIR).filter(x => path.extname(x) === '.js').forEach(function(file) {
		const name = file.substr(0, file.indexOf('.'));
		const pathParts = name.split('/');
		const url = pathParts.pop() === 'index' ? pathParts.join('/') + '/' : name;
		console.log('using', name, 'for', url);
		app.use('/' + url, require(ROUTES_DIR + '/' + name));
	});;
		
	function readAllFiles(dir) {
		if (dir.slice(-1) !== '/') {dir += '/';}
		const returnFiles = [];
		let filesToRead = fs.readdirSync(dir);
		while (filesToRead.length > 0) {
			let file = filesToRead.pop();
			if (fs.statSync(dir + file).isDirectory()) {
				let children = fs.readdirSync(dir + file).map(x => file + '/' + x);
				filesToRead = filesToRead.concat(children);
			} else {
				returnFiles.push(file);
			}
		}
		return returnFiles;
	}
	
	/*
	// Add auto-render functionality.
	app.use(function(req, res, next) { 
		var parentRender = res.render;
		res.render = function(name, args) {
			if (name == null || typeof name === 'object') {
				args = name;
				var name = url.parse(req.baseUrl + req.url).pathname;
				name = name.replace(/^\/|\/$/g, '');
			}
			parentRender.call(res, name, args);
		};
		
		next();
	});*/

};