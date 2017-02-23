'use strict'
let fs = require('fs');
console.log(fs.readFileSync("./reload.js", 'utf8'));

exports.tango = function (a) {
    console.log(a);
};