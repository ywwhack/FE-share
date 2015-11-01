#!/usr/bin/env node
'use strict';

import {exec} from 'child_process';
import fs from 'fs';

const chromePath = "/Applications/Google' 'Chrome.app/Contents/MacOS/Google' 'Chrome";
const demoPath = '/Users/iyww/Desktop/FE-share/node/say-to-chrome/demo.html';
const demoPathTmp = '/Users/iyww/Desktop/FE-share/node/say-to-chrome/demo_tmp.html';

fs.readFile(demoPath, 'utf8', (err, data) => {
  let content = data.replace('{message}', process.argv.slice(2).join(' '));
  fs.writeFile(demoPathTmp, content);
});

exec(`${chromePath} file://${demoPathTmp}`, (err, stdout, stderr) => {
  if(err) {
    console.log(stderr);
  }
});