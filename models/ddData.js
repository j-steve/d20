/* global ROOT_PATH */
'use strict';
const File = require('si-file');

const ddDataText = new File(ROOT_PATH + '/data/ddData.json').readSync();

module.exports = JSON.parse(ddDataText);