'use strict';

var gulp = require('gulp');
gulp.task('command', function() {
    delete require.cache[require.resolve('./reload')];
    require('./reload');
});

gulp.task('default', function() {
    require('./reload');
    gulp.watch('./*.js', ['command']);
});
