'use strict';

var gulp = require('gulp');
var a;
gulp.task('command', function () {
    delete require.cache[require.resolve('./reload')];
    require('./reload');
    a = require('./reload');
    a.tango("reloaded");
});

gulp.task('default', function () {
    require('./reload');
    a = require('./reload');
    a.tango("hello");
    gulp.watch('./*.js', ['command']);
});
