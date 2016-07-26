"use strict";
const File = require('si-file');

const ERROR_LINE = /at (?:([^(\/\\]+) \()?(.+):(\d+):(\d+)(?:\))?/g;

module.exports = function(err, req, res, next) {
	const codeSnippets = [];
	if (err && err.message && err.message.indexOf('.jade:') !== -1) {
		res.locals.errorType = 'Jade Error';
	} else if (err && err.stack) {
		let match;
		while ((match = ERROR_LINE.exec(err.stack))) {
			const file = new File(match[2]);
			const snippet = {
				functionName: match[1],
				filePath: file.path,
				fileName: file.name,
				lineNo: +match[3],
				isLib: false,
				lines: []
			};
			if (file.existsSync()) {
				snippet.isLib = isExternalCode(file);
				snippet.lines = file.readLinesSync();
				const errLine = snippet.lines[snippet.lineNo - 1];
				const colNo = match[4] - 1;
				snippet.beforeErr = errLine.substring(0, colNo);
				snippet.afterErr = errLine.substring(colNo);
			}
			codeSnippets.push(snippet);
		}
	}
	const errMsg =  err ? err.message || err.toString() : '';
	console.error('ERROR: ' + errMsg);
	
	res.status(err && err.status || 500);
	res.render('_site/error', {
		message : errMsg,
		error : err,
		codeSnippets
	});
};

/**
 * Returns {@code true} if the given file is external (third-party) code,
 * which may be displayed differently than internal app code (e.g. collapsed by default).
 * 
 * @param {File} file
 * @returns {boolean}
 */
function isExternalCode(file) {
	return file.path.indexOf('node_modules') > -1;
}