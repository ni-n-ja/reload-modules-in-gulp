'use strict'
let fs = require('fs');
fs.readFile("./reload.js", 'utf8', function (err, data) {
    console.log(data);
});
