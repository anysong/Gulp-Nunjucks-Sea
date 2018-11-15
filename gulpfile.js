var gulp = require('gulp');


gulp.task('default', function () {
    console.log(2222);
})

var requireDir = require('require-dir');
requireDir('./gulp/task/');