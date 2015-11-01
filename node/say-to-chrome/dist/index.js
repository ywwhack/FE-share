#!/usr/bin/env node

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _child_process = require('child_process');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var chromePath = "/Applications/Google' 'Chrome.app/Contents/MacOS/Google' 'Chrome";
var demoPath = '/Users/iyww/Desktop/FE-share/node/say-to-chrome/demo.html';
var demoPathTmp = '/Users/iyww/Desktop/FE-share/node/say-to-chrome/demo_tmp.html';

_fs2['default'].readFile(demoPath, 'utf8', function (err, data) {
  var content = data.replace('{message}', process.argv.slice(2).join(' '));
  _fs2['default'].writeFile(demoPathTmp, content);
});

(0, _child_process.exec)(chromePath + ' file://' + demoPathTmp, function (err, stdout, stderr) {
  if (err) {
    console.log(stderr);
  }
});